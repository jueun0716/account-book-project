import React, { useState } from "react";
import styles from "./AccountBook.module.css";

const AccountBook = ({ getAccountBookData }) => {
  const [objectState, setObjectState] = useState({
    // objectState : 폼 입력값을 관리, 초기값은 빈 문자열 또는 기본값으로 설정되어있다.
    name: "",
    price: 0,
    type: "",
    today: new Date(),
    memo: "",
    buy: "",
  });

  // 입력된 데이터를 배열에 추가하여 관리
  // expenses : 입력된 데이터를 배열 형태로 저장
  const [expenses, setExpenses] = useState([]);
  const [isMemoEnabled, setIsMemoEnabled] = useState(false); // 체크박스 상태 관리
  //isMemoEnabled : 메모 입력란에 활성화 되었는지 여부를 관리하는 상태
  const inputTextHandler = (event) => {
    //이름: 변경 이벤트를 처리하는 함수. 이 함수들은 해당 입력란의 값이 변경될 때마다 'objectState' 를 업데이트
    setObjectState((prevState) => ({
      ...prevState,
      name: event.target.value,
    }));
  };

  const inputPriceHandler = (event) => {
    //가격
    setObjectState((prevState) => ({
      ...prevState,
      price: event.target.value,
    }));
  };

  const inputTypeHandler = (event) => {
    //유형
    setObjectState((prevState) => ({
      ...prevState,
      type: event.target.value,
    }));
  };

  const inputTodayHandler = (event) => {
    //날짜
    setObjectState((prevState) => ({
      ...prevState,
      today: event.target.value,
    }));
  };
  const inputMemoHandler = (event) => {
    //메모박스
    setObjectState((prevState) => ({
      ...prevState,
      memo: event.target.value,
    }));
  };

  const toggleMemoHandler = () => {
    //체크박스 체크 유무
    setIsMemoEnabled((prevState) => !prevState);
    //true -> false 로, false -> true 변경
    if (!isMemoEnabled) {
      //체크박스가 true 이면,
      setObjectState((prevState) => ({
        ...prevState,
        memo: "",
      }));
    }
  };

  const inputBuyHandler = (event) => {
    setObjectState((prevState) => ({
      ...prevState,
      buy: event.target.value,
    }));
  };

  const buttonSubmitHander = (event) => {
    event.preventDefault();

    const dataToSubmit = {
      ...objectState,
      memo: isMemoEnabled ? objectState.memo : "",
    };

    getAccountBookData(objectState);
    getAccountBookData(dataToSubmit);

    // 입력된 데이터를 expenses 배열에 추가
    setExpenses((prevExpenses) => [
      ...prevExpenses,
      {
        ...objectState,
      },
    ]);

    //상태 초기화
    setObjectState({
      name: "",
      price: 0,
      type: "",
      today: new Date(),
      memo: "",
      buy: "",
    });

    setIsMemoEnabled(false); // 체크박스 상태 초기화
  };

  return (
    <div className={styles.account}>
      <form onSubmit={buttonSubmitHander}>
        {/* 폼이 제출될 때 호출. expenses 배열에 새로 입력된 데이터를 추가 */}
        <div className={styles.name}>
          <label> 1️⃣ 이름</label>
          <input
            type="text"
            onChange={inputTextHandler}
            value={objectState.name}
          />
        </div>
        <div className={styles.price}>
          <label> 2️⃣ 가격</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={inputPriceHandler}
            value={objectState.amount}
          />
        </div>
        <div className={styles.type}>
          <label> 3️⃣ 유형</label>
          <select
            type="text"
            onChange={inputTypeHandler}
            value={objectState.type}
          >
            <option value="null"></option>
            <option value="사무용품">사무용품</option>
            <option value="전자기기">전자기기</option>
            <option value="악세사리">악세사리</option>
          </select>
        </div>
        <div className={styles.date}>
          <label> 4️⃣ 날짜</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            onChange={inputTodayHandler}
            value={objectState.today}
          />
        </div>
        <div className={styles.memo}>
          <label> 5️⃣ 메모</label>
          <input
            type="checkbox"
            onChange={toggleMemoHandler}
            checked={isMemoEnabled}
          />
          {isMemoEnabled && (
            <input
              type="text"
              onChange={inputMemoHandler}
              value={objectState.memo}
            />
          )}
        </div>
        <div className={styles.buy}>
          <label>6️⃣ 재구매 의사</label>
          <input
            type="radio"
            name="buy"
            onChange={inputBuyHandler}
            value="🅾️"
            checked={objectState.buy === "🅾️"}
            // 특정 라디오 버튼이 선택되었는지 확인하는데 사용되는 속성. 현재상태에서 해당 라디오 버튼의 값과 일치하는지 확인하고, 일치하면 그 라디오 버튼이 선택된 상태로 표시된다.
            //checked 는 어떤 버튼이 선택되었는지를 제어한다.
          />
          <label>한다</label>
          <input
            type="radio"
            name="buy"
            value="❎"
            onChange={inputBuyHandler}
            checked={objectState.buy === "❎"}
          />
          <label>안한다</label>
        </div>
        <div className={styles.AccountActions}>
          <button type="submit">메모입력</button>
        </div>
      </form>
    </div>
  );
};

export default AccountBook;
