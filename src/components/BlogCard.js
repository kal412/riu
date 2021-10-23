import "../styles/blog.css"
export const BlogCard = ({blogObject}) => {

    const excerptLength = 260;
    const truncateString = (string = '', maxLength = 50) => 
  string.length > maxLength 
    ? `${string.substring(0, maxLength)}<b>....</b>`
    : string


    return (
        <div className="blog-card">
            <div className="blog-card__feature-image">
                <img src={blogObject.acf.image.url} alt={blogObject.title.rendered}/>
            </div>

            <div className="blog-card__body">     
                <h2>{blogObject.title.rendered}</h2>
                <p dangerouslySetInnerHTML={{__html: truncateString(blogObject.excerpt.rendered, excerptLength)}} />
                <div className="blog-card__body-author">
                   Author: {blogObject.author} 
                    <small>{blogObject.date}</small>
                </div>
            </div>
        </div>
    )
}

export default BlogCard;