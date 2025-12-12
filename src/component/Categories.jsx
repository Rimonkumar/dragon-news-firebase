import React, { use } from 'react';
import { NavLink } from 'react-router';

const catagoryPromice = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
    const catagories = use(catagoryPromice);

    return (
        <div>
            <h2 className='font-bold'>All Catagories {catagories.length}</h2>

            <div className='grid grid-cols-1 mt-5 gap-3'>
                {
                    catagories.map((category) => 
                        (<NavLink key={category.id} className={'btn bg-base-100 border-0 hover:bg-base-300 text-accent font-semibold'}
                        to={`/category/${category.id}`}
                        >{category.name} </NavLink>))
                }

            </div>
        </div>
    );
};

export default Categories;