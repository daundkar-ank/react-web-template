import CardHolder from "../src/components/typography/CardHolder";
//import React from "react";
import React, { useState } from "react";
import Navbar from "../src/components/typography/Navbar";

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

  // const getImg = async () => {
  //   const responce = await fetch("https://picsum.photos/v2/list?page=2&limit=100");
  //   const data = responce.json();
  //   console.log(data);
  // };

  // useEffect(() => {
  //   getImg();
  // });

  return (
    <>
      <Navbar title="Home" subtitle="Dashboard" mode={mode} toggleMode={toggleMode} />
      <CardHolder />
    </>
  );
}

export default App;
