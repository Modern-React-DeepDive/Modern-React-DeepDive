import React, { useState, useReducer } from "react";

const ACTION_TYPED = {
  deposit: "deposit",
  withdraw: "withdraw",
};

const reducer = (state, action) => {
  console.log("reducer가 일을 합니다.", action, state);
  switch (action.type) {
    case ACTION_TYPED.deposit:
      return state + action.payload;
    case ACTION_TYPED.withdraw:
      return state - action.payload;
    default:
      return state;
  }
  return state + action.payload;
};

function App() {
  const [number, setNumber] = useState(0);
  // money : state
  // dispatch
  const [money, dispatch] = useReducer(reducer, 0); // 두번째 인자 : 초깃값
  // money statue는 reducer를 통해서만 수정이 된다.
  return (
    <div>
      <h2>useReducer 은행에 오신 것을 환영합니다.</h2>
      <p>잔고 : {money}원</p>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        step="1000"
      />
      <button
        onClick={() => {
          dispatch({
            type: "deposit",
            payload: number,
          });
        }}
      >
        예금
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "withdraw",
            payload: number,
          });
        }}
      >
        출금
      </button>
    </div>
  );
}
export default App;
