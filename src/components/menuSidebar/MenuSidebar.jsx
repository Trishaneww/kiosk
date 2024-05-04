import "./MenuSidebar.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const MenuSidebar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:3307/categories");
        setCategories(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  console.log(categories);

  return (
    <>
      <div className="main">
        <section className="sidebar">
          <p className="sidebar-logo">
            FOOD<span>BYTE</span>
          </p>
          {categories.map((category) => (
            <div className="sidebar-link">
              <p>{category.title}</p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
};

export default MenuSidebar;
