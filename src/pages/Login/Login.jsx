import { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
   
    const [error, setError]=useState(null)
    const { googleLogin, signin } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('login', location)
    // google log in
    const handleSocialLogin = (media) => {
        media()
            .then(res => {
                console.log(res)
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => console.log(error))
    }



   
   
    // email password log in


    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        signin(email, password)
            .then(res => {
                console.log(res.user);
                
                navigate(location?.state ? location.state : '/')
                
            })
            .catch(error => {
                console.log(error)
                setError(error)
            })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left lg:w-1/2">

                        <img src={'https://i.ibb.co/0htyKkC/hurry-up-make-wish-group-happy-people-celebrating-birthday-among-friends-smiling-425904-9348.jpg'} alt="" />
                    </div>
                    <div className="card flex-shrink-0 lg:w-1/2 max-w-md shadow-2xl bg-base-100">
                        <h1 className="text-5xl text-center font-bold">LogIn now!</h1>
                        <form onSubmit={handleLogin} className="card-body">
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
                            
                            <div className="form-control mt-6 ">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            {
                                error && <p className='text-red-600'>Email and Password do not match</p>
                            }
                            <div className='mt-6'>
                                <button className='btn ' onClick={() => handleSocialLogin(googleLogin)}>Log in with<FaGoogle></FaGoogle></button>
                            </div>
                            
                           
                            <p className='mt-4'>Your do not have an account <Link to='/register' className='text-red-500 font-bold'>Register Now</Link></p>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;