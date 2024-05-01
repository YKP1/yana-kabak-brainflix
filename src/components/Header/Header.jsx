import "./Header.scss";
import brainFlixLogo from "../../assets/Logo/BrainFlix-logo.svg";
import HeaderImage from "../../assets/images/Mohan-muruge.jpg";

export default function Header() {
  return (
    <header className="header">

      <div className="header__left">
        <img src={brainFlixLogo} alt="" className="header__logo" />
      </div>

      <div className="header__mid">
        <input className="header__search" placeholder="Search" />
        <img src={HeaderImage} alt="profile picture" className="header__image"/>
      </div>

      <div className="header__right">
        <button className="header__button">UPLOAD</button>
      </div>
      
    </header>
  );
}


