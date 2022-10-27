import React from 'react';
import Banner from '../Banner/Banner';
import HomeCard from '../HomeCard/HomeCard';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import ReactImageMagnify from 'react-image-magnify';
import Image from '../../utilities/images/image.jpg';
import ResizeImage from '../../utilities/images/rsz_image.jpg';

/**
 * It returns a div with a bunch of other components inside of it
 * @returns A div with a banner, a div with a card, and a map.
 */
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
            <div className='lg:flex mg:flex sm:block justify-center items-center space-x-2 w-full m-4 mb-20'>
                <div className='w-1/2'>
                    <ReactImageMagnify {...{
                        smallImage: {
                            alt: 'Wristwatch by Ted Baker London',
                            isFluidWidth: true,
                            src: ResizeImage
                        },
                        largeImage: {
                            src: Image,
                            width: 1200,
                            height: 1800
                        }
                    }} />
                </div>
                <div className='w-1/2'>
                    <h1 className='text-4xl'>We share knowledge with the world</h1>
                </div>
            </div>
            <div className='h-96 mx-10'>
                {/* center={[51.505, -0.09]} is Latitude and Longitude */}
                <MapContainer style={{ height: '100%', width: '100%' }} center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[51.505, -0.09]}>
                        <Popup>
                            Unknown Location.
                        </Popup>
                    </Marker>
                </MapContainer>
            </div>
        </div>
    );
};

export default Home;