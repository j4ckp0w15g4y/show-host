import axios from 'axios'

const URL = process.env.PORT || "/api"

export const get_gigs = async () => {
    const res = await axios.get('https://showhost-nyc.herokuapp.com/api/gigs');
    return res.data 
}

export const create_gig = async(gig) => {
    // gig.user_id = 1
    const res = await axios({
        method: 'post',
        url: 'https://showhost-nyc.herokuapp.com/api/gigs',
        data: {gig: gig},
        // headers: {
            // Authorization: `Bearer ${token}`
        // }
    })
    return res.data
}

export const get_user_gigs = async (userId) => {
    const res = await axios.get(`https://showhost-nyc.herokuapp.com/api/users/${userId}/gigs`);
    return res.data 
}

export const delete_gig = async(gigId) => {
    const res = await axios({
        method: 'delete',
        url: `https://showhost-nyc.herokuapp.com/api/gigs/${gigId}`,
    })
}

export const update_gig = async(gigId, data) => {
    const res = await axios.put(`https://showhost-nyc.herokuapp.com/api/gigs/${gigId}`, data)
    return res.data 
}