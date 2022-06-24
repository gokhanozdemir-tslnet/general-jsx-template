import { Fragment } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import "./Navigation.styles.scss";

const Navigation = () => {
  const locationPath = useLocation().pathname;
  return (
    <Fragment>
      <div className="topnav">
        <Link
          className={` ${
            locationPath === "/" || locationPath === "/home" ? "active" : ""
          }`}
          to="/"
        >
          Home
        </Link>
        <Link
          className={` ${locationPath === "/function" ? "active" : ""}`}
          to="/function"
        >
          Function
        </Link>
        <Link
          className={` ${locationPath === "/class" ? "active" : ""}`}
          to="/class"
        >
          Class
        </Link>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
