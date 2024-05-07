import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import videos from "./data/video-details.json";
import { useState } from "react";
import VideoPage from "./pages/VideoPage/VideoPage";
import UploadPage from "./pages/UploadPage/UploadPage";

function App() {
  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  const otherVideos = videos.filter((el) => {
    return el.id !== selectedVideo.id;
  });

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
        <Route path="/upload" element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
