import React, { useState, useEffect } from "react";

// Components
import BusRoute from "./BusRoute/BusRoute";
import Checkout from "./Checkout/Checkout";

// Image
import cardImage from "../../img/card.png";

// Style
import "./transportPage.scss";

const SecurityPage: React.FC = () => {
  const [balanceCard, updateBalance] = useState(0);
  const [dateString, updateDateString] = useState(Date());
  const [date, updateDate] = useState(new Date());

  useEffect(() => {
    setCurrentDate();
  }, []);

  const addBalance = (e: number) => {
    updateBalance(balanceCard + e);
  };

  const setCurrentDate = () => {
    const currentDate = new Date();
    updateDate(currentDate);
  };

  const add20K = () => {
    addBalance(20000);
    setCurrentDate();
    updateDateString(Date());
  };
  const add30K = () => {
    addBalance(30000);
    setCurrentDate();
    updateDateString(Date());
  };
  const add40K = () => {
    addBalance(40000);
    setCurrentDate();
    updateDateString(Date());
  };

  return (
    <div className="securityPage">
      <span className="secTitle">Excersise number (2)</span>
      <span className="subtitle">¡Welcome to Transportation!</span>

      <img src={cardImage} alt="CardImage" className="imageCard"></img>

      <div className="balanceShow">
        <span>BALANCE: ${balanceCard}</span>
        <br />
        <span>DATE: {dateString}</span>
      </div>

      <span className="subtitleCenter">CHARGE YOUR CARD</span>

      <div className="alignRow">
        <button className="buttonCharge" onClick={add20K}>
          20K
        </button>
        <button className="buttonCharge" onClick={add30K}>
          30K
        </button>
        <button className="buttonCharge" onClick={add40K}>
          40K
        </button>
      </div>

      <span className="subtitleNumeric">
        Your balance is valid until: {date.getFullYear()} /{" "}
        {date.getMonth() + 3} / {date.getDate()}
      </span>
      <BusRoute />
      <Checkout />
    </div>
  );
};

export default SecurityPage;
