import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./TransactionForm.css";

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
      <form className="form-div" onSubmit={handleSubmit}>
        <section>
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
        </section>
        <section>
          <label htmlFor="amount">
            Amount:
            <input
              onChange={handleChange}
              type="number"
              id="amount"
              name="amount"
              value={transaction.amount}
              min="0"
            />
          </label>
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
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
        </section>
        <section>
          <label className="type" htmlFor="transactionType">
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
          <label className="type" htmlFor="transactionType">
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
        </section>
        <section className="buttons">
          <button>Submit</button>
          <Link to={"/"}>
            <button>Cancel</button>
          </Link>
        </section>
      </form>
    </div>
  );
};

export default TransactionForm;
