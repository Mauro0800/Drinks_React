import axios from 'axios'
const apiUrl = import.meta.env.VITE_API_URL

export const filterDrinkService = async (ingredient, category) => {
    try {
        
        const url = `${apiUrl}filter.php?i=${ingredient}&c=${category}`
        const {data} = await axios.get(url)

        const drinks = data.drinks.map(drink => ({...drink, price: +((drink.idDrink / 10).toFixed(0))}))

        return drinks || []

    } catch (error) {
        throw new Error("hubo un error al obtener las bebidas")
    }
}

export const getRecipeService = async (drinkID) => {
    try {
        const url = `${apiUrl}lookup.php?i=${drinkID}`
        const {data} = await axios.get(url)

        return data.drinks[0] || []
    } catch (error) {
        throw new Error("hubo un error al obtener una bebida")
    }
}
