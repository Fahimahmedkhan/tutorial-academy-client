import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Tutorial from '../Tutorial/Tutorial';

const Tutorials = () => {
    const tutorials = useLoaderData();

    return (
        <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10'>
            {
                tutorials.map(tutorial => <Tutorial
                    key={tutorial.id}
                    tutorial={tutorial}
                ></Tutorial>)
            }
        </div>
    );
};

export default Tutorials;