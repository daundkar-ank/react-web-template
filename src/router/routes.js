import CardHolder from "../pages/gallery/CardHolder";
import Login from "../pages/login/Login";
import SignUp from "../pages/signup/SignUp";

export const menuItem = [
  { path: "/login", component: Login },
  { path: "/signup", component: SignUp },
  { path: "/gallery", component: CardHolder },

  // { component: NotFound },
];
