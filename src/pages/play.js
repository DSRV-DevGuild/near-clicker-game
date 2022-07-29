import React, { useState } from "react";
import { get_num, reset } from "../near/utils";

const Play = () => {
  // 플레이 시간
  const playTime = 15;
  // 플레이 시간
  const [time, setTime] = useState(playTime);
  // 게임 오버 여부
  const [gameOver, setGameOver] = useState(false);
  // 게임 시작 여부
  const [gameStart, setGameStart] = useState(false);
  // 아이콘의 위치 정보
  const [targetPosition, setTargetPosition] = useState({
    top: "20%",
    left: "50%"
  });
  // 로딩 중인지 여부
  const [loading, setLoading] = useState(false);
  // 현재 점수
  const [score, setScore] = useState(0);
  // 컨트랙트에 저장된 이전 점수
  const [previousScore, setPreviousScore] = useState(0);
  // setInterval이 리턴하는 timerId 값 저장
  const [timerId, setTimerId] = useState();

  // Game Start 버튼 눌렀을 때 실행
  const startGame = async (event) => {
    // 컨트랙트와 통신하는 동안 loading 상태를 true로 설정
    setLoading(true);
    // get_num 메소드 실행
    const result = await get_num();
    // preiousScore에 읽어온 count 값 저장
    setPreviousScore(result);
    // reset 트랜잭션 실행해서 컨트랙트의 count 값을 0으로 초기화
    await reset();
    // 컨트랙트와 통신이 끝난 후 loading 상태를 false로 설정
    setLoading(false);
    // gameStart 를 true로 설정하여 게임 시작하기
    setGameStart(true);
    // 아이콘이 나타나도록 위치 설정
    setTargetPosition({ top: "20%", left: "50%" });
    // setInterval 메소드를 이용해 1초마다 time이 1씩 줄어들도록 설정
    setTimerId(
      setInterval(() => {
        setTime((time) => (time > 0 ? time - 1 : 0));
      }, 1000)
    );
  };

  // 게임이 시작되기 전에는 GAME START , 게임 오버된 후에는 TRANSACTION 버튼 보이도록
  const renderButton = () => {
    if (gameOver === false) {
      return (
        <button className="game-btn" onClick={(event) => startGame(event)}>
          GAME START
        </button>
      );
    } else {
      return <button className="game-btn">TRANSACTION</button>;
    }
  };

  return (
    <div className="score-board-container">
      <div className="play-container">
        <div className="score-menu">
          <span>Previous Score: {previousScore}</span>
          <span>Current Score: {score}</span>
        </div>
        {renderButton()}
        <span>Time left: {time} s</span>
      </div>

      <div className="game-container">
        {gameStart && (
          <img
            src={process.env.PUBLIC_URL + "/near-mark.svg"}
            alt="Target"
            id="target"
            style={{ position: "absolute", ...targetPosition }}
          />
        )}
        {loading && <div className="loading-msg">Loading...</div>}
      </div>
    </div>
  );
};

export default Play;
