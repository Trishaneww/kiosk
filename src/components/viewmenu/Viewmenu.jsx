import "./Viewmenu.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from "../item/Item";
import CartItem from "../cartItem/CartItem";
import { IoLocationSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";;

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
      name: "Burrito Combos",
    },
    {
      id: 4,
      name: "Signature Burritos",
    },
    {
      id: 4,
      name: "Custom Burrito",
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

  const menuItems = [
    {
      id: 1,
      name: "Meat Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 2,
      name: "Cheese Lovers",
      price: 11.25,
      calories: 1200,
    },
    {
      id: 3,
      name: "Pepporoni Lovers",
      price: 13.25,
      calories: 1200,
    },
    {
      id: 4,
      name: "Canadian Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 5,
      name: "Hawaiian Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 5,
      name: "Hawaiian Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 5,
      name: "Hawaiian Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 5,
      name: "Hawaiian Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 5,
      name: "Hawaiian Lovers",
      price: 15.25,
      calories: 1200,
    },
    {
      id: 5,
      name: "Hawaiian Lovers",
      price: 15.25,
      calories: 1200,
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
            {menuItems.map((item) => (
              <Link className="link" to={`/menu/${item.id}`}>
                <Item
                  key={item.id}
                  price={item.price}
                  name={item.name}
                  calories={item.calories}
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
