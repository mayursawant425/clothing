import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { signOutUser } from "../../utils/firebase.util";
import { UserContext } from "../../context/user.context";
import logo from "../../assets/logo.png";
import "./navigation.style.scss";

const Navigation = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const handleSignOut = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img className="logo" style={{ width: "10vh" }} src={logo} alt="logo" />
        </Link >
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">SHOP</Link>
          {currentUser
            ? <Link className="nav-link" onClick={handleSignOut}>SIGN OUT</Link>
            : <>
              <Link className="nav-link" to="/sign-in">SIGN IN</Link>
              <Link className="nav-link" to="/sign-up">SIGN UP</Link>
            </>
          }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
}

export default Navigation;