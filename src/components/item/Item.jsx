import './Item.scss';
import pizza from '../../assets/pizza.png';

const Item = ({ price, name, calories}) => {
  return (
    <>
        <div className="item">
            <img src={pizza} alt="pizza" />
            <p className="item-name">{name}</p>
            <p className="item-price">${price}</p>
            <p>{calories} cal</p>
        </div>
    </>
  )
}

export default Item