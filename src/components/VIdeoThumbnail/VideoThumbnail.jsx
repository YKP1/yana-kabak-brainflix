import "./VideoThumbnail.scss";
import { Link, useParams } from "react-router-dom";

function VideoThumbnail({setVideoData}) {
  const { id } = useParams();

  return (
    <>
    {id.map((video) => (
    <Link
      key={video.id}
      to={`/video/${video.id}`}
      className="videoslist__container"
    >
      <img className="videoslist__image" src={video.image} alt={video.title} />
      <div className="videoslist__container--text">
        <p className="videoslist__container--text__title">{video.title}</p>
        <p className="videoslist__container--text__channel">{video.channel}</p>
      </div>
    </Link>
     ))}
     </>
);}

export default VideoThumbnail;
