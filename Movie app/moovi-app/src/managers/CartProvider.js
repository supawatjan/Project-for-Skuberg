import { createContext, useContext, useEffect, useState } from "react"
import { MoviesCenter } from "./MoviesProvider"

export const CartCenter =()=>{
    return useContext(CartContext)
}


const CartProvider = ({children}) =>{
    const {searchMovie} = MoviesCenter()

    const userCart = {
        cart: [],
        amountItems: 0,
        balance: 0
    }
    const [cart, setCart] = useState(userCart)
    
    const addToCart = (movie) => {
        let temp = cart
        if(!temp.cart.includes(movie)){
            temp.cart.push(movie)
        }
        if (temp.cart.includes(movie)) {
            let duplicate = temp.cart.filter((element, index)=>{
               return  element.id === movie.id
            })
            let convert = {}
            convert.movie = duplicate[0]
            
            console.log(convert)
            convert.movie.quality += 1
            temp.cart.push(convert.movie) // it's not work
        }
           
        setCart(temp)
    }

    useEffect(()=>{
        // handle amountItem
        let temp = cart
        temp.amountItems = temp.cart.length

        //handle Balance
        let cashier = []
        temp.cart.map((element)=>{
            cashier.push(element.price)
        })
        temp.balance = cashier.reduce((pre, cur) =>
            pre + cur, 0
        )
        
        setCart(temp)
    },[cart])

    return(
        <CartContext.Provider value={{cart, setCart, addToCart}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider
export const CartContext = createContext()