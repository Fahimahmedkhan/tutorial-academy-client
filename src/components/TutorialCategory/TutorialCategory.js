import React from 'react';
import { Card } from "flowbite-react";

const TutorialCategory = ({ tutorialCategory }) => {
    const { name, thumbnail_url } = tutorialCategory;
    return (
        <div className="max-w-sm">
            <Card>
                <img src={thumbnail_url} alt='' className='h-40 rounded-lg' />
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {name}
                </h5>
            </Card>
        </div>
    );
};

export default TutorialCategory;