import { useContext } from "react"
import { CartContext } from "../context/CartProvider"


export default function UseCart(){
  return (
    useContext(CartContext)
  )
}
