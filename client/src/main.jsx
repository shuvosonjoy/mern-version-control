import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/authContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <AuthContextProvider>
       
        <App />
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
