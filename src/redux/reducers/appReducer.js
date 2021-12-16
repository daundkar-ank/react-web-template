const initialState = 0;
const APIState = {
  Api: [],
};

export const ApiReducer = (state = APIState, { type, payload }) => {
  switch (type) {
    case "FetchAPI":
      return { ...state, Api: payload };

    default:
      return state;
  }
};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 2;

    case "DECREMENT":
      return state - 2;

    default:
      return state;
  }
};

export default AppReducer;
