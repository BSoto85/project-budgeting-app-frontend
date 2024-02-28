import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const TransactionShow = () => {
  const { id } = useParams();
  const [transactionDetail, setTransactionDetail] = useState();

  // const { itemName, amount, date, from, category, transactionType } =
  //   transactionDetail;

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
      <p>Amount: ${transactionDetail.amount}</p>
      <p>Date: {new Date(transactionDetail.date).toDateString()}</p>
      <p>From: {transactionDetail.from}</p>
      <p>Category: {transactionDetail.category}</p>
      <p>Transaction Type: {transactionDetail.transactionType}</p>
      <Link to={"/"}>
        <button>Home</button>
      </Link>
    </div>
  );
};

export default TransactionShow;
