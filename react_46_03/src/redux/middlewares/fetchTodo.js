// Thunk middleware --> fnc trả về 1 fnc khác

// export const fetchTodo = () => {
//   return (dispatch, getState) => {
//     console.log("fetchTodo");
//     // console.log(getState());
//   };
// };
export const fetchTodo = () => {
  return async (dispatch) => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();

    dispatch({
      type: "todo/fetch",
      payload: data,
    });
  };
};
