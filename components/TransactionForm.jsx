import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const TransactionForm = ({ setTransactionArray }) => {
  const [transaction, setTransaction] = useState({
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transactionType: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(transaction),
    };
    fetch("http://localhost:3333/transactions", options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message) alert("All inputs must be filled");
        else {
          setTransactionArray(data.transactions);
          setTransaction({
            itemName: "",
            amount: 0,
            date: "",
            from: "",
            category: "",
            transactionType: "",
          });
          navigate("/");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Transaction Form</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="itemName">
          Item:
          <input
            onChange={handleChange}
            type="text"
            id="itemName"
            name="itemName"
            value={transaction.itemName}
          />
        </label>
        <label htmlFor="amount">
          Amount:
          <input
            onChange={handleChange}
            type="number"
            id="amount"
            name="amount"
            value={transaction.amount}
          />
        </label>
        <label htmlFor="date">
          Date:
          <input
            onChange={handleChange}
            type="date"
            id="date"
            name="date"
            value={transaction.date}
          />
        </label>
        <label htmlFor="from">
          From:
          <input
            onChange={handleChange}
            type="text"
            id="from"
            name="from"
            value={transaction.from}
          />
        </label>
        <label htmlFor="category">
          Category:
          <input
            onChange={handleChange}
            type="text"
            id="category"
            name="category"
            value={transaction.category}
          />
        </label>
        <label htmlFor="transactionType">
          Deposit
          <input
            onChange={handleChange}
            type="radio"
            id="transactionType"
            name="transactionType"
            value="Deposit"
            checked={transaction.transactionType === "Deposit"}
          />
        </label>
        <label htmlFor="transactionType">
          Withdrawal
          <input
            onChange={handleChange}
            type="radio"
            id="transactionType"
            name="transactionType"
            value="Withdrawal"
            checked={transaction.transactionType === "Withdrawal"}
          />
        </label>
        <button>Submit</button>
      </form>
      <Link to={"/"}>
        <button>Cancel</button>
      </Link>
    </div>
  );
};

export default TransactionForm;
