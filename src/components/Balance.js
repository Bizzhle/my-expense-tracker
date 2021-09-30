import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Header } from "./Header";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const amount = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  //.tofixed(2) is to set to 2 decimal places

  const sign = amount < 0 ? "-" : "";

  return (
    <div className="sticky-header">
      <Header />
      <h2>
        {sign}${Math.abs(amount).toFixed(2)}
      </h2>
      <p className="balance">Current balance</p>
    </div>
  );
};
