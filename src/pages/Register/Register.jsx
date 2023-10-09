import React from 'react';
import { useState } from 'react';

import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('')
    const { createUser } = useContext(AuthContext)


    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        setRegisterError('')
        setSuccess('')
        if (password.length < 6) {
            setRegisterError('Password should be 6 character')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setRegisterError('Use Uppercase in your password ')
            return;
        } else if (!/[@#$%^&-+=()]/.test(password)) {
            setRegisterError('Use Symbol in your password ')
            return;
        }

        createUser(email, password)
            .then(res => {
                console.log(res.user)
                setSuccess('Your registration is complete')
                
            })
            .catch(error => {
                console.log(error)
                setRegisterError(error.message)
            })

            
    }
   
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:w-1/2">

                        <img src={'https://i.ibb.co/r4LZ9Z3/beautiful-woman-long-red-dress-walks-around-city-with-her-husband.jpg'} alt="" />
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">Register now!</h1>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Registration</button>
                            </div>
                            {
                                registerError && <p className='text-red-700 text-xl'>{registerError}</p>
                            }
                            {
                                success &&
                                <div>
                                    <p className='text-green-800 text-xl'>Your Registration Successfuly done</p>
                                    
                                </div>
                            }
                            <p className='mt-4'>Your already have an account <Link to='/login' className='text-red-500 font-bold'>Log in Now</Link></p>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Register;