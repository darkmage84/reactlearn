import React, { forwardRef, useRef, useImperativeHandle } from "react";
import videotest from "../VideoPlayer/videotest.mp4";

const Video = (props, ref) => {
  // Ref nội bộ trong Component Video
  const videoRef = useRef();

  useImperativeHandle(ref, () => ({
    play: () => {
      videoRef.current.play();
    },
    // tùy cách đặt tên, nhưng tên hàm phải đúng
    dung: () => {
      videoRef.current.pause();
    },
  }));

  return <video ref={videoRef} src={videotest}></video>;
};

export default forwardRef(Video);

// useImperativeHandle: không cho phép trực tiếp tham chiếu đến Ref
