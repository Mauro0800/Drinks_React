import PropTypes from 'prop-types'
import { createContext, useEffect, useState } from "react"
import { filterDrinkService, getRecipeService} from '../services/drink.service';

const DrinksContext = createContext(null);

const DrinksProvider = ({children}) => {
    const [drinks, setDrinks] = useState([])
    const [loading, setLoading] = useState(false)
    const [recipe, setRecipe] = useState({})
    const [idDrink, setIdDrink] = useState(null)
    const [showModal, setShowModal] = useState(false)
    
    const getDrinks = async (data) => {
        try {
            setLoading(true)
            const drinkData = await filterDrinkService(data.ingredient, data.category)
            
            setDrinks(drinkData)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    

    useEffect(() => {

        const getRecipe = async () => {
            
            if(!idDrink) return;

            try {
                setLoading(true)
                const recipeData = await getRecipeService(idDrink)
                setRecipe(recipeData)
                setShowModal((show) => !show)
                setIdDrink(false)
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false)
            }
        }
        getRecipe()
    },[idDrink])

    const handleDrinkIdClick = (id) => {
        setIdDrink(id)
    }

    const handleShowModalClick = () => {
        setShowModal((show)=> !show)
    }
    
    const contextValue = {
            drinks,
            getDrinks,
            loading,
            handleDrinkIdClick,
            recipe,
            showModal,
            handleShowModalClick,
            idDrink
        }

  return (
    <DrinksContext.Provider value = {contextValue}>
        {children}
    </DrinksContext.Provider>
  )
}

DrinksProvider.propTypes = {
    children : PropTypes.node.isRequired
}

export {
    DrinksProvider,
    DrinksContext
}