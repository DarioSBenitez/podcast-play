import { createContext, useState, ReactNode } from 'react';

interface Podcast {
  title: string;
  image: string;
}

interface PodcastContextType {
  isPlaying: boolean;
  currentPodcast: Podcast;
  togglePlay: () => void;
  seekForward: () => void;
  seekBackward: () => void;
  closePlaybar: () => void;
  changePodcast: (newPodcast: Podcast) => void;
}

const defaultContext: PodcastContextType = {
  isPlaying: false,
  currentPodcast: {
    title: "Sample Podcast",
    image: "https://via.placeholder.com/50",
  },
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
  const [currentPodcast, setCurrentPodcast] = useState<Podcast>({
    title: "Sample Podcast",
    image: "https://via.placeholder.com/50",
  });

  const togglePlay = () => setIsPlaying(!isPlaying);
  const seekForward = () => console.log("Forward 10s");
  const seekBackward = () => console.log("Rewind 10s");
  const closePlaybar = () => console.log("Close playbar");

  const changePodcast = (newPodcast: Podcast) => {
    setCurrentPodcast(newPodcast);
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
        changePodcast, // Función para actualizar el podcast
      }}
    >
      {children}
    </PodcastContext.Provider>
  );
};
