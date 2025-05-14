import React from 'react';
import CoffeeImg1 from '../assets/cups/Rectangle 9.png'
import CoffeeImg2 from '../assets/cups/Rectangle 10.png'
import CoffeeImg3 from '../assets/cups/Rectangle 11.png'
import CoffeeImg4 from '../assets/cups/Rectangle 12.png'
import CoffeeImg5 from '../assets/cups/Rectangle 13.png'
import CoffeeImg6 from '../assets/cups/Rectangle 14.png'
import CoffeeImg7 from '../assets/cups/Rectangle 15.png'
import CoffeeImg8 from '../assets/cups/Rectangle 16.png'

const FollowUs = () => {
    return (
        <div className="mt-10 lg:mt-20 max-w-[1320px] mx-auto">
            <p  className='text-center'>Follow Us Now</p>
            <h1 className='text-center text-5xl text-primary mt-2 lg:mb-12'>Follow on Instagram</h1>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  py-14 px-2 mx-auto justify-center gap-6'>
            <img width="600px" className='hidden lg:block' src={CoffeeImg1} alt="" />
            <img width="600px" className='hidden lg:block' src={CoffeeImg2} alt="" />
            <img width="600px" src={CoffeeImg3} alt="" />
            <img width="600px" src={CoffeeImg4} alt="" />
            <img width="600px" src={CoffeeImg5} alt="" />
            <img width="600px" src={CoffeeImg6} alt="" />
            <img width="600px" src={CoffeeImg7} alt="" />
            <img width="600px" src={CoffeeImg8} alt="" />
            </div>
        </div>
    );
};

export default FollowUs;