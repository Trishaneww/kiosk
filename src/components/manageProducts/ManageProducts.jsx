import "./ManageProducts.scss";
import "../../styles/global.scss";
import Navbar from "../navbar/Navbar";
import { MdOutlineAdd } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { useState } from "react";
import product1 from "../../assets/product1.png";
import product2 from "../../assets/product2.png";
import product3 from "../../assets/product3.png";
import product4 from "../../assets/product4.png";
import product5 from "../../assets/product5.png";
import product6 from "../../assets/product6.png";

const ManageProducts = () => {
  const [search, setSearch] = useState({
    search: "",
  });

  const handleChange = (e) => {
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
  ];

  return (
    <div className="main">
      <Navbar />

      <div className="product-dashboard">
        <div className="product-dashboard-sidebar">
          <input
            className="product-dashboard-sidebar-searchbar"
            name="search"
            type="text"
            placeholder="search for items"
            onChange={handleChange}
          />

          <section className="product-dashboard-sidebar-analytics">
            <div className="product-dashboard-sidebar-analytics-display">
              <div className="product-dashboard-sidebar-analytics-display-container">
                <p className="product-dashboard-sidebar-analytics-display-container-header">
                  Purchased
                </p>
                <p className="product-dashboard-sidebar-analytics-display-container-number">
                  128<span>bowls</span>
                </p>
              </div>
              <div className="product-dashboard-sidebar-analytics-display-container">
                <p className="product-dashboard-sidebar-analytics-display-container-header">
                  Available
                </p>
                <p className="product-dashboard-sidebar-analytics-display-container-number">
                  32<span>bowls</span>
                </p>
              </div>
            </div>
            <div className="product-dashboard-sidebar-analytics-graph"></div>
          </section>
        </div>

        <div className="product-dashboard-display">
          <navbar className="product-dashboard-display-nav">
            <div className="product-dashboard-display-nav-filter">
              <p>Category: Bowls</p>
              <SlArrowDown size={18} />
            </div>
            <div className="product-dashboard-display-nav-additem">
              <p>Add Items</p>
              <MdOutlineAdd size={32} />
            </div>

            <div className="product-dashboard-display-nav-additem">
              <p>Add Category</p>
              <MdOutlineAdd size={32} />
            </div>
          </navbar>

          <section className="product-dashboard-display-categories">
            <div className="product-dashboard-display-categories-image">
              <p>#</p>
            </div>

            <div className="product-dashboard-display-categories-id">
              <p>ID Number</p>
            </div>

            <div className="product-dashboard-display-categories-name">
              <p>Name</p>
            </div>

            <div className="product-dashboard-display-categories-price">
              <p>Price</p>
            </div>

            <div className="product-dashboard-display-categories-cost">
              <p>Cost</p>
            </div>

            <div className="product-dashboard-display-categories-status">
              <p>Instock</p>
            </div>

            <div className="product-dashboard-display-categories-dropdown">
              <SlArrowDown size={18} />
            </div>
          </section>

          {products.map((product) => (
            <div className="product-dashboard-display-container">
              <div className="product-dashboard-display-categories-image">
                <img src={require(`../../assets/product${product.id}.png`)} />
              </div>

              <div className="product-dashboard-display-categories-id">
                <p>{product.orderid}</p>
              </div>

              <div className="product-dashboard-display-categories-name">
                <p>{product.name}</p>
              </div>

              <div className="product-dashboard-display-categories-price">
                <p>{product.price}</p>
              </div>

              <div className="product-dashboard-display-categories-cost">
                <p>{product.cost}</p>
              </div>

              <div className="product-dashboard-display-categories-status">
                <div id={product.status === true ? "available" : "unavailable"}>
                  <p>{product.status === true ? "Available" : "Sold Out"}</p>
                </div>
              </div>

              <div className="product-dashboard-display-categories-dropdown">
                <SlArrowDown size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
