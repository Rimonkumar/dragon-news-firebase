import React, { useEffect, useState } from 'react';
import Header from '../component/Header';
import RightAside from '../component/HomeLayout/RightAside';
import NewsDetailsCard from '../component/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDatils = () => {
    const data = useLoaderData();
    const {id} = useParams();
    
    const [news,setNews ]= useState({});

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    if(newsDetails){
        setNews(newsDetails);
    }
}, [data, id]);


    return (
        <div>
            <header>
                <Header></Header>
            </header>
            <main className='w-11/12 mx-auto grid grid-cols-12'>
            <section className='col-span-9'>
                <h2 className='font-bold mb-5' >Newa Details</h2>
                <NewsDetailsCard news={news} ></NewsDetailsCard>
            </section>
            <aside className='col-span-3 ' >
                <RightAside></RightAside>
            </aside>

            </main>
          
        </div>
    );
};

export default NewsDatils;