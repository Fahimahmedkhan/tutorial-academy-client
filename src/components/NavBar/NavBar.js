import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../utilities/images/logo.png';

const NavBar = () => {
    return (
        <nav className='px-20 py-2 text-xl font-bold border-b-4 border-zinc-300 flex items-center justify-between'>
            <div className='flex items-center justify-between space-x-32'>
                <div className='flex items-center justify-betweens space-x-4'>
                    <img src={logo} alt="" className='h-16 w-16 rounded-full' />
                    <Link to='/' className='hover:text-orange-300'><h1 className='text-2xl'>Tutorial Academy</h1></Link>
                </div>
                <div className='flex items-center justify-betweens space-x-20'>
                    <Link to='/' className='hover:text-orange-300'>Home</Link>
                    <Link to='/courses' className='hover:text-orange-300'>Courses</Link>
                    <Link to='/faq' className='hover:text-orange-300'>FAQ</Link>
                    <Link to='/blog' className='hover:text-orange-300'>Blog</Link>
                </div>
            </div>
            <div className='flex items-center justify-betweens space-x-5'>
                <div>Dark/Light</div>
                <div>
                    <Link to='/login' className='hover:text-orange-300'>Login</Link>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;