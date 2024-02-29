import React from "react";
import AccountTotal from "../AccountTotal";

const NavBar = ({ transactionArray }) => {
  return (
    <div>
      <AccountTotal transactionArray={transactionArray} />
    </div>
  );
};

export default NavBar;
