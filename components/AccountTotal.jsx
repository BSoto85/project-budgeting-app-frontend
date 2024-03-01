import React from "react";
import { total } from "../helper";

const AccountTotal = ({ transactionArray }) => {
  return (
    <div className="total-container">
      <section>
        <h3>
          Total:{" "}
          <span
            className={
              total(transactionArray) < 0
                ? "red"
                : total(transactionArray) <= 100
                ? "yellow"
                : "green"
            }
            style={{ backgroundColor: "dodgerblue" }}
          >
            ${total(transactionArray)}
          </span>
        </h3>
      </section>
    </div>
  );
};

export default AccountTotal;
