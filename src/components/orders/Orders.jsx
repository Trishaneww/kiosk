import "./Orders.scss";
import "../../styles/global.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { BsThreeDots } from "react-icons/bs";

const Orders = () => {
  const [search, setSearch] = useState({
    search: "",
  });

  const handleChange = (e) => {
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="main">
      <Navbar />
      <div className="order-history">
        <navbar className="order-history__nav">
          <input
            className="order-history__nav-searchbar"
            name="search"
            type="text"
            placeholder="Search Order Id"
            onChange={handleChange}
          />
        </navbar>
        <div className="order-history__categories">
          <div className="order-history__categories-order">
            <p>Order Id</p>
          </div>

          <div className="order-history__categories-customer">
            <p>Customer</p>
          </div>

          <div className="order-history__categories-date">
            <p>Date</p>
          </div>

          <div className="order-history__categories-amount">
            <p>Amount</p>
          </div>

          <div className="order-history__categories-payment">
            <p>Payment</p>
          </div>

          <div className="order-history__categories-more">
            <p>Details</p>
          </div>
        </div>

        <div className="order-history__display">
          <div className="order-history__categories-order">
            <p>#20789</p>
          </div>

          <div className="order-history__categories-customer">
            <p>Megan Schofield</p>
          </div>

          <div className="order-history__categories-date">
            <p>June 12, 2023</p>
          </div>

          <div className="order-history__categories-amount">
            <p>$60.22</p>
          </div>

          <div className="order-history__categories-payment">
            <p>Credit</p>
          </div>

          <div className="order-history__categories-more">
            <BsThreeDots />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
