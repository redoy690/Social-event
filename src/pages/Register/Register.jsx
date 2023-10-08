import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const handleSubmit = (e) =>{
        e.preventDefault();
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        

        if(password.length < 6){
            toast.error("Password must be at least 6 characters")
            return ;
        }

        createUser(email,password)
        .then(res=>console.log(res.user))
        .catch(error=>console.log(error))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-1/2">
                        
                        <img src={'https://i.ibb.co/r4LZ9Z3/beautiful-woman-long-red-dress-walks-around-city-with-her-husband.jpg'} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-1/2 max-w-md shadow-2xl bg-base-100">
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
                            <p className='mt-4'>Your already have an account <Link to='/login' className='text-red-500 font-bold'>Log in Now</Link></p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;