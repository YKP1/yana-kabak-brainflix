import "./VideoPlayer.scss";

export default function VideoPlayer() {
  return (
    <section className="videoplayer">
      <video controls poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217" className="video-player">
        <source src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"/>
      </video>
    </section>
  );
}
