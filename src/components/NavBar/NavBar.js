import React from 'react';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import logo from '../../utilities/images/logo.png';
import Toggle from '../Toggle/Toggle';
import { FaUser } from 'react-icons/fa';
import { Avatar } from "flowbite-react";


const NavBar = () => {
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: isActive ? '24px' : '20px',
        }
    }
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className='px-20 py-2 text-xl font-bold border-b-4 border-zinc-300 flex items-center justify-between text-black dark:text-white bg-white dark:bg-gray-900'>
            <div className='flex items-center justify-between space-x-32'>
                <div className='flex items-center justify-betweens space-x-4'>
                    <img src={logo} alt="" className='h-16 w-16 rounded-full' />
                    <NavLink to='/' className='hover:text-orange-300'><h1 className='text-2xl'>Tutorial Academy</h1></NavLink>
                </div>
                <div className='flex items-center justify-betweens space-x-20'>
                    <NavLink style={navLinkStyles} to='/' className='hover:text-orange-300'>Home</NavLink>
                    <NavLink style={navLinkStyles} to='/courses' className='hover:text-orange-300'>Courses</NavLink>
                    <NavLink style={navLinkStyles} to='/faq' className='hover:text-orange-300'>FAQ</NavLink>
                    <NavLink style={navLinkStyles} to='/blog' className='hover:text-orange-300'>Blog</NavLink>
                </div>
            </div>
            <div className='flex items-center justify-betweens space-x-5'>
                <div>
                    <Toggle></Toggle>
                </div>
                <div>
                    {
                        user?.uid ?
                            <>
                                <button onClick={handleLogOut} className='hover:text-orange-300'>Log out</button>
                            </>
                            :
                            <NavLink style={navLinkStyles} to='/login' className='hover:text-orange-300'>Login</NavLink>
                    }
                </div>
                <div>
                    {user?.photoURL ?
                        <Avatar
                            img={user?.photoURL}
                            rounded={true}
                        />
                        : <FaUser></FaUser>
                    }
                </div>
            </div>
        </nav>
    );
};

export default NavBar;