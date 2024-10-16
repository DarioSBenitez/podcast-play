import React from 'react';
import styles from "./Buttons1.module.css";

interface Buttons1Props {
  name: string;
  Icono: React.ComponentType<{ className: string }>;
}

function Buttons1({ name, Icono }: Buttons1Props) {
  return (
    <button className={styles.Buttons1}>
      <Icono className={styles.Icono} /> {/* Ícono dentro del botón */}
      {name}
    </button>
  );
}

export default Buttons1;
