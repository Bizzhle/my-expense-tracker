import React, { useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { GlobalContext } from "../context/GlobalState";

export const ExpenseForm = ({
  expenseActive,
  expenseFormRef,
  showExpenseForm,
}) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const { addTransaction } = useContext(GlobalContext);

  function pos_to_neg(num) {
    return -Math.abs(num);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: +amount,
    };

    addTransaction(newTransaction);
    setAmount("");
    setDescription("");
    showExpenseForm();
  };

  const closeForm = () => {
    showExpenseForm();
    setAmount("");
    setDescription("");
  };

  return (
    <div ref={expenseFormRef} className={expenseActive ? "active" : "hidden"}>
      <form className="modal-content animate" onSubmit={onSubmit}>
        <div className="close-container">
          <span className="close" onClick={closeForm}>
            <IoMdClose />
          </span>
        </div>

        <h3>Add Expense</h3>

        <div className="">
          <input
            type="number"
            placeholder="enter amount"
            autoComplete="false"
            value={amount}
            onChange={(e) => setAmount(pos_to_neg(e.target.value))}
            required
          />
          <input
            type="text"
            placeholder="enter description"
            autoComplete="false"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button type="submit" className="submit-button">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};
