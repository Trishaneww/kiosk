import './Viewmenu.scss';
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Item from '../item/Item';

const Viewmenu = () => {
//   const [menuItems, setMenuItems] = useState([]);
//   useEffect(() => {
//     const fetchData = async () => {
//       const res = await axios.get("");
//       setMenuItems(res.data)
//     };
//     fetchData();
//   }, []);

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
    }
]

  return (
    <>
      <div className="menu">
        <div>
          <section className="menu-categories">
            {categories.map((category) => (
              <div>
                <p>{category.name}</p>
              </div>
            ))}
          </section>

          <section className="menu-items">
            {menuItems.map((item)=> (
                <Link className="link" to={`/menu/${item.id}`}>
                    <Item key={item.id} price={item.price} name={item.name} calories={item.calories}/>
                </Link>
            ))}
          </section>
        </div>

        <div className="menu-cart">
          <div>

          </div>

        </div>
      </div>
    </>
  );
};

export default Viewmenu;
