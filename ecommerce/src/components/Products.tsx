import { useContext } from "react";
import { CartContext } from "../CartContext";
const Products = () => {
  const { addToCart } = useContext(CartContext)!; 

  const list = [
    { id: 1, product: "watch", price: 250 },
    { id: 2, product: "mobile", price: 500 },
    { id: 3, product: "headset", price: 100 }
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 my-10 mx-10">
      {list.map(item => (
        <div key={item.id} className="flex flex-col justify-center items-center max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <img className="w-24 h-24 mb-3 mt-4 rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="product image" />
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.product}</h5>
          </a>
          <div className="flex">
            <p className="mb-3 mt-3 mr-4 font-normal text-gray-700 dark:text-gray-400">Rs.{item.price}</p>
            <button 
              type="button" 
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-2 py-2.5 text-center me-2 mb-2"
              onClick={() => addToCart(item)} 
            >
              Add to cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
