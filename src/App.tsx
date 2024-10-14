
import React, { useState } from "react"; 
import Buttons from "./components/Buttons";
import styles from "./App.module.css";
import Navbar from './components/Navbar'; 
//import FrameComponent11 from "./components/FrameComponent11";
import Sidebar from "./components/Sidebar";
import FormContainer from "./components/FormContainer";
import Buttons1 from "./components/Buttons1";
import { AiFillHome, AiFillYoutube, AiOutlineFolder,AiFillEdit  } from "react-icons/ai";

import PodcastPlayer from "./components/PodcastPlayer";


function  App () {

  const [showForm, setShowForm] = useState(false); // Controla si se muestra el formulario
  const [playlists, setPlaylists] = useState([]); // Lista de playlists creadas
  const [currentPlaylist, setCurrentPlaylist] = useState({
    title: '',
    description: '',
    image: ''
  }); // Playlist que se está creando

  const handleMenuItemClick = () => {
    setShowForm(true); // se hace con un ternario ,Muestra el formulario al hacer clic en "Nueva Playlist"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPlaylist({
      ...currentPlaylist,
      [name]: value  //...currentPlailist copia todos los valores actuales del estado.
                     //[name]: value es una forma de establecer una propiedad en el objeto. Aquí es donde se usa la sintaxis de corchetes:
                    //name es una variable que contiene el nombre del campo que se está cambiando (por ejemplo, "nombre", "email" o "mensaje").
                    //value es el nuevo valor que el usuario ha ingresado en ese campo.
                    //Al usar [name]: value, estamos diciendo "quiero actualizar el campo cuyo nombre es el valor de la variable name con el nuevo value".
                    // tambien puedo poner [e.target.name]: e.target.value  es una forma abreviada sin desetructura el name y el value , es mas directa
    });
  };

  const handleFormSubmit = () => {
    setPlaylists([...playlists, currentPlaylist]);
    setShowForm(false); // Ocultar formulario después de agregar playlist
    setCurrentPlaylist({ title: '', description: '', image: '' }); // Reiniciar formulario
  };


    return (
        <div className={styles.App}>
           
            <header className={styles.header}>
               <Navbar/>
               <div className={styles.buttonBar}>
                  <Buttons nombre = "Fiesta"/>
                  <Buttons nombre = "Para sentirse bien"/>
                  <Buttons nombre = "Relajacion"/>
                  <Buttons nombre = "Energia"/>
                  <Buttons nombre = "Entretenimiento"/>
                  <Buttons nombre = "Romance"/>
                  <Buttons nombre = "Viaje diario"/>
              </div>
            </header>
        
            <div className ={styles.container}>
            <aside className={styles.Sidebar}>
                <div className={styles.topSection}>
                  <Buttons1 name="Principal" Icono ={AiFillHome}/>
                  <Buttons1 name="Explorar " Icono={AiFillEdit}/>
                  <Buttons1 name="Biblioteca " Icono = {AiOutlineFolder} />
                  <Buttons1 name="Actualizar"   Icono ={AiFillYoutube}/>
                </div>
                <div className={styles.line}></div>  
                <div className={styles.middleSection}>
                    <Sidebar
                      playlists={playlists}
                      onMenuItemClick={handleMenuItemClick}
                      currentPlaylist={currentPlaylist}/>
                </div>

                  
              </aside>

                <main className = {styles.main}>
                   {/* Renderizado condicional para mostrar el formulario o el contenido principal */}
                        {showForm ? (
                            <FormContainer
                                currentPlaylist={currentPlaylist}
                                onInputChange={handleInputChange}
                                  onFormSubmit={handleFormSubmit}/>
                      ) : (
            <>
                          <div className={styles.artistList}>
                              <div className={styles.artistContent}>
                              <PodcastPlayer/>
                              </div>
                              <div className={styles.artistItems2}>
                                 
                              </div>
                          </div>
               
                          </>
                              )}
        
                
                
                
                    
                </main>
            </div>
           
        </div>
    );
};

export default App;
