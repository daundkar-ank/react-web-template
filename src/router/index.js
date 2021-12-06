import React from "react";
import Navbar from "../components/navbar/Navbar";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { menuItem } from "./routes";

// const Cred = JSON.parse(localStorage.getItem("data"));

const Router = () => {
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
      <BrowserRouter>
        <Navbar title="Home" subtitle="Dashboard" mode={mode} toggleMode={toggleMode} />
        {/* <Redirect to="/login" /> */}
        <Switch>
          {menuItem.map((i) => {
            return <Route key={`Route-${i.path}`} exact path={i.path} component={i.component} />;
          })}
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default Router;
