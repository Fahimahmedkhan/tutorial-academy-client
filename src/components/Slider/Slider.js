import React from 'react';
import { Carousel } from "flowbite-react"
import Banner1 from '../../utilities/images/slider (1).jpg';
import Banner2 from '../../utilities/images/slider (2).jpg';
import Banner3 from '../../utilities/images/slider (3).jpg';
import Banner4 from '../../utilities/images/slider (4).jpg';
import Banner5 from '../../utilities/images/slider (5).jpg';
import Banner6 from '../../utilities/images/slider (6).jpg';
import Banner7 from '../../utilities/images/slider (7).jpg';
import Banner8 from '../../utilities/images/slider (8).jpg';

const Slider = () => {
    return (
        <div className='h-96 w-full'>
            <Carousel slideInterval={3000}>
                <img src={Banner1} alt="" />
                <img src={Banner2} alt="" />
                <img src={Banner3} alt="" />
                <img src={Banner4} alt="" />
                <img src={Banner5} alt="" />
                <img src={Banner6} alt="" />
                <img src={Banner7} alt="" />
                <img src={Banner8} alt="" />
            </Carousel>
        </div>
    );
};

export default Slider;