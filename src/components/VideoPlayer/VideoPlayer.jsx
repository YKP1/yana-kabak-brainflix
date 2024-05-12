import "./VideoPlayer.scss";

export default function VideoPlayer({video}) {


  return (
    <section className="videoplayer">
      <video controls poster={video.image} className="video-player">
        <source src={video.video}/>
      </video>
    </section>
  );
}
