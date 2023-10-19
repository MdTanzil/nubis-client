/* eslint-disable react/prop-types */

import toast from "react-hot-toast";

const CartCard = ({ data, setdisplayData, displayData }) => {
  // console.log(data);
  //   console.log(displayData);
  const deleteCartItem = (_id) => {
    console.log(_id);
    fetch(
      `https://nubis-server-832ynm1s6-tanzils-projects-637ef886.vercel.app/cart/${_id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success("Data deleted successfully");
          const filterdata = displayData.filter((d) => d._id != _id);
          setdisplayData(filterdata);
        }
      });
  };
  return (
    <div>
      <div className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
        <img
          src={data?.thumnailImage}
          alt="product-image "
          className="w-full max-h-20 rounded-lg sm:w-40"
        />
        <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
          <div className="mt-5 sm:mt-0">
            <h2 className="text-lg font-bold text-gray-900">{data?.name}</h2>
            <p className="mt-1 text-xs text-gray-700">{data?.brandName}</p>
          </div>
          <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
            <div className="flex items-center border-gray-100"></div>
            <div className="flex items-center space-x-4">
              <p className="text-sm">Price : {data?.price}</p>
              <button
                onClick={() => deleteCartItem(data?._id)}
                className="btn hover:bg-main btn-sm bg-main text-white"
              >
                x
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
