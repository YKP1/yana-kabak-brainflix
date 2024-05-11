import "./Header.scss";
import brainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import HeaderImage from "../../assets/images/Mohan-muruge.jpg";
import UploadButton from "../UploadButton/UploadButton";
import { Link } from "react-router-dom";

export default function Header() {
  
  return (
    <header className="header">
      <Link to="/">
        <img src={brainFlixLogo} alt="BrainFlix Logo" className="header__logo" />
      </Link>
      <div className="header__search">
        <input className="header__search--textbox" placeholder="Search" />
        <img src={HeaderImage} alt="profile picture" className="header__image"/>
      <UploadButton/>
      </div>
    </header>
  );
}


