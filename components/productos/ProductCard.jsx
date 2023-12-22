import Image from "next/image";
import Link from "next/link";






const ProductCard = ({ item }) => {


    return(
        <>
        <Link
          to={`/Item/${item.id}`}
          className="flex flex-col"
          onClick={handleClick}
        >
        <div className="py-4 border border-gray-200 flex flex-col items-center justify-center shadow-sm rounded hover:shadow-lg hover:scale-110 ease-in duration-300">
            <Image
                alt={item.title}
                src={item.image}
                width={288}
                height={288}
            />
            <h4 className="text-sm text-center px-1 mb-1">{item.title}</h4>
            <p className="text-lg font-semibold">$ {item.price}</p>
        </div>
        </Link>
        </>
    )
}
export default ProductCard;