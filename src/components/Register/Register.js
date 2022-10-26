import React, { useContext } from 'react';
import { Label, TextInput, Button } from "flowbite-react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {

    const { createUser } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const fullName = form.fullName.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(fullName, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
            })
            .catch(error => console.error(error));
    }

    return (
        <div className='flex justify-center items-center m-10'>
            <div className='w-1/2 border-2 border-zinc-300 rounded-lg p-4 py-8 my-8'>
                <h1 className='text-4xl mb-8 font-semibold'>Register Please.!</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="fullName"
                            />
                        </div>
                        <TextInput
                            className='lock border-2 p-2 w-11/12 rounded-lg dark:text-black'
                            id="fullName"
                            type="text"
                            name="fullName"
                            placeholder="Your Full Name"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photoURL"
                            />
                        </div>
                        <TextInput
                            className='lock border-2 p-2 w-11/12 rounded-lg dark:text-black'
                            id="photoURL"
                            name="photoURL"
                            type="text"
                            placeholder="Your Photo URL"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                            />
                        </div>
                        <TextInput
                            className='lock border-2 p-2 w-11/12 rounded-lg dark:text-black'
                            id="email1"
                            name="email"
                            type="email"
                            placeholder="name@mail.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                            />
                        </div>
                        <TextInput
                            className='lock border-2 p-2 w-11/12 rounded-lg dark:text-black'
                            id="password"
                            name="password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <Link className='flex justify-end pr-8 text-xl text-semibold hover:text-blue-800 dark:hover:text-orange-500' to='/login'>Already Have an Account?</Link>
                    <Button type="submit">
                        <h1 className='text-2xl'>Register Now</h1>
                    </Button>
                </form>
                <div className='flex justify-center items-center mt-10 mb-5 space-x-4'>
                    <hr className='border-2 bg-black border-black w-48 dark:bg-white dark:border-white' />
                    <h1 className='text-4xl font-semibold'>OR</h1>
                    <hr className='border-2 bg-black border-black w-48 dark:bg-white dark:border-white' />
                </div>
                <div className="icons bg-gray-700 mt-5 ">
                    <a href="https://www.linkedin.com/in/fahim-ahmed-khan-gorbo/" className="icon icon--google" target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-google"></i>
                    </a>
                    <a href="https://twitter.com/Fahim_Gorbo" className="icon icon--twitter" target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://github.com/Fahimahmedkhan" className="icon icon--github" target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div >
        </div >
    );
};

export default Register;