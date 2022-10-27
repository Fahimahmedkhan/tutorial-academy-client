import React from 'react';
import Slider from '../Slider/Slider';

const Banner = () => {
    return (
        <div className='lg:flex mg:flex sm:block justify-center items-center space-x-2 w-full m-4'>
            <div className='w-1/2'>
                <Slider></Slider>
            </div>
            <div className='w-1/2'>
                <h1 className='text-4xl'>We share knowledge with the world</h1>
            </div>
        </div>
    );
};

export default Banner;