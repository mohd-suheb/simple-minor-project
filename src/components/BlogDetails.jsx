import React from 'react'
import { NavLink } from 'react-router-dom'

const BlogDetails = ({post}) => {
  return (
    <div className='mt-[50px] mx-auto w-[470px] '>
      <NavLink to={`/blog/${post.id}`} >
        <span className='text-[20px] font-bold '>{post.title}</span>
      </NavLink>
      <p className='text-[15px]'>
        By
        <span>{post.author}</span> on {" "}
        
        <NavLink to={`/categories/${post.category}`}>
            <span className='font-bold underline'>{post.category}</span>
        </NavLink>
      </p>
      <p className='text-[15px]'> Posted on {post.date} </p>
      <p className='text-[10px] mt-3 text-gray-600 '> {post.content}</p>
      <div>
        {post.tags.map( (tag, index) => (
            <NavLink key={index} to={`/tags/${tag.replaceAll(" ","-")}`}>
                <span className='text-blue-600 text-[10px] '>{`#${tag}`}</span>
            </NavLink>
        ) )}
      </div>
    </div>
  )
}

export default BlogDetails
