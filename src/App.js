import "./App.css";
import { Buttons } from "./components/Buttons";
import { Balance } from "./components/Balance";
import BalanceExpenses from "./components/BalanceExpenses";
import { TransactionList } from "./components/TransactionList";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Balance />

        <div className="sub-container">
          <Buttons />
          <BalanceExpenses />
          <TransactionList />
        </div>
      </div>
    </GlobalProvider>
  );
}

export default App;
