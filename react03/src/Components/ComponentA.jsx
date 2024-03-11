import React, { useContext } from "react";
import { AppContext } from "../App";

const ComponentA = () => {
  return (
    <AppContext.Consumer>
      {(context) => {
        // console.log(context);
        return (
          <div>
            <h1>ConponentA</h1>
          </div>
        );
      }}
    </AppContext.Consumer>
  );
};

export default ComponentA;
