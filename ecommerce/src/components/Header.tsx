import { useContext, useMemo } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { CART, CONTACT, HOME, SERVICE } from "../constants/constants";

const Header = () => {
    const { cartItems } = useContext(CartContext)!

    const count = useMemo(() => {
        return cartItems.length
    }, [cartItems])

    return (
        <nav className="fixed top-0 w-full z-50 bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Amazon</h1>
                <ul className="flex flex-row space-x-8 text-sm font-medium">
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                isActive ? "text-white underline" : "text-white hover:underline transition duration-300"
                            }
                            to={HOME}>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => 
                                isActive ? "text-white underline" : "text-white hover:underline transition duration-300"
                            }
                            to={SERVICE}>
                            Services
                        </NavLink>
                    </li>
                    <li className="relative">
                        <NavLink
                            className={({ isActive }) => 
                                isActive ? "text-white underline" : "text-white hover:underline transition duration-300"
                            }
                            to={CART}>
                            Cart
                        </NavLink>
                        {count > 0 && (
                            <div className="absolute -top-3 -right-4 bg-blue-500 text-white rounded-full text-xs px-2 py-1">
                                {count}
                            </div>
                        )}
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => 
                                isActive ? "text-white underline" : "text-white hover:underline transition duration-300"
                            }
                            to={CONTACT}>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;






// import { NavLink } from "react-router-dom"

// const Header = () => {
//     return (
//         <>
//          <nav className="bg-gray-50 dark:bg-gray-700">
//                 <div className="max-w-screen-xl px-4 py-3 mx-auto">
//                     <div className="flex items-center">
//                         <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
//                             <li className="text-gray-900 dark:text-white hover:underline">
//                             <NavLink className="text-gray-900 dark:text-white hover:underline" to="/products">Home</NavLink>
//                             </li>
//                             <li className="text-gray-900 dark:text-white hover:underline">
//                                 Services
//                             </li>
//                             <li>
//                             <NavLink className="text-gray-900 dark:text-white hover:underline" to="/cart">Cart</NavLink>
//                             </li>
//                             <li className="text-gray-900 dark:text-white hover:underline">
//                                 Contact
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }

// export default Header