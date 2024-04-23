import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaAngleRight, FaEye } from 'react-icons/fa';
import './blog.css'; // Assuming you have a CSS file for styling
import { CiClock2 } from 'react-icons/ci';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4040/blogsyazar')
      .then(response => {
        setBlogData(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog data:', error);
      });
  }, []);
  useEffect(() => {
    axios.get('http://localhost:4040/blogs')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className='containblog'>
    <div className="blogs-container">
      {blogs.map((blog, index) => (
        <React.Fragment key={blog.id}>
          {blog.id === '1' && (
            <div className="main-card ">
              <img src={blog.image1} alt={blog.name} />
             
                <h3 className='blogname'>{blog.name}</h3>
                
                  <span>Daha Çox</span>
                  <FaAngleRight />
              
              
            </div>
          )}
          {(blog.id === '2' || blog.id === '3' || blog.id === '4') && (
            <div className={`blog-card blog${index}`}>
              <img src={blog.image1} alt={blog.name} />
              <div className="blog-details">
                <h3>{blog.name}</h3>
                <div className='dahacox'> 
                <span>Daha Çox</span>
                  <FaAngleRight /></div>
              </div>
            </div>
          )}
        </React.Fragment>
      ))}
      <div>
        </div>
        </div>
        <div className='blogyazar'>
          <div className='blogyazartop'>
            <div>
            <h4>🚀 Bloq yazıları</h4>
            <p>İstənilən mövzuda yazıçıların hekayələrini, düşüncələrini və təcrübələrini kəşf edin.</p>
          </div></div>
          <div className='blog-posts'>
      {blogData.map(post => (
        <div key={post.id} className="blog-post">
          <div className="card-top">
            <img src={post.img} alt={post.name} />
          </div>
          <div className="card-medium">
            <h3>{post.name}</h3>
            <p>{post.description}</p>
          </div>
          <div className="card-bottom">
            <div className="card-bottom-left">
              <img src={post.yazarimg} alt={post.yazarname} className="round-avatar" />
              <span>{post.yazarname}</span>
            </div>
            <div className="card-bottom-right">
              <span><FaEye /> {post.looks}</span>
              <span><CiClock2 /> {post.date}</span>
            </div>
          </div>
        </div>
      ))}
      </div>
   </div>
    </div>
    
  );
};

export default Blogs;
