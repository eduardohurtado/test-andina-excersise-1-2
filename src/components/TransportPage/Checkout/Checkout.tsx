import React from "react";

// Global state REDUX
import { connect } from "react-redux";
import { Dispatch } from "redux";

// Style
import "./checkout.scss";

interface IProps {
  balance: number;
  tripCost: number;
}

const Checkout: React.FC<IProps> = () => {
  return (
    <div className="checkoutMain">
      <div>
        <button className="buttonGo">Go travel!</button>
        <button className="buttonWithdraw">Withdrawal</button>
      </div>
      <div className="totalTrip">
        <p>
          <b>Total after trip: $0</b>
        </p>
      </div>
    </div>
  );
};

// export default Checkout;
const mapStateToProps = (state: IProps) => {
  return {
    state: state,
  };
};

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addArticleRedux: (payload: string) =>
      dispatch({ type: "ADD_ARTICLE", payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
