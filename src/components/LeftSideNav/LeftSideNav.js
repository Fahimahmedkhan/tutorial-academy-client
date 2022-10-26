import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNav = () => {
    const [tutorialCategories, setTutorialCategories] = useState([]);

    useEffect(() => {
        fetch('https://tutorial-academy-server-fahimahmedkhan.vercel.app/tutorialCategories')
            .then(res => res.json())
            .then(data => setTutorialCategories(data));
    }, [])
    return (
        <div className='text-2xl p-10 text-white dark:text-white'>
            {
                tutorialCategories.map(tutorialCategory => <h1 key={tutorialCategory.id}>
                    <Link to={`/tutorialCategory/${tutorialCategory.id}`} className='hover:text-orange-500'>{tutorialCategory.name}</Link>
                </h1>)
            }
        </div>
    );
};

export default LeftSideNav;