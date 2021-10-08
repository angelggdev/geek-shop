import './Cart.css';
import {useContext, useEffect, useState} from 'react';
import CartContext from '../../context/cartContext';
import CartItem from './cartItem/CartItem';
import CartForm from './cartForm/CartForm';
import { Link } from 'react-router-dom';
import NotificationModal from './notificationModal/NotificationModal';
import { Container, Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'

const Cart = () => {
    const {functions, cartItems} = useContext(CartContext);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let priceSum = functions.getTotal();
        setTotalPrice(priceSum);
    }, [cartItems, functions])

    return(
        <Container className="cartContainer">
            <h1>Carrito</h1>
            {
                cartItems.length !== 0 ?
                <div>
                    {
                        cartItems.map((x, i) =>{
                            return(
                                <CartItem
                                    key={i}
                                    product={x}
                                />
                            ) 
                        })
                    }
                    <div className='cartContainerBottom'>
                        <Row>
                            <Col md={6} className='cartContainerPrice'>
                                <h3>Precio Total: <span className='totalPrice'>${totalPrice}</span></h3>
                                <Button variant='none' className="cartButton" onClick={functions.clear}>Limpiar</Button>
                                <Button variant='none' className='cartButton'><Link to={process.env.PUBLIC_URL + "/"} className='cartButtonLink'>Agregar más productos</Link></Button>
                            </Col>
                            <Col md={6}>
                                <CartForm/>
                            </Col>
                        </Row>
                    </div>
                </div>
                :
                <h2>Tu carrito está vacío, <Link to={process.env.PUBLIC_URL + "/"} className="cartLink">agregar productos</Link>.</h2>
            }
            <NotificationModal />
        </Container>
    )
}

export default Cart