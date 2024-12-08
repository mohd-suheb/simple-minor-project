import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom';
import Pagination from '../components/Pagination';
import Blogs from '../components/Blogs';

const CategoryPage = () => {

    const navigation = useNavigate();
    const location = useLocation();
    const Category = location.pathname.split("/").at(-1);

  return (
    <div>
      <Header/>
      <div className='flex flex-row '>
        <button className='mt-[50px]'
        onClick={() => navigation(-1)}

        >
            Back
        </button>
        <h2> 
            Blogs on <span>{Category}</span>
        </h2>
      </div>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default CategoryPage
