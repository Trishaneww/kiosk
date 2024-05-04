import "./Item.scss";
import pizza from "../../assets/pizza.png";

const Item = ({ price, name, calories, id }) => {
  return (
    <div className="item">
      <img src={require(`../../assets/product${id}.png`)}  alt="product" />
      <p className="item-name">{name}</p>
      <div className="item-details">
        <p className="item-price">${price}</p>
        <div className="item-details__calories">
          <p>{calories} cal</p>
        </div>
      </div>
    </div>
  );
};

export default Item;
