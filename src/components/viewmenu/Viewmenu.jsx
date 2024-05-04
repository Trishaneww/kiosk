import "./Viewmenu.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import MenuSidebar from "../menuSidebar/MenuSidebar";
import { Link, useNavigate } from "react-router-dom";
import Item from "../item/Item";
import CartItem from "../cartItem/CartItem";
import { IoLocationSharp } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";

const Viewmenu = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3307/products/1");
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const selected = [
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
      id: 12,
      orderid: "K1PO5",
      name: "Texas SmokeHouse Roll",
      calories: 840,
      price: 12.99,
      cost: 8,
      status: false,
    },
  ];

  const getDate = (timestamp) => {
    const date = new Date(timestamp);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <>
      <div className="menu">
        <div className="menu-display">
          <MenuSidebar />

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
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  id={item.id}
                />
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
