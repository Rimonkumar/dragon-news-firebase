import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
    return (
        <div>
            <p className='font-bold mb-5'> Find us on </p>

            <div  className='join join-vertical w-full'>

                <button className="btn bg-base-100 justify-start join-item">
                  <FaFacebook></FaFacebook>   Facebook
                </button>
                <button className="btn bg-base-100 justify-start join-item">
                 <FaTwitter></FaTwitter>  Twitter
                </button>
                <button className="btn bg-base-100 justify-start join-item">
                  <FaInstagram></FaInstagram>  Instragram
                </button>

            </div>
        </div>
    );
};

export default FindUs;