import { useContext } from "react"
import { CategoriesContext } from "../context/CategoriesProvider"


export default function UseCategories(){
  return (
    useContext(CategoriesContext)
  )
}
