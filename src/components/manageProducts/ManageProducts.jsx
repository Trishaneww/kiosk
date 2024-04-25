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
      price: 15.99,
      cost: 9.75,
      status: true,
    },
    {
      id: 2,
      orderid: "AK971",
      name: "Bhudda Bowl",
      price: 15.99,
      cost: 8.75,
      status: true,
    },
    {
      id: 3,
      orderid: "B9SS6",
      name: "Tikka Bowl",
      price: 12.4,
      cost: 10.2,
      status: true,
    },
    {
      id: 4,
      orderid: "Z9KP1",
      name: "Sesame Crunch Bowl",
      price: 9.99,
      cost: 6.2,
      status: false,
    },
    {
        id:5,
      orderid: "SP766",
      name: "Tex Mex Bowl",
      price: 18.99,
      cost: 12.55,
      status: true,
    },
    {
      id: 6,
      orderid: "XW290",
      name: "Spicy Buffalo Bowl",
      price: 12.75,
      cost: 11.75,
      status: false,
    },
    {
      id: 1,
      orderid: "TF2V3",
      name: "Kale Ceasar Salad",
      price: 14.75,
      cost: 8.75,
      status: true,
    },
  ];

  const item = {
    image: "product1",
  };

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

          <section className="product-dashboard-sidebar-stats">
            <div className="product-dashboard-sidebar-stats-graph"></div>
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
