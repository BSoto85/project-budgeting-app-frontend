import { Link } from "react-router-dom";
import AccountTotal from "../AccountTotal";
import "./NavBar.css";

const NavBar = ({ transactionArray }) => {
  return (
    <div className="container">
      <section className="navbar-section">
        <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
          <h1>Budgetr</h1>
        </Link>
      </section>
      <section className="navbar-section">
        <AccountTotal transactionArray={transactionArray} />
      </section>
      <section className="navbar-section">
        <Link to={"/new"}>
          <button>Add Transaction</button>
        </Link>
      </section>
    </div>
  );
};

export default NavBar;
