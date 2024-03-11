// kho chứa state
import {
  combineReducers,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";

import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";
import { counterReducer } from "./reducers/counterReducer";
import { todoReducer } from "./reducers/todoReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todoReducer,
});

// const rootReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "counter/increment": {
//       return { ...state, count: state.count + 1 };
//     }
//     case "counter/decrement": {
//       return { ...state, count: state.count - 1 };
//     }
//     default: {
//       return state;
//     }
//   }
// };

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

// // store.dispatch({
// //   type: "counter/increment",
// // });

// console.log(store, store.getState());
