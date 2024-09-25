import styles from "./Navvbar.module.css";
import { IoLogoYoutube } from "react-icons/io5";


function NavBar () {
    return (
      
      <nav className={styles.Navbar}>  
      <div className={styles.contenedorlogo}>
        <IoLogoYoutube  className = {styles.logo}/>Music</div>
  <div className={styles.navbarContainer}>  
    <div className={styles.navbarlogo}>Buscador</div>  
    <input  
      type="text"  
      placeholder="Buscar..."  
      className={styles.navbarsearch}  
    />  
    <button className={styles.navbarbutton}>Buscar</button>  
  </div> 
  
</nav>
      
    );
  }
  
  export default NavBar;
  