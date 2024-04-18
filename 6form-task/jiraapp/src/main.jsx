import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "./context/task.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider>
    <App />
  </Provider>
  //bu şekilde task jsx içindeki providerı tüm app içerisinde kullanabiliriz
);
