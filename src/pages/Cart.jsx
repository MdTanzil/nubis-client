import { useLoaderData } from "react-router-dom";
import CartCard from "./CartCard";
import { useState } from "react";

const Cart = () => {
    const data = useLoaderData()
    const [displayData, setdisplayData] = useState(data);
   
    
    let subtotal = 0
    for (const i of displayData) {
        
        const  p = parseFloat(i.price); 
        subtotal+= p
    }

   
    return (
      <div>
        <div className=" bg-gray-100 pt-20">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {displayData.length > 0 ? (
                displayData.map((d) => (
                  <CartCard
                    key={d._id}
                    setdisplayData={setdisplayData}
                    displayData={displayData}
                    data={d}
                  ></CartCard>
                ))
              ) : (
                <div> You do not have any data in cart</div>
              )}
            </div>
            {/* <!-- Sub total --> */}
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">$ {subtotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">$4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    ${subtotal > 0 ? subtotal + 4.99 : 0.0} USD
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;