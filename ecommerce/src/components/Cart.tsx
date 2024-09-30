import { useContext } from "react";
import { CartContext } from "../CartContext";
const Cart = () => {
    const { cartItems, totalAmount, removeFromCart } = useContext(CartContext)!
    return (
        <div className="container mx-auto my-10">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="mt-6">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center">
                                <img src={item.image} alt={item.product}
                                    className="w-16 h-16 object-cover rounded-lg mr-4 border border-gray-200 shadow-sm"/>
                                <div className="flex flex-col">
                                    <p className="text-lg font-semibold text-gray-900">{item.product}</p>
                                    <p className="text-sm text-gray-500">Rs. {item.price}</p>
                                </div>
                            </div>
                            <div>
                                <button className="px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg shadow hover:bg-red-600 focus:outline-none"
                                    onClick={()=>removeFromCart(item.id)}>
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="mt-6 text-lg font-bold">
                        <p>Total: Rs. {totalAmount}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
