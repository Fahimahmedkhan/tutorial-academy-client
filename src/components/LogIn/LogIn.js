import React, { useContext } from 'react';
import { Label, TextInput, Button } from "flowbite-react";
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider } from 'firebase/auth';

const LogIn = () => {
    const { signIn, providerGmailLogin, providerGithubSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const navigate = useNavigate();
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                navigate('/')
            })
            .catch(error => console.error(error))
    }

    const handleGoogleSignIn = () => {
        providerGmailLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    const handleGithubSignIn = () => {
        providerGithubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='flex justify-center items-center m-10'>
            <div className='w-1/2 border-2 border-zinc-300 rounded-lg p-4 py-8 my-8'>
                <h1 className='text-4xl mb-8 font-semibold'>Login Please.!</h1>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your Email"
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
                                htmlFor="password1"
                                value="Your Password"
                            />
                        </div>
                        <TextInput
                            className='lock border-2 p-2 w-11/12 rounded-lg dark:text-black'
                            id="password1"
                            name="password"
                            type="password"
                            required={true}
                        />
                    </div>
                    <div className='flex justify-between items-center px-4'>
                        <Link className='text-xl text-semibold hover:text-blue-800 dark:hover:text-orange-500' to='/forget'>Forget Password??</Link>
                        <Link className='text-xl text-semibold hover:text-blue-800 dark:hover:text-orange-500' to='/register'>Create an Account</Link>
                    </div>
                    <Button type="submit">
                        <h1 className='text-2xl'>Login</h1>
                    </Button>
                </form>
                <div className='flex justify-center items-center mt-10 mb-5 space-x-4'>
                    <hr className='border-2 bg-black border-black w-48 dark:bg-white dark:border-white' />
                    <h1 className='text-4xl font-semibold'>OR</h1>
                    <hr className='border-2 bg-black border-black w-48 dark:bg-white dark:border-white' />
                </div>
                <div className="icons bg-gray-700 mt-5 ">
                    <button onClick={handleGoogleSignIn} className="icon icon--google">
                        <i className="fa-brands fa-google"></i>
                    </button>
                    <a href="https://twitter.com/Fahim_Gorbo" className="icon icon--twitter" target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <button onClick={handleGithubSignIn} className="icon icon--github">
                        <i className="fa-brands fa-github"></i>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default LogIn;