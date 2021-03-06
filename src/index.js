import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faRedo,
  faPlus,
  faEraser,
  faTimes,
  faChevronDown,
  faChevronUp,
  faStar,
  faUserCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";

import { faGoogle } from "@fortawesome/free-brands-svg-icons";

library.add(
  faRedo,
  faPlus,
  faEraser,
  faTimes,
  faChevronDown,
  faChevronUp,
  faStar,
  faGoogle,
  faUserCircle,
  faExclamationCircle
);

const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

ReactDOM.render(app, document.getElementById("root"));

reportWebVitals();
