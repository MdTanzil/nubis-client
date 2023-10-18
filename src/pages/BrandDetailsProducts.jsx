import { useLoaderData, useParams } from "react-router-dom";
import ProductCart from "../components/ProductCart";

const BrandDetailsProducts = () => {
  //http://localhost:3000/products-brand/alibaba
  const data = useLoaderData();

  const params = useParams();
  // console.log(params.brand);
  // TODO: add on click feature
  return (
    <div>
      <h2 className="text-center text-4xl font-medium  capitalize">
        {params.brand}
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3">
        {data.length > 0 ? (
          data.map((data) => (
            <ProductCart key={data._id} data={data}></ProductCart>
          ))
        ) : (
          <div className="my-10 text-3xl font-semibold text-center">
            Do not have any product
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandDetailsProducts;
