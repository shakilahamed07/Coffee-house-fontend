import React from 'react';
import Service_card from './Service_card';
import ServiceIcon1 from '../assets/icons/1.png'
import ServiceIcon2 from '../assets/icons/2.png'
import ServiceIcon3 from '../assets/icons/3.png'
import ServiceIcon4 from '../assets/icons/4.png'

const Services = () => {
    return (
        <div className='grid md:grid-cols-2 lg:grid-cols-4 bg-base-200 py-14 px-2 space-y-20 lg:space-y-0 mx-auto justify-center gap-6'>
            <Service_card icon={ServiceIcon1} title="Awesome Aroma" dis="You will definitely be a fan of the design & aroma of your coffee"></Service_card>

            <Service_card icon={ServiceIcon2} title="High Quality" dis="We served the coffee to you maintaining the best quality"></Service_card>

            <Service_card icon={ServiceIcon3} title="Pure Grades" dis="The coffee is made of the green coffee beans which you will love"></Service_card>

            <Service_card icon={ServiceIcon4} title="Proper Roasting" dis="Your coffee is brewed by first roasting the green coffee beans"></Service_card>
        </div>
    );
};

export default Services;