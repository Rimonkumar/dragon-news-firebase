import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
    const {signIn} = use(AuthContext)
    const handlelogin = (e) =>{
        e.preventDefault();
        
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);
        signIn(email,password)
         .then(result => {
                console.log("User login:", result.user);
                
            })
            .catch(error => {
                console.log("Error:", error.message);
                alert(error)
            });
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl mx-auto">
                <div className="card-body p-10">
                    <h1 className="text-3xl font-bold">Login Your account</h1>

                    <form onSubmit={handlelogin} className="fieldset">
                        
                        <label className="label">Email</label>
                        <input 
                            type="email" 
                            name="email"
                            className="input" 
                            placeholder="Email"
                            autoComplete="email"
                        />

                        <label className="label">Password</label>
                        <input 
                            type="password" 
                            name="password"
                            className="input" 
                            placeholder="Password"
                            autoComplete="current-password"
                        />

                        <div><a className="link link-hover">Forgot password?</a></div>

                        <button type='submit' className="btn btn-neutral mt-4">
                            Login
                        </button>
                    </form>

                    <p>
                        Don’t Have An Account?  
                        <Link className='text-red-400' to="/auth/register"> Register!</Link>
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Login;
