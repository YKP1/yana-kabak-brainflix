import "./VideoPlayer.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";

const BASE_URL = "https://unit-3-project-api-0a5620414506.herokuapp.com";

export default function VideoPlayer({video}) {
  const [videoplayer, setVideoplayer] = useState(null);
  
  const {id} = useParams();

  async function getVideos (){
    const {data} = await axios.get(`${BASE_URL}/videos${id || ids[0]}`);
    setVideoplayer(data);
  }

  useEffect(() =>{
    getVideos();
  }, [id]);

  if (!videoplayer) {
    return <div className = "loader">Loading</div>;
  }

  return (
    <section className="videoplayer">
      <video controls poster={video.image} className="video-player">
        <source src={video.video}/>
      </video>
    </section>
  );
}
