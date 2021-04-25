import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// This createStore function is from redux, we could pass down through App and we would be able to access the Redux store.
import { createStore } from "redux";
// To avoid passing store as a prop, we use the Provider component, which is imported from react-redux.
import { Provider } from "react-redux";
import usersReducer from "./features/users/usersSlice";

const store = createStore(
  usersReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  // This will give your components access to the store.
<Provider store={store}>
  <App />
</Provider>,
document.getElementById("root")
);