interface IAppStateMongo {
  balance: number;
  tripCost: number;
}

interface IAction {
  type: string;
}

const initialStateMongo = {
  balance: 0,
  tripCost: 0,
};

const reducer = (
  state = initialStateMongo,
  action: IAction
): IAppStateMongo => {
  if (action.type === "ADD_ARTICLE") {
    return {
      ...state,
    };
  }

  return state;
};

export default reducer;
