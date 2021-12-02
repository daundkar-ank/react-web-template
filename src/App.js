import React from "react";
// import Navbar from "../src/components/navbar/Navbar";
// import { useState } from "react";
// import CardHolder from "./pages/gallery/CardHolder";
// import SignUp from "./pages/signup/SignUp";
import Router from "./router/index";
function App() {
  // const [mode, setMode] = useState("light");

  // const toggleMode = () => {
  //   if (mode === "light") {
  //     setMode("dark");
  //     document.body.style.backgroundColor = "black";
  //   } else {
  //     setMode("light");
  //     document.body.style.backgroundColor = "white";
  //   }
  // };

  return (
    <>
      {/* <Navbar title="Home" subtitle="Dashboard" mode={mode} toggleMode={toggleMode} />
      <CardHolder />
      <SignUp /> */}
      <Router />
    </>
  );
}

export default App;
