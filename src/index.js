import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Play from "./pages/play";
import { initContract } from "./near/utils";
import { BrowserRouter, Routes, Route } from "react-router-dom";

initContract()
  .then(() => {
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(
      <React.StrictMode>
        <div className="App-header">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<App />} />
              <Route path="/play" element={<Play />} />
            </Routes>
          </BrowserRouter>

          <div className="footer-container">
            <span>Made with</span>
            <img
              src={process.env.PUBLIC_URL + "/dsrv.png"}
              id="footer-logo"
              alt="dsrv-logo"
            ></img>
          </div>
        </div>
      </React.StrictMode>
    );
  })
  .catch(console.err);
