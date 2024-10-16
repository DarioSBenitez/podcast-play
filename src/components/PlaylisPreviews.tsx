//import React from 'react';

type PlaylistPreviewType = {
  title: string;
  description: string;
  image: string;
};

type PlaylistPreviewProps = {
  currentPlaylist: PlaylistPreviewType;
};

function PlaylistPreview({ currentPlaylist }: PlaylistPreviewProps) {
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
