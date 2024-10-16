import styles from "./Buttons.module.css";

interface ButtonsProps {
  nombre: string; // Definimos el tipo de "nombre"
}

function Buttons({ nombre }: ButtonsProps) {
  return (
    <button className={styles.Buttons}>
      {nombre}
    </button>
  );
}

export default Buttons;
