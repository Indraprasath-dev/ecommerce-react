import { useContext } from "react";
import { CartContext } from "../CartContext";
import watchImage from "../assets/images/watch.jfif"
import mobileImage from "../assets/images/mobile.jpg"
import headsetImage from "../assets/images/headset.jfif"
import TVImage from "../assets/images/TVupt.jfif"

const Products = () => {
    const { addToCart } = useContext(CartContext)!;

    const list = [
        { id: 1, product: "Watch", price: 250, image: watchImage },
        { id: 2, product: "Mobile", price: 500, image: mobileImage },
        { id: 3, product: "Headset", price: 100, image: headsetImage },
        { id: 4, product: "TV", price: 1000, image: TVImage },
    ];
    
    return (
        <div className="flex flex-wrap justify-center gap-6 my-10 mx-10">
            {list.map(item => (
                <div
                    key={item.id}
                    className="flex flex-col items-center max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform  dark:bg-gray-800 dark:border-gray-700">
                    <img className="w-32 h-32 mb-4 rounded-lg object-cover shadow-md"
                        src={item.image}
                        alt={item.product} />
                    <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.product}
                    </h5>
                    <p className="text-lg font-medium text-gray-700 dark:text-gray-400 mb-4">
                        Rs. {item.price}
                    </p>
                    <button
                        type="button"
                        className="w-full py-2 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-lg shadow-md hover:bg-gradient-to-br focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition duration-200"
                        onClick={() => addToCart(item)} >
                        Add to Cart
                    </button>
                </div>
            ))}
        </div>
    );
};

export default Products;
