import React from 'react';

const WhatWeDo = () => {
    return (
      <div>
        <div className="hero min-h-screen mt-10 ">
          <div className="hero-content flex-col lg:flex-row">
            <img src={"/details-1.png"} className="rounded-lg " />
            <div className="lg:px-10">
              <p className='text-main font-medium my-3'>WHAT WE DO</p>
              <h1 className="text-4xl font-bold ">
                The right influencer can <br /> boost your conversion
              </h1>
              <p className="py-6">
                Etiam tempus condimentum congue. In sit amet nisi eget massa
                condimentum lobortis eget ac eros. In hac habitasse platea
                dictumst. Aenean molestie mauris eget sapien sagittis, a
                bibendum magna tincidunt
              </p>
              <button className="btn  bg-main text-white hover:bg-main">
                Get product
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default WhatWeDo;