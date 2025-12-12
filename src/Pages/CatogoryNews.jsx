import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from "react-router";
import NewsCard from '../component/NewsCard';

const CatogoryNews = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const [catagoryNews , setCatagoryNews] = useState([]);

    useEffect(() => {
        if (id == "0") {
            setCatagoryNews(data);
            return;
        }
        else if (id == "1") {
            const filterdataNews = data.filter(
                (news) => news.others.is_today_pick === true
            );
            setCatagoryNews(filterdataNews);
        }
        else {
            const filterdataNews = data.filter(
                (news) => news.category_id == id
            );
            setCatagoryNews(filterdataNews);
        }
    }, [data, id]);

    return (
        <div>
           <h2 className='font-bold gap-3'>
             Total <span className='text-secondary'>{catagoryNews.length}</span> news found
           </h2>

           <div>
            {
                catagoryNews.map((news) => (
                    <NewsCard key={news.id} news={news} />

                ))
            }
           </div>
        </div>
    );
};

export default CatogoryNews;
