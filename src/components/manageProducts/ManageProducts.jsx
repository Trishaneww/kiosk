import "./ManageProducts.scss";
import "../../styles/global.scss";
import Navbar from "../navbar/Navbar";
import { MdOutlineAdd } from "react-icons/md";
import { SlArrowDown } from "react-icons/sl";
import { useState, useEffect } from "react";
import ProductChart from "../productChart/ProductChart";
import { IoSearchSharp } from "react-icons/io5";
import axios from "axios";

const ManageProducts = () => {
  const [search, setSearch] = useState({
    search: "",
  });

  const [newProduct, setNewProduct] = useState({
    menu_id: 1,
    productid: "TF2V3",
    name: "Kale Ceasar Salad",
    calories: 670,
    price: 11.49,
    cost: 7,
    status: true,
    description:"default bowl"
  });

  const handleChange = (e) => {
    setNewProduct((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

  const handleClick = async(e) => {
    e.preventDefault()
    try {
      console.log("clicked")
      await axios.post("http://localhost:3307/products", newProduct)
    } catch (err) {
      console.log(err)
    }
  } 

  console.log(newProduct)


  return (
    <div className="main">
      <Navbar />

      <div className="product-dashboard">
        <div className="product-dashboard-sidebar">
          {/* <div className=""> 
            <input
              className="product-dashboard-sidebar-searchbar"
              name="search"
              type="text"
              placeholder="search for items"
              onChange={handleChange}
            />
            <IoSearchSharp className="product-dashboard-sidebar-searchbar-icon" /> */}
          <div className="searchbar">
            <input
              name="search"
              type="text"
              placeholder="search for items"
              onChange={handleChange}
            />
            <IoSearchSharp className="searchbar__icon" size={22} />
          </div>

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
            <div className="product-dashboard-sidebar-analytics-graph">
              <ProductChart />
            </div>
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
            <div className="product-dashboard-display-container" key={product.id}>
              <div className="product-dashboard-display-categories-image">
                {product.id >= 16 && (
                  <img src={require(`../../assets/product2.png`)} />
                )}
                {product.id < 16 && (
                   <img src={require(`../../assets/product${product.id}.png`)} />
                )}
              </div>

              <div className="product-dashboard-display-categories-id">
                <p>#{product.productid}</p>
              </div>

              <div className="product-dashboard-display-categories-name">
                <p>{product.name}</p>
              </div>

              <div className="product-dashboard-display-categories-price">
                <p>${product.price}</p>
              </div>

              <div className="product-dashboard-display-categories-cost">
                <p>${product.cost}</p>
              </div>

              <div className="product-dashboard-display-categories-status">
                <div id={product.status === 1 ? "available" : "unavailable"}>
                  <p>{product.status === 1 ? "Available" : "Sold Out"}</p>
                </div>
              </div>

              <div className="product-dashboard-display-categories-dropdown">
                <SlArrowDown size={18} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <form className="login-form">
        <h1>Create new product</h1>
        <div>
          <input
            name="productid"
            type="text"
            placeholder="ProductID"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="name"
            type="text"
            placeholder="Product Name"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="calories"
            type="text"
            placeholder="Calories"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="price"
            type="text"
            placeholder="Price"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="cost"
            type="text"
            placeholder="Cost"
            onChange={handleChange}
          />
        </div>

        <div>
          <input
            name="description"
            type="text"
            placeholder="Description"
            onChange={handleChange}
          />
        </div>
        <button className="login-page__btn" onClick={handleClick}>Create</button>
      </form>
    </div>
  );
};

export default ManageProducts;
