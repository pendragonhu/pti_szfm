import React from "react";
import "./About.css";
import Textbox from "./Textbox";

const HowTo = () => {
  return (
    <>
      <div className="home">
        <div className="home__container">
          <Textbox
            heading="Fizetés"
            text="A fizetés bankkártyával vagy utalással történhet."
          />

          <Textbox
            heading="Kiszállítások"
            text="A Postával szállítunk."
          />

          <Textbox
            heading="Lemondás/visszatérítés"
            text="Fogyasztóként általában 14 napos elállási joggal rendelkezik, de mi 30 napos elállási jogot kínálunk Önnek.
             Elállási jogot kínálunk Önnek az áru átvételétől számítva. Ön jogosult ingyenesen kibontani a csomagot és 
             ellenőrizni, hogy a termék működőképes állapotban van-e. Azonban Ön, mint vásárló, felelős az áru értékvesztéséért,
              ha az a termék tulajdonságainak és működésének megállapításához szükséges mértéket meghaladó kezelés miatt
               következik be, beleértve az eredeti csomagolással együtt. Ha élni kíván az elállási jogával, küldje vissza a
                terméket az elállás regisztrálásakor kapott visszaküldési címkével együtt, amelyet az elállt vásárlás
                 regisztrálásakor kapott."
          />

          <Textbox
            heading="Vásárlási feltételek"
            text="A Dog vállalja a termékek online értékesítését magánszemélyeknek és vállalatoknak Magyarországon.
             A vásárláshoz a megfelelő életkor megléte (legalább 18 év), valamint érvényes magyar személyi igazolvány szükséges.
              Kiskorú vásárlók esetén a gyám beleegyezése szükséges. Kártyás vásárlás esetén a kiskorú vásárlásáért a 
              meghatalmazott személy felelős."
          />
        </div>
      </div>
    </>
  );
};

export default HowTo;
