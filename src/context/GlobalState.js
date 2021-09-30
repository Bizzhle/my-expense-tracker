import React, { createContext, useReducer, useEffect } from "react";
import AppReducer from "./AppReducer";

//initial state
const initialState = {
  transactions: [],
};

// const decodedToken = localStorage.getItem("token");
// // const newToken = parseInt(decodedToken);

// if (decodedToken) {
//   initialState.transactions.push(JSON.parse(decodedToken));
// }
// console.log(decodedToken);
//Create context

export const GlobalContext = createContext(initialState);

//provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  console.log(initialState);

  useEffect(() => {
    const decodedToken = localStorage.getItem("token");
    // const newToken = parseInt(decodedToken);

    if (decodedToken) {
      initialState.transactions.push(JSON.parse(decodedToken));
    }
    console.log(decodedToken);
  });

  //Actions
  function deleteTransaction(id) {
    localStorage.removeItem("token");
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    localStorage.setItem("token", JSON.stringify(transaction));
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
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
