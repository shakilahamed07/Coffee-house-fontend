import React, { useState } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import { Link, useLoaderData } from "react-router";
import Coffee_card from "./Coffee_card";

const PopularCoffee = () => {

    const initiual = useLoaderData();
    const [allCoffee, setCoffee] = useState(initiual);

  return (
    <div className="mt-10 lg:mt-20 bg-[url(https://i.ibb.co/0VQJ4bP3/11.png)]">
      <p className="text-center">--- Sip & Savor ---</p>
      <h1 className="text-center text-5xl text-primary mt-4 mb-10">
        Our Popular Products 
      </h1>

      <div className="  text-center">
        <Link
          className="text-3xl bg-secondary rounded-xl text-primary py-2 px-3  font-bold border border-primary flex w-45 gap-3 mx-auto"
          to="/add-coffee"
        >
          Add Coffee <GiCoffeeCup />
        </Link>
      </div>

      <div className="grid lg:grid-cols-2 py-14 2xl:mx-73 xl:mx-10 mx-3  justify-center gap-6 ">
        {
            allCoffee.map(coffee => <Coffee_card allCoffee={allCoffee} setCoffee={setCoffee} coffee={coffee} key={coffee._id}></Coffee_card>)
        }
      </div>
    </div>
  );
};

export default PopularCoffee;
