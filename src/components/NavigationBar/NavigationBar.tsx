import React from "react";
import { Link } from "react-router-dom";

// Style
import "./navigationBar.scss";

const NavBar: React.FC = () => {
  return (
    <>
      <div className="navBar">
        <ul>
          <li>
            <Link to="/" replace>
              ArraysGenerator
            </Link>
          </li>
          <li>
            <Link to="/Metrics" replace>
              SecurityCard
            </Link>
          </li>
          <li>
            <Link to="/About" replace>
              About
            </Link>
          </li>
          <li className="item-r">
            <Link to="/Contact" replace>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
