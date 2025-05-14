import React from "react";
import Hero from "../Components/Hero";
import Services from "../Components/Services";
import FollowUs from "../Components/FollowUs";
import PopularCoffee from "../Components/PopularCoffee";

const Home = () => {
  return (
    <div className="">
        <Hero/>
        <Services/>
        <PopularCoffee/>
        <FollowUs/>
    </div>
  );
};

export default Home;
