import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BookProvider } from "./context/BookContext";
import { AlertProvider } from "./context/AlertContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AlertProvider>
      <BookProvider>
        <App />
      </BookProvider>
    </AlertProvider>
  </React.StrictMode>
);
