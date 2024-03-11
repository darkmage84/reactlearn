import React, { useEffect, useState } from "react";
import { useSelector } from "../core/useSelector";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuid } from "uuid";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

const Chat = () => {
  const { state, dispatch } = useSelector();
  const [messageValue, setMessageValue] = useState("");

  const handleChangeInput = (e) => {
    setMessageValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!messageValue.trim().length) {
      alert("Please enter message value!");
      return;
    }

    const message = {
      id: uuid(),
      message: messageValue,
    };

    dispatch({
      type: "message/add",
      payload: message,
    });

    //lưu vào localStorage
    // setLocalStorage("messages", state.messages);
    // nếu thực hiện câu này, localStorage sẽ không thay đổi ngay

    //reset input
    setMessageValue("");
  };

  useEffect(() => {
    // //lưu vào localStorage
    // setLocalStorage("messages", state.messages);

    console.log("Hello");
    console.log(state.messages);
    //Đọc message
    const timeout = setTimeout(() => {
      dispatch({
        type: "message/fetch",
        payload: getLocalStorage("messages"),
      });
    }, 100);

    //Lưu vào localStorage -> Khi thêm
    if (state.messages.length) {
      setLocalStorage("messages", state.messages);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [state.messages]);

  return (
    <div className="container">
      <div className="chat my-3 p-3" style={{ border: "1px solid red" }}>
        {state.messages.map(({ id, message }) => (
          <div key={id} className="message">
            <div className="mb-2">{message}</div>
          </div>
        ))}

        <form action="" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Tin nhan ..."
              onChange={handleChangeInput}
              value={messageValue}
            />
            <button className="btn btn-primary">Send</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chat;
