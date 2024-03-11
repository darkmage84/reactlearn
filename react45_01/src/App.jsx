import React from "react";
import Counter from "./Components/Counter";
import Search from "./Components/Search";
import Video from "./Components/VideoPlayer/Video";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Counter2 from "./Components/Counter2";
import Input from "./Components/Input";

const App = () => {
  return (
    <div>
      {/* <h1>React Memo</h1> */}
      {/* <Counter title="Hello F88" /> */}

      {/* <h1>Ref</h1>
      <Search /> */}

      {/* <h1>Video</h1>
      <VideoPlayer /> */}

      {/* <h1>useLayoutEffect</h1>
      <Counter2 /> */}

      <h1>useId</h1>
      <Input title={"Ten"} />
      <Input title={"Email"} />
      <Input title={"Dia chi"} />
    </div>
  );
};

export default App;
