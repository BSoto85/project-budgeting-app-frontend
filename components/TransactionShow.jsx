import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formattedDate } from "../helper";
import "./TransactionsIndex.css";
const URL = import.meta.env.VITE_BASE_API_URL;

const TransactionShow = ({ setTransactionArray }) => {
  const { id } = useParams();
  const [transactionDetail, setTransactionDetail] = useState();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const shouldDelete = confirm(
      `Are you sure you want to delete transaction #${+id}`
    );
    if (shouldDelete) {
      const options = {
        method: "DELETE",
      };
      fetch(`${URL}/${id}`, options)
        .then((res) => res.json())
        .then((data) => setTransactionArray(data.transactions));
      navigate("/");
    }
  };

  useEffect(() => {
    fetch(`${URL}/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setTransactionDetail(data.transaction);
      });
  }, [id]);

  if (!transactionDetail) return null;

  return (
    <div className="show-container">
      <h2>Transaction</h2>
      <section className="card-details">
        <p>Item: {transactionDetail.itemName}</p>
        <p>
          Amount:{" "}
          <span
            className={
              transactionDetail.transactionType === "Withdrawal"
                ? "red"
                : "green"
            }
            style={{ backgroundColor: "white" }}
          >
            ${transactionDetail.amount > 0 ? transactionDetail.amount : 0}
          </span>
        </p>
        <p>Date: {formattedDate(transactionDetail.date)}</p>
        <p>From: {transactionDetail.from}</p>
        <p>Category: {transactionDetail.category}</p>
        <p>Transaction Type: {transactionDetail.transactionType}</p>
        <Link to={`/edit/${id}`}>
          <button>Edit</button>
        </Link>
        <button onClick={() => handleDelete(id)}>Delete</button>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </section>
    </div>
  );
};

export default TransactionShow;
