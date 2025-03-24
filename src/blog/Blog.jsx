import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import posts from './blog-posts.json'
import '../styles/Blog.css'
import BlogPost from "./BlogPost";


const Blog = () => {

    const location = useLocation().pathname;

    const getLastViewedPost = () => {
        return localStorage.getItem('lastViewedPost');
      };

    const lastViewedPostId = getLastViewedPost()

    const setLastViewedPost = (path) => {
        localStorage.setItem('lastViewedPost', path)   
    }

    return (
        <div className="blog">

            {posts.map((post, index) => (
            
            <div key={index} className="blog-post">
                <h2>{post.title}</h2>
                <p><strong>Date:</strong> {post.date}</p>
                <p>{post.summary}</p>
                
                <Link to={`/blog/${post.id}`} state={{title:post.title, date:post.date, path:post.content}}>Read More</Link>
                </div>
                ))}
                
        </div>
    )
}

export default Blog;