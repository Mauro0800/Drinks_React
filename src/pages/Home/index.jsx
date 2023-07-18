// import { Link } from "react-router-dom"
// import useUser from "../../hooks/UseUser"

import { DrinkModalDetail } from "../../components/DrinkModalDetail"
import { DrinksList } from "../../components/DrinksList"
import { SearchForm } from "../../components/SearchForm"

export const Home = () => {

  // const {user, logout} = useUser()

  return (
    <>
      <SearchForm/>
      <DrinksList/>
      <DrinkModalDetail/>
      {/* <h1>Home</h1>
      <hr />
      {user ?( 
      <>
      <h2>Hola! {user}</h2>
      <button onClick={() => logout()}>Salir</button>
      </> 
      ):( 
      <Link to={"/login"}>Ingresá</Link>)} */}
    </>
    )
}
