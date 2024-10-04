import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import Button from "./Button";

interface CartCardProps {
    id: number,
    product: string,
    price: number,
    image: string,
    quantity: number
}

const CartCard = ({ id, product, price, image, quantity }: CartCardProps) => {
    const { removeFromCart, addFromCart, clearCartItem } = useContext(CartContext)!;

    return (
        <div key={id} className="flex items-center justify-between p-4 mb-4 bg-white rounded-lg shadow-md border border-gray-300 hover:shadow-lg transition-shadow duration-300">
            <div className="flex ">
                <img src={image} alt={product}
                    className="w-16 h-16 object-cover rounded-lg mr-4 border border-gray-200 shadow-sm" />
                <div className="flex flex-col">
                    <p className="text-lg font-semibold text-gray-900">{product}</p>
                    <p className="text-sm text-gray-500">Rs. {price}</p>
                </div>
            </div>
            <div className="flex items-center justify-center mb-5">
                <Button
                    onClick={() => addFromCart(id)} variant="primary" >
                    +
                </Button>
                <div className="mx-2 mt-4 text-sm text-gray-500">
                    count: {quantity}
                </div>
                <Button
                    onClick={() => removeFromCart(id)} variant="primary" className="mr-3">
                    -
                </Button>

                <Button
                    onClick={() => clearCartItem(id)} variant="danger" >
                    Remove
                </Button>
            </div>
        </div>)
}

export default CartCard 