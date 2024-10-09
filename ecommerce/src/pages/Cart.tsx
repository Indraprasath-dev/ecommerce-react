import { useContext, useMemo } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CartCard from "../components/CartCard";
import { EMPTY, HOME, SUCCESS } from "../constants/constants";
const Cart = () => {
    const navigate = useNavigate()

    const handleclick = () => {
        navigate(HOME)
    }

    const { cartItems, dispatch } = useContext(CartContext)!

    const totalAmount = useMemo(() => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0)
    }, [cartItems])

    const BuyNow = () => {
        if (cartItems?.length) {
            dispatch({ type: 'CLEAR_ITEM' })
            alert(SUCCESS)
        } else {
            alert(EMPTY)
        }
    }

    return (
        <div className="container mx-auto my-20">
            <h1 className="text-2xl font-bold">Cart</h1>
            {cartItems.length === 0  ? (
                <p>Your cart is empty</p>
            ) : (
                <div className="mt-6">
                    {cartItems.map((item) => (
                        <CartCard
                            id={item.id}
                            product={item.product}
                            price={item.price}
                            image={item.image}
                            quantity={item.quantity}>
                        </CartCard>
                    ))}

                    <div className="mt-6 text-lg font-bold">
                        <p>Total: Rs. {totalAmount}</p>
                    </div>
                </div>
            )}

            <div>
                <Button onClick={BuyNow} variant="secondary">
                    Buy Now
                </Button>            
            </div>

            <div>
                <Button onClick={handleclick} variant="primary">
                    Go to home page
                </Button>
            </div>

        </div>
    );
};

export default Cart;
