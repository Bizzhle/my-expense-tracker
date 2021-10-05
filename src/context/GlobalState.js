import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [],
};

const localStorageTransactions = JSON.parse(
  localStorage.getItem("transaction")
);
let transactions =
  localStorage.getItem("transaction") !== null ? localStorageTransactions : [];

if (localStorage.getItem("transaction")) {
  const decodedData = localStorage.getItem("transaction");

  initialState.transactions = JSON.parse(decodedData);
}

//Create context

export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    localStorage.removeItem("data");
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    transactions.unshift(transaction);
    localStorage.setItem("transaction", JSON.stringify(transactions));
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
      localStorage,
    });
  }

  function clearTransactions() {
    localStorage.clear();
    window.location.reload(false);
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        addTransaction,
        deleteTransaction,
        clearTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
