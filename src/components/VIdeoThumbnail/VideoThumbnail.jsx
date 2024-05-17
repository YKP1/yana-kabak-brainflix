import "./VideoThumbnail.scss";
import { Link } from "react-router-dom";

function VideoThumbnail({video}) {

    return (
    <>
        <Link
          key={video.id}
          to={`/video/${video.id}`}
          className="videoslist__container"
        >
          <img
            className="videoslist__image"
            src={`http://localhost:8000/${video.image}`} 
            alt={video.title}
          />
          <div className="videoslist__container--text">
            <p className="videoslist__container--text__title">{video.title}</p>
            <p className="videoslist__container--text__channel">
              {video.channel}
            </p>
          </div>
        </Link>
    </>
  );
}

export default VideoThumbnail;
