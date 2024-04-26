import './CartItem.scss'
import pizza from '../../assets/pizza.png'
import { MdModeEdit } from "react-icons/md";

const CartItem = ({name, price, id}) => {
  return (
    <div className="cart-item">
      <img src={require(`../../assets/product${id}.png`)} alt="pizza" />
      <div className="cart-item__details">
        <p className="cart-item__details-title">{name}</p>
        <p className="cart-item__details-note">Modification: No Cheddar</p>
        <p className="cart-item__details-price">${price}</p>
        <div className="cart-item__edit">
          <MdModeEdit />
        </div>
      </div>
    </div>
  )
}

export default CartItem