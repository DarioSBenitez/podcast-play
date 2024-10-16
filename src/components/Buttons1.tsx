import React from 'react';
import styles from "./Buttons1.module.css";

interface Buttons1Props {
  name: string;
  Icono: React.ComponentType<{ className?: string }>; 
}

const Buttons1: React.FC<Buttons1Props> = ({ name, Icono }) => {
  return (
    <button className={styles.Buttons1}>
      <Icono className={styles.Icono} /> {/* Ícono dentro del botón */}
      {name}
    </button>
  );
};

export default Buttons1;
