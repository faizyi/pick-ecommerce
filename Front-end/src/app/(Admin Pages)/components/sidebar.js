import Link from "next/link";
import { FaPlus, FaList } from "react-icons/fa";

const AdminSidebar = () => {
    return (
        <aside className="fixed top-0 left-0 h-screen w-64 pt-20 p-5 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    <li>
                        <Link href="/addproduct" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaPlus className="w-5 h-5" />
                            <span className="ms-3">Add Product</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/productslist" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                            <FaList className="w-5 h-5" />
                            <span className="ms-3">Products List</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default AdminSidebar;
