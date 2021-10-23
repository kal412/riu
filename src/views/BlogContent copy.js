import React,{useEffect,useState} from 'react'
import '../styles/blog.css'
import api from "../axios"

const BlogContent = ({match}) => {
  // const baseURL = 'http://localhost/RIU/wordpress/wp-json/wp/v2/blog-posts/${blogID}'
 // const blogID = 115//match.params.id

 const initialBlogData = {
    "id": 117,
    "date": "2021-10-11T20:22:50",
    "date_gmt": "2021-10-11T14:37:50",
    "guid": {
      "rendered": "http://localhost/RIU/wordpress/?post_type=blog-posts&#038;p=117"
    },
    "modified": "2021-10-11T20:22:50",
    "modified_gmt": "2021-10-11T14:37:50",
    "slug": "sakdnssd",
    "status": "publish",
    "type": "blog-posts",
    "link": "http://localhost/RIU/wordpress/blog-posts/sakdnssd/",
    "title": {
      "rendered": "sakdnssd"
    },
    "excerpt": {
      "rendered": "<p>ASDADA</p>\n",
      "protected": false
    },
    "author": 1,
    "featured_media": 0,
    "comment_status": "open",
    "ping_status": "closed",
    "template": "",
    "meta": [],
    "acf": {
      "categories": "Web Development",
      "image": {
        "ID": 51,
        "id": 51,
        "title": "244975469_1220189635127401_7437085662928279888_n",
        "filename": "244975469_1220189635127401_7437085662928279888_n.png",
        "filesize": 306379,
        "url": "http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png",
        "link": "http://localhost/RIU/wordpress/?attachment_id=51",
        "alt": "",
        "author": "1",
        "description": "",
        "caption": "",
        "name": "244975469_1220189635127401_7437085662928279888_n",
        "status": "inherit",
        "uploaded_to": 50,
        "date": "2021-10-10 05:59:48",
        "modified": "2021-10-10 05:59:48",
        "menu_order": 0,
        "mime_type": "image/png",
        "type": "image",
        "subtype": "png",
        "icon": "http://localhost/RIU/wordpress/wp-includes/images/media/default.png",
        "width": 1243,
        "height": 1353,
        "sizes": {
          "thumbnail": "http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png",
          "thumbnail-width": 138,
          "thumbnail-height": 150,
          "medium": "http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png",
          "medium-width": 276,
          "medium-height": 300,
          "medium_large": "http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png",
          "medium_large-width": 768,
          "medium_large-height": 836,
          "large": "http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png",
          "large-width": 800,
          "large-height": 871,
          "1536x1536": "http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png",
          "1536x1536-width": 1243,
          "1536x1536-height": 1353,
          "2048x2048": "http://localhost/RIU/wordpress/wp-content/uploads/2021/10/244975469_1220189635127401_7437085662928279888_n.png",
          "2048x2048-width": 1243,
          "2048x2048-height": 1353
        }
      },
      "image_captain": "",
      "image_description": "aDS",
      "content": "<p>DASSADJNS<strong>DJNMK</strong>LA SDSdAD</p>\n"
    },
    "_links": {
      "self": [
        {
          "href": "http://localhost/RIU/wordpress/wp-json/wp/v2/blog-posts/117"
        }
      ],
      "collection": [
        {
          "href": "http://localhost/RIU/wordpress/wp-json/wp/v2/blog-posts"
        }
      ],
      "about": [
        {
          "href": "http://localhost/RIU/wordpress/wp-json/wp/v2/types/blog-posts"
        }
      ],
      "author": [
        {
          "embeddable": true,
          "href": "http://localhost/RIU/wordpress/wp-json/wp/v2/users/1"
        }
      ],
      "replies": [
        {
          "embeddable": true,
          "href": "http://localhost/RIU/wordpress/wp-json/wp/v2/comments?post=117"
        }
      ],
      "wp:attachment": [
        {
          "href": "http://localhost/RIU/wordpress/wp-json/wp/v2/media?parent=117"
        }
      ],
      "curies": [
        {
          "name": "wp",
          "href": "https://api.w.org/{rel}",
          "templated": true
        }
      ]
    }
  }

 const [blogData, setBlogData] = useState([]);
 
 useEffect(()=>{
        const fetchBlog = async () =>{
            try{
                    const response = await api.get('blog-posts/115')
                    console.log(response.data)
                    setBlogData(response.data)
            }catch(err){

            }
        }
 },[])


    return (
        <div className="blog-content">
            <h1 className="title-font center">{blogData.title.rendered}</h1>
            <div className="author">
                Author: ram shyam
                <br/>
                <small>{blogData.date}</small>
            </div>

            <div className="blog-content__feature-image">
                <img src={blogData.acf.image.url} alt="blog titile"/>
                
            </div>
           <div className="blog-content__data" dangerouslySetInnerHTML={{__html: blogData.acf.content}} />

             
            
        </div>
    )
}

export default BlogContent
