import CardHolder from "./pages/gallery/CardHolder";
import React, { useState } from "react";
import Navbar from "../src/components/navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "../src/pages/signup/SignUp";
import Login from "../src/pages/login/Login";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Home" subtitle="Dashboard" mode={mode} toggleMode={toggleMode} />
        <Switch>
          <Route path="/">
            <CardHolder />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
