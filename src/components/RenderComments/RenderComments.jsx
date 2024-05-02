import "./RenderComments.scss";

function RenderComments() {
  const arrayofComments = [
    {
      id: "35bba08b-1b51-4153-ba7e-6da76b5ec1b9",
      name: "Noah Duncan",
      comment:
        "Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!",
      timestamp: 1691731062000,
    },
    {
      id: "091de676-61af-4ee6-90de-3a7a53af7521",
      name: "Terry Wong",
      comment:
        "This video is a fantastic overview of the AI landscape. Your ability to distill complex concepts into digestible content is impressive. Can't wait for more tech insights!",
      timestamp: 1691644662000,
    },
    {
      id: "66b7d3c7-4023-47f1-a02c-520c9ca187a6",
      name: "Janice Rodriguez",
      comment:
        "Your channel is my go-to source for staying updated on tech trends. The exploration of AI's future implications is both informative and exciting. Kudos on another excellent video!",
      timestamp: 1691558262000,
    },
  ];

  return (
    <div className="renderedcomments">
      {arrayofComments.map((comment) => {
        const date = new Date(comment.timestamp);
        const dateString = date.toLocaleDateString();
        return (
          <Comment
            key={comment.id}
            name={comment.name}
            comment={comment.comment}
            date={dateString}
          />
        );
      })}
      <div className="renderedcomments__left">
        <div className="renderedcomments__left--img"></div>
      </div>
      <div className="renderedcomments__right">
        <div className="renderedcomments__right--top">
          <p className="renderedcomments__right--name">{comment.name}</p>
          <p className="renderedcomments__right--date">{dateString}</p>
        </div>
        <p className="renderedcomments__right--comment">{comment.comment}</p>
      </div>
    </div>
  );
}
export default RenderComments;
