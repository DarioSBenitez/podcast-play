
//import AvatarWAddons from "./AvatarWAddons";
//import styles from "./CategoryTitle.module.css";


//<AvatarWAddons />

const recommendedVideos = [
  { id: 1, title: "Cómo aprender React", views: "1.5M", thumbnail: "url_thumb1.jpg" },
  { id: 2, title: "Curso de CSS Grid", views: "900K", thumbnail: "url_thumb2.jpg" },
  { id: 3, title: "JavaScript desde Cero", views: "2.1M", thumbnail: "url_thumb3.jpg" },
];
   
function VideosRecomendados() {
  return (
    <div>
      <h2>Videos Recomendados</h2>
      <div className="videosGrid">
        {recommendedVideos.map(video => (
          <div key={video.id} className="videoCard">
            <img src={video.thumbnail} alt={video.title} className="thumbnail" />
            <h3>{video.title}</h3>
            <p>{video.views} vistas</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default VideosRecomendados;
