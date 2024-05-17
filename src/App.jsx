import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:8000";
// const apiKey = "?api_key=cec6b186-c74d-452f-bf87-1bbc245ccb46";

function App() {
  const [selectedVideo, setSelectedVideo] = useState([]);

  const { id } = useParams();

  async function getVideos() {
    const resp = await axios.get(`${BASE_URL}/videos`);
    setSelectedVideo(resp.data);
  }

  useEffect(() => {
    getVideos();
  }, []);

  if (!selectedVideo.length) {
    return <div className="loader">Shouldn't take tooooooo lo...</div>;
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
}

export default App;
