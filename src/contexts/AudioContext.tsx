import { createContext, useContext, useRef } from 'react';

const AudioContext = createContext<AudioContext | null>(null);

export const AudioProvider = ({ children }: { children: any }) => {
  const audioContext = useRef(new (window.AudioContext)());

  return <AudioContext.Provider value={audioContext.current}>{children}</AudioContext.Provider>;
};

export const useAudioContext = () => useContext(AudioContext);
