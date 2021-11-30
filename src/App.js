import CardHolder from "../src/components/typography/CardHolder";
import React, { useState } from "react";
import Navbar from "../src/components/typography/Navbar";
import Signup from "../src/components/typography/Signup";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
          <Route path="/">
            <Signup />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
