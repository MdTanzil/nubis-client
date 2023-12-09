import { useLoaderData, useParams } from "react-router-dom";
import ProductCart from "../components/ProductCart";
import { useEffect, useState } from "react";

const BrandDetailsProducts = () => {
  //https://nubis-server.vercel.app/products-brand/alibaba
  const data = useLoaderData([]);
  const [brandInfo, setbrandInfo] = useState({});

  const params = useParams();
  // console.log(params.brand);
  // TODO: fetch brand image

  useEffect(() => {
    fetch(`https://nubis-server.vercel.app/brand-images/${params.brand}`)
      .then((response) => response.json())
      .then((data) => {
        /*
         */
        setbrandInfo(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center mt-5 text-4xl font-medium  capitalize">
        {params.brand}
      </h2>
      <div>
        {/* slider start  */}
        <div className="carousel mt-5 h-[80vh] w-auto">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={brandInfo?.image01} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={brandInfo?.image02} className="w-full" />
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
            <img src={brandInfo?.image03} className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
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
