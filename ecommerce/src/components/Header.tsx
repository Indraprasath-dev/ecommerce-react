import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

const Header = () => {
    const {count} = useContext(CartContext)!

    return (
        <nav className="bg-gradient-to-r from-blue-500 to-purple-600 dark:bg-gray-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto flex justify-between items-center">
                <h1 className="text-white text-2xl font-bold">Amazon</h1>
                <ul className="flex flex-row space-x-8 text-sm font-medium">
                    <li>
                        <Link 
                            className="text-white hover:underline transition duration-300" 
                            to="/home">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className="text-white hover:underline transition duration-300" 
                            to="/service">
                            Services
                        </Link>
                    </li>
                    <li className="relative">    
                        <Link 
                            className="text-white hover:underline transition duration-300 " 
                            to="/cart">
                            Cart
                        </Link>
                        {count>0 && (
                        <div className="absolute -top-3 -right-4 bg-blue-500 text-white rounded-full text-xs px-2 py-1">
                            {count}
                        </div>
                        )}
                    </li>
                    <li>
                        <Link 
                            className="text-white hover:underline transition duration-300" 
                            to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;






// import { Link } from "react-router-dom"

// const Header = () => {
//     return (
//         <>
//          <nav className="bg-gray-50 dark:bg-gray-700">
//                 <div className="max-w-screen-xl px-4 py-3 mx-auto">
//                     <div className="flex items-center">
//                         <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
//                             <li className="text-gray-900 dark:text-white hover:underline"> 
//                             <Link className="text-gray-900 dark:text-white hover:underline" to="/products">Home</Link>
//                             </li>
//                             <li className="text-gray-900 dark:text-white hover:underline">
//                                 Services
//                             </li>
//                             <li>
//                             <Link className="text-gray-900 dark:text-white hover:underline" to="/cart">Cart</Link>
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