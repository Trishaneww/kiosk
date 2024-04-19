import './Orders.scss';
import axios from 'axios'
import { useState, useEffect } from 'react';
import Navbar from '../navbar/Navbar';



const Orders = () => {
    const [search, setSearch] = useState({
        search: ''
    });
    
      const handleChange = (e) => {
        setSearch((prev) => ({ ...prev, [e.target.name]: e.target.value }));
      };

  return (
    <>
        <Navbar />
        <div className="order-history">
            <navbar>
            <input
                name="search"
                type="text"
                placeholder="Search Order Id"
                onChange={handleChange}
             />
            </navbar>
            <div className="order-history__categories">

            </div>
            <div className="order-history__display">

            </div>

        </div>


    </>
  )
}

export default Orders