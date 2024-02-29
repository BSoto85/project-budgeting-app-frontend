import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { formattedDate } from "../helper";

const TransactionShow = ({ setTransactionArray }) => {
  const { id } = useParams();
  const [transactionDetail, setTransactionDetail] = useState();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    const options = {
      method: "DELETE",
    };
    fetch(`http://localhost:3333/transactions/${id}`, options)
      .then((res) => res.json())
      .then((data) => setTransactionArray(data.transactions));
    navigate("/");
  };

  useEffect(() => {
    fetch(`http://localhost:3333/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTransactionDetail(data.transaction));
  }, [id]);

  if (!transactionDetail) return null;

  return (
    <div>
      <h3>Transaction</h3>
      <p>Item: {transactionDetail.itemName}</p>
      <p>
        Amount: ${transactionDetail.amount > 0 ? transactionDetail.amount : 0}
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
    </div>
  );
};

export default TransactionShow;
