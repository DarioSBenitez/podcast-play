import React, { useRef } from 'react';
import styles from './PodcastItem.module.css'; // Importar los estilos específicos para este componente

function PodcastItem({ title, description, imageUrl, audioUrl }) {
  const audioRef = useRef(null); // Crear una referencia para el elemento de audio

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play(); // Reproducir el audio
    }
  };

  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause(); // Pausar el audio
    }
  };

 


  return (
    <li className={styles.podcastItem}>
      <img src={imageUrl} alt={title} className={styles.podcastImage} />
      <h3 className={styles.ellipsis}>{title}</h3> {/* Título con elipsis */}
      <p className={styles.ellipsis}>{description || 'No hay descripción disponible.'}</p> {/* Descripción con elipsis */}
      
      {/* Controles personalizados */}
      
     <div className = "{styles.winampPlayer}" >
      <audio  ref={audioRef}>
        <source src={audioUrl} type="audio/mpeg" />
       
      </audio>
      <div className={styles.controls}>
        <button className = {styles.winampButton} onClick={playAudio}>▶️ Play</button>
        <button className = {styles.winampButton} onClick={pauseAudio}>⏸️ Pause</button>
        
      </div>
    </div>
    </li>
  );
}

export default PodcastItem;
