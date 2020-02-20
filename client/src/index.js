// import materializeCSS from "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./index.scss";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("DOMAIN KEY IS ", process.env.REACT_APP_DOMAIN_API_KEY);
console.log("GOOGLE KEY IS ", process.env.REACT_APP_GOOGLE_API_KEY);
console.log("Environment is ", process.env.NODE_ENV);
