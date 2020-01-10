import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "mobx-react";
import Store from "./store/index";
ReactDOM.render(
  <Provider {...Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
