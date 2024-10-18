import React from "react";
import "./About.css";
import Textbox from "./Textbox";

const CustomerService = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <Textbox
            heading="Kapcsolat"
            text="
            Kutyabolt@gmail.com
            Telefon: +36 xx xxx xxxx
            Nyitvatartás: Hétköznap 10.00 - 16.00"
          />

          <Textbox
            heading="Kérdések és válaszok"
            text="Minden ügyfélkérdést teljes titoktartással kezelünk."
          />

          <Textbox
            heading="Üzleteink"
            text="Jelenleg csak egy online üzletünk van."
          />
        </div>
      </div>
    </>
  );
};

export default CustomerService;
