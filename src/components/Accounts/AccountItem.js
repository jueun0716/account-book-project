import React from "react";
import AccountDate from "./AccountDate";
import Card from "../UI/Card";
import "./AccountItem.css";

const AccountItem = (props) => {
  return (
    <Card className="account-item">
      <div className="accoun-item__description">
        <div className="account-item_date">
          <AccountDate date={props.date} />
        </div>
        <div className="account-item_type"> 유형 : {props.type}</div>
        <div className="accoun-item_title"> 이름 : {props.title}</div>
        <div className="account-item_price"> 가격 : {props.price}</div>
        <div className="account-item_price"> 메모 : {props.memo}</div>
        <div className="account-item_buy"> 재구매 : {props.buy}</div>
      </div>
    </Card>
  );
};

export default AccountItem;
