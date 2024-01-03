"use client"

import { useCartContext } from "../context/CartContext"
import CartItem from "./CartItem"



const CartList = () => {
    const { cart, totalPrice } = useCartContext()

    return (
        <div>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.id}/>)
                }
            </ul>

            <p className="text-2xl my-4 border-b pb-4">Total: ${totalPrice()}</p>
        </div>
    )
}

export default CartList;