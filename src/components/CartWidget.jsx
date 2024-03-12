
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/CartContext.jsx';

export const CartWidget =() => {
const {getItemQuantity} = useCarritoContext()


  return (
    <li className="nav-item cart-item">
      <Link to={"/Cart"} className="nav-link cart-link">
        <img src= "https://firebasestorage.googleapis.com/v0/b/react-proyect-video.appspot.com/o/cart-white.png?alt=media&token=8ac31370-7059-4ab5-972f-4acfd7df5013" className='cart-white' alt="carrito de PixelEdit" />
          <span className='cart-notification'>{getItemQuantity()}</span>
      </Link>
    </li>
  );
  
}
