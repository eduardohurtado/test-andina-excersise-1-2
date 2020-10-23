import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Components
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/ArraysPage/ArraysPage";

// Font selector
import "./fonts/fontSelector.scss";

// Style
import "./sass/app.scss";
import "./sass/normalize.scss";

const App: React.FC = () => {
  return (
    <Router>
      <div className="gridContainer">
        <NavigationBar />
        <Route
          exact
          path="/"
          render={() => {
            return <HomePage />;
          }}
        ></Route>
      </div>
    </Router>
  );
};

export default App;
