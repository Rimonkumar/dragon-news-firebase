import React from 'react';
import Header from '../component/Header';
import { Outlet, useNavigation } from 'react-router';
import LatesNews from '../component/LatesNews';
import Navbar from '../component/Navbar/Navbar';
import LeftAside from '../component/HomeLayout/LeftAside';
import RightAside from '../component/HomeLayout/RightAside';
import Loading from '../Pages/Loading';

const HomeLayout = () => {
    const {state} = useNavigation();
    return (
        <div>
            <header>
                <Header></Header>
                <section className="w-11/12 mx-auto my-3">
                    <LatesNews></LatesNews>
                </section>

                <nav className='w-11/12 mx-auto my-3 '>
                    <Navbar></Navbar>
                </nav>

            </header>
            <main className='w-11/12 mx-auto  grid grid-cols-12 gap-5'>
               <aside className='col-span-3 sticky top-0 h-fit'> <LeftAside></LeftAside></aside>
                <section className="main-lav col-span-6">
                {state == "loading"? <Loading/> :   <Outlet></Outlet> }
                  
                </section>
                <aside className='col-span-3 sticky top-0 h-fit'><RightAside></RightAside></aside>
                
            </main>

        </div>
    );
};

export default HomeLayout;