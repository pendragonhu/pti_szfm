import React from "react";
import "./Shipping.css";

function Shipping() {
  return (
    <div className="shipping">
      <div className="wrapping">
        <div className="box-holder">
          <img
            className="shipping__logo truck-logo"
            src="../images/Rectangle.svg"
          ></img>
          <span className="shipping__text">
          Gyors szállítás <span>Megrendelését gyorsan megkapja</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo " src="../images/Rectangle (1).svg" />
          <span className="shipping__text">
          Ingyenes szállítás 500 pénz feletti megrendelések esetén{" "}
            <span>A szállítás csak 49 pénz</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo" src="../images/Rectangle (2).svg" />
          <span className="shipping__text">
          Az ügyfélklub <span>A legjobb barátoknak</span>
          </span>
        </div>

        <div className="box-holder">
          <img className="shipping__logo" src="../images/Rectangle (3).svg" />
          <span className="shipping__text">
          Szakszerű szolgáltatás<span>Mindig állunk rendelkezésére</span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Shipping;
