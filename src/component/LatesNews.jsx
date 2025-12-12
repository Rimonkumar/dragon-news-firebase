import React from 'react';
import Marquee from 'react-fast-marquee';

const LatesNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <p className="text-base-100 bg-secondary p-1.5">Latest</p>

            <Marquee className='flex ' pauseOnHover={true} speed={50} >
                 <p className='font-semibold'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
            </Marquee>
           
        </div>
    );
};

export default LatesNews;