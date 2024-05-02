import "./App.scss";
import Header from "./components/Header/Header";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";
import Main from "./components/Main/Main";
import Comments from "./components/Comments/Comments";
import RenderComments from "./components/RenderComments/RenderComments";
import data from "./data/video-details.json";

console.log(data);

function App() {
  return (
    <>
      <Header />
      <VideoPlayer />
      <Main />
      <Comments />
      {/* <RenderComments/> */}
    </>
  );
}

export default App;
