import Link from "next/link"
import Image from "next/image"


const ProductsTable = async () => {
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/productos/todos`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <>
            <Link
                href={"/admin/create"}
                className="rounded bg-blue-600 p-2 text-white"
            >
                Crear nuevo
            </Link>
            <div className="overflow-x-auto">

                <table className="w-full text-xs text-left text-gray-600">
                    <thead className="text-xs text-gray-700 uppercase">
                        <tr>
                            <th scope="col" className="px-3 py-2">Nombre</th>
                            <th scope="col" className="px-3 py-2">Precio</th>
                            <th scope="col" className="px-3 py-2">stock</th>
                            <th scope="col" className="px-3 py-2">Tipo</th>
                            <th scope="col" className="px-3 py-2">Imagen</th>
                            <th scope="col" className="px-3 py-2">Id</th>
                            <th scope="col" className="px-3 py-2">Descripción</th>
                            <th scope="col" className="px-3 py-2"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr key={item.id}>
                                    <td className="p-2">{item.title}</td>
                                    <td className="p-2">{item.price}</td>
                                    <td className="p-2">{item.stock}</td>
                                    <td className="p-2">{item.categoryId}</td>
                                    <td className="p-2">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                        />
                                    </td>
                                    <td className="p-2">{item.id}</td>
                                    <td className="p-2 truncate max-w-prose">{item.description}</td>
                                    <td className="p-2">
                                        <Link
                                            href={`/admin/edit/${item.id}`}
                                            className="rounded bg-green-400 p-2 text-white"
                                        >
                                            Editar
                                        </Link>

                                        <Link
                                            href={`/admin/delete/${item.id}`}
                                            className="rounded bg-red-400 p-2 text-white"
                                        >
                                            Eliminar
                                        </Link>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ProductsTable