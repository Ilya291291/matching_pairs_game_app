import React from "react";
import './index.css';
import Cards from "components/Cards";
import Timer from "components/Timer";

const Main = () => {
  return (
    <main className="main_wrapper">
        <Cards />
        <Timer />
    </main>
  )
}

export default Main