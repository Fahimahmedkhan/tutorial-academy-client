import React, { useContext, useState } from 'react';
import { Label, TextInput, Button } from "flowbite-react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider, getAuth, sendEmailVerification } from 'firebase/auth';
import app from '../../firebase/firebase.config';

const Register = () => {

    const { createUser, providerGmailLogin, providerGithubSignIn, providerFacebookSignIn } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setSuccess(false);
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
                setSuccess(true);
                form.reset();
                verifyEmail();
            })
            .catch(error => {
                console.error(error);
                setError(error.message)
            })
    }

    const auth = getAuth(app);

    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                alert('Please Check Your Email to Verify in spam folder')
            })
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

    const handleFacebookSignIn = () => {
        providerFacebookSignIn(facebookProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
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
                                value="Your Full Name"
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
                                value="Your Photo URL"
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
                                htmlFor="password"
                                value="Your Password"
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
                    {
                        error && <p className='text-2xl mx-4 my-4 text-red-800 dark:text-orange-600'>{error}</p>
                    }
                    {
                        success && <p className='text-2xl mx-4 my-4 text-lime-500 dark:text-green-100'>User Created Successfully.</p>
                    }
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
                    <button onClick={handleGoogleSignIn} className="icon icon--google">
                        <i className="fa-brands fa-google"></i>
                    </button>
                    <button onClick={handleFacebookSignIn} className="icon icon--twitter">
                        <i className="fa-brands fa-facebook-f"></i>
                    </button>
                    <button onClick={handleGithubSignIn} className="icon icon--github">
                        <i className="fa-brands fa-github"></i>
                    </button>
                </div>
            </div >
        </div >
    );
};

export default Register;