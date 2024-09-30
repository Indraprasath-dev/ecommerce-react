import { Link } from "react-router-dom"

const Header = () => {
    return (
        <>
         <nav className="bg-gray-50 dark:bg-gray-700">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                            <li className="text-gray-900 dark:text-white hover:underline"> 
                            <Link className="text-gray-900 dark:text-white hover:underline" to="/products">Home</Link>
                            </li>
                            <li className="text-gray-900 dark:text-white hover:underline">
                                Services
                            </li>
                            <li>
                            <Link className="text-gray-900 dark:text-white hover:underline" to="/cart">Cart</Link>
                            </li>
                            <li className="text-gray-900 dark:text-white hover:underline">
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header