import React from 'react';
import { Card } from "flowbite-react";
import { Link } from 'react-router-dom';

const Tutorial = ({ tutorial }) => {
    const { title, thumbnail_url, SubTitle, details } = tutorial;

    return (
        <div className=''>
            <div className="max-w-sm">
                <Card imgSrc={thumbnail_url}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {title}
                    </h5>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {SubTitle}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">
                        {details}
                    </p>
                    <div className='flex justify-start items-start'>
                        <button className='bg-blue-400 hover:bg-orange-600 text-xl text-white rounded-lg px-4 py-2'><Link to={`/tutorial/${tutorial._id}`}>Details</Link></button>
                    </div>
                </Card>
            </div>

        </div>
    );
};

export default Tutorial;