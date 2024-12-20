import React from "react";
import Products from "./Products";
import Intro from "./Intro";
import "./Home.css";
import Shipping from "./Shipping";

const Homepage = () => {
  return (
    <div className="home">
      <Intro />
      <Shipping />

      <div className="home__container">
        <div className="home__title">
          <h1 className="category-name">Pántok</h1>
          <Products catId={1}></Products>
        </div>

        <div className="home__title">
          <h1 className="category-name">Nyakörvek</h1>
          <Products catId={2}></Products>
        </div>

        <div className="home__title">
          <h1 className="category-name">Névtáblák</h1>
          <Products catId={3}></Products>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
