import React, { useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

const Post = ({ onSetCount }) => {
  const [comments, setComments] = useState([]);
  const handleAddComment = (comment) => {
    setComments([...comments, comment]);
  };

  useEffect(() => {
    onSetCount(comments.length);
  }, [comments]);

  return (
    <div className="container py-3">
      <h2>Thong tin bai viet</h2>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi corrupti
        necessitatibus quidem maiores delectus, expedita, suscipit iusto
        eligendi ratione tempore magni, pariatur asperiores culpa consectetur
        accusantium autem exercitationem natus sint!
      </p>

      <CommentList comments={comments} />

      <CommentForm onComment={handleAddComment} />
    </div>
  );
};

export default Post;
