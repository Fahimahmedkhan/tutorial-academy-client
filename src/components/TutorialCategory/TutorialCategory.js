import React from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const TutorialCategory = ({ tutorialCategory }) => {
    const { name, thumbnail_url } = tutorialCategory;
    return (
        <div className="max-w-sm">
            <Card>
                <img src={thumbnail_url} alt='' className='h-40 rounded-lg' />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
                <div className='flex justify-start items-start'>
                    <button className='bg-blue-400 hover:bg-orange-600 text-xl text-white rounded-lg px-4 py-2'><Link to={`/tutorialCategories/${tutorialCategory.id}`}>Details</Link></button>
                </div>
            </Card>
        </div>
    );
};

export default TutorialCategory;