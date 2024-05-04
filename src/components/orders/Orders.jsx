import "./Orders.scss";
import "../../styles/global.scss";
import axios from "axios";
import { useState, useEffect } from "react";
import Navbar from "../navbar/Navbar";
import { BsThreeDots } from "react-icons/bs";
import { FaCalendar } from "react-icons/fa";

const Orders = () => {
  const [search, setSearch] = useState({
    search: "",
  });

  const handleChange = (e) => {
    setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const orders = [
    {
      orderid: 29018,
      customer: "Trishane Ant",
      date: "January 8, 2024",
      time: "9:00am",
      amount: "56.22",
      payment: "Credit",
    },
    {
      orderid: 38190,
      customer: "Megan Schofield",
      date: "January 29, 2024",
      time: "7:00am",
      amount: "41.22",
      payment: "Credit",
    },
    {
      orderid: 91018,
      customer: "Mark Sanadi",
      date: "February 2, 2024",
      time: "10:00pm",
      amount: "17.22",
      payment: "Debit",
    },
    {
      orderid: 19018,
      customer: "Justin Neale",
      date: "February 27, 2024",
      time: "7:52pm",
      amount: "106.22",
      payment: "Cash",
    },
    {
      orderid: 56018,
      customer: "John Hynds",
      date: "March 3, 2024",
      time: "11:10am",
      amount: "6.22",
      payment: "Credit",
    },
    {
        orderid: 16018,
        customer: "Kevin Lopaz",
        date: "March 21, 2024",
        time: "1:22pm",
        amount: "22.29",
        payment: "Cash",
    },
    {
        orderid: 78018,
        customer: "Mina Sanadi",
        date: "March 28, 2024",
        time: "2:30am",
        amount: "72.92",
        payment: "Debit",
    },
    {
        orderid: 43021,
        customer: "Luka Doncic",
        date: "April 22, 2024",
        time: "9:27am",
        amount: "32.21",
        payment: "Debit",
    },
    {
        orderid: 48033,
        customer: "Quintin Ben",
        date: "April 29, 2024",
        time: "4:05pm",
        amount: "72.90",
        payment: "Debit",
    }
  ];

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

          <div className="order-history__nav-calender">
            <FaCalendar color="white" />
            <p>January 21, 2024</p>
          </div>

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
            <p>Payment Method</p>
          </div>

          <div className="order-history__categories-more">
            <p>Details</p>
          </div>
        </div>

        {orders.map((order) => (
          <div className="order-history__display">
            <div className="order-history__categories-order">
              <p>#{order.orderid}</p>
            </div>

            <div className="order-history__categories-customer">
              <p>{order.customer}</p>
            </div>

            <div className="order-history__categories-date">
              <p>{order.date}, {order.time}</p>
            </div>

            <div className="order-history__categories-amount">
              <p>${order.amount}</p>
            </div>

            <div className="order-history__categories-payment">
                {order.payment === "Credit" && (
                    <div className="order-history__categories-payment-container" id="credit">
                        <p>{order.payment}</p>
                    </div>
                )}

                {order.payment === "Debit" && (
                <div className="order-history__categories-payment-container" id="debit">
                  <p>{order.payment}</p>
                </div>
                )}

                {order.payment === 'Cash' && (
                    <div className="order-history__categories-payment-container" id="cash">
                        <p>{order.payment}</p>
                    </div>
                )}
            </div>

            <div className="order-history__categories-more">
              <BsThreeDots />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
