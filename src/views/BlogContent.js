import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'
import Author from '../components/Blog/Author'

const BlogContent =  ({ match }) => {
  //state declaration
  const content = "\n<p class=\"has-text-align-left\">Hello world, this is a test paragraph this is a test paragraph</p>\n\n\n<p><img loading=\"lazy\" class=\"wp-image-119 alignright\" src=\"http://localhost/RIU/wordpress/wp-content/uploads/2021/10/logo.png\" alt=\"\" width=\"256\" height=\"127\" /></p>\n<p>Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blog. paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blog Hello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blog.</p>\n<h2>Topic 1</h2>\n<p style=\"text-align: center;\">Hello world. Hello world this is a paragraph hello world this is a blog.<img loading=\"lazy\" class=\"wp-image-51 alignleft\" src=\"http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png\" alt=\"\" width=\"251\" height=\"274\" />Hello world this is a paragraph hello world this is a blog. Hello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blogHello world this is a paragraph hello world this is a blog.</p>\n<p> </p>"
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        let response = await api.get(`blog-posts/117`);
        setBlogData(response.data)
      } catch (err) {}
    };
    fetchBlog();
  }, []);

   
  if(!blogData)
    return(     
         <EllipsisSpinner />
    )
  else
  return (
    <div>
      <div className="blog-header">
        <div className="blog-header__info">
              <h2 >Title: {blogData.title.rendered}</h2>
              <Author />
          </div>
     
          <div className="blog-header__feature-image">
            <img src={blogData.acf.image.url} alt="blog titile" />
          </div>
      </div>

         

      
    <div className="blog-content">
      <div
        className="blog-content__data wp-content"
        dangerouslySetInnerHTML={{ __html: content }}
      ></div>
    </div>

    </div>
    
  );
};

export default BlogContent;
