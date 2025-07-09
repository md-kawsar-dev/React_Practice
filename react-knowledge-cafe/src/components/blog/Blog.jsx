import React from 'react';

const Blog = ({blog}) => {
    const { title, cover_img, author_name, posted_time, reading_time,hashtags } = blog;
    return (
        <div>
            <img className='w-full h-80 object-cover' src={cover_img} alt={title} />
            <div className="flex justify-between items-center my-2">
                <div className="author flex items-center gap-2">
                    <img src={blog.author_img} alt={author_name} className="rounded-full" />
                    <div>
                        <span className='font-bold'>{author_name}</span>
                        <p>{posted_time}</p>
                    </div>
                </div>
                <p>Reading time: {reading_time} minutes</p>
            </div>
            <h2>{title}</h2>
            <div>
                {hashtags.map(tag => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>
        </div>
    );
};

export default Blog;