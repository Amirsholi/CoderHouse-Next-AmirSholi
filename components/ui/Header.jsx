
import Link from "next/link"





const links = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Tienda",
        href: "/category/todos"
    },
    {
        label: "Carrito",
        href: "/cart"
    },

]
const Header = () => {

    return (
        <header className="w-full bg-[#151515]">
            <div className="contenedor py-2 flex justify-between items-center">
            <Link to="/">
            <h1 className="text-3xl text-gray-50">Farmacia Vitória</h1>
            </Link>

                <nav className="flex justify-between gap-2">
                    {
                        links.map(link => {
                            return <Link
                                key={link.label}
                                to={link.href}
                                className={`text-base text-slate-100 p-3 `}
                            >
                                {link.label}
                            </Link>
                        })                        
                    }


                </nav>
            </div>
        </header>
    )
}

export default Header;