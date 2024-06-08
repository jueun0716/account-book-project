import React, { useState } from "react";
import AccountItem from "./AccountItem";
import Card from "../UI/Card";
import "./Account.css";
import AccountDateFilter from "./AccountDateFilter";
import AccountPriceFilter from "./AccountPriceFilter";

const sortOptionList = [
  { value: "latest", name: "최신순" },
  { value: "oldest", name: "오래된 순" },
];

const priceOptionList = [
  { value: "highest", name: "가격 높은순" },
  { value: "lowest", name: "가격 낮은순" },
];

const Account = (props) => {
  const [sortType, setSortType] = useState("latest");
  const [priceType, setPriceType] = useState("lowest");

  let sortedItems = [...props.items];
  if (sortType === "latest" || sortType === "oldest") {
    sortedItems = sortedItems.sort((a, b) => {
      if (sortType === "latest") {
        return new Date(b.date) - new Date(a.date);
      } else {
        return new Date(a.date) - new Date(b.date);
      }
    });
  } else if (priceType === "lowest" || priceType === "highest") {
    sortedItems = sortedItems.sort((a, b) => {
      if (priceType === "lowest") {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });
  }

  return (
    <Card className="account">
      <AccountDateFilter
        value={sortType}
        onChange={setSortType}
        optionList={sortOptionList}
      />
      <AccountPriceFilter
        value={priceType}
        onChange={setPriceType}
        priceList={priceOptionList}
      />
      {sortedItems.map((item) => (
        <AccountItem
          key={item.id} // key를 추가해서 각 아이템의 고유성을 보장
          date={item.date}
          title={item.title}
          price={item.price}
          type={item.type}
          memo={item.memo}
          buy={item.buy}
        />
      ))}
    </Card>
  );
};

export default Account;
