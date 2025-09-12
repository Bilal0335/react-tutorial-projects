import React from "react";

const Cars = ({username,btnText="hello"}) => {
    // console.log("props",props);
  return (
    <div>
      <div className="relative h-[400px] w-[300px] rounded-md mb-5 m-auto">
        <img
          src="https://images.pexels.com/photos/590471/pexels-photo-590471.jpeg"
          alt="AirMax Pro"
          className="z-0 h-full w-full rounded-md object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-left">
          <h1 className="text-lg font-semibold text-white">{username}</h1>
          <p className="mt-2 text-sm text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            debitis?
          </p>
          <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
            {btnText} &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cars;
