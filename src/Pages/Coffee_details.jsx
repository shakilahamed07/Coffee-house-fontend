import React from "react";
import { Link } from "react-router";
import { useLoaderData } from "react-router";

const Coffee_details = () => {
  const coffeeDetails = useLoaderData();
  const {
    name,
    price,
    details,
    supplier,
    taste,
    category,
    photo
  } = coffeeDetails;

  return (
    <div className="mx-2 ">
        <div className="md:py-[50px] py-10 max-w-[1320px] mx-auto">
            <Link className="text-3xl hover:bg-secondary rounded-2xl text-primary p-2  font-bold underline" to="/">
                Back to home
            </Link>
        </div>
        <div className="flex justify-center items-center md:gap-28 bg-base-200 mb-20 max-w-[1320px] mx-auto rounded-2xl py-20 pr-2">
          
          <div className="">
            <img className="md:w-[351px] w-[250px] md:h-[455px] h-[250px]" src={photo} alt="" />
          </div>
          <div className="">
            <h1 className="text-4xl text-primary">Niceties</h1>
            <p className="md:text-2xl"><span className="font-bold ">Name: </span>{name}</p>
            <p className="md:text-2xl"><span className="font-bold ">Price: </span>{price}</p>
            <p className="md:text-2xl"><span className="font-bold ">Supplier: </span>{supplier}</p>
            <p className="md:text-2xl"><span className="font-bold ">Taste: </span>{taste}</p>
            <p className="md:text-2xl"><span className="font-bold ">Category: </span>{category}</p>
            <p className="md:text-2xl"><span className="font-bold ">Details: </span>{details}</p>
          </div>
        </div>
    </div>
  );
};

export default Coffee_details;
