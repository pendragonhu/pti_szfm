import React from "react";
import { Link, NavLink } from "react-router-dom";
import About from "./About";
import "./Footer.css";
import Media from "../logopack/media.png";


function Footer() {
  return (
    <div className="wrapper">
      <div className="footer__container">
        <div className="info__box">
          <p className="info__head"><Link to="/about">Rólunk</Link></p>
          <ul>
            <li>A Dog-ról</li>
            <li>Dolgozzon velünk</li>
            <li>Hírek</li>
          </ul>
        </div>
        <div className="info__box">
          <p className="info__head cus-service"><Link to="/customer">Ügyfélszolgálat</Link></p>
          <ul>
            <li>Kapcsolatfelvétel</li>
            <li>Kérdések és válaszok</li>
            <li>Üzleteink</li>
          </ul>
        </div>
        <div className="info__box">
          <p className="info__head"><Link to="/howto">Hogyan vásároljon</Link></p>
          <ul>
            <li>Fizetés</li>
            <li>Szállítás</li>
            <li>Lemondás/visszatérítés</li>
            <li>A vásárlás feltételei</li>
          </ul>
        </div>
        <div className="info__box">
          <p className="info__head"><Link to="/club">A vásárlói klub</Link></p>
          <ul>
            <li>A klubbunk-ról</li>
            <li>Bejelentkezés/Taggá válás</li>
            <li>Kérdések/válaszok Ügyfélklub</li>
          </ul>
        </div>
        <div className="info__box shadow-box">
          <p className="info__head kontakt-head">Elérhetőség</p>
          <ul>
            <li className="email">Kutyabolt@gmail.com</li>
            <li>Telefon: +36 xx xxx xxxx</li>
            <li>Hétköznapokon 10.00 - 16.00</li>
          </ul>
        </div>
      </div>
      <div className="payment__box">
        <img className="img img-png" src={Media}></img>
      </div>
    </div>
  );
}

export default Footer;
