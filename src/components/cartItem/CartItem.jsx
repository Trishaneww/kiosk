import './CartItem.scss'
import pizza from '../../assets/pizza.png'
import { MdModeEdit } from "react-icons/md";

const CartItem = ({name, price}) => {
  return (
    <div className="cart-item">
      <img src={pizza} alt="pizza" />
      <div className="cart-item__details">
        <p className="cart-item__details-title">{name}</p>
        <p className="cart-item__details-note">Crust: Stuffed cheese crust</p>
        <p className="cart-item__details-price">${price}</p>
        <div className="cart-item__edit">
          <MdModeEdit />
        </div>
      </div>
    </div>
  )
}

export default CartItem