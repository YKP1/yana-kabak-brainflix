import "./Header.scss";
import brainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import HeaderImage from "../../assets/images/Mohan-muruge.jpg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="header">
        <img src={brainFlixLogo} alt="" className="header__logo" />

      <div className="header__search">
        <input className="header__search--textbox" placeholder="Search" />
        <img src={HeaderImage} alt="profile picture" className="header__image"/>
        <Link className="header__buttonlink" to = "/upload"> <button className="header__button">UPLOAD</button> </Link>
      </div>
    </header>
  );
}


