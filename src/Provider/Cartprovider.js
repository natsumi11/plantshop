import { createContext, useReducer } from "react"
import { CartReducer } from "../Reducer/CartReducer"

export const cartlistcontext=createContext()
export const CartDispatchcontext=createContext()

export function Cartprovider({children}){
    const [cartlist,CartDispatch]=useReducer(CartReducer,[])
    return(
        <cartlistcontext.Provider value={cartlist}>
        <CartDispatchcontext.Provider value={CartDispatch}>
            {children}
        </CartDispatchcontext.Provider>
        </cartlistcontext.Provider>
    )
}