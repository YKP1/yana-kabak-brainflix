import "./VideoPlayer.scss";

export default function VideoPlayer({video}) {

  return (
    <section className="videoplayer">
      <video controls poster={`http://localhost:8000/${video.image}`} className="video-player">
        <source src={`http://localhost:8000/${video.video}`}/>
      </video>
    </section>
  );
}
