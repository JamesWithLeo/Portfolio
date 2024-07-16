import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "./Components/themeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
