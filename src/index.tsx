import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./application/store";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./presentation/routes";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  //<React.StrictMode>
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>
  //</React.StrictMode>
);

reportWebVitals();
