import { useState } from "react";
import "./App.css";
import Navbar from "./component/navbar";
import Body from "./component/landing_body";

function App() {
  return (
    <>
      <div className="landing_Page">
        <Navbar />
        <Body />
        
      </div>
    </>
  );
}

export default App;
