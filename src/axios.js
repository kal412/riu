import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost/RIU/wordpress/wp-json/wp/v2/'
})

export default api