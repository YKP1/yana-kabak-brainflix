import "./VideoPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Main from "../../components/Main/Main";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";
import { useEffect, useState } from "react";
import axios from "axios";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com/";
// const apiKey = "cec6b186-c74d-452f-bf87-1bbc245ccb46";

const VideoPage = ({ selectedVideo, setSelectedVideo }) => {
  const { id } = useParams();

  const [videoid, setVideoId] = useState(null);

  useEffect(() => {
    getVideoId();
  }, [id, setSelectedVideo]);

  if (!videoid) {
    return <div className="loader">wait for it...</div>;
  }

  return (
    <>
      <VideoPlayer video={selectedVideo} />
      <div className="desktop__1">
        <div className="desktop__2">
          <Main video={selectedVideo} />
          <CommentsForm numberOfComments={selectedVideo.data.comments.length} />
          <Comments comments={selectedVideo.data.comments} />
        </div>
        <div className="desktop__3">
          <NextVideos
            otherVideos={otherVideos}
            setSelectedVideo={setSelectedVideo}
          />
        </div>
      </div>
    </>
  );

  async function getVideoId() {
    const { data } = await axios.get(`${BASE_URL}/videos/:id/${id || ids[0]}`);
    setSelectedVideo(data);
  }
};

export default VideoPage;
