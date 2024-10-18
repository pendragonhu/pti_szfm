import React from "react";
import "./About.css";
import Textbox from "./Textbox"

const About = () => {

  return (
    <>
      <div className="home">
        <div className="home__container">
          <Textbox heading="Bemutatkozás"
            text="Mi azt valljuk, hogy a kutya az ember legjobb barátja, és minden kedvencünknek csak a
             legjobbat kínáljuk! Kínálatunkban olyan pórázok és nyakörvek szerepelnek, amelyek minden kutyafajta
              és személyiség igényeit kielégítik. Ha valóban el szeretné kényeztetni kedvencét, javasoljuk, hogy 
              látogasson el hozzánk a kutyaspába. Itt trimmelést, szőrzetápolást, körömápolást, fürdetést és masszázst
               is kínálunk, hogy kedvence teljes kényeztetésben részesülhessen." />


          <Textbox heading="Állás"
            text="Jelenleg nincs szükségünk további munkatársakra, azonban terveink között szerepel a fürdőüzem bővítése.
             Ha szereted az állatokat, különösen a kutyákat, és álmodozol arról, hogy segíthetsz a kutyatulajdonosoknak négylábú
              társaiknak minőségi életet biztosítani, kérjük, küld el nekünk önéletrajzodat és egy levéllel együtt,
               amelyben részletesen leírod, hogyan tervezed emlékezetessé tenni ügyfeleink tapasztalatát." />

          <Textbox heading="Hírek"
            text="Friss kutyanyakörvcsaládunk mostantól elérhető! Bízunk benne, hogy nálunk megtalálja azt
             a tökéletes nyakörvet, ami megfelel Önnek és kedvencének egyaránt!" />

        </div>
      </div>
    </>
  );
};

export default About;
