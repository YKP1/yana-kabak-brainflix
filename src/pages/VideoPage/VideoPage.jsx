import "./VideoPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Main from "../../components/Main/Main";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "?api_key=cec6b186-c74d-452f-bf87-1bbc245ccb46";

const VideoPage = ({ selectedVideo }) => {

  
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);
  
  const firstVideo = selectedVideo[0].id;

  useEffect(() => {
    async function getVideoData() {
      try {
        const response = await axios.get(
          `${BASE_URL}/videos/${id || firstVideo}${apiKey}`
        );
        setVideoData(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    }

    getVideoData();
  }, [id]);

  if (!videoData) {
    return <div className="loader">wait for it...</div>;
  }

  const otherVideos = selectedVideo.filter((video) => {
    return video.id !== id;
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
            setVideoData ={setVideoData}
          />
        </div>
      </div>
    </>
  );
};

export default VideoPage;
