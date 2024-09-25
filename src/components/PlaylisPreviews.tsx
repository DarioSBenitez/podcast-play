import React from 'react';

function PlaylistPreview({ currentPlaylist }) {
  const { title, description, image } = currentPlaylist;

  return (
    <div className="playlist-preview">
      <h3>Vista Previa</h3>
      {image && <img src={image} alt={title} />}
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
}

export default PlaylistPreview;
