import React from 'react';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Courses = () => {

    return (
        <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-4 m-4'>
            <div className='col-span-3 bg-slate-700 text-center rounded-lg'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-span-9'>
                <h1 className='text-4xl '>Hello</h1>
            </div>
        </div>
    );
};

export default Courses;