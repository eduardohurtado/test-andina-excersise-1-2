import React from "react";

// Image
import AndinaLogo from "../../img/andina.png";

// Style
import "./aboutPage.scss";

const AboutPage: React.FC = () => {
  return (
    <div className="aboutPageMain">
      <p className="titleAndina">
        Web application developed as a part of an Andina LTDA test, please
        enjoy.
      </p>
      <div className="centerImageA">
        <img src={AndinaLogo} alt="Andina Logo" className="logoAndina"></img>
      </div>
    </div>
  );
};

export default AboutPage;
