import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductCart = ({ data }) => {
  const {
    _id,
    name,
    brandName,
    price,
    rating,
    thumnailImage,
  } = data;
  //dark:bg-slate-800
  //"https://images.unsplash.com/photo-1674296115670-8f0e92b1fddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
  return (
    <div>
      {/* <!-- component --> */}
      <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg dark:bg-slate-800 bg-main shadow-md duration-300 hover:scale-105 hover:shadow-lg">
        <img
          className="h-48 w-full object-cover object-center"
          src={thumnailImage}
          alt="Product Image"
        />
        <div className="p-4">
          <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
            {name}
          </h2>
          <p className="mb-2 text-base dark:text-gray-300 text-gray-700">
            Brand : <span className="capitalize">{brandName}</span>
          </p>
          <div className="flex items-center justify-between">
            <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
              Price : ${price}
            </p>
            <p className="text-base  font-medium text-gray-900  dark:text-gray-300">
              Rating : {rating}
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <Link to={`/productDetails/${_id}`}>
              <button className=" p-2 rounded text-base bg-main  font-medium text-white">
                Details
              </button>
            </Link>
            <Link to={`/update-products/${_id}`}>
            <button className=" p-2 rounded text-base bg-main  font-medium text-white">
              Update
            </button>

            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
