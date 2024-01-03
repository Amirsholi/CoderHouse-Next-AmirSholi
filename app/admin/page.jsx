import ProductsTable from "@/components/admin/ProductsTable"
import LogoutButton from "@/components/admin/logoutButton"

const Admin = () => {

    return (
        <div className="container m-auto mt-6">
            <LogoutButton />
            <h2 className="text-2xl my-10 border-b pb-4">Panel Administración</h2>
            <ProductsTable />
        </div>
    )
}

export default Admin