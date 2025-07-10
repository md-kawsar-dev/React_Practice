import React, { useEffect, useState } from 'react';
import Blog from '../blog/Blog';

const Blogs = ({handleAddToBookMarks,handleMarksAsRead}) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data));
    },[]);
    return (
        <div className="w-2/3">
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBookMarks={handleAddToBookMarks} handleMarksAsRead={handleMarksAsRead}></Blog>)
            }
        </div>
    );
};

export default Blogs;