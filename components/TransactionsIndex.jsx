const TransactionsIndex = ({ transactionArray }) => {
  return (
    <div className="container">
      <h2>Transactions</h2>
      {transactionArray &&
        transactionArray.map(({ id, itemName, amount, date }) => (
          <div className="card" key={id}>
            <p>Item: {itemName}</p>
            <p>Amount: ${amount}</p>
            <p>Date: {new Date(date).toDateString()}</p>
          </div>
        ))}
    </div>
  );
};

export default TransactionsIndex;
