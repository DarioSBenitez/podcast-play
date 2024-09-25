import MenuItem from "./MenuItem";
//import styles from "./SidebarExpandedAndCollapsed.module.css";



import React from 'react';

function Sidebar({ playlists, onMenuItemClick }) {
  return (
    <div className="sidebar">
      <button onClick={onMenuItemClick}>Nueva Playlist</button>
      <ul>
        {playlists.map((playlist, index) => (
          <li key={index}>
            <img src={playlist.image} alt={playlist.title} />
            <h3>{playlist.title}</h3>
            <p>{playlist.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;