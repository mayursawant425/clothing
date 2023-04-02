import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img classname="logo" style={{ width: "10vh" }} src={logo} alt="logo" />
        </Link >
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;