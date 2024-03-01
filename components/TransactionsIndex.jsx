import { Link } from "react-router-dom";
import { formattedDate } from "../helper";
import "./TransactionsIndex.css";

const TransactionsIndex = ({ transactionArray }) => {
  return (
    <div className="index-container">
      <h2>Transactions</h2>
      {transactionArray &&
        transactionArray.map(
          ({ id, itemName, amount, date, transactionType }) => (
            <div className="card" key={id}>
              <p>Item: {itemName}</p>
              <p>
                Amount:{" "}
                <span
                  className={transactionType === "Withdrawal" ? "red" : "green"}
                  style={{ backgroundColor: "white" }}
                >
                  ${amount > 0 ? amount : 0}
                </span>
              </p>
              <p>Date: {formattedDate(date)}</p>
              <Link to={`/${id}`}>
                <button className="detail-button">Details</button>
              </Link>
            </div>
          )
        )}
    </div>
  );
};

export default TransactionsIndex;
