import "./UploadPage.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";

export default function UploadPage({}) {
  return (
    <div className="uploadpage">
      <h1>Upload Page</h1>
      <br />
      <div className="uploadpage__hero">
        <div className="uploadpage__hero--partone">
          <p>VIDEO THUMBNAIL</p>
          <img src={UploadImage} alt="runner at a start point" />
        </div>
        <form className="uploadpage__hero--parttwo">
          <label
            className="uploadpage__hero--parttwo uploadpage__hero--parttwo__label"
            htmlFor="title"
          >
            TITLE YOUR VIDEO
          </label>
          <input type="Add a title to your video" />
          <label
            className="uploadpage__hero--parttwo uploadpage__hero--parttwo__label"
            htmlFor="description"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <textarea
            className="uploadpage__hero--parttwo uploadpage__hero--parttwo__textarea"
            id="description"
            placeholder="Add a description to your video"
          ></textarea>
        </form>
      </div>
    </div>
  );
}
