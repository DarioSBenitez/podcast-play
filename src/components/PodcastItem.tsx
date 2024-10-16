import React, { useContext } from 'react';
import { PodcastContext } from '../context/PodcastContext';
import styles from './PodcastItem.module.css';

interface PodcastItemProps {
  title: string;
  description?: string;
  imageUrl: string;
  audioUrl: string;
}

const PodcastItem: React.FC<PodcastItemProps> = ({ title, description, imageUrl, audioUrl }) => {
  const { changePodcast } = useContext(PodcastContext);

  const handlePlayClick = () => {
    changePodcast({ title, image: imageUrl, audioUrl }); // Cambiar el podcast en el contexto
  };

  return (
    <li className={styles.podcastItem}>
      <img src={imageUrl} alt={title} className={styles.podcastImage} />
      <h3 className={styles.ellipsis}>{title}</h3>
      <p className={styles.ellipsis}>{description || 'No hay descripción disponible.'}</p>
      <button className={styles.playButton} onClick={handlePlayClick}>
        ▶️ Play
      </button>
    </li>
  );
};

export default PodcastItem;
