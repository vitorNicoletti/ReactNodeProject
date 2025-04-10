import { Link } from "react-router-dom";
import styles from './listCard.module.css';

const ListCard = ({ item }) => {
  return (
    <li key={item.id} className={styles.card}>
      <h3>{item.titulo}</h3>
      <p>Feitor: {item.feitor}</p>
      <div className={styles.checkbox}>
        <label>
          <input type="checkbox" checked={item.completa} readOnly /> Completa
        </label>
      </div>
      <div className={styles.cardActions}>
        <Link to={`/info/${item.id}`}>
          <button>Mais detalhes</button>
        </Link>
      </div>
    </li>
  );
};

export default ListCard;
