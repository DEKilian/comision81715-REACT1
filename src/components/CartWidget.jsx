import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
 
export default function CartWidget() {
  const { getCartQuantity } = useContext(CartContext)
  const quantity = getCartQuantity ()

  return (
    <Link to="/cart" className="relative cursor-pointer">

      <FontAwesomeIcon icon={faCartArrowDown} className="h-6 w-6 text-white" />

      <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
        {quantity}
      </span>
    </Link>
  );
}