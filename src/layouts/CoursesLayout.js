import React from 'react';
import { Outlet } from 'react-router-dom';
import LeftSideNav from '../components/LeftSideNav/LeftSideNav';

const CoursesLayout = () => {
    return (
        <div className='grid lg:grid-cols-12 md:grid-cols-12 sm:grid-cols-1 gap-4 m-4'>
            <div className='col-span-3 bg-slate-700 text-center rounded-lg'>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className='col-span-9'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default CoursesLayout;