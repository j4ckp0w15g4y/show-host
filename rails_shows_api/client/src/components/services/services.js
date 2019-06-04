import axios from 'axios'

const URL = process.env.PORT || "/api"

export const get_gigs = async () => {
    const res = await axios.get('http://localhost:4567/api/gigs');
    return res.data 
}

export const create_gig = async(gig) => {
    gig.user_id = 1
    const res = await axios({
        method: 'post',
        url: 'http://localhost:4567/api/gigs',
        data: {gig: gig},
        // headers: {
            // Authorization: `Bearer ${token}`
        // }
    })
    return res.data
}