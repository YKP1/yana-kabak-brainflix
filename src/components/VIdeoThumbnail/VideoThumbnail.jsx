import "./VideoThumbnail.scss"

function VideoThumbnail({video}){
    return (
        <div
          key={video.id}
          onClick={() => {
            console.log(video.id);
          }}
          className="videoslist__container"
        >
            <img className="videoslist__image" src={video.image} /
            >
          <div className="videoslist__container--text">
            <p className="videoslist__container--text__title">
              {video.title}
            </p>
            <p className="videoslist__container--text__channel">
              {video.channel}
            </p>
          </div>
        </div>
      );
}

export default VideoThumbnail;