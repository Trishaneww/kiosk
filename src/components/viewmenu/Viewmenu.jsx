import './Viewmenu.scss';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from '../item/Item';
import CartItem from '../cartItem/CartItem';

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
      id:1,
      name:'Meat Lovers',
      price:15.25,
      calories: 1200
  },
  {
      id:1,
      name:'Cheese Lovers',
      price:11.25,
      calories: 1200
  },
  {
      id:1,
      name:'Pepporoni Lovers',
      price:13.25,
      calories: 1200
  },
  {
    id:1,
    name:'Canadian Lovers',
    price:15.25,
    calories: 1200
  }
  ]

  const categories = [
    {
      id:1,
      name: 'pizza'
    },
    {
      id:2,
      name: 'burgers'
    },
    {
      id:3,
      name: 'salads'
    },
    {
      id: 3,
      name: 'drinks'
    }

  ]

  const menuItems = [
    {
        id:1,
        name:'Meat Lovers',
        price:15.25,
        calories: 1200
    },
    {
        id:1,
        name:'Cheese Lovers',
        price:11.25,
        calories: 1200
    },
    {
        id:1,
        name:'Pepporoni Lovers',
        price:13.25,
        calories: 1200
    },
    {
      id:1,
      name:'Canadian Lovers',
      price:15.25,
      calories: 1200
  }
]

  return (
    <>
      <div className="menu">
        <div className="menu-display">
          <section className="menu-display__categories">
            {categories.map((category) => (
              <div>
                <p>{category.name}</p>
              </div>
            ))}
          </section>

          <section className="menu-display__items">
            {menuItems.map((item)=> (
                <Link className="link" to={`/menu/${item.id}`}>
                    <Item key={item.id} price={item.price} name={item.name} calories={item.calories}/>
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
                <CartItem key={item.id} name={item.name} price={item.price}/>
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
