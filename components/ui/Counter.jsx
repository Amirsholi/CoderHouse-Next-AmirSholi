"use client"
import Boton from "./Boton";





const Counter = ({counter, setCounter, max}) => {

    const increase = () => counter < max && setCounter(counter + 1);
    const decrease = () => counter > 1 && setCounter(counter - 1);

    return (
        <div className="flex flex-col gap-2 mt-6">
            <div className="flex items-center ">
                <Boton onClick={decrease} className="w-24">-</Boton>
                <p className="bg-orange-300 w-20 text-4xl text-center">{counter}</p>
                <Boton onClick={increase} className="w-24">+</Boton>
            </div>
            <p className="text-2xl font-roboto">stock {max}</p>
          
        </div>
    )
}

export default Counter;