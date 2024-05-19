import "./VideoPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Main from "../../components/Main/Main";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "http://localhost:8000";

const VideoPage = () => {
  const { id } = useParams();
  const [selectedVideo, setSelectedVideo] = useState([]);
  const [videoData, setVideoData] = useState(null);
  

  useEffect(() => {
    async function getVideos() {
      try {
        const resp = await axios.get(`${BASE_URL}/videos`);
        setSelectedVideo(resp.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    }

    getVideos();
  }, []);
  
  useEffect(() => {
    async function getVideoData(videoId) {
      try {
        const response = await axios.get(
          `${BASE_URL}/videos/${videoId}`
        );
        setVideoData(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    }
    if (selectedVideo.length > 0) {
      const videoId = id || selectedVideo[0].id;
      getVideoData(videoId);
    }
  }, [id, selectedVideo]);

  if (!selectedVideo.length || !videoData) {
    return <div className="loader">wait for it...</div>;
  }

  const otherVideos = selectedVideo.filter((video) => {
    return video.id !== (id || selectedVideo[0].id);
  });

  return (
    <>
      <VideoPlayer video={videoData} />
      <div className="desktop__1">
        <div className="desktop__2">
          <Main video={videoData} />
          <CommentsForm numberOfComments={videoData.comments.length} />
          <Comments comments={videoData.comments} />
        </div>
        <div className="desktop__3">
          <NextVideos
            otherVideos={otherVideos}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
