import React from "react";
import "./AccountFilter.css";

const AccountPriceFilter = ({ value, onChange, priceList }) => {
  return (
    <div className="Accountfilter_price">
      <label>가격 : </label>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {priceList.map((option) => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default AccountPriceFilter;
