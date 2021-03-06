import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'
import Author from '../components/Blog/Author'

const BlogContent =  ({ match }) => {
  //state declaration
  const content = "\n<p class=\"has-text-align-left\">Hello world, this is a test paragraph this is a test paragraph</p>\n\n\n<p> </p>\n<p>Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world <img loading=\"lazy\" class=\"wp-image-119 alignright\" src=\"http://localhost/RIU/wordpress/wp-content/uploads/2021/10/logo.png\" alt=\"\" width=\"299\" height=\"148\" /> this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blog. paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blog.</p>\n<h2>Topic 1</h2>\n<p style=\"text-align: center;\">Hello world. Hello world this is a paragraph hello world this is a blog.<img loading=\"lazy\" class=\"wp-image-51 alignleft\" src=\"http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png\" alt=\"\" width=\"251\" height=\"274\" />Hello world this is a paragraph hello world this is a blog. Hello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello w</p>\n<h1>lorem Ipsum</h1>\n<ul>\n<li>adxab</li>\n<li>aduhud</li>\n<li>adjhj</li>\n</ul>"
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`posts/${match.params.id}`);
        setBlogData(response.data)
      } catch (err) {}
    };
    fetchBlog();
  },[]);

   
  if(blogData==null)
    return(     
         <EllipsisSpinner />
    )
  else
  return (
    <div className="wrapper">
      <h1>Blog</h1>
      <div className="blog-header">
      <div className="blog-header__feature-image">
            <img src={blogData.acf.feature_image.url} alt="blog titile" />
      </div>

        <div className="blog-header__info">
              <h2>{blogData.title.rendered}</h2>
          </div>
        
        <div className="blog-header__author">
            <Author />
        </div>
     
         
      </div>

         

      
    <div className="blog-content">
      <div
        className="blog-content__data wp-content"
        dangerouslySetInnerHTML={{ __html: blogData.content.rendered }}
      ></div>
    </div>

    </div>
    
  );
};

export default BlogContent;
