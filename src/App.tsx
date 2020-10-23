import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";

// Components
import NavigationBar from "./components/NavigationBar/NavigationBar";
import HomePage from "./components/ArraysPage/ArraysPage";
import TransportPage from "./components/TransportPage/TransportPage";

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
        <Route
          exact
          path="/TransportCard"
          render={() => {
            return <TransportPage />;
          }}
        ></Route>
      </div>
    </Router>
  );
};

export default App;
