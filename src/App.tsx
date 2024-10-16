import React, { useState } from "react";
import Buttons from "./components/Buttons";
import styles from "./App.module.css";
import Navbar from './components/Navbar';
import Sidebar from "./components/Sidebar";
import FormContainer from "./components/FormContainer";
import Buttons1 from "./components/Buttons1";
import { AiFillHome, AiFillYoutube, AiOutlineFolder, AiFillEdit } from "react-icons/ai";
import PodcastPlayer from "./components/PodcastPlayer";
import { PodcastProvider } from './context/PodcastContext'; 
import Playbar from './components/Playbar';

interface Playlist {
  title: string;
  description: string;
  image: string;
}

function App() {
  const [showForm, setShowForm] = useState(false);
  const [playlists, setPlaylists] = useState<Playlist[]>([]); 
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>({
    title: '',
    description: '',
    image: ''
  });

  const handleMenuItemClick = () => {
    setShowForm(true); 
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => { 
    const { name, value } = e.target; 
    setCurrentPlaylist({ 
      ...currentPlaylist, 
      [name]: value
    }); 
  };

  const handleFormSubmit = () => {
    setPlaylists([...playlists, currentPlaylist]);
    setShowForm(false); 
    setCurrentPlaylist({ title: '', description: '', image: '' });
  };

  return (
    <PodcastProvider> 
      <div className={styles.App}>
        <header className={styles.header}>
          <Navbar />
          <div className={styles.buttonBar}>
            <Buttons nombre="Fiesta" />
            <Buttons nombre="Para sentirse bien" />
            <Buttons nombre="Relajacion" />
            <Buttons nombre="Energia" />
            <Buttons nombre="Entretenimiento" />
            <Buttons nombre="Romance" />
            <Buttons nombre="Viaje diario" />
          </div>
        </header>

        <div className={styles.container}>
          <aside className={styles.Sidebar}>
            <div className={styles.topSection}>
              <Buttons1 name="Principal" Icono={AiFillHome} />
              <Buttons1 name="Explorar" Icono={AiFillEdit} />
              <Buttons1 name="Biblioteca" Icono={AiOutlineFolder} />
              <Buttons1 name="Actualizar" Icono={AiFillYoutube} />
            </div>
            <div className={styles.line}></div>
            <div className={styles.middleSection}>
              <Sidebar
                playlists={playlists}
                onMenuItemClick={handleMenuItemClick}
                currentPlaylist={currentPlaylist}
              />
            </div>
          </aside>

          <main className={styles.main}>
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
                    <PodcastPlayer />
                  </div>
                  <div className={styles.artistItems2}></div>
                </div>
              </>
            )}
          </main>
        </div>

        <Playbar /> 
      </div>
    </PodcastProvider>
  );
}

export default App;
