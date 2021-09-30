import React, { useState, useRef, useEffect, useContext } from "react";
import { IoMdAdd, IoMdArrowForward } from "react-icons/io";
import { ExpenseForm } from "./ExpenseForm";
import { IncomeForm } from "./IncomeForm";
import { GlobalContext } from "../context/GlobalState";

export const Buttons = () => {
  const [isActive, setIsActive] = useState(false);
  const [expenseActive, setExpenseActive] = useState(false);
  const { clearTransactions } = useContext(GlobalContext);

  const incomeFormRef = useRef(null);
  const expenseFormRef = useRef(null);

  const showIncomeForm = () => setIsActive(!isActive);
  const showExpenseForm = () => setExpenseActive(!expenseActive);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        incomeFormRef.current !== null &&
        !incomeFormRef.current.contains(e.target)
      ) {
        setIsActive(!isActive);
      }
    };

    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isActive]);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (
        expenseFormRef.current !== null &&
        !expenseFormRef.current.contains(e.target)
      ) {
        setExpenseActive(!expenseActive);
      }
    };

    if (expenseActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [expenseActive]);

  return (
    <>
      <ul className="buttonList">
        <li>
          <button onClick={showIncomeForm} className="button">
            <IoMdAdd />
          </button>
          <p>Add money</p>
        </li>

        <li>
          <button onClick={showExpenseForm} className="button">
            <IoMdArrowForward />
          </button>
          <p>Add expense</p>
        </li>

        <li>
          <button onClick={clearTransactions} className="button">
            <IoMdArrowForward />
          </button>
          <p>Reset</p>
        </li>
      </ul>

      <IncomeForm
        incomeFormRef={incomeFormRef}
        isActive={isActive}
        setIsActive={setIsActive}
        showIncomeForm={showIncomeForm}
      />
      <ExpenseForm
        expenseFormRef={expenseFormRef}
        expenseActive={expenseActive}
        setExpenseActive={setExpenseActive}
        showExpenseForm={showExpenseForm}
      />
    </>
  );
};
