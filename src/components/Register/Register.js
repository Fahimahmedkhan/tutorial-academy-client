import React from 'react';
import { useForm } from 'react-hook-form';
import { Label, Button } from "flowbite-react";
import { Link } from 'react-router-dom';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <div className='flex justify-center items-center m-10'>
            <div className='w-1/2 border-2 border-zinc-300 rounded-lg p-4 py-8 my-8'>
                <h1 className='text-3xl mb-8 font-semibold'>Register Please.!</h1>
                <form className="flex flex-col gap-4 text-2xl" onSubmit={handleSubmit((data) => console.log(data))}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="fullName"
                                value="Your Full Name"
                            />
                        </div>
                        <input type='text' className='block border-2 p-2 w-11/12 rounded-lg dark:text-black' {...register('fullName', { required: true })} />
                        {errors.fullName && <p>Full Name is required.</p>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="photoURL"
                                value="Your Photo URL"
                            />
                        </div>
                        <input type='text' className='block border-2 p-2 w-11/12 rounded-lg dark:text-black' {...register('photoURL', { required: true })} />
                        {errors.photoURL && <p>Photo URL is required.</p>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email"
                                value="Your email"
                            />
                        </div>
                        <input type='email' className='block border-2 p-2 w-11/12 rounded-lg dark:text-black' {...register('email', { required: true })} />
                        {errors.email && <p>Email is required.</p>}
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password"
                                value="Your password"
                            />
                        </div>
                        <input type='password' className='block border-2 p-2 w-11/12 rounded-lg dark:text-black' {...register('password', { required: true })} />
                        {errors.password && <p>Password is required.</p>}
                    </div>
                    <Link className='flex justify-end pr-8 text-xl text-semibold hover:text-blue-800' to='/login'>Already Have an Account?</Link>
                    <Button type="submit">
                        Register Now
                    </Button>
                </form>
            </div>
        </div>
    );
};

export default Register;