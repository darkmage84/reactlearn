import React, { useEffect, useRef } from "react";
import Video from "./Video";

const VideoPlayer = () => {
  const videoRef = useRef();

  // chẳng may xóa
  //   useEffect(() => {
  //     videoRef.current.remove();
  //   }, []);

  return (
    <div>
      <Video ref={videoRef} />
      <hr />
      <button
        onClick={() => {
          videoRef.current.play();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          videoRef.current.dung();
        }}
      >
        Pause
      </button>
    </div>
  );
};

export default VideoPlayer;
