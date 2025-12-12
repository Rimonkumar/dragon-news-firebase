import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { createUser, setUser } = use(AuthContext);

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                console.log("User created:", result.user);
                setUser(user);
            })
            .catch(error => {
                console.log("Error:", error.message);
            });
    };

    return (
        <div className="card bg-base-100 w-full max-w-[500px] shrink-0 shadow-2xl mx-auto">
            <div className="card-body">
                <h1 className="text-3xl font-bold">Register your account</h1>

                <form onSubmit={handleRegister} className="fieldset">
                    <label className="label">Your Name</label>
                    <input type="text" name="name" className="input" required />

                    <label className="label">Photo URL</label>
                    <input type="text" name="photoURL" className="input" required />

                    <label className="label">Email</label>
                    <input type="email" name="email" className="input" required />

                    <label className="label">Password</label>
                    <input type="password" name="password" className="input" required />

                    <button type="submit" className="btn btn-neutral mt-4">
                        Register
                    </button>
                </form>

                <p>
                    Already have an account?
                    <Link className="text-red-400" to="/auth/login"> Login!</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
