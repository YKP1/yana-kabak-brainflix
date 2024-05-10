import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = '?api_key=cec6b186-c74d-452f-bf87-1bbc245ccb46';

function App() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    getVideos();
  }, []);

  if (!selectedVideo ) {
    return <div className="loader">Shouldn't take tooooooo lo...</div>;
  }

  const otherVideos = selectedVideo.filter((video) => {
    return video.id !== selectedVideo.id;
  });
  console.log (otherVideos);

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
              otherVideos={otherVideos}
            />
          }
        />
        <Route
          path="/video/:id"
          element={<VideoPage selectedVideo={selectedVideo} />}
        />
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );

  async function getVideos() {
    const resp = await axios.get(`${BASE_URL}/videos${apiKey}`);
    setSelectedVideo(resp.data);
  } 

}

export default App;
