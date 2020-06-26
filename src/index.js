import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import registerServiceWorker from "./registerServiceWorker";
import { CardContextProvider } from "./context/Context";

ReactDOM.render(
  <CardContextProvider>
    <App />
  </CardContextProvider>,
  document.getElementById("root")
);
registerServiceWorker();
