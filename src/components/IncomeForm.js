import React, { useState, useContext } from "react";
import { IoMdClose } from "react-icons/io";
import { GlobalContext } from "../context/GlobalState";

export const IncomeForm = ({
  setIsActive,
  isActive,
  incomeFormRef,
  showIncomeForm,
}) => {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const { addTransaction } = useContext(GlobalContext);

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
    showIncomeForm();
  };

  const closeForm = () => {
    showIncomeForm();
    setAmount("");
    setDescription("");
  };

  return (
    <div ref={incomeFormRef} className={isActive ? "active" : "hidden"}>
      <div className="modal-content animate">
        <form className=" " onSubmit={onSubmit}>
          <div className="close-container">
            <span className="close" onClick={closeForm}>
              <IoMdClose />
            </span>
          </div>
          <h3>Add Money</h3>
          <div className="">
            <input
              type="number"
              placeholder="enter amount"
              autoComplete="false"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
