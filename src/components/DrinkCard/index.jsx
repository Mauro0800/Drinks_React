import { Button, Card, Col } from 'react-bootstrap'
import styles from './index.module.css'
import Swal from 'sweetalert2'
import PropTypes from 'prop-types'
import useDrinks from '../../hooks/UseDrinks'
import useCart from '../../hooks/useCart'
import UseAuth from '../../hooks/UseAuth'
import { types } from '../../types'

export const DrinkCard = ({ drink }) => {
    const { handleDrinkIdClick } = useDrinks();
    const { handleToggleFavorite, favorites, user} = UseAuth()

    const { dispatch } = useCart()

    const handleAddCart = () => {

        dispatch({
            type: types.addItemToCart,
            payload: drink
        })

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Bebida agregada al carrito',
            showConfirmButton: false,
            timer: 1000
        })
    };

    const handleFavorite = () => {
        user ?
        handleToggleFavorite(drink.idDrink)
        :
        Swal.fire({
            icon: 'error',
            title: 'Debes estar logueado',
            showConfirmButton: false,
            timer: 1500
        })
    }


    return (
        <Col md={6} lg={3}>
            <Card className='mb-4'>
                <Card.Img variant='top' src={drink.strDrinkThumb} alt={`Imagen de ${drink.strDrink}`} />
                <Card.Body>
                    <Card.Title className={styles.strDrink}>{drink.strDrink}</Card.Title>
                    <a style={{cursor:"pointer"}} className='text-danger' onClick={handleFavorite}>
                        {
                            favorites.includes(drink.idDrink) ?
                                <i className='fas fa-heart fa-lg'></i>
                                :
                                <i className='far fa-heart fa-lg'></i>
                        }
                    </a>
                    <Button variant={"warning"} className='w-100 text-uppercase mt-2' onClick={() => { handleDrinkIdClick(drink.idDrink); }}>
                        Ver receta
                    </Button>
                    <Button variant={"success"} className='w-100 text-uppercase mt-2' onClick={handleAddCart}>
                        Comprar
                    </Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

DrinkCard.propTypes = {
    drink: PropTypes.object,
}

DrinkCard.defaultProps = {
    strDrinkThumb: 'https://codigogenesis.com/genesis/2022/04/imagen-placeholder-por-defecto-WooCommerce.png',
    strDrink: "Nombre de la bebida",
}
