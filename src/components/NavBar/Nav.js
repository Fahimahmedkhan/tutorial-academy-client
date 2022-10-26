import React, { useContext } from 'react';
import { Navbar, Dropdown, Avatar, Tooltip } from "flowbite-react";
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { NavLink } from 'react-router-dom';
import logo from '../../utilities/images/logo.png';
import Toggle from '../Toggle/Toggle';

const Nav = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinkStyles = ({ isActive }) => {
        return {
            fontWeight: isActive ? 'bold' : 'normal',
            fontSize: isActive ? '24px' : '20px',
        }
    }

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className='text-2xl border-b-4 border-zinc-300'>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand to="/">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9"
                        alt="Tutorial Academy Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        Tutorial Academy
                    </span>
                </Navbar.Brand>
                <div className="flex justify-center items-center space-x-6 md:order-2">
                    <Toggle></Toggle>
                    {
                        user?.uid ?
                            <>
                                <Dropdown
                                    arrowIcon={false}
                                    inline={true}
                                    label={
                                        <Tooltip
                                            content={user.displayName}
                                            placement="top"
                                        >
                                            <Avatar alt="User settings" img={user.photoURL} rounded={true} />
                                        </Tooltip>}
                                >
                                    <Dropdown.Header>
                                        <span className="block text-sm pb-2">
                                            {
                                                user.displayName
                                            }
                                        </span>
                                        <span className="block truncate text-sm font-medium">
                                            {
                                                user?.email
                                            }
                                        </span>
                                    </Dropdown.Header>
                                    <Dropdown.Item>
                                        <NavLink to='/profile'>Profile</NavLink>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item onClick={handleLogOut}>
                                        Sign out
                                    </Dropdown.Item>
                                </Dropdown>
                            </>
                            :
                            <NavLink to='/login' className='hover:text-orange-300'>Login</NavLink>
                    }
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <NavLink onClick={navLinkStyles} to="/" className='hover:text-orange-300'>
                        Home
                    </NavLink>
                    <NavLink onClick={navLinkStyles} to="/courses" className='hover:text-orange-300'>
                        Courses
                    </NavLink>
                    <NavLink onClick={navLinkStyles} to="/faq" className='hover:text-orange-300'>
                        FAQ
                    </NavLink>
                    <NavLink onClick={navLinkStyles} to="/blog" className='hover:text-orange-300'>
                        Blog
                    </NavLink>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Nav;