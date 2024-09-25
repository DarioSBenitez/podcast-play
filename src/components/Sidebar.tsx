

import styles from "./Sidebar.module.css";

import React from 'react';

const Sidebar = ({ playlists, onMenuItemClick, currentPlaylist }) => {
  return (
    <div className ="sidebar">
      <button  className = {styles.navbarbutton} onClick={onMenuItemClick}>
        New List.
      </button>
      <ul>
        {playlists.map((playlist: { image: string | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined; description: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (
          <li key={index}>
            <img src={playlist.image} alt={playlist.title} width="50" height="50" />
            <div>
              <h3>{playlist.title}</h3>
              <p>{playlist.description}</p>
            </div>
          </li>
        ))}
        {/* Mostramos la playlist actual en tiempo real */}
        {currentPlaylist.title && (
          // aca el operador logico &&  se utiliza para evaluar
          // 2 expresiones , en js este operador tiene comportamiento
          // especifico , evalua V o F . Si la primera expresión es verdadera, 
          //se evalúa y devuelve la segunda expresión. 
          //Si la primera expresión es falsa, 
          //se devuelve la primera expresión sin evaluar la segunda y no hace nada 
          // PONIENDO EN CONTEXTO 
          //Si currentPlaylist.title tiene un valor (
          //es decir, no es null, undefined, false, o una cadena vacía), 
          //entonces la expresión es verdadera.
          // PORQUE NO USAMOS OPERADOR TERNARIO ? porque el ternario es mas especifico
          // evalua una condicion y si es verdadera hace algo y si es falsa hace otra cosa 
          // en cambio utilizado el operador && no es asi
          // tambien se podria haber usado un ternario y renderizar el componente
          // si la primera expresion era verddadera y si es falsa osea que no hay valores 
          // en los campos y le doy al enter en la expresion de falsedad podria mandar 
          // un mensaje 
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
