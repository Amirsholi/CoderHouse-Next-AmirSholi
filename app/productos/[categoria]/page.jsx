import CategoriesMenu from "@/components/productos/Category";
import ProductsList from "@/components/productos/ProductList";
import { Suspense } from "react";





const Productos = ({params}) => {
    const { categoria } = params;

    return (
        <main className="container m-auto">
            <h2 className="text-2xl my-10 border-b pb-4">Productos</h2>

            <div className="flex gap-10">
                <CategoriesMenu />

                <Suspense fallback={<div>Cargando...</div>}>
                    <ProductsList categoria={categoria}/>
                </Suspense>
            </div>
        </main>
    )
}

export default Productos