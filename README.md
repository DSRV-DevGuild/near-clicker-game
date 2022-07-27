# NEAR Clicker Game

## How to Play

### 1. git clone

```bash
git clone https://github.com/DSRV-DevGuild/near-clicker-game.git
cd near-clicker-game
git checkout Step3
yarn install && yarn start
```

### 2. Create NEAR Testnet account

[NEAR Wallet](https://wallet.testnet.near.org/)

### 3. CONNECT Wallet

![](https://user-images.githubusercontent.com/70956926/180914152-ce3c1dd9-ce8b-4639-a1ef-3ab2d1f023ba.png)

💡 게임을 이용하기 위해서는 계정에 잔액이 있어야 합니다. 잔액이 부족한 경우 다음 [AllThatNode](https://www.allthatnode.com/faucet/near.dsrv)에서 faucet을 요청해주세요.

### 4. Play!

- Game Start 버튼을 누르면 reset 트랜잭션을 허용하는 창이 뜹니다. reset 트랜잭션이 완료되면 게임이 시작됩니다.
- 15초 동안 화면에 랜덤으로 나타나는 CosmWasm 아이콘을 클릭하세요! 한 번 클릭할 때마다 점수가 1점씩 올라갑니다.
- 게임이 종료되면 Transaction 버튼을 눌러 increment 트랜잭션을 실행하세요. Previous score 점수가 업데이트 됩니다.

![](https://user-images.githubusercontent.com/70956926/180914137-1fb69c6d-92bc-4bc1-a7cf-9cdf5c3e29fc.png)

## 구현 단계 별 요구사항

### 1단계: 프론트엔드와 스마트 컨트랙트 연결하기

- 요구사항 1: NEAR 테스트넷 환경을 설정하고 연결할 수 있다.
- 요구사항 2: 테스트넷에 배포한 스마트 컨트랙트와 연결할 수 있다.
- 요구사항 3: 컨트랙트와 통신하는 함수를 작성할 수 있다.

### 2단계: 메인 화면 구현하기

- 요구사항 1: **CONNECT** 와 **DISCONNECT** 버튼의 UI 컴포넌트를 구현하고, 버튼을 클릭했을 때 지갑을 연결하고 연결을 해지할 수 있다.
- 요구사항 2: 지갑에 연결되었을 때 잔액을 표시할 수 있다.
- 요구사항 3: PLAY 버튼을 눌렀을 때 _/play_ 주소로 라우팅할 수 있다.

### 3단계: Clicker 게임 구현하기

- 요구사항 1: 플레이 화면 UI 를 구현할 수 있다.
- 요구사항 2: **Game Start** 버튼을 눌러 `get_count` 와 `reset` 메소드를 차례로 실행할 수 있다.
- 요구사항 3: 게임이 시작되면 15초 동안 화면에 랜덤하게 나타나는 NEAR 아이콘을 클릭하여 점수를 획득할 수 있다.
- 요구사항 4: 게임 종료 후 나타나는 **Transaction** 버튼의 UI 컴포넌트를 구현하고, 이를 클릭하면 `increment` 메소드를 실행할 수 있다.
