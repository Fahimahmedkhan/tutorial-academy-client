import React from 'react';
import { Card } from "flowbite-react";
import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user } = useContext(AuthContext);

    return (
        <div className='mt-10'>
            <h1 className='text-4xl text-center'>User Profile:</h1>
            <div className='flex justify-center items-center m-10'>
                <div className="max-w-sm">
                    <Card imgSrc={user.photoURL}>
                        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            User Name: <span className='text-xl font-normal pl-2'>{user.displayName}</span>
                        </p>
                        <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            User Email: <span className='text-xl font-normal pl-2'>{user.email}</span>
                        </p>
                        <div className="flex justify-end items-end">
                            {/* The button to open modal */}
                            <label htmlFor="my-modal" className="btn modal-button text-white text-xl font-bold border-0 dark:text-black bg-blue-600 hover:bg-orange-500">Edit Profile</label>
                        </div>
                    </Card>
                </div>
            </div>
            <div>
                {/* Put this part before </body> tag */}
                <input type="checkbox" id="my-modal" className="modal-toggle" />
                <div className="modal ">
                    <div className="modal-box bg-white">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl">Your Name</span>
                            </label>
                            <label className="input-group">
                                <span className='bg-white border-2'>Full Name</span>
                                <input type="text" placeholder={user.displayName} className="input input-bordered bg-white" />
                            </label>

                            <label className="label">
                                <span className="label-text text-xl">Your Photo URL</span>
                            </label>
                            <label className="input-group">
                                <span className='bg-white border-2'>Your Photo URL</span>
                                <input type="text" placeholder={user.photoURL} className="input input-bordered bg-white" />
                            </label>
                        </div>
                        <div className="modal-action">
                            <label htmlFor="my-modal" className="btn modal-button text-white text-xl font-bold border-0 dark:text-black bg-blue-600 hover:bg-orange-500">Edit</label>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Profile;