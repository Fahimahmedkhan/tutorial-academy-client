import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialCategory from '../TutorialCategory/TutorialCategory';

const RightSide = () => {
    const tutorialCategories = useLoaderData();
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 m-10'>
            {
                tutorialCategories.map(tutorialCategory => <TutorialCategory
                    key={tutorialCategory.id}
                    tutorialCategory={tutorialCategory}
                ></TutorialCategory>)
            }
        </div>
    );
};

export default RightSide;