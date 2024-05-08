import "./UploadPage.scss";
import UploadImage from "../../assets/images/Upload-video-preview.jpg";

export default function UploadPage({}) {
  return (
    <>
      <h1>Upload Page</h1>
      <br />
      <p>VIDEO THUMBNAIL</p>
      <img src={UploadImage} alt="runner at a start point" />

    </>
  );
}
