import './CartItem.scss'
import pizza from '../../assets/pizza.png'

const CartItem = ({name, price}) => {
  return (
    <div>
        <img src={pizza} alt="pizza" />


    </div>
  )
}

export default CartItem