import "./App.css";
import React, { useState, useEffect } from "react";
import { login, logout, accountBalance } from "./near/utils";
import { useNavigate } from "react-router-dom";

function App() {
  const account = window.accountId;
  const [balance, setBalance] = useState();
  const [visible, setVisible] = useState("hidden");
  const navigate = useNavigate();

  // 연결된 계정이 바뀔 때마다 getBalance 호출
  useEffect(() => {
    if (account) {
      getBalance();
      setVisible("visible");
    }
  }, [account]);

  const getBalance = async () => {
    setBalance(await accountBalance());
  };

  // CONNECT, DISCONNECT 버튼 구현
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

  // 지갑과 연결되어 있으면 account와 balance 정보 출력
  const showWalletInfo = () => {
    if (account) {
      return (
        <div className="wallet-info">
          <p>{`account: ${account}`}</p>
          <p>{`balance: ${balance} NEAR`}</p>
        </div>
      );
    }
  };

  // 지갑과 연결되어 있으면 PLAY 버튼 보여주기
  // 버튼 클릭하면 /play 주소로 이동
  const playGame = () => {
    return (
      <div className="menu">
        <button
          className="play-btn"
          onClick={() => {
            navigate("/play");
          }}
          style={{ visibility: visible }}
        >
          <span>PLAY</span>
        </button>
        {!account && <p>Click the Button and Connect Wallet</p>}
        {account && (
          <p>Click as many NEAR Icon as you can within 15 seconds!</p>
        )}
      </div>
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
        <div className="App-menu-container">
          {playGame()}
          <div className="connect-wallet">{renderBtn()}</div>
        </div>
        {showWalletInfo()}
      </div>
    </div>
  );
}

export default App;
