import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Checkout = () => {
    const courseDetails = useLoaderData();
    const title = courseDetails.title;
    const details = courseDetails.details;
    
    return (
        <div className='flex justify-center items-center'>
            <div className='text-center m-10 w-96'>
                <h1 className='text-2xl font-semibold p-10'>You Checked: {title}</h1>
                <h2 className='text-2xl font-semibold'>Details: <span className='text-xl font-normal'>{details}</span></h2>
            </div>
        </div>
    );
};

export default Checkout;