
import React, { useEffect,useState } from "react";
import api from '../../axios'

const Author = () => {
    const [authorDetails,setAuthorDetails] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get( `users/1`)
            setAuthorDetails(response.data)
        }
        
        fetchData()
    }, [])

    return (
        <div className="author">
            <div className="author__dp">
            <img src={authorDetails!=null? authorDetails.avatar_urls[96] : "Loading.."} alt="author"/>
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