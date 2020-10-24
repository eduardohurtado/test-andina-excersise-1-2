import React from "react";
import ReactDOM from "react-dom";

//Test target
import Checkout from "../../components/TransportPage/Checkout/Checkout";

//Global Redux state
import reducer from "../../store/store";
import { Provider } from "react-redux";
import { createStore } from "redux";
const store = createStore(reducer);

//Unit test ----->

//Integration test ----->
test("Checkout render", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <Checkout />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
