import React from 'react';

const Navbar = () => {
    return (
        <div className='flex gap-3 justify-center items-center bg-[url(https://i.ibb.co/HDrnXTVM/15.jpg)] py-3'>
            <img className='md:w-15 w-10' src="https://i.ibb.co/rRW20QXX/logo1.png" alt="" />
            <h1 className='md:text-6xl text-3xl text-white'>Espresso Emporium</h1>
        </div>
    );
};

export default Navbar;