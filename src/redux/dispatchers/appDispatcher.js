import store from "../store";
import Actions from "../actions/appActions";

const AppDispatcher = {
  setUserLoggedIn: (data) => {
    store.dispatch({ type: Actions.SET_TOKEN, data: data.tokens });
    store.dispatch({ type: Actions.LOGIN, data: data.user });
  },
  setUserLoggedOut: () => {
    store.dispatch({ type: Actions.SET_USER_FUE, data: false });
    store.dispatch({ type: Actions.LOGOUT });
  },
  updateUserTokens: (data) => {
    store.dispatch({ type: Actions.SET_TOKEN, data });
  },
  updateUserInfo: (data) => {
    store.dispatch({ type: Actions.LOGIN, data });
  },
};

export default AppDispatcher;
