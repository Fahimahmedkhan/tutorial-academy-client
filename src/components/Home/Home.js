import React from 'react';
import Banner from '../Banner/Banner';
import HomeCard from '../HomeCard/HomeCard';

const Home = () => {
    return (
        <div className='mt-8 mb-8'>
            <Banner></Banner>
            <div className='text-center flex justify-center'>
                <div className='w-4/5 my-28'>
                    <h1 className='text-4xl mb-4'>Improving lives through learning</h1>
                    <p className='text-2xl'>Whether you want to learn or to share what you know, you’ve come to the right place. As a global destination for online learning, we connect people through knowledge</p>
                </div>
            </div>
            <div className='mx-12'>
                <HomeCard></HomeCard>
            </div>
            <div className='text-center flex justify-center'>
                <div className='w-4/5 my-28'>
                    <h1 className='text-4xl mb-4'>Transformative learning for every team</h1>
                    <p className='text-2xl'>We meet all your learning needs, so you don’t have to spend time managing multiple providers.</p>
                </div>
            </div>
        </div>
    );
};

export default Home;