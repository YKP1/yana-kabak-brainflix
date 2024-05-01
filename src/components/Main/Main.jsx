import "./Main.scss";
import Views from "../../assets/Icons/views.svg";
import Likes from "../../assets/Icons/likes.svg";

export default function Main() {
  return (
    <main className="main">
      <h1>The Future of Artificial Intelligence</h1>
      <div className="main__section">
        <div className="main__section--body">
          <p className="section main__section--name">By Aiden Thompson</p>
          <p className="section main__section--date">8/8/2023</p>
        </div>
        <div className="main__section--body">
          <div className="section main__section--views">
            <img src={Views} alt="views icon" />
            <p>980,544</p>
          </div>
          <div className="section main__section--likes">
            <img src={Likes} alt="likes icon" />
            <p>22,479</p>
          </div>
        </div>
      </div>
      <div className="main__subsection">
        <p>
          Explore the cutting edge developments and predictions for Artificial
          Inelligence in the coming years. From revolutionary breakthroughs in
          machine learning to the ethical considerations influencing AI
          advancements, this expoloration transcends the boundaries of mere
          speculation. Join us on a journey that navigates the intricate
          interplay between innovation, ethics, and the ever-evolving tech
          frontier.
        </p>
      </div>
    </main>
  );
}
