import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import Post from "./Components/Post/Post";
import Notifications from "./Components/Notifications";

const App = () => {
  const [commentCount, setCommentsCount] = useState(0);
  const handleSetCount = (number) => {
    setCommentsCount(number);
  };

  return (
    <>
      <div className="container">
        <Notifications commentCount={commentCount} />
      </div>
      <Post onSetCount={handleSetCount} />;
    </>
  );
};

export default App;
