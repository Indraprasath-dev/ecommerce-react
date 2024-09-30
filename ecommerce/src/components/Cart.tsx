import { useContext } from "react";
import { CartContext } from "../CartContext"; 
const Cart = () => {
  const { cartItems, totalAmount } = useContext(CartContext)!
  return (
    <div className="container mx-auto my-10">
      <h1 className="text-2xl font-bold">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div className="mt-6">
          {cartItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 py-2">
              <p className="font-medium">{item.product}</p>
              <p className="text-gray-600">Rs. {item.price}</p>
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
