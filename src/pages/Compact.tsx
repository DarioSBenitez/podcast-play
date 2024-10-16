import React, { useState } from "react";  
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent3 from "../components/FrameComponent3";
import styles from "./Compact.module.css";
import Sidebar from "../components/Sidebar";
import FormContainer from "../components/FormContainer";

type PlaylistType = {
  title: string;
  description: string;
  image: string;
};

function Compact() {
  const [showForm, setShowForm] = useState(false); // Controla si se muestra el formulario
  const [playlists, setPlaylists] = useState<PlaylistType[]>([]); // Lista de playlists creadas
  const [currentPlaylist, setCurrentPlaylist] = useState<PlaylistType>({ // Playlist que se está creando
    title: '',
    description: '',
    image: ''
  });

  const handleMenuItemClick = () => {
    setShowForm(true); // Muestra el formulario al hacer clic en "Nueva Playlist"
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Especificar el tipo del evento
    const { name, value } = e.target;
    setCurrentPlaylist({
      ...currentPlaylist,
      [name]: value // Actualiza el campo en el objeto currentPlaylist
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
                  <FrameComponent3 />
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
