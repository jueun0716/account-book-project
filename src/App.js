import React, { useState } from "react";
import AccountBook from "./components/AccountForm/AccountBook";
import Account from "./components/Accounts/Account";

function App() {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      date: new Date(2023, 3, 14),
      title: "수건",
      price: "3000",
      type: "생활용품",
      memo: "수건 너무 비싸ㅠ",
      buy: "재구매",
    },
    {
      id: "e2",
      date: new Date(2024, 5, 14),
      title: "칫솔",
      price: "2500",
      type: "생활용품",
      memo: "치약 친구 칫솔",
      buy: "재구매",
    },
  ]);

  const getAccountBookData = (data) => {
    //여기서 함수를 만들어 줌
    setExpenses([
      //업데이트
      {
        id: Math.random().toString(),
        title: data.name,
        price: data.price,
        date: new Date(),
        type: data.type,
        memo: data.memo,
        buy: data.buy,
      },
      ...expenses, // 입력값을 저장
    ]);
  };

  return (
    <>
      <AccountBook getAccountBookData={getAccountBookData} />
      <Account items={expenses} />
    </>
  );
}

export default App;
