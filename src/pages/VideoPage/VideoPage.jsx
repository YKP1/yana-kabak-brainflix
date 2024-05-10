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
const apiKey = '?api_key=cec6b186-c74d-452f-bf87-1bbc245ccb46';

const VideoPage = ({ selectedVideo, otherVideos}) => {
  const { id } = useParams();
  const [videoData, setVideoData] = useState(null);

//when I land on the page initially on home, i am at "/" but i still need to be able to fecth video details for that page - means first time everything loads i need to get the first video id
//then when the user clicks on the image from the list of video, they need to be sent to base_url/videos/id for that particular video id 
//when user gets there - what's showing is what's come back from video data

// console.log(selectedVideo[0]);

const firstVideo = selectedVideo[0].id;

  useEffect(() => {
    async function getVideoData() {
      try {
        const response = await axios.get(`${BASE_URL}/videos/${id || firstVideo}${apiKey}`);
        // console.log(response);

        setVideoData(response.data);
      } catch (error) {
        console.error("Error fetching video data:", error);
      }
    }

    getVideoData();
  }, []);

  if (!videoData) {
    return <div className="loader">wait for it...</div>;
  }

  // console.log(videoData);

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
          {/* <NextVideos
            // otherVideos={otherVideos}
            // setSelectedVideo={setSelectedVideo}
          /> */}
        </div>
      </div>
    </>
  );
};

export default VideoPage;
