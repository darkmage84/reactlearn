import React from "react";

const CommentList = ({ comments }) => {
  return (
    <div className="py-3">
      <h3>Binh luan</h3>

      <h5>Username</h5>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia eaque
        magni eveniet libero numquam accusantium ullam voluptate ipsa blanditiis
        aut?{" "}
      </p>

      {comments.length ? (
        comments.map((name, message) => {
          <div className="mb-3">
            <h5>{name}</h5>
            <p>{message}</p>
          </div>;
        })
      ) : (
        <p>Become the first person comments in this post!</p>
      )}
    </div>
  );
};

export default CommentList;
