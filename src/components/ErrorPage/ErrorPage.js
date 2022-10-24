import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <section className='body-container'>
            <div className="container">
                <h2 className='text-3xl'>Oops! Page not found.</h2>
                <h1>404</h1>
                <p className='text-3xl pb-4'>We can't find the page you're looking for.</p>
                <Link to='/' className='text-3xl'>Go back home</Link>
            </div>
        </section>
    );
};

export default ErrorPage;