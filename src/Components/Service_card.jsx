import React from 'react';

const Service_card = ({title, dis, icon}) => {
    return (
        <div className='max-w-[250px] mx-auto text-primary '>
            <img src={icon} alt="" />
            <h1 className='text-4xl mt-4 mb-2'>{title}</h1>
            <p>{dis}</p>
        </div>
    );
};

export default Service_card;