import { useEffect } from "react"
import { DrinkCard } from "../../components/DrinkCard"
import UseAuth from "../../hooks/UseAuth"

export const Profile = () => {

  const { userProfile, getProfile, favorites} = UseAuth()

  useEffect(() => {
    getProfile()
  }, [])


  return (
    userProfile && (<div>
      <h1>Nombre: {userProfile.name}</h1>
      <hr />
      <h1>Email: {userProfile.email}</h1>

      {/* <DrinkCard key={drink.idDrink} drink={drink}/> */}
    </div>)
  )
}
