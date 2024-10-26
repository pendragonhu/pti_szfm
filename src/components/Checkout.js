import React, { useEffect, useState } from "react";
import "./checkout.css";
import "./Button.css";
import Basketlogo from "../logopack/basket-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  const [shipping, setShipping] = useState("");
  const [total, setTotal] = useState();

  useEffect(() => {
    localStorage.setItem("my-product-list", JSON.stringify([...basket]));
  }, [basket]);

  const subtotal = basket.reduce((total, item) => item.price + total, 0);

  useEffect(() => {
    if (subtotal < 500 && subtotal > 1) {
      setShipping("40 pénz");
      setTotal(subtotal + 49);
    } else if (subtotal > 500) {
      setShipping("Ingyenes");
      setTotal(subtotal + 0);
    } else {
      setShipping("Ingyenes");
      setTotal(subtotal + 0);
    }
  }, [subtotal]);

  return (
    <div className="checkout">
      <div className="checkout__container">
        <div className="checkout__products">
          <div className="checkout__logo">
            <img className="basket-logo" src={Basketlogo}></img>
            <h3 className="customer-basket">Bevásárlókosár</h3>
          </div>

          <div className="product__container">
            <div className="product__price">
              <h5>Termék</h5>
              <h5 className="price-tag">Ár</h5>
              <h5 style={{ color: "white" }}></h5>
            </div>
          </div>

          <div className="basket__product">
            {basket?.map((item) => (
              <CheckoutProduct
                image={item.image}
                prodName={item.prodName}
                price={item.price}
              />
            ))}
          </div>
        </div>

        <CurrencyFormat
          renderText={(value) => (
            <div className="checkout__summary">
              <div>
                <h4 className="summary-title">Rendelési összefoglaló</h4>
                <p className="subtotal">
                Részösszeg ( {basket?.length} cikkek )
                  <span className="subtotal-price">{value} pénz</span>
                </p>
                <p className="subtotal shipping-price">
                Szállítás <span className="subtotal-price">{shipping}</span>
                </p>
              </div>

              <div className="total-price">
                <p>
                Teljes ár: <span className="price-number">{total} pénz</span>
                </p>

                <button className="buy-button button">
                Tovább a pénztárhoz
                </button>

                <div className="bottom__summary">
                  <p className="summary__bottom">
                    <FontAwesomeIcon className="check__icon" icon={faCheck} />{" "}
                    <span>Ingyenes szállítás 500 pénz felett</span>
                  </p>
                  <p>
                    <FontAwesomeIcon className="check__icon" icon={faCheck} />{" "}
                    <span>Express </span>
                  </p>
                </div>
              </div>
            </div>
          )}
          decimalScale={2}
          displayType="text"
          value={subtotal}
          thousandSeparator={false}
        />
      </div>
    </div>
  );
};

export default Checkout;
