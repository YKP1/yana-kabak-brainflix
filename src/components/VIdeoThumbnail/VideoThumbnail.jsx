import "./VideoThumbnail.scss";
import { Link } from 'react-router-dom';

function VideoThumbnail({ video, setSelectedVideo }) {
  return (
    <Link
      key={video.id}
      onClick={() => setSelectedVideo(video)}
      className="videoslist__container"
    >
      <img className="videoslist__image" src={video.image} />
      <div className="videoslist__container--text">
        <p className="videoslist__container--text__title">{video.title}</p>
        <p className="videoslist__container--text__channel">{video.channel}</p>
      </div>
    </Link>
  );
}

export default VideoThumbnail;
