
import { useState } from 'react'
import { CartCanvas } from '../CartCanvas'
import { Badge, Button } from 'react-bootstrap';
import styles from './index.module.css'
import UseCart from '../../hooks/useCart';

export const Header = () => {

const [showCart, setShowCart] = useState(false)

const handleShowCart = () => setShowCart(true);
const handleCloseCart = () => setShowCart(false);

const {cart} = UseCart()

  return (
    <header className={`d-flex justify-content-around py-3 ${styles.header}`}>
      <h1>Search Drinks</h1>
      <div className='position-relative'>
      <Button variant='outline-light' size='lg' onClick={handleShowCart}>
        <i className="fas fa-shopping-cart fa-lg" ></i>
      </Button>
        <Badge className='position-absolute top-50 start-50' bg='warning' pill>{cart.length}</Badge>
      </div>
      <CartCanvas showCart={showCart} handleCloseCart={handleCloseCart}/>
    </header>
  )
}
