import React from 'react';
import Error from '../assets/404/404.gif';

const ErrorElement = () => {
    return (
        <div>
            <div className="md:py-[50px] py-10 max-w-[1320px] mx-auto">
            <Link className="text-3xl hover:bg-secondary rounded-2xl text-primary p-2  font-bold underline" to="/">
                Back to home
            </Link>
            </div>
            <div className="">
                <img src={Error} alt="" />
            </div>
        </div>
    );
};

export default ErrorElement;