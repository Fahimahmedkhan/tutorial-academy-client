import React from 'react';
import { Card } from "flowbite-react"

const HomeCart = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 '>
            <Card className='bg-pink-400 p-10'>
                <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Work with us
                </h5>
                <p className="text-xl text-gray-700 dark:text-gray-400">
                    We’re all learners and instructors. We live out our values every day to create a culture that is diverse, inclusive, and committed to helping employees thrive.
                </p>
            </Card>

            <Card className='bg-yellow-300 p-10'>
                <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    See our research
                </h5>
                <p className="text-xl text-gray-700 dark:text-gray-400">
                    We’re committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.
                </p>
            </Card>

            <Card className='bg-purple-400 p-10'>
                <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Read our blog
                </h5>
                <p className="text-xl text-gray-700 dark:text-gray-400">
                    Want to know what we’ve been up to lately? Check out the our blog to get the scoop on the latest news, ideas and projects, and more.
                </p>
            </Card>
        </div>
    );
};

export default HomeCart;