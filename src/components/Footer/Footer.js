import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

/**
 * It returns a div with a class of bg-black text-white px-10 py-10 border-t-4 border-zinc-300
 * dark:bg-gray-900. Inside that div, there's another div with a class of flex justify-between
 * items-center space-x-10. Inside that div, there's two more divs. The first div has a class of
 * text-3xl pb-4. Inside that div, there's a Link to the homepage with a class of
 * hover:text-orange-300. Inside that Link, there's an h1 with a class of text-3xl pb-4. The second div
 * has a class of text-xl hover:text-orange-300 pb-2. Inside that div, there's a Link to the courses
 * page with a class of text-xl hover:text-orange-300 pb-2. Inside that Link, there
 * @returns A React component.
 */
const Footer = () => {
    return (
        <div className='bg-black text-white px-10 py-10 border-t-4 border-zinc-300 dark:bg-gray-900'>
            <div className='flex justify-between items-center space-x-10 '>
                <div>
                    <Link to='/' className='hover:text-orange-300'><h1 className='text-3xl pb-4'>Tutorial Academy</h1></Link>
                    <Link to='/courses'><h1 className='text-xl hover:text-orange-300 pb-2'>Teach on <span className='text-orange-300'>Tutorial-A</span></h1></Link>
                    <Link to='/about'><h1 className='text-xl hover:text-orange-300'>About Us</h1></Link>
                </div>
                <div >
                    <div>
                        <h1 className='text-2xl'>Contact Us: </h1>
                    </div>
                    <div className="icons">
                        <a href="https://www.instagram.com/fahim_ahmed_khan_gorbo/" className="icon icon--instagram" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="https://twitter.com/Fahim_Gorbo" className="icon icon--twitter" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/fahim-ahmed-khan-gorbo/" className="icon icon--linkedin" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/Fahimahmedkhan" className="icon icon--github" target="_blank" rel='noreferrer'>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div className='text-white text-center text-xl'>
                <p className='hover:text-orange-400'><i className="fa-regular fa-copyright"></i>2022 Tutorial Academy</p>
            </div>
        </div>
    );
};

export default Footer;