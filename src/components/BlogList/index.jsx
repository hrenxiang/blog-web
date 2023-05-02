import React from 'react';
import BlogItem from './BlogItem';
import './styles.css';

const BlogList = ({ blogs }) => {
  return (
    <div className='blogList-wrap'>
      {blogs.map((blog, index) => (
        <BlogItem blog={blog} key={index} />
      ))}
    </div>
  );
};

export default BlogList;
