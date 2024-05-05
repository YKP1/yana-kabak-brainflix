import "./Comments.scss";

function Comments({ comments }) {
  return (
    <div className="rcomments" id={comments.id}>
      
      {comments.map((comment) => {
        const date = new Date(comment.timestamp);
        const dateString = date.toLocaleDateString();

        return (
          <div className="rcomments__wrapper" key={comment.id}>
            <div className="rcomments__wrapper--left">
              <div className="rcomments__wrapper--left rcomments__wrapper--left__img"></div>
            </div>
            <div className="rcomments__wrapper--right">
              <div className="rcomments__wrapper--right__top">
                <p className="rcomments__wrapper--right__top--name">
                  {comment.name}
                </p>
                <p className="rcomments__wrapper--right__top--date">
                  {dateString}
                </p>
              </div>
              <p className="rcomments__wrapper--right__comment">
                {comment.comment}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Comments;
