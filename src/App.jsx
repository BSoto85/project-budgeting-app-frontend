import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "../components/common/NavBar";
import TransactionsIndex from "../components/TransactionsIndex";
import TransactionShow from "../components/TransactionShow";
import TransactionForm from "../components/TransactionForm";
import TransactionEdit from "../components/TransactionEdit";

const App = () => {
  const [transactionArray, setTransactionArray] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3333/transactions")
      .then((res) => res.json())
      .then((data) => setTransactionArray(data.transactions));
  }, []);

  return (
    <div>
      <NavBar transactionArray={transactionArray} />
      <Routes>
        <Route
          path="/"
          element={<TransactionsIndex transactionArray={transactionArray} />}
        />
        <Route
          path="/:id"
          element={
            <TransactionShow setTransactionArray={setTransactionArray} />
          }
        />
        <Route
          path="/new"
          element={
            <TransactionForm setTransactionArray={setTransactionArray} />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <TransactionEdit setTransactionsArray={setTransactionArray} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
