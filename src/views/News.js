import "../styles/blog.css";
import ViewHeader from "../components/ViewHeader";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'

const Blog = () => {

//state declarations
  const [blogs, setBlogs] = useState(null);

  //call hooks
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await api.get("news");
        setBlogs(response.data);
      } catch (err) {}
    };
    fetchAllBlogs();
  }, []);

  if(!blogs)
    return(
        <EllipsisSpinner />
    )
 else
    return (
      <React.Fragment>
        <ViewHeader title="News"/>
        <div className="wrapper blog">
            <div className="flex-container">
                {blogs.map((item) => (
                <Link key={item.id} to={`/news/${item.id}`}>
                    <BlogCard blogObject={item} />
                </Link>
                ))}
            </div>
        </div>
      </React.Fragment>
  );
};

export default Blog;
