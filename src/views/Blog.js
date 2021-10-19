import '../styles/blog.css'
import BlogCard from '../components/BlogCard'
const Blog = () => {

    const blog=[{
        "id":"101",
        "author":"Suraj Paudel",
        "date":"Oct-9 2021",
        "title":"Udayapur Cement Factory",
        "excerpt":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ",
        "featureImage":"https://ucil.org.np/Content/UserImages/Thumbs/1000_udipyur-cement2019-08-07-06-55-50_InPixio_e9632b86-555d-4f9c-8b4d-70d506fc41d1.jpg",
        "content":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
    },
    {   "id":"102",
        "author":"Raju Chohan",
        "date":"Oct-9 2021",
        "title":"3d Printer Construction",
        "excerpt":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ",
        "featureImage":"https://ak.picdn.net/shutterstock/videos/1016993530/thumb/1.jpg",
        "content":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
    },
    {   "id":"103",
    "author":"Dhan Gharti",
    "date":"Oct-9 2021",
    "title":"Embedded System",
    "excerpt":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ",
    "featureImage":"https://static1.shine.com/l/m/images/blog/Embedded_System_Intro_Types_Applications_Architecture_and_Examples.jpg",
    "content":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
},{
    "id":"104",
    "author":"Suraj Paudel",
    "date":"Oct-9 2021",
    "title":"Udayapur Cement Factory",
    "excerpt":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ",
    "featureImage":"https://ucil.org.np/Content/UserImages/Thumbs/1000_udipyur-cement2019-08-07-06-55-50_InPixio_e9632b86-555d-4f9c-8b4d-70d506fc41d1.jpg",
    "content":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
},
{   "id":"105",
    "author":"Raju Chohan",
    "date":"Oct-9 2021",
    "title":"3d Printer Construction",
    "excerpt":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ",
    "featureImage":"https://ak.picdn.net/shutterstock/videos/1016993530/thumb/1.jpg",
    "content":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
},
{   "id":"106",
"author":"Dhan Gharti",
"date":"Oct-9 2021",
"title":"Embedded System",
"excerpt":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution ",
"featureImage":"https://static1.shine.com/l/m/images/blog/Embedded_System_Intro_Types_Applications_Architecture_and_Examples.jpg",
"content":"It is a long established fact that a rheader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution"
}]
    return (
        <div className="blog">
            <h1>BLOG</h1>
            <div className="container">
             {blog.map(item => (
                    
            <BlogCard key={item.id} blogObject={item}/>
             ))}   
            </div>
        </div>
    )
}

export default Blog;