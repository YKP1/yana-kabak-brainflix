import "./NextVideos.scss";
import VideoThumbnail from "../VIdeoThumbnail/VideoThumbnail";

export default function NextVideos({ otherVideos, yana }) {
  return (
    <section className="videoslist">
      <p className="videoslist__header">Next Videos</p>

      <div className="videoslist__con">
        {otherVideos.map((video) => {
          return <VideoThumbnail key={video.id} video={video} eli={yana} />;
        })}
      </div>
    </section>
  );
}
