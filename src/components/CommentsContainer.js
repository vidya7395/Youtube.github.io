import React from "react";
import Comments from "./Comments";

const commentsData = [
  {
    name: "nameOne",
    text: "Some Comments",
    replies: [
      { name: "nameOne", text: "Some Comments" },
      {
        name: "nameOne",
        text: "Some Comments",
        replies: [
          { name: "nameOne", text: "Some Comments" },
          {
            name: "nameOne",
            text: "Some Comments",
            replies: [
              { name: "nameOne", text: "Some Comments" },
              { name: "nameOne", text: "Some Comments" },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "nameOne",
    text: "Some Comments",
    replies: [
      { name: "nameOne", text: "Some Comments" },
      { name: "nameOne", text: "Some Comments" },
    ],
  },
  {
    name: "nameOne",
    text: "Some Comments",
  },
  {
    name: "nameOne",
    text: "Some Comments",
  },
  {
    name: "nameOne",
    text: "Some Comments",
  },
  {
    name: "nameOne",
    text: "Some Comments",
  },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
    return (
      <div key={index}>
        <Comments data={comment}></Comments>
        <div className="ps-5 border-l">
          {comment.replies && (
            <CommentsList comments={comment.replies}></CommentsList>
          )}
        </div>
      </div>
    );
  });
};

const CommentsContainer = () => {
  return (
    <div>
      <h3>Comments</h3>
      <CommentsList comments={commentsData}></CommentsList>
    </div>
  );
};
export default CommentsContainer;
