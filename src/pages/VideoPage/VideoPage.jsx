import "./VideoPage.scss";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Main from "../../components/Main/Main";
import CommentsForm from "../../components/CommentsForm/CommentsForm";
import Comments from "../../components/Comments/Comments";
import NextVideos from "../../components/NextVideos/NextVideos";

const VideoPage = ({ selectedVideo, otherVideos, setSelectedVideo }) => {
  return (
    <>
      <VideoPlayer video={selectedVideo} />
      <div className="desktop__1">
        <div className="desktop__2">
          <Main video={selectedVideo} />
          <CommentsForm numberOfComments={selectedVideo.comments.length} />
          <Comments comments={selectedVideo.comments} />
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
};

export default VideoPage;
