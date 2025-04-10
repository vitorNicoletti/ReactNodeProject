    import { Link } from "react-router-dom";
    import tasks from '../services/tasks';
    import React, { useEffect, useState } from "react";
    import Forms from "./forms";
    import styles from "./editableCard.module.css"
    const EditableCard = ({ item , refreshInfo}) => {
        const [updateCard, setUpdateCard] = useState(false);
        const [formData, setFormData] = useState({ ...item });
        const openCard = () =>{
            setUpdateCard(true)
        }
        const updateTask = async () => {
            try{
                await tasks.put(`/${item.id}`,formData)
                refreshInfo()
                setUpdateCard(false)
            } catch (err) {
                console.error(err);
            }
        }
        const removeTask = async () => {
            try {
            await tasks.delete(`/${item.id}`);
            refreshInfo();
            } catch (err) {
            console.error(err);
            }
        };


    return (
        <li key={item.id} className={styles.card}>
            {updateCard ? (        
                <Forms formData={formData} setFormData={setFormData} saveFunction={updateTask} allCampsNecessity={true}></Forms>
            ): (        
            <div>
                 
                 <h3>{item.titulo}</h3>
                 Feitor: {item.feitor}<br />
                <div className={styles.checkbox}>
                    <label>
                    <input type="checkbox" checked={item.completa} readOnly /> Completa
                    </label>
                </div>
                
                <div className={styles.cardbuttons}>
                    <Link to={`/info/${item.id}`}>
                    <button>Mais detalhes</button>
                    </Link>
                    <button onClick={removeTask}>Remover</button>
                    <button onClick={openCard}>Editar</button>
                </div>
            </div>
            )   
            }
        </li>
    );
    };

    export default EditableCard;
