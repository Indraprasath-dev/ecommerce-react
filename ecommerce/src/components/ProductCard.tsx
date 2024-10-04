import Button from './Button';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

interface ProductCardProps {
    id: number,
    product: string,
    price: number,
    image: string,
    getItemQuantity: (id: number) => number
}

const ProductCard = ({ id, product, price, image, getItemQuantity }: ProductCardProps) => {
    const { addToCart, addFromCart, removeFromCart } = useContext(CartContext)!;

    return (
        <div className="flex flex-col items-center max-w-xs p-6 bg-white border border-gray-200 rounded-lg shadow-lg transform transition-transform  dark:bg-gray-800 dark:border-gray-700">
            <img className="w-32 h-32 mb-4 rounded-lg object-cover shadow-md"
                src={image}
                alt={product} />
            <h5 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                {product}
            </h5>
            <p className="text-lg font-medium text-gray-700 dark:text-gray-400 mb-4">
                Rs. {price}
            </p>

            {getItemQuantity(id) !== 0
                ? (<div className="flex items-center justify-center">
                        <Button
                            onClick={() => addFromCart(id)} variant="primary">
                            +
                        </Button>
                        <div className="mx-2 mt-5 text-sm text-gray-500">
                            count: {getItemQuantity(id)}
                        </div>
                        <Button
                            onClick={() => removeFromCart(id)} variant="primary">
                            -
                        </Button>
                    </div>)
                : (<Button onClick={() => addToCart({ id, product, price, image })} variant="primary">
                        Add to Cart
                    </Button>)
            }
        </div>
    );
};

export default ProductCard;
