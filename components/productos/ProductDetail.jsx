import Boton from "../ui/Boton";
import Counter from "../ui/Counter";
import GoBack from "../ui/GoBack"
import QtySelector from "./QtySelector";




const ProductDetail = async ({ id }) => {

    const item = await fetch(``, {
        cache: 'no-store'
    }).then(res => res.json())

    return(
        <>
        <section className="flex gap-6 mt-10 shadow-2xl border bg-white border-gray-100">
        <GoBack className="text-sm text-blue-500 underline mb-6" />
        <Image
            src={item.image}
            alt={item.title}
            width={520}
            height={380}
            className="my-9 object-contain"
        />
        <div className="basis-1/2 ">
          <h2 className="text-2xl font-semibold border-b border-gray-200 mt-12 mb-4 ">
            {item.title}
          </h2>
          <p className="text-4xl font-roboto">$ {item.price}</p>
          
        <QtySelector item={item}/>

        <h3 className="text-xl font-roboto border-b border-gray-200 mt-8">
          Descripcion
        </h3>
        <p className="text-gray-600 mb-4">{item.description}</p>
      
        </div>
      </section>
        </>
    )
}

export default ProductDetail;