import { Link } from "react-router-dom";
import { formattedDate } from "../helper";

const TransactionsIndex = ({ transactionArray }) => {
  return (
    <div className="container">
      <h2>Transactions</h2>
      {transactionArray &&
        transactionArray.map(({ id, itemName, amount, date }) => (
          <div className="card" key={id}>
            <p>Item: {itemName}</p>
            <p>Amount: ${amount > 0 ? amount : 0}</p>
            <p>Date: {formattedDate(date)}</p>
            <Link to={`/${id}`}>
              <button>Details</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TransactionsIndex;
