
import React, { useState } from "react";  


import TopBar from "../components/TopBar";
import SidebarExpandedAndCollapsed from "../components/SidebarExpandedAndCollapsed";

import FrameComponent from "../components/FrameComponent";
import AvatarWAddons from "../components/AvatarWAddons";
import Buttons from "../components/Buttons";
import FrameComponent11 from "../components/FrameComponent11";
import CategoryTitle from "../components/CategoryTitle";
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
    setShowForm(true); // Muestra el formulario al hacer clic en "Nueva Playlist"
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentPlaylist({
      ...currentPlaylist,
      [name]: value
    });
  };

  const handleFormSubmit = () => {
    setPlaylists([...playlists, currentPlaylist]);
    setShowForm(false); // Ocultar formulario después de agregar playlist
    setCurrentPlaylist({ title: '', description: '', image: '' }); // Reiniciar formulario
  };

  return (
    <div className={styles.compact}>
      <TopBar />
      <main className={styles.frameParent}>
        <div className={styles.sidebarExpandedAndCollapsedWrapper}>
          <SidebarExpandedAndCollapsed />
        </div>


        <section className={styles.content}>
          <FrameComponent />
         <div className="app">
      <Sidebar playlists={playlists} onMenuItemClick={handleMenuItemClick} />
      {showForm && (
        <FormContainer
          currentPlaylist={currentPlaylist}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />
      )}
      <PlaylistPreview currentPlaylist={currentPlaylist} />
    </div>

          <div className={styles.frameGroup}>
            <div className={styles.categoryTitleGroup}>
              <div className={styles.categoryTitle1}>
                <div className={styles.avatarWAddonsWrapper}>
                  <AvatarWAddons />
                </div>
                <div className={styles.sufyanAliParent}>
                  <div className={styles.sufyanAli1}>
                    START RADIO FROM A SONG
                  </div>
                  
                  <h1 className={styles.listenAgain6}>Quick picks</h1>
                </div>
              </div>
              <div className={styles.buttonsParent}>
                <Buttons hasText leftIcon={false} />
                <div className={styles.expandCircleLeftParent}>
                  <img
                    className={styles.expandCircleLeftIcon}
                    alt=""
                    src="/expand-circle-left@2x.png"
                  />
                  <img
                    className={styles.filledCircleRightIcon}
                    alt=""
                    src="/filled-circle-right.svg"
                  />
                </div>
              </div>
            </div>
            <FrameComponent11 />
          </div>

          <div className={styles.artistList}>
            <div className={styles.artistContent}>
              <CategoryTitle />
              <div className={styles.buttons1}>
                <div className={styles.iconiconForMenuParent}>
                  <img
                    className={styles.iconiconForMenu}
                    alt=""
                    src="/iconicon-for-menu1.svg"
                  />
                  <div className={styles.home}></div>
                </div>
              </div>
              <div className={styles.expandCircleLeftParent}>
                <img
                  className={styles.expandCircleLeftIcon}
                  loading="lazy"
                  alt=""
                  src="/expand-circle-left@2x.png"
                />
                <img
                  className={styles.filledCircleRightIcon}
                  loading="lazy"
                  alt=""
                  src="/filled-circle-right.svg"
                />
              </div>
            </div>
            <div className={styles.artistItems}>
              <FrameComponent3 rectangle2="/rectangle-2-22@2x.png" />
              <FrameComponent3 rectangle2="/rectangle-2-22@2x.png" />
              <FrameComponent3 rectangle2="/rectangle-2-23@2x.png" />

            </div>
          </div>

        </section>
      </main>

      
      
    </div>
  );
};
export default Compact;