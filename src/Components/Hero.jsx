import React from "react";

const Hero = () => {
  return (
    <div
      className="bg-[url(https://i.ibb.co/tMwS3x2L/3.png)]
    bg-center bg-cover"
    >
      <div className="md:py-[288px] py-[220px] 2xl:pr-[307px] 2xl:pl-[609px] lg:ml-60 text-center lg:text-start">
        <h1 className="lg:text-6xl text-5xl mb-4 text-white">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <p className="mb-8 text-gray-400 max-w-xl lg:mx-0 mx-auto">
          It's coffee time - Sip & Savor - Relaxation in every sip! Get the
          nostalgia back!! Your companion of every moment!!! Enjoy the beautiful
          moments and make them memorable.
        </p>
        <button className="btn  border-none bg-secondary text-primary">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
