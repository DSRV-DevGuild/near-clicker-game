import "./App.css";
import React from "react";
import { login, logout } from "./near/utils";

function App() {
  const account = window.accountId;

  const renderBtn = () => {
    if (account) {
      return (
        <button type="button" onClick={logout} className="disconnect-btn">
          DISCONNECT
        </button>
      );
    }
    return (
      <button type="button" onClick={login} className="connect-btn">
        CONNECT WALLET
      </button>
    );
  };

  return (
    <div className="App">
      <header>
        <div className="header-titles">
          <img
            src={process.env.PUBLIC_URL + "/near_logo.svg"}
            alt="NEAR Logo"
            className="near-logo"
            width="500"
          />
          <h1>Clicker Game</h1>
        </div>
      </header>
      <div className="App-container">
        <div className="connect-wallet">{renderBtn()}</div>
      </div>
    </div>
  );
}

export default App;
