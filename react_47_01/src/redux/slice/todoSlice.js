import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { build } from "vite";
import { useMemo } from "react";

const initialState = {
  todoList: [],
  status: "idle",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    update: (state, action) => {
      state.todoList = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todoList = action.payload;
        state.status = "success";
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "rejected";
      });
  },
});

// console.log(counterSlice);

// redux thunk hơi thừa chỗ reducers update và ko đúng luồng
// export const fetchTodos = () => {
//   return async (dispatch) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos");
//     const data = await response.json();
//     dispatch(todoSlice.actions.update(data));
//   };
// };

//
export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return data;
});

/*
createAsyncThunk Status
- pending
- fulfilled
- reject 
*/
