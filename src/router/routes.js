import Counter from "../pages/Counter";
import CardHolder from "../pages/gallery/CardHolder";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

export const menuItem = [
  { path: "/gal", component: CardHolder },
  { path: "/login", component: Login },
  { path: "/", component: SignUp },
  { path: "/counter", component: Counter },

  // { component: NotFound },
];
