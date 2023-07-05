import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div>
  {
    cart.length > 0  ? 
    (<div>


      <div>
        {
          cart.map( (item,index) => {
            return <CartItem key={item.id} item={item} itemIndex={index} />
          } )
        }
      </div>

      <div className="flex flex-row items-center justify-between 
    hover:scale-101 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 mr-5 mb-2 rounded-xl outline">

        <div className="">
          <div>Your Cart</div>
          <div>Summary</div>
          <p className="text-green-600 font-semibold">
            <span>Total Items: {cart.length}</span>
          </p>
        </div>

        <div >
          <p>Total Amount: <span className="text-green-600 font-semibold">${totalAmount}</span></p>
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
            CheckOut Now
          </button>
        </div>

      </div>


    </div>) : 
    (<div class=" text-blue-950 text-2xl text-center m-52">
      <h1>Cart Empty</h1>
      <Link to={"/"}>
        <button className="text-gray-700 mt-8 border-2 border-gray-700 rounded-full font-semibold 
          text-2xl p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in">
          Shop Now
        </button>
      </Link>
    </div>)
  }
    </div>
  );
};

export default Cart;
