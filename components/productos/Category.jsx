import Link from "next/link";
import { usePathname } from "next/navigation"

const links = [
    { label: "Todos", href: "/category/todos", },
    { label: "Proteina", href: "/category/proteina", },
    { label: "Creatina", href: "/category/creatina", },
    { label: "Vitaminas", href: "/category/vitaminas", }
]

const CategoriesMenu = () => {
    
    const categoryName = usePathname();

    return (
        <aside className="flex flex-col gap-3">
            {links.map(link => (
                    <Link 
                        key={link.label} 
                        to={link.href}
                        className={`${categoryName === link.label.toLowerCase() ? "font-semibold border-b-2" : 'hover:cursor-pointer hover:font-bold ease-in duration-300'} py-2 `}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}
export default CategoriesMenu;