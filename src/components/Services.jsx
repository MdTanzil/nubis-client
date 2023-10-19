import React from 'react';

const Services = () => {
    return (
      <div>
        <h2 className="text-4xl font-bold mt-10 text-center mb-10">
          Explore our service
        </h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:grid-cols-3">
          <div className="card p-2 text-gray-900 bg-[#c1e5ff] ">
            <div className="card-icon"></div>
            <div className="card-body">
              <h5 className="card-title font-bold text-lg">
                Analyse your product
              </h5>
              <p>
                Et blandit nisl libero at arcu. Donec ac lectus sed tellus
                mollis viverra. Nullam pharetra ante at nunc elementum
              </p>
              <a className=" w-[100px] rounded-lg text-white p-2 bg-main">
                Learn more
              </a>
            </div>
          </div>
          <div className="card text-gray-900 bg-[#c1e5ff]">
            <div className="card-icon"></div>
            <div className="card-body">
              <h5 className="card-title  font-bold text-lg">
                Evaluate opportunities
              </h5>
              <p>
                Vulputate nibh feugiat. Morbi pellent diam nec libero lacinia,
                sed ultrices velit scelerisque. Nunc placerat justo sem
              </p>
              <a className=" w-[100px] rounded-lg text-white p-2 bg-main">
                Learn more
              </a>
            </div>
          </div>
          <div className="card text-gray-900 bg-[#c1e5ff]">
            <div className="card-icon"></div>
            <div className="card-body">
              <h5 className="card-title font-bold text-lg">
                Find the influencers
              </h5>
              <p>
                Ety suscipit metus sollicitudin euqu isq imperdiet nibh nec
                magna tincidunt, nec pala vehicula neque sodales verum
              </p>
              <a className=" w-[100px] rounded-lg text-white p-2 bg-main">
                Learn more
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Services;