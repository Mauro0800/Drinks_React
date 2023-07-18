import { Col, Image, Modal, Row, Button } from "react-bootstrap"
import useDrinks from "../../hooks/useDrinks"
import useCart from '../../hooks/useCart'
import { types } from '../../types'
import { getDrinkById } from "../../helpers"

export const DrinkModalDetail = () => {

    const { handleShowModalClick, showModal, recipe, drinks } = useDrinks()
    const { strDrink, strDrinkThumb, strInstructions, idDrink } = recipe


    const showIngredients = () => {
        const ingredients = []
        for (let i = 1; i < 15; i++) {
            if (recipe[`strIngredient${i}`]) {
                ingredients.push(
                    <li key={recipe[`strIngredient${i}`]}>
                        {recipe[`strIngredient${i}`]} | {recipe[`strMeasure${i}`]}
                    </li>
                )
            }
        }
        return ingredients
    }

    const { dispatch } = useCart()

    const handleAddCart = () => {

        const drink = getDrinkById(drinks, idDrink)

        dispatch({
            type: types.addItemToCart,
            payload: drink
        })
    }

    return (
        <Modal show={showModal} onHide={handleShowModalClick} size="xl">
            <Row>
                <Col>
                    <Image src={strDrinkThumb} alt={`Imagen de ${strDrink}`} fluid className="rounded-start" />
                </Col>
                <Col>
                    <Modal.Header closeButton>
                        <Modal.Title>{strDrink}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="d-flex flex-column">
                        <div>
                            <h4>Instruccions</h4>
                            <p>{strInstructions}</p>
                            <h4>Ingredients & Measures</h4>
                            <ul>
                                {showIngredients()}
                            </ul>
                        </div>
                        <Button variant={"warning"} className='w-100 text-uppercase mt-2' onClick={handleAddCart}>
                            Comprar
                        </Button>
                    </Modal.Body>
                </Col>
            </Row>
        </Modal>
    )
}
