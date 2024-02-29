import { Link } from "react-router-dom";
import AccountTotal from "../AccountTotal";

const NavBar = ({ transactionArray }) => {
  return (
    <div>
      <h1>Bugetr</h1>
      <AccountTotal transactionArray={transactionArray} />
      <Link to={"/new"}>
        <button>Add Transaction</button>
      </Link>
    </div>
  );
};

export default NavBar;
