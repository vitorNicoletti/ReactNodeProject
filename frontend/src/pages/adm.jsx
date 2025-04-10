import Forms from "../components/forms";
import DataList from "../components/DataList";
import EditableCard from "../components/editableCard";
import NavBar from "../components/navbar";
import React, { useEffect, useState } from "react";
import useGetTasks from "../hooks/useGetTasks";
import tasks from "../services/tasks";
function Adm() {
    const [creatingTask, setCreatingTask] = useState(false);
    const [formData, setFormData] = useState({
        id: "",
        titulo: "",
        descricao: "",
        completa: false,
        feitor: ""
      });
    const { data, refresh } = useGetTasks();
    const saveNewUser = async () =>{
        try{
            await tasks.post(`/`,formData)
            refresh()
            setCreatingTask(false)
        } catch (err) {
            console.error(err);
        }
    }
    const openCreateUser = () =>{
        setCreatingTask(true)
    }
    return (
    
    <div className="content">
        <NavBar/>
        <h1 className="title">Página de Administração</h1>
        {creatingTask ? (
            <Forms formData={formData} setFormData={setFormData} saveFunction={saveNewUser} allCampsNecessity={true}></Forms>
        ) : (
            <div className="content">
                <button onClick={openCreateUser}>Criar Tarefa</button>
                <DataList CardComponent={EditableCard} data={data} refreshInfo={refresh} />
            </div>

        )
        }
        
        

    </div>

    );
  }
  
export default Adm;