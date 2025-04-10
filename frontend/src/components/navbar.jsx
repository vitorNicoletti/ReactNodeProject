import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <div className={styles.navbar}>
      <Link to="/" className={styles.navlink}>Listar</Link>
      <Link to="/adm" className={styles.navlink}>ADM</Link>
      <Link className={styles.navlink}>Vitor Nicoletti</Link>
    </div>
  );
};

export default NavBar;
