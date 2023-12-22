"use client"
import { useState } from "react"
import Link from "next/link"
import { useCartContext } from "../context/CartContext"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"

const QtySelector = ({ item }) => {
    const { addToCart, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            {
                isInCart(item.id)
                    ?   <Link
                            href={"/cart"}
                            className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center">
                            Terminar mi compra
                        </Link>
                    :   <>
                            <Counter max={item.stock} counter={quantity} setCounter={setQuantity} />
                            <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Boton>
                        </>
            }
        </div>
    )
}

export default QtySelector;