import "./Viewmenu.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from "../item/Item";
import CartItem from "../cartItem/CartItem";
import { IoLocationSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Viewmenu = () => {
  //   const [menuItems, setMenuItems] = useState([]);
  //   useEffect(() => {
  //     const fetchData = async () => {
  //       const res = await axios.get("");
  //       setMenuItems(res.data)
  //     };
  //     fetchData();
  //   }, []);

  const selected = [
    {
      id: 1,
      name: "Meat Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 1,
      name: "Cheese Lovers",
      price: 11.25,
      calories: 1200,
    },
    {
      id: 1,
      name: "Pepporoni Lovers",
      price: 13.25,
      calories: 1200,
    },
    {
      id: 1,
      name: "Canadian Lovers",
      price: 15.25,
      calories: 1200,
    },
  ];

  const categories = [
    {
      id: 1,
      name: "Bowl Combos",
    },
    {
      id: 2,
      name: "Signature Bowls",
    },
    {
      id: 3,
      name: "Custom Bowl",
    },
    {
      id: 4,
      name: "Roll Combos",
    },
    {
      id: 4,
      name: "Signature Rolls",
    },
    {
      id: 4,
      name: "Custom Roll",
    },
    {
      id: 5,
      name: "Sides",
    },
    {
      id: 6,
      name: "Drinks",
    },
    {
      id: 7,
      name: "Desserts",
    },
  ];

  const products = [
    {
      id: 1,
      orderid: "AJ5S6",
      name: "Oaxaca Bowl",
      calories: 660,
      price: 15.49,
      cost: 10,
      status: true,
    },
    {
      id: 2,
      orderid: "AK971",
      name: "Teriyaki Twiist Bowl",
      calories: 590,
      price: 14.29,
      cost: 10,
      status: true,
    },
    {
      id: 3,
      orderid: "B9SS6",
      name: "Mezze Delight Bowl",
      calories: 630,
      price: 13.79,
      cost: 10,
      status: true,
    },
    {
      id: 4,
      orderid: "Z9KP1",
      name: "Tikka Bowl",
      calories: 590,
      price: 14.79,
      cost: 10,
      status: false,
    },
    {
      id: 5,
      orderid: "SP766",
      name: "Chipolte Cheddar Bowl",
      calories: 730,
      price: 14.29,
      cost: 10,
      status: true,
    },
    {
      id: 6,
      orderid: "XW290",
      name: "Bhudda Bowl",
      calories: 540,
      price: 13.79,
      cost: 10,
      status: false,
    },
    {
      id: 7,
      orderid: "TF2V3",
      name: "Cobb Salad",
      calories: 430,
      price: 11.99,
      cost: 7,
      status: true,
    },
    {
      id: 8,
      orderid: "V8NV3",
      name: "Fiesta Salad",
      calories: 390,
      price: 11.49,
      cost: 7,
      status: true,
    },
    {
      id: 9,
      orderid: "TF2V3",
      name: "Greek Salad",
      calories: 580,
      price: 11.49,
      cost: 8.75,
      status: true,
    },
    {
      id: 10,
      orderid: "TF2V3",
      name: "Kale Ceasar Salad",
      calories: 670,
      price: 11.49,
      cost: 7,
      status: true,
    },
    {
      id: 11,
      orderid: "L9PM5",
      name: "Berri Crunchii Salad",
      calories: 630,
      price: 11.99,
      cost: 7,
      status: false,
    },
    {
      id: 12,
      orderid: "K1PO5",
      name: "Texas SmokeHouse Roll",
      calories: 840,
      price: 12.99,
      cost: 8,
      status: false,
    },
    {
      id: 13,
      orderid: "G6N90",
      name: "Spicy Buffalo Roll",
      calories: 580,
      price: 10.99,
      cost: 7,
      status: false,
    },
    {
      id: 14,
      orderid: "D34LP",
      name: "Sesame Crunch Roll",
      calories: 490,
      price: 9.29,
      cost: 8,
      status: false,
    },
    {
      id: 15,
      orderid: "A36XM",
      name: "Zestii Zaatar Burrito",
      calories: 530,
      price: 11.99,
      cost: 8,
      status: false,
    },
  ];

  return (
    <>
      <navbar className="menu-navbar">
        <div className="menu-navbar__container">
          <p className="menu-navbar__container-logo">FOOD<span>BYTE</span></p>
          <div className="menu-navbar__location">
            <IoLocationSharp />
            <p>2242 Winston Park Blvd</p>
          </div>
        </div>
        <FiLogOut size={25}/>
      </navbar>

      
      <div className="menu">
        <div className="menu-display">
          <section className="menu-display__categories">
            {categories.map((category) => (
              <div className="menu-display__categories-select">
                <p>{category.name}</p>
              </div>
            ))}
          </section>

          <section className="menu-display__items">
            {products.map((product) => (
              <Link className="link" to={`/menu/${product.id}`}>
                <Item
                  key={product.id}
                  id={product.id}
                  price={product.price}
                  name={product.name}
                  calories={product.calories}
                />
              </Link>
            ))}
          </section>
        </div>

        <div className="menu-cart">
          <div>
            <div className="menu-cart__order">
              <p className="menu-cart__order-title">ORDER</p>
              <p className="menu-cart__order-number">#20378</p>
            </div>
            <div>
              {selected.map((item) => (
                <CartItem key={item.id} name={item.name} price={item.price} />
              ))}
            </div>

            <div className="menu-cart__checkout">
              <p className="menu-cart__checkout-title">Items</p>
              <p>$45.89</p>
            </div>

            <div className="menu-cart__checkout">
              <p className="menu-cart__checkout-title">Tax(15%)</p>
              <p>$6.20</p>
            </div>

            <div className="menu-cart__checkout">
              <p className="menu-cart__checkout-title">Total</p>
              <p>$51.89</p>
            </div>
            <button className="menu-cart__btn">Purchase</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Viewmenu;
