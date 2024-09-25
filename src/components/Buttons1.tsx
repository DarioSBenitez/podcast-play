//import { FaBeer } from 'react-icons/fa'; // Importar un ícono específico  
import styles from "./Buttons1.module.css";  

function Buttons1({ name, Icono }) {  
  return (  
    <button className={styles.Buttons1}>  
      <Icono ClassName ={styles.Icono}/> {/* Ícono dentro del botón */}  
      {name}  
    </button>  
  );  
}  

export default Buttons1;