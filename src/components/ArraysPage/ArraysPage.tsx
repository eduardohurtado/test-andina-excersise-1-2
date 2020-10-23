import React, { useEffect } from "react";

//Style SCSS
import "./arraysPage.scss";

const HomePage: React.FC = () => {
  const vectorNumber: number[] = [];
  let vectorNumberSort: number[] = [];

  const aleatory = () => {
    const myNumber = Math.floor(Math.random() * 100000 + 1);
    return myNumber;
  };

  const newArray = () => {
    for (let i = 0; i < 100; i++) {
      const numberAleatory = aleatory();
      vectorNumber[i] = numberAleatory;
    }
    vectorNumberSort = vectorNumber.sort((a, b) => b - a);

    if (vectorNumber.length === 100) {
      const arrayNoSort = document.querySelector(".arrayContainer") as Element;
      const arraySort = document.querySelector(
        ".arrayContainerSort"
      ) as Element;
      arrayNoSort.innerHTML = JSON.stringify(vectorNumber, null, 4);
      arraySort.innerHTML = JSON.stringify(vectorNumberSort, null, 4);
    }
  };

  useEffect(() => {
    newArray();
  }, []);

  return (
    <div className="homePage">
      <span className="subtitle">Excersise number 1:</span>
      <button className="butttonArray" onClick={newArray}>
        Generate New Array
      </button>
      <span className="subtitleCenter">
        Array generated (100 Values / 1 - 100000)
      </span>
      <div className="arrayDiv">
        <span className="arrayContainer"></span>
      </div>
      <span className="subtitleCenter">Array sorted (High to Low)</span>
      <div className="arrayDivSort">
        <span className="arrayContainerSort"></span>
      </div>
    </div>
  );
};

export default HomePage;
