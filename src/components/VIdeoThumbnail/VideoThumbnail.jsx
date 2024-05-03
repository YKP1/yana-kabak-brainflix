import "./VideoThumbnail.scss";

function VideoThumbnail({ video, eli }) {
  return (
    <div
      key={video.id}
      onClick={() => eli(video)}
      className="videoslist__container"
    >
      <img className="videoslist__image" src={video.image} />
      <div className="videoslist__container--text">
        <p className="videoslist__container--text__title">{video.title}</p>
        <p className="videoslist__container--text__channel">{video.channel}</p>
      </div>
    </div>
  );
}

export default VideoThumbnail;
