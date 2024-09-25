import styles from "./Buttons.module.css";  

function Buttons({nombre}) {  
  return (  
    <button className={styles.Buttons}>  {nombre}
      
       
    </button>  
  );  
}  

export default Buttons;
