import React from 'react';
import { Label, TextInput, Button } from "flowbite-react";
import { Link } from 'react-router-dom';

const LogIn = () => {
    return (
        <div className='flex justify-center items-center m-10'>
            <div className='w-1/2 border-2 border-zinc-300 rounded-lg p-4 py-8 my-8'>
                <h1 className='text-3xl mb-8 font-semibold'>Login Please.!</h1>
                <form className="flex flex-col gap-4">
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
                            type="password"
                            required={true}
                        />
                    </div>
                    <div className='flex justify-between items-center px-4'>
                        <Link className='text-xl text-semibold hover:text-blue-800' to='/forget'>Forget Password??</Link>
                        <Link className='text-xl text-semibold hover:text-blue-800' to='/register'>Don't have an account?</Link>
                    </div>
                    <Button type="submit">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default LogIn;