import "./UploadHero.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";

export default function UploadHero() {
  return (
    <div className="uploadhero">
      <h1>Upload Page</h1>
      <br />

      <div className="uploadhero__hero">
        <div className="uploadhero__hero--partone">
          <p>VIDEO THUMBNAIL</p>
          <img src={UploadImage} alt="runner at a start point" />
        </div>

        <form className="uploadhero__hero--parttwo">
          <label
            className="uploadhero__hero--parttwo uploadhero__hero--parttwo__label"
            htmlFor="title"
          >
            TITLE YOUR VIDEO
          </label>

          <input type="Add a title to your video" />

          <label
            className="uploadhero__hero--parttwo uploadhero__hero--parttwo__label"
            htmlFor="description"
          >
            ADD A VIDEO DESCRIPTION
          </label>

          <textarea
            className="uploadhero__hero--parttwo uploadhero__hero--parttwo__textarea"
            id="description"
            placeholder="Add a description to your video"
          ></textarea>
        </form>
      </div>
    </div>
  );
}
