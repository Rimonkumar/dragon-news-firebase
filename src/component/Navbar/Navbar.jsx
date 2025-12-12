import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className='flex justify-between r'>
            <div>
                
            </div>
            <div className='nav flex gap-6'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
               
            </div>
            <div className='login-btn flex items-center gap-7'>
                <img src={user} alt="" />
                <Link to="/auth/login" className='btn btn-primary p-4'>login</Link>
            </div>
            
        </div>
    );
};

export default Navbar;