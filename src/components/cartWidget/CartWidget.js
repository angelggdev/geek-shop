import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './CartWidget.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../context/cartContext';


const CartWidget = () =>{
    const {badge} = useContext(CartContext);

    return(
        <div>
            <Link to='/cart' className="cartWidget btn position-relative" data-bs-toggle="button" >
                <FontAwesomeIcon icon={faShoppingCart} size='2x' fixedWidth color='antiquewhite' className="clickable"/>
                {
                    badge !== 0 &&
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {badge}
                    </span> 
                }
            </Link>
        </div>
    )
}

export default CartWidget;