import React from 'react';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleAddToBookMarks,handleMarksAsRead}) => {
    const { title, cover_img, author_name, posted_time, reading_time,hashtags } = blog;
    return (
        <div className='mb-20'>
            <img className='w-full h-80 object-cover' src={cover_img} alt={title} />
            <div className="flex justify-between items-center my-2 mt-8">
                <div className="author flex items-center gap-2">
                    <img src={blog.author_img} alt={author_name} className="rounded-full w-14" />
                    <div>
                        <span className='font-bold'>{author_name}</span>
                        <p>{posted_time}</p>
                    </div>
                </div>
                <div className='flex items-center'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookMarks(blog)} className='cursor-pointer'><CiBookmark /></button>
                </div>
            </div>
            <h2 className='text-4xl font-bold mt-4'>{title}</h2>
            <div className='mt-4'>
                {hashtags.map((tag,idx) => (
                    <span key={idx}><a href="#">{tag}</a></span>
                ))}
            </div>
            <div className='mt-4'>
                <span onClick={()=>handleMarksAsRead(blog)} className='text-blue-500 text-md py-2 rounded underline cursor-pointer'>Mark as read</span>
            </div>
        </div>
    );
};

export default Blog;