/* eslint-disable react/no-unknown-property */
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const ProductDetails = () => {
  const data = useLoaderData();
  const {
    _id,
    name,
    brandName,
    type,
    price,
    rating,
    description,
    thumnailImage,
    image01,
    image02,
  } = data;
  const  clickAddToCart = () => {
    const cart = {
      productId: _id,
      name,
      brandName,
      price,
      thumnailImage,
    };
     
    fetch("http://localhost:3000/cart", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(cart),
    }).then(response => response.json())
    .then(data =>{
         if (data.insertedId) {
            toast.success('Item added successfully')
         }
    })

  }
    
      
  
  return (
    <div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            {/* carusel div  */}
            <div className="carousel w-full max-h-96">
              <div id="slide1" className="carousel-item relative  w-full">
                <img src={thumnailImage} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide4" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide2" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <img src={image01} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide1" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide3" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full">
                <img src={image02} className="w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a href="#slide2" className="btn btn-circle">
                    ❮
                  </a>
                  <a href="#slide4" className="btn btn-circle">
                    ❯
                  </a>
                </div>
              </div>
            </div>
            {/* carusel close  */}
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
              {name}
            </h2>
            <p className="text-gray-500 text-sm">
              By{" "}
              <a href="#" className="text-main hover:underline">
                {brandName}
              </a>
            </p>

            <div className="flex items-center space-x-4 my-4">
              <div>
                <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                  <span className="text-main mr-1 mt-1">$</span>
                  <span className="font-bold text-main text-3xl">{price}</span>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-green-500 text-xl font-semibold">Rating {rating}</p>
                <p className="text-gray-400 text-sm">{type}</p>
              </div>
            </div>

            <p className="text-gray-500">{description}</p>

            <div className="flex py-4 space-x-4">
              <div className="relative">
                
              </div>

              <button
                onClick={clickAddToCart}
                type="button"
                className="h-14 px-6 py-2 font-semibold rounded-xl bg-main hover:bg-indigo-500 text-white"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
