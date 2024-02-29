import React from "react";
import { total } from "../helper";

const AccountTotal = ({ transactionArray }) => {
  return (
    <div>
      <h3>Total: ${total(transactionArray)}</h3>
    </div>
  );
};

export default AccountTotal;
