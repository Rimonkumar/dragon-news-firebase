import React from 'react';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
    // console.log(news)
    return (
        <div className='px-6'>
           <img className='w-full h-[300px] object-cover gap-4' src={news.image_url} alt="" />
           <h2 className='text-2xl'>{news.title}</h2>
           <p>{news.details} </p>
           <Link to={`/category/${news.category_id}`}> <button className='btn btn-secondary'>All news in this category</button> </Link>
        </div>
    );
};

export default NewsDetailsCard;