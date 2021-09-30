import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export default function BalanceExpenses() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const sign = expense < 0 ? "-" : "";

  return (
    <div className="inc-exp-container">
      <div className="">
        <h4>Income</h4>
        <p>${income}</p>
      </div>
      <div>
        <h4>Expenditure</h4>
        <p>
          {sign}${Math.abs(expense).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
