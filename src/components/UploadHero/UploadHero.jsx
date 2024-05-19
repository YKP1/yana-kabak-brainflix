import React, { useState } from "react";
import "./UploadHero.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import PublishButton from "../PublishButton/PublishButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UploadHero() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const content = form.content.value;
    const timestamp = Date.now();
    const image = `http://localhost:8000/images/obama.jpg`;

    if (!title || !content) {
      alert("There are missing fields!");
      return;
    }

    try {
      await axios.post('http://localhost:8000/videos', {
        title,
        content,
        image,
        timestamp
      });

      setIsSuccess(true);
      setErrorMessage("");
      alert("Good job! Submitted successfully!");
      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data);
    }
  };

  return (
    <div className="uploadhero">
      <h1>Upload Video</h1>
      <br />

      <div className="uploadhero__hero">
        <div className="uploadhero__hero--partone">
          <p>VIDEO THUMBNAIL</p>
          <img className="uploadhero__image" src={UploadImage} alt="runner at a start point" />
        </div>

        <form onSubmit={handleSubmit} className="uploadhero__hero--parttwo">
          <label className="uploadhero__hero--title">
            TITLE YOUR VIDEO
            <input
              type="text"
              name="title"
              placeholder="Add a title to your video"
            />
          </label>

          <label className="uploadhero__hero--descr">
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="uploadhero__hero--parttwo__textarea"
            name="content"
            placeholder="Add a description to your video"
          ></textarea>
          <PublishButton />
        </form>
      </div>
    </div>
  );
}