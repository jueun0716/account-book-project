import React from "react";
import "./AccountFilter.css";

const AccountDateFilter = ({ value, onChange, optionList }) => {
  //value 와 Onchange 를 Props로 받아 드롭다운 메뉴를 렌더링.
  //optionList props을 통해 정렬 옵션 목록을 받아 드롭다운 메뉴의 옵션을 동적으로 생성
  return (
    <div className="Accountfilter_date">
      <label>구매일자 : </label>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {optionList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
            {/* 옵션에 표시되는 텍스트 */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AccountDateFilter;
