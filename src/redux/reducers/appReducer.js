// import Actions from "../actions/appActions";

const initialState = 0;

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

// let initialState = {
//   user: {},
//   authToken: null,
//   isLogged: false,
//   introCompleted: false,
//   defaultActiveTab: 0,
//   isFreshUser: false,
// };
// const AppReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case Actions.LOGIN:
//       return {
//         ...state,
//         user: action.data,
//       };
//     case Actions.LOGOUT:
//       return {
//         ...state,
//         isLogged: false,
//         authToken: null,
//       };
//     case Actions.SET_TOKEN:
//       return {
//         ...state,
//         authToken: action.data,
//         isLogged: true,
//       };
//     default:
//       return state;
//   }
// };

export default AppReducer;
