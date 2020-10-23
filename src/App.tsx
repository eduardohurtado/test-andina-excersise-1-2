import React from "react";

// Components
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/HomePage/HomePage";

// Font selector
import "./fonts/fontSelector.scss";

// Style
import "./sass/app.scss";
import "./sass/normalize.scss";

const App: React.FC = () => {
  return (
    <div className="gridContainer">
      <NavigationBar />
      <HomePage />
    </div>
  );
};

export default App;
