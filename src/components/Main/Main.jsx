import "./Main.scss";
import Views from "../../assets/Icons/views.svg";
import Likes from "../../assets/Icons/likes.svg";

// import React from 'react';
// import VideoThumbnail from './VideoThumbnail';

export default function Main({ video }) {
  return (
    <main className="main">
      <h1>{video.title}</h1>
      <div className="main__section">
        <div className="main__section--body">
          <p className="section main__section--name">By {video.channel}</p>
          <p className="section main__section--date">
            {new Date(video.timestamp).toLocaleDateString()}
          </p>
        </div>
        <div className="main__section--body">
          <div className="section main__section--views">
            <img src={Views} alt="views icon" />
            <p>{video.views}</p>
          </div>
          <div className="section main__section--likes">
            <img src={Likes} alt="likes icon" />
            <p>{video.likes}</p>
          </div>
        </div>
      </div>
      <div className="main__subsection">
        <p>{video.description}</p>
      </div>
    </main>
  );
}
