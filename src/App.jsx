import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Main from "./components/Main/Main";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import videos from "./data/video-details.json";
import { useState } from "react";

console.log(videos);

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const otherVideos = videos.filter((el) => {
    return el.id !== selectedVideo.id;
  });

  return (
    <>
      <Header/>
      <VideoPlayer video={selectedVideo} />
      <div className="desktop__1">
        <div className="desktop__2">
          <Main video={selectedVideo} />
          <CommentsForm numberOfComments={selectedVideo.comments.length} />
          <Comments comments={selectedVideo.comments} />
        </div>
        <div className="desktop__3">
          <NextVideos otherVideos={otherVideos} setSelectedVideo={setSelectedVideo} />
        </div>
      </div>
    </>
  );
}

export default App;
