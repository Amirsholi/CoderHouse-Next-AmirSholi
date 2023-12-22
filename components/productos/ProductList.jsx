import ProductCard from "./ProductCard"


const ProductsList = async ({ categoria }) => {
  
    const items = await fetch(`http://${process.env.VERCEL_URL}/api/products/${categoria}`, {
        cache: 'no-store',
    }).then(r => r.json());

    return (
        <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 mt-3">
            {
                items.map(item => <ProductCard key={item.id} item={item}/>)
            }
        </section>
    )
}

export default ProductsList;