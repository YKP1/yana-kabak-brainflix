import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import videos from "./data/video-details.json";
import { useEffect, useState } from "react";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
const apiKey = 'cec6b186-c74d-452f-bf87-1bbc245ccb46';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // const otherVideos = videos.filter((el) => {
  //   return el.id !== selectedVideo.id;
  // });

  useEffect(() => {
    getVideos();
  }, []);

  if (!getVideos){
    return <div className = "loader" >Sholdn't take tooooooo lo...</div>
  }

  async function getVideos(){
    const responsito = await axios.get(`${BASE_URL}videos/:id${apiKey}`);
    setSelectedVideo(responsito.data);
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <VideoPage
              selectedVideo={selectedVideo}
              setSelectedVideo={setSelectedVideo}
              // otherVideos={otherVideos}
            />
          }
        />
        <Route path="video/:id" element={ <VideoPage selectedVideo={selectedVideo}/>} />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
