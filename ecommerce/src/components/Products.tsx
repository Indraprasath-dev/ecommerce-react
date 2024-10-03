import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { list } from "../datas/ProductData"
import Button from "./Button";

const Products = () => {
    const { addToCart, addFromCart, removeFromCart, cartItems } = useContext(CartContext)!;

    const getItemQuantity = (id: number) => {
        const carItem = cartItems.find((item) => item.id === id)
        return carItem ? carItem.quantity : 0
    }

    return (
        <div className="flex flex-wrap justify-center gap-6 my-10 mx-10">
            {list.map(item => (
                <div key={item.id}
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

                    {getItemQuantity(item.id) !== 0
                        ? (<div className="flex items-center justify-center">
                            <Button
                                onClick={() => addFromCart(item.id)} variant="primary" >
                                +
                            </Button>
                            <div className="mx-2 mt-5 text-sm text-gray-500">
                                count: {getItemQuantity(item.id)}
                            </div>
                            <Button
                                onClick={() => removeFromCart(item.id)} variant="secondary" >
                                -
                            </Button>
                        </div>)
                        : (<Button onClick={() => addToCart(item)} variant="primary">
                            Add to Cart
                           </Button>)
                    }
                </div>
            ))}
        </div>
    );
};

export default Products;
