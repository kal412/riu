import React, { useEffect, useState } from "react";
import "../styles/blog.css";
import api from "../axios";
import { EllipsisSpinner } from "../components/LoadingSpinners";
import Author from "../components/Blog/Author";

const BlogContent = ({ match }) => {
  //state declaration
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await api.get(`posts/${match.params.id}`);
        setBlogData(response.data);
        //console.log(response.data)
      } catch (err) {}
    };
    fetchBlog();
  }, [match.params.id]);

  if (blogData == null) return <EllipsisSpinner />;
  else
    return (
      <div className="body wrapper">
        <h1>Blog</h1>

        {/* main blog content body */}

        <div className="blog-container">

          {/* blog header */}
          <div className="blog-header">
            <div className="blog-header__feature-image">
              <img src={blogData.acf.feature_image.url} alt="blog titile" />
            </div>

            <div className="blog-header__info">
              <h2>{blogData.title.rendered}</h2>
            </div>

            <div className="blog-header__author">
              <Author authorId={blogData.author} />
            </div>
          </div>

          {/* blog content */}
          <div className="blog-content">
            <div
              className="blog-content__data wp-content"
              dangerouslySetInnerHTML={{ __html: blogData.content.rendered }}
            ></div>
          </div>
        </div>
      </div>
    );
};

export default BlogContent;
