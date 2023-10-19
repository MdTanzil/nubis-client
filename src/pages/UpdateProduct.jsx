import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  /*
  TODO: add product form design . form will have
  1. image name brand-name type price short description rating ass button
  */

  // fetch single product data
    const data = useLoaderData()

    const navigate = useNavigate('/')
    const updateProduct = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const brandName = event.target.bname.value;
    const type = event.target.type.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const thumnailImage = event.target.timage.value;
    const image01 = event.target.image1.value;
    const image02 = event.target.image2.value;
    const rating = event.target.rating.value;
    const product = {
      name,
      brandName,
      type,
      price,
      rating,
      description,
      thumnailImage,
      image01,
      image02,
    }
    fetch(`http://localhost:3000/products/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Product successfully Updated");
          navigate(`/brand/${brandName}/details`);
        }
      });
  };
  return (
    <div className="mt-10">
      <h2 className="text-center text-main text-4xl font-semibold">
        Update Product
      </h2>
      <div className="flex items-center justify-center p-12">
        {/* <!-- Author: FormBold Team --> */}
        {/* <!-- Learn More: https://formbold.com --> */}
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={updateProduct}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="Product_Title"
                    className="mb-3 block text-base font-medium text-main"
                  >
                    Product Title
                  </label>
                  <input
                    defaultValue={data.name}
                    type="text"
                    name="name"
                    id="Product_Title"
                    placeholder="Product Title"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="bname"
                    className="mb-3 block text-base font-medium text-main"
                  >
                    Brand Name
                  </label>
                  <select
                    defaultValue={data.brandName}
                    name="bname"
                    required
                    className="select select-bordered"
                  >
                    <option disabled selected>
                      Pick one
                    </option>
                    <option value={"amazon"}>Amazon</option>
                    <option value={"walmart"}>Walmart</option>
                    <option value={"ebay"}>ebay</option>
                    <option value={"alibaba"}>Alibaba</option>
                    <option value={"terget"}>terget</option>
                    <option value={"best-buy"}>Best Buy</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="timage"
                className="mb-3 block text-base font-medium text-main"
              >
                Thumbnail Image
              </label>
              <input
                defaultValue={data.thumnailImage}
                type="url"
                name="timage"
                id="timage"
                placeholder="URL"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="image1"
                className="mb-3 block text-base font-medium text-main"
              >
                Image 01
              </label>
              <input
              defaultValue={data.image01}
                type="url"
                name="image1"
                id="image1"
                placeholder="URL"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="image2"
                className="mb-3 block text-base font-medium text-main"
              >
                Image 02
              </label>
              <input
              defaultValue={data.image02}
                type="url"
                name="image2"
                id="image2"
                placeholder="URL"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              />
            </div>

            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="price"
                    className="mb-3 block text-base font-medium text-main"
                  >
                    Price
                  </label>
                  <input
                  defaultValue={data.price}
                    type="number"
                    name="price"
                    id="price"
                    placeholder="Price"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:w-1/2">
                <div className="mb-5">
                  <label
                    htmlFor="rating"
                    className="mb-3 block text-base font-medium text-main"
                  >
                    Rating
                  </label>
                  <input
                  defaultValue={data.rating}
                    type="number"
                    min={0}
                    max={5}
                    name="rating"
                    id="rating"
                    placeholder="Rating"
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
                  />
                </div>
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="type"
                className="mb-3 block text-base font-medium text-main"
              >
                Type
              </label>
              <input
              defaultValue={data.type}
                type="text"
                name="type"
                id="type"
                placeholder="Type"
                className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-black focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="mb-3 block text-base font-medium text-main"
              >
                Short description
              </label>
              <textarea
              defaultValue={data.description}
                id="description"
                placeholder="Short description"
                name="description"
                className="textarea textarea-bordered focus:border-black textarea-md w-full "
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="hover:shadow-form rounded-md bg-main py-3 px-8 text-center text-base font-semibold text-white outline-none"
              >
                Update product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProduct;