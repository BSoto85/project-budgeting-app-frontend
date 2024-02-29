import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

const TransactionEdit = ({ setTransactionsArray }) => {
  const [transaction, setTransaction] = useState({
    itemName: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transactionType: "",
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setTransaction({ ...transaction, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(transaction),
      };
      fetch(`http://localhost:3333/transactions/${id}`, options)
        .then((res) => res.json())
        .then((data) => setTransactionsArray(data.transactions))
        .then(() => navigate("/"));
    }
  };

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3333/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setTransaction(data.transaction));
    }
  }, [id]);

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

export default TransactionEdit;
