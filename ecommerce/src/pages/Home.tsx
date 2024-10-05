import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { list } from "../datas/ProductData"
import ProductCard from "../components/ProductCard";

const Products = () => {
    const { cartItems } = useContext(CartContext)!;
    
    const getItemQuantity = (id: number) => {
        const carItem = cartItems.find((item) => item.id === id)
        return carItem?.quantity ?? 0
    }

    return (
        <div className="flex flex-wrap justify-center gap-6 my-20 mx-10">
            {list.map(item => (
                <ProductCard
                    id={item.id}
                    product={item.product}
                    price={item.price}
                    image={item.image}
                    getItemQuantity={getItemQuantity}
                />
            ))}
        </div>
    );
};

export default Products;
