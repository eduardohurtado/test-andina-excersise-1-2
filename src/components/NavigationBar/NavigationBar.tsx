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
            <Link to="/TransportCard" replace>
              TransportCard
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
