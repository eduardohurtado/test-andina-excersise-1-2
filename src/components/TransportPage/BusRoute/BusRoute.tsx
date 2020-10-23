import React, { ChangeEvent, useState, useEffect } from "react";

// Style
import "./busRoute.scss";

const BusRoute: React.FC = () => {
  const [tripCost, updateTripCost] = useState(0);
  const [tripFrom, updateTripFrom] = useState("");
  const [tripTo, updateTripTo] = useState("");

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
        <span className="chargedText">You will be charged: ${tripCost}</span>
        <div className="discountText">
          <p>There is not discount today</p>
        </div>
      </div>
    </div>
  );
};

export default BusRoute;
