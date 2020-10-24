import React from "react";

// Global state REDUX
import { connect } from "react-redux";
import { Dispatch } from "redux";

// Style
import "./checkout.scss";

interface IProps {
  redux: IRedux;
  payTripRedux: () => void;
  withdrawMoneyRedux: () => void;
}

interface IRedux {
  balance?: number;
  tripCost?: number;
}

const Checkout: React.FC<IProps> = (props) => {
  const payTravel = () => {
    if (props.redux.tripCost === 0) {
      alert("Please, select a valid trip.");
    } else {
      if (props.redux.tripCost! <= props.redux.balance!) {
        props.payTripRedux();
        alert("Trip payed, welcome to your destination!");
      } else {
        alert("You can't pay the trip, charge money first.");
      }
    }
  };

  const withdrawMoney = () => {
    if (props.redux.balance === 0) {
      alert("You don't have money in your balance.");
    } else {
      if (window.confirm("Do you really want to withdraw your money?")) {
        alert(`You have recieved $${props.redux.balance}.`);
        props.withdrawMoneyRedux();
      }
    }
  };

  return (
    <div className="checkoutMain">
      <div>
        <button className="buttonGo" onClick={payTravel}>
          Go travel!
        </button>
        <button className="buttonWithdraw" onClick={withdrawMoney}>
          Withdrawal
        </button>
      </div>
      <div className="totalTrip">
        <p>
          <b>{`Current balance: $${props.redux.balance}`}</b>
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state: IRedux) => {
  return {
    redux: state,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    payTripRedux: () => dispatch({ type: "PAY_TRIP" }),
    withdrawMoneyRedux: () => dispatch({ type: "WITHDRAW_MONEY" }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
