import React from 'react';
import styles from "./FormContainer.module.css"

function FormContainer({ currentPlaylist, onInputChange, onFormSubmit }) {
  
    const { title, description, image } = currentPlaylist;
    const isFormComplete = title && description && image;

  return (
    <form className="form-container" onSubmit={(e) => {
      e.preventDefault();
      onFormSubmit();
    }}>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onInputChange}
        placeholder="Título de la playlist"
        className={styles.search}
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Descripción"
        className={styles.search}
      />
      <input
        type="text"
        name="image"
        value={image}
        onChange={onInputChange}
        placeholder="URL de la imagen"
        className={styles.search}
      />
      <button className = {styles.button} type="submit" disabled={!isFormComplete}>
        Add List
      </button>
    </form>
  );
}

export default FormContainer;
