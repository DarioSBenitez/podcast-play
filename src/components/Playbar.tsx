import { useContext } from 'react';
import { PodcastContext } from '../context/PodcastContext';
import './Playbar.css'; // Estilos

const Playbar = () => {
    const { isPlaying, currentPodcast, togglePlay, seekForward, seekBackward, closePlaybar } = useContext(PodcastContext);

    if (!currentPodcast) return null; // No mostrar si no hay un podcast actual

    return (
        <div className="playbar">
            <div className="playbar-info">
                <img src={currentPodcast.image} alt={currentPodcast.title} className="podcast-image" />
                <div className="podcast-details">
                    <h3>{currentPodcast.title}</h3>
                </div>
            </div>
            <div className="playbar-controls">
                <button onClick={seekBackward}>Rewind</button>
                <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
                <button onClick={seekForward}>Forward</button>
                <button onClick={closePlaybar}>Close</button>
            </div>
        </div>
    );
};

export default Playbar;
