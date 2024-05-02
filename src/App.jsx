import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Main from "./components/Main/Main";
import CommentsForm from "./components/CommentsForm/CommentsForm";
import Comments from "./components/Comments/Comments";
import NextVideos from "./components/NextVideos/NextVideos";
import videos from "./data/video-details.json";
import {useState} from 'react';

console.log(videos);

function App() {


  // const selectedVideo = videos[3]
  
  const [selectedVideo, setSelectedVideo] = useState(videos[0])

  // const otherVideos = 


  return (
    <>
      <Header />
      <VideoPlayer video={selectedVideo}/>
      <Main video={selectedVideo}/>
      <CommentsForm numberOfComments={selectedVideo.comments.length}/>
      <Comments comments={selectedVideo.comments}/>
      <NextVideos otherVideos={videos} />
    </>
  );
}

export default App;
