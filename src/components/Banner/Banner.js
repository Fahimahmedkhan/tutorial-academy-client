import React from 'react';
import Slider from '../Slider/Slider';

const Banner = () => {
    return (
        <div className='flex justify-center items-center space-x-2'>
            <div className=''>
                <h1 className='text-4xl'>We share knowledge with the world</h1>
            </div>
            <div className='w-2/4'>
                <Slider></Slider>
            </div>
        </div>
    );
};

export default Banner;