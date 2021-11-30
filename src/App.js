import CardHolder from "../src/components/typography/CardHolder";
import React, { useState } from "react";
import Navbar from "../src/components/typography/Navbar";
import Signup from "../src/components/typography/Signup";

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
      <Navbar title="Home" subtitle="Dashboard" mode={mode} toggleMode={toggleMode} />
      <CardHolder />
      <Signup />
    </>
  );
}

export default App;
