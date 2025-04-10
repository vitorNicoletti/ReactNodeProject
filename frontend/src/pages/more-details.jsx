import tasks from '../services/tasks';
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import NavBar from '../components/navbar';
import styles from './more-details.module.css'
function MoreInfo() {
  const [data, setData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    tasks.get(`/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.error(err));
  }, [id]);

  if (!data) return <p>Carregando...</p>;

  return (
    <div className='content'>
      <NavBar />
      <h1 className={styles.title}>{data[0].titulo}</h1>
      <h4 className={styles.subtitle}>Deve ser feito por {data[0].feitor}</h4>
      <p className={styles.text}>{data[0].descricao}</p>
      <p className={styles.text}>Índice: {data[0].id}</p>
      <p className={styles.text}>Completa: {data[0].completa ? 'Sim' : 'Não'}</p>
    </div>
  );
}

export default MoreInfo;
