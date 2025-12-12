import React, { use } from 'react';
import { NavLink } from 'react-router';
import userimg from "../../assets/user.png"
import { Link } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
    const { user, logout } = use(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                alert("You are logged out successfully");
            })
            .catch((error) => {
                console.log("Error:", error.message);
            });
    };


    return (
        <div className='flex justify-between r'>
            {user && user.email}
            <div>
                
            </div>
            <div className='nav flex gap-6'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
               
            </div>
            <div className='login-btn flex items-center gap-7'>
                <img src={userimg} alt="" />
                {
                    user ? (
                        <button onClick={handleLogout} className='btn btn-primary p-4'> Logout</button>
                    ) : 
                    <Link to="/auth/login" className='btn btn-primary p-4'>login</Link>

                }
            </div>
            
        </div>
    );
};

export default Navbar;