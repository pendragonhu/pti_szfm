import React from "react";
import "./About.css";
import Textbox from "./Textbox";

const Club = () => {
  return (
    <div className="home">
      <div className="home__container">
        <Textbox
          heading="Az Ügyfélklubunkról"
          text="Ügyfélklubunk tagjaként e-mailben megkapja hírlevelünket, ne maradjon le semmilyen ajánlatról!
           Ezenkívül minden tagunk 10% kedvezményt kap minden 500 pénz feletti vásárlásra."
        />

        <Textbox
          heading="Bejelentkezés/Taggá válás"
          text="Itt bejelentkezhet vagy taggá válhat az Ügyfélklubunkba. Regisztrált tagjaink különleges ajánlatokat
           és exkluzív tartalmakat kapnak."
        />

        <Textbox
          heading="Kérdések/válaszok Ügyfélklub"
          text="Gyakran ismételt kérdéseket és válaszokat talál itt az Ügyfélklubunkkal kapcsolatban.
           Ha további kérdései vannak, kérjük, lépjen kapcsolatba velünk."
        />
      </div>
    </div>
  );
};

export default Club;
