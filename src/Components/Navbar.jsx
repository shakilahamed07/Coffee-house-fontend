import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[url(https://i.ibb.co/HDrnXTVM/15.jpg)] py-3">
      <div className="flex gap-3 items-center ml-5">
        <img
          className="md:w-15 w-10"
          src="https://i.ibb.co/rRW20QXX/logo1.png"
          alt=""
        />
        <h1 className="md:text-6xl text-3xl text-white">Espresso Emporium</h1>
      </div>
      
      <div className="mr-5">
        <Link to="/sign-in" className="md:text-4xl text-2xl text-primary btn btn-secondary px-8 py-5 border-none">Login</Link>
        <Link to="/all-users" className="md:text-4xl text-2xl text-primary btn btn-secondary px-8 py-5 border-none ml-5">Users</Link>
      </div>


    </div>
  );
};

export default Navbar;
