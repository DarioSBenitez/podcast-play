import React from 'react';

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
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={onInputChange}
        placeholder="Descripción"
      />
      <input
        type="text"
        name="image"
        value={image}
        onChange={onInputChange}
        placeholder="URL de la imagen"
      />
      <button type="submit" disabled={!isFormComplete}>
        Agregar Playlist
      </button>
    </form>
  );
}

export default FormContainer;