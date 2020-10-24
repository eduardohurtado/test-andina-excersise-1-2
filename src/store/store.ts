interface IAppStateMongo {
  balance: number;
  tripCost: number;
}

interface IAction {
  type: string;
  payload: number;
}

const initialStateMongo = {
  balance: 0,
  tripCost: 0,
};

const reducer = (
  state = initialStateMongo,
  action: IAction
): IAppStateMongo => {
  if (action.type === "CHARGE_BALANCE") {
    return {
      ...state,
      balance: state.balance + action.payload,
    };
  } else if (action.type === "UPDATE_TRIPCOST") {
    return {
      ...state,
      tripCost: action.payload,
    };
  } else if (action.type === "PAY_TRIP") {
    return {
      ...state,
      balance: state.balance - state.tripCost,
    };
  } else if (action.type === "WITHDRAW_MONEY") {
    return {
      ...state,
      balance: 0,
    };
  }
  return state;
};

export default reducer;
