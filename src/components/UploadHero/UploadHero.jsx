import "./UploadHero.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";
import PublishButton from "../PublishButton/PublishButton";

export default function UploadHero() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;

    const title = form.title.value;

    const description = form.description.value;

  if (!title || !description){
    alert ("There are missing fields!");
    return;
  }

  alert ("Good job! Submitted successfully!")
  };

  return (
    <div className="uploadhero">
      <h1>Upload Video</h1>
      <br />

      <div className="uploadhero__hero">
        <div className="uploadhero__hero--partone">
          <p>VIDEO THUMBNAIL</p>
          <img src={UploadImage} alt="runner at a start point" />
        </div>

        <form onSubmit={handleSubmit} className="uploadhero__hero--parttwo">

          <label className="uploadhero__hero--parttwo uploadhero__hero--parttwo__label"> TITLE YOUR VIDEO 
          <input type="text" name="title" placeholder="Add a title to your video"/>
          </label>

          <label className="uploadhero__hero--parttwo uploadhero__hero--parttwo__label"> ADD A VIDEO DESCRIPTION
          <textarea className="uploadhero__hero--parttwo uploadhero__hero--parttwo__textarea"
            name="description" placeholder="Add a description to your video"
          ></textarea>
          </label>
          <PublishButton/>
        </form>

      </div>
    </div>
  );
}
