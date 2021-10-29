
import React, { useEffect,useState } from "react";
import api from '../../axios'

const Author = ({authorId}) => {
    const [authorDetails,setAuthorDetails] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get( `users/${authorId}`)
            setAuthorDetails(response.data)
           //console.log("comp.author: ",response.data)
        }
        
        fetchData()
    }, [authorId])

    return (
        <div className="author">
            <div className="author__dp">
            <img src={authorDetails!=null? authorDetails.avatar_urls[96] : "http://2.gravatar.com/avatar/26002d17ac45faf83fe40cc1c1477607?s=96&d=mm&r=g"} alt="author"/>
            </div>
            <div className="author__details">
            Author: {authorDetails!=null? authorDetails.name : "Loading.."}
            <br />
            <small>Date: Oct-19 2021</small>
            </div>
        </div>
    )
}

export default Author