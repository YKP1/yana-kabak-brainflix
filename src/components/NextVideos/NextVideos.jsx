import "./NextVideos.scss";
import VideoThumbnail from "../VIdeoThumbnail/VideoThumbnail";

function NextVideos({ setVideoData, otherVideos }) {

  return (
    <section className="videoslist">
      <p className="videoslist__header">Next Videos</p>

      <div className="videoslist__con">
        {otherVideos.map((video) => {
          return <VideoThumbnail key={video.id} video={video} setVideoData={setVideoData} />;
        })}
      </div>
    </section>
  );
}

export default NextVideos;