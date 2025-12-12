import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

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
                <button className='btn btn-primary p-4'>login</button>
            </div>
            
        </div>
    );
};

export default Navbar;