import React from "react";
import { RiDeleteBin5Line } from "react-icons/ri";

export const Transaction = ({ transaction, deleteTransaction }) => {
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <li>
      <div className="list-flex">
        <span>{transaction.description}</span>
        <span>
          {sign}${Math.abs(transaction.amount)}
        </span>
      </div>

      <div className="delete-btn">
        <span className="" onClick={() => deleteTransaction(transaction.id)}>
          <RiDeleteBin5Line />
        </span>
      </div>
    </li>
  );
};
