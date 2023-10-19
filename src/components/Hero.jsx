
const Hero = () => {
    return (
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="./header-image.png"
            className="lg:max-w-xl max-w-sm rounded-lg shadow-2xl"
          />
          <div className="">
            <h1 className="text-5xl font-bold">
              Find influencers <br /> for your products
            </h1>
            <p className="py-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              dignissim, neque ut ultrices sollicitudin
            </p>
            <button className="btn bg-main hover:bg-main text-white">
              offered services
            </button>
          </div>
        </div>
      </div>
    );
};

export default Hero;