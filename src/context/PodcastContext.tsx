import { createContext, useState, ReactNode, useRef } from 'react';

interface Podcast {
  title: string;
  image: string;
  audioUrl: string; // Agregar URL de audio
}

interface PodcastContextType {
  isPlaying: boolean;
  currentPodcast: Podcast | null; // Cambiar a null inicialmente
  togglePlay: () => void;
  seekForward: () => void;
  seekBackward: () => void;
  closePlaybar: () => void;
  changePodcast: (newPodcast: Podcast) => void;
}

const defaultContext: PodcastContextType = {
  isPlaying: false,
  currentPodcast: null,
  togglePlay: () => {},
  seekForward: () => {},
  seekBackward: () => {},
  closePlaybar: () => {},
  changePodcast: () => {},
};

export const PodcastContext = createContext<PodcastContextType>(defaultContext);

interface PodcastProviderProps {
  children: ReactNode;
}

export const PodcastProvider = ({ children }: PodcastProviderProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentPodcast, setCurrentPodcast] = useState<Podcast | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const seekForward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime += 10; // Adelantar 10 segundos
    }
  };

  const seekBackward = () => {
    if (audioRef.current) {
      audioRef.current.currentTime -= 10; // Retroceder 10 segundos
    }
  };

  const closePlaybar = () => {
    setIsPlaying(false);
    setCurrentPodcast(null);
  };

  const changePodcast = (newPodcast: Podcast) => {
    setCurrentPodcast(newPodcast);
    audioRef.current?.load(); // Cargar el nuevo podcast
    setIsPlaying(false); // Resetear el estado de reproducción
  };

  return (
    <PodcastContext.Provider
      value={{
        isPlaying,
        currentPodcast,
        togglePlay,
        seekForward,
        seekBackward,
        closePlaybar,
        changePodcast,
      }}
    >
      {children}
      <audio ref={audioRef}>
        {currentPodcast && <source src={currentPodcast.audioUrl} type="audio/mpeg" />}
      </audio>
    </PodcastContext.Provider>
  );
};
