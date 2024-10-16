import React from 'react';
import styles from "./Sidebar.module.css";

interface Playlist {
  image?: string;
  title: string;
  description: string;
}

interface SidebarProps {
  playlists: Playlist[];
  onMenuItemClick: () => void;
  currentPlaylist: Playlist;
}

const Sidebar: React.FC<SidebarProps> = ({ playlists, onMenuItemClick, currentPlaylist }) => {
  return (
    <div className={styles.sidebar}>
      <button className={styles.navbarbutton} onClick={onMenuItemClick}>
        New List
      </button>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>
            <img src={playlist.image} alt={playlist.title} width="50" height="50" />
            <div>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          </li>
        ))}

        {/* Mostramos la playlist actual en tiempo real */}
        {currentPlaylist?.title && (
          <li>
            <img src={currentPlaylist.image} alt={currentPlaylist.title} width="50" height="50" />
            <div>
              <h3>{currentPlaylist.title}</h3>
              <p>{currentPlaylist.description}</p>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
