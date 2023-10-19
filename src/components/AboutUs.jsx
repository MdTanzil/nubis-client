

const AboutUs = () => {
    return (
      <div>
        <div className="hero min-h-screen  mt-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={"/details-2.png"} className="rounded-lg shadow-2xl" />
            <div className="mx-3">
              <p className="text-main font-medium my-3">ABOUT US</p>
              <h1 className="text-4xl font-bold">
                We have ten years <br /> experience in marketing
              </h1>
              <p className="py-6">
                Etiam tempus condimentum congue. In sit amet nisi eget massa
                condimentum lobortis eget ac eros. In hac habitasse platea
                dictumst. Aenean molestie mauris eget sapien sagittis, a
                bibendum magna tincidunt
              </p>
              <button className="btn  bg-main text-white hover:bg-main">
                Details
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;