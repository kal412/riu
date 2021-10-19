import "../styles/blog.css"
export const BlogCard = ({blogObject}) => {
    return (
        <div className="blog-card">
            <div className="blog-card__feature-image">
                <img src={blogObject.featureImage} alt={blogObject.title}/>
            </div>

            <div className="blog-card__body">     
                <h2>{blogObject.title}</h2>
                <p>{blogObject.excerpt}</p>
                <div className="author">
                   Author: {blogObject.author}
                    <br/>
                    <small>{blogObject.date}</small>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;