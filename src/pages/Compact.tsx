
import React, { useState } from "react";  


import TopBar from "../components/TopBar";

import FrameComponent from "../components/FrameComponent";
//import AvatarWAddons from "../components/AvatarWAddons";
//import Buttons from "../components/Buttons";
import FrameComponent11 from "../components/FrameComponent11";
//import CategoryTitle from "../components/CategoryTitle";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Compact.module.css";
import Sidebar from "../components/Sidebar";
import FormContainer from "../components/FormContainer";
import PlaylistPreview from '../components/PlaylisPreviews';


function Compact () {
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
    
    <div className={styles.compact}>
          
    
          
    <div className={styles.maincontent}>
    
    <aside className="sidebar">
         
          <Sidebar playlists={playlists} 
                  onMenuItemClick={handleMenuItemClick} 
                  currentPlaylist={currentPlaylist}/>
        </aside>
         <main className={styles.main}>
           {/* Renderizado condicional para mostrar el formulario o el contenido principal */}
           {showForm ? (
            <FormContainer
              currentPlaylist={currentPlaylist}
              onInputChange={handleInputChange}
              onFormSubmit={handleFormSubmit}
            />
          ) : (
            <>
            <div className={styles.artistList}>
                  <div className={styles.artistContent}>
                         <FrameComponent11 />
                  </div>
                  <div className={styles.artistItems2}>
                        <FrameComponent3/>
                   </div>
                </div>
               
            </>
          )}
        
              
          </main>
                
    </div>
           <footer className={styles.footer}>  
                <p>Pie de página</p>  
           </footer> 
    </div>
    
  );
};

export default Compact;
