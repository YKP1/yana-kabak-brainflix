import "./Comments.scss";
import HeaderImage from "../../assets/images/Mohan-muruge.jpg";

export default function Comments() {
  return (
    <section className="comments">
    <p className="comments__header">3 Comments</p>
    <div className="comments__input">
      <img className="comments__input--img" src={HeaderImage} alt="" />
      <form className="comments__input--form">
        <label
          className="comments__input--form comments__input--form__header "
          htmlFor="comment-field"
        >
          JOIN THE CONVERSATION
        </label>
        <div className="comments__input--form--container">
          <textarea
            className="comments__textarea comments__input comments__input--form__textarea"
            id="comment-field"
            placeholder="Add a new comment"
          ></textarea>
          <button className="comments__input--form comments__input--form--btn">
            COMMENT
          </button>
        </div>
      </form>
    </div>
  </section>
);
}
