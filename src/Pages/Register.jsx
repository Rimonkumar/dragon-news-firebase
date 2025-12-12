import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="card bg-base-100 w-full max-w-[500px] shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Register your account </h1>
                <form className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" className="input" name='name' placeholder="Enter your name" />
                    <label className="label">Photo URL</label>
                    <input type="text" className="input" name='photoURL' placeholder="Email" />
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />

                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p> you have  Have An Account <Link className='text-red-400' to="/auth/login">Login!</Link> </p>
            </div>
        </div>
    );
};

export default Register;