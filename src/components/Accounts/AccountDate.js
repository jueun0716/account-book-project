import React from "react";

const AccountDate = (props) => {
  const month = props.date.toLocaleString("ko-KR", { month: "long" });
  const day = props.date.toLocaleString("ko-KR", { day: "2-digit" });
  const year = props.date.toLocaleString("ko-KR", { year: "numeric" });
  // const year = props.date.getFullYear();

  return (
    <div className="account-date">
      <div className="account-date__year">
        {year} &nbsp;
        {month} &nbsp;
        {day}
      </div>
    </div>
  );
};

export default AccountDate;
