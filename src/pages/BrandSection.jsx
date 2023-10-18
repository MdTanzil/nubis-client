import { Link } from "react-router-dom";


const BrandSection = () => {
    return (
      <div className="mt-10">
        <h2 className="text-center text-5xl font-bold mb-10">Brands</h2>
        <div className="grid grid-cols-3 gap-4">
          <Link to={"/brand/amazon/details"}>
            <div>
              <div className="relative grid h-[250px] w-full max-w-[450px] flex-col items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center ">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/XFmQvtP/a-generic-white-10-us-noto-email-v2016-us-main-CB627448186.png')] bg-cover bg-clip-border bg-center  shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                    Amazon
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/brand/walmart/details"}>
            <div>
              <div className="relative grid h-[250px] w-full max-w-[450px] flex-col items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center ">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/HC9Lzrq/walmart-logo-promo.png')] bg-cover bg-clip-border bg-center  shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                    Walmart
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/brand/ebay/details"}>
            <div>
              <div className="relative grid h-[250px] w-full max-w-[450px] flex-col items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center ">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/DGjpv78/ebay-logo-1-1200x630-margin.png')] bg-cover bg-clip-border bg-center  shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                    ebay
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/brand/alibaba/details"}>
            <div>
              <div className="relative grid h-[250px] w-full max-w-[450px] flex-col items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center ">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/9vhmpSS/alib28-1666928169.jpg')] bg-cover bg-clip-border bg-center  shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                    Alibaba
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/brand/target/details"}>
            <div>
              <div className="relative grid h-[250px] w-full max-w-[450px] flex-col items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center ">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/yyKrmmh/129848779-gettyimages-1246720364.jpg')] bg-cover bg-clip-border bg-center  shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                    target
                  </h2>
                </div>
              </div>
            </div>
          </Link>
          <Link to={"/brand/best-buy/details"}>
            <div>
              <div className="relative grid h-[250px] w-full max-w-[450px] flex-col items-end justify-center overflow-hidden rounded-xl bg-clip-border text-center ">
                <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://i.ibb.co/wKrgjf8/BBY-logo-blog-header-v01.jpg')] bg-cover bg-clip-border bg-center  shadow-none">
                  <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
                </div>
                <div className="relative p-6 px-6 py-14 md:px-12">
                  <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white ">
                    Best Buy
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    );
};

export default BrandSection;