import CardHolder from "../src/components/typography/CardHolder";
import React, { useState } from "react";
import Navbar from "../src/components/typography/Navbar";
import { createContext } from "react";

const Themes = createContext();
const DefaultTheme = createContext();
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
      <Themes.Provider value={toggleMode}>
        <DefaultTheme.Provider value={mode}>
          <Navbar title="Home" subtitle="Dashboard" />
          <CardHolder />
        </DefaultTheme.Provider>
      </Themes.Provider>
    </>
  );
}

// toggleMode={toggleMode}

export default App;
export { Themes, DefaultTheme };
