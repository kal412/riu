import "../styles/blog.css";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../axios";
import {EllipsisSpinner} from '../components/LoadingSpinners'
const Blog = () => {

//state declarations
  const [blogs, setBlogs] = useState(null);

  //call hooks
  useEffect(() => {
    const fetchAllBlogs = async () => {
      try {
        const response = await api.get("posts");
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
        <div className="blog">
            <div className="flex-container">
                {blogs.map((item) => (
                <Link key={item.id} to={`/blog/${item.id}`}>
                    <BlogCard blogObject={item} />
                </Link>
                ))}
            </div>
        </div>
  );
};

export default Blog;
