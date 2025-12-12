import React from 'react';
import swimmingImg from "../../assets/swimming.png";
import classImg from "../../assets/class.png";
import playgroundImg from "../../assets/playground.png";

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <p className='font-bold mb-6'>Qzone</p>

            <div className='space-y-9'>
                <img src={swimmingImg} alt="Swimming" />
           
                <img src={classImg} alt="Class" />
            
                <img src={playgroundImg} alt="Playground" />
            </div>

        </div>
    );
};

export default Qzone;
