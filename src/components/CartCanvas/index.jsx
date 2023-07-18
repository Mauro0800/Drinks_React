import { Button, ListGroup, Offcanvas } from "react-bootstrap"
import PropTypes from 'prop-types'
import UseCart from "../../hooks/useCart"
import { CartItem } from "../cartItem"
import {types} from '../../types'

export const CartCanvas = ({ showCart, handleCloseCart }) => {

  const { cart, dispatch } = UseCart()

  const cleanCart = () => {
    dispatch({
      type: types.cleanCart,
      payload: {}
    })
  }

  return (
    <Offcanvas show={showCart} onHide={handleCloseCart} placement='end'>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Mi Carrito</Offcanvas.Title>
      </Offcanvas.Header> 
      <Offcanvas.Body>
        {cart.length ? (
          <div className="d-flex flex-column justify-content-between h-100">
            <div>
              <ListGroup>
                {
                  cart.map(drink => <CartItem key={drink.idDrink} drink={drink} />)
                }
              </ListGroup>
            </div>

            <div className="d-flex justify-content-center gap-2 mt-4">
              <Button onClick={cleanCart} variant="secondary">Vaciar carrito</Button>
              <Button variant="danger">Finalizar compra</Button>
            </div>
          </div>
        ) : (
          <p>No hay productos agregados</p>
        )} 
      </Offcanvas.Body>
    </Offcanvas>
  )
}

CartCanvas.propTypes = {
  showCart: PropTypes.bool,
  handleCloseCart: PropTypes.func
}