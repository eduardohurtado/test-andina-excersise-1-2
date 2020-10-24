import React, { ChangeEvent, useState, useEffect } from "react";

// Global state REDUX
import { connect } from "react-redux";
import { Dispatch } from "redux";

// Style
import "./busRoute.scss";

interface IProps {
  redux: IRedux;
  updateTripCostRedux: (payload: number) => void;
}

interface IRedux {
  balance?: number;
  tripCost?: number;
}

const BusRoute: React.FC<IProps> = (props) => {
  const [tripCost, updateTripCost] = useState(0);
  const [tripFrom, updateTripFrom] = useState("");
  const [tripTo, updateTripTo] = useState("");

  useEffect(() => {
    props.updateTripCostRedux(tripCost);
  }, [tripCost]);

  useEffect(() => {
    if (tripFrom === "santaMonica" && tripTo !== "santaMonica") {
      if (tripTo === "plazaToros") updateTripCost(10000);
      if (tripTo === "universidades") updateTripCost(20000);
      if (tripTo === "none") updateTripCost(0);
    } else if (tripFrom === "plazaToros" && tripTo !== "plazaToros") {
      if (tripTo === "santaMonica") updateTripCost(10000);
      if (tripTo === "universidades") updateTripCost(10000);
      if (tripTo === "none") updateTripCost(0);
    } else if (tripFrom === "universidades" && tripTo !== "universidades") {
      if (tripTo === "santaMonica") updateTripCost(20000);
      if (tripTo === "plazaToros") updateTripCost(10000);
      if (tripTo === "none") updateTripCost(0);
    } else {
      updateTripCost(0);
    }
  }, [tripFrom, tripTo]);

  const handleTripFrom = (e: ChangeEvent<HTMLSelectElement>) => {
    updateTripFrom(e.target.value);
  };

  const handleTripTo = (e: ChangeEvent<HTMLSelectElement>) => {
    updateTripTo(e.target.value);
  };

  return (
    <div className="busRouteContainer">
      <span className="subtitleCenter">CHOOSE YOUR ROUTE PLEASE</span>

      <div className="selectFromTo">
        <span className="subtitleRoute">From:</span>
        <select
          onChange={(e) => {
            handleTripFrom(e);
          }}
        >
          <option value="none">-</option>
          <option value="santaMonica">SANTA MONICA</option>
          <option value="plazaToros">PLAZA DE TOROS</option>
          <option value="universidades">UNIVERSIDADES</option>
        </select>
        <span className="subtitleRoute">To:</span>
        <select
          onChange={(e) => {
            handleTripTo(e);
          }}
        >
          <option value="none">-</option>
          <option value="santaMonica">SANTA MONICA</option>
          <option value="plazaToros">PLAZA DE TOROS</option>
          <option value="universidades">UNIVERSIDADES</option>
        </select>
      </div>

      <div className="futureCharge">
        <span className="chargedText">
          You will be charged: ${props.redux.tripCost}
        </span>
        <div className="discountText">
          <p>There is not discount today</p>
        </div>
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
    updateTripCostRedux: (payload: number) =>
      dispatch({ type: "UPDATE_TRIPCOST", payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusRoute);
