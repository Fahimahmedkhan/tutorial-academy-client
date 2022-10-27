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
        <div className='text-2xl text-white dark:text-white py-28'>
            {
                tutorialCategories.map(tutorialCategory => <div key={tutorialCategory.id}>
                    <button className='py-4'><Link to={`/tutorialCategories/${tutorialCategory.id}`} className='hover:text-orange-500'>{tutorialCategory.name}</Link></button>
                </div>)
            }
        </div>
    );
};

export default LeftSideNav;