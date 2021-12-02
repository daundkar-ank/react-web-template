import CardHolder from "../src/components/typography/CardHolder";
import React, { useState } from "react";
import Navbar from "../src/components/typography/Navbar";
import { createContext } from "react";

const themes = createContext();
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
      <themes.Provider value={toggleMode}>
        <Navbar title="Home" subtitle="Dashboard" mode={mode} />
        <CardHolder />
      </themes.Provider>
    </>
  );
}

// toggleMode={toggleMode}

export default App;
export { themes };
