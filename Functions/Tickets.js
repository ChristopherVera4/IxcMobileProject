const { default: axios } = require("axios");
const { axiosConfi } = require("../config/axios");

async function RequestTickets(page, email) {
    let axiosResponse = null;
    const config = axiosConfi(`search.json?page=${page}&query=type:ticket requester:${email} tags:portal&sort_by=created_at&sort_order=desc`)
    await axios.get(`${config.baseUrl}`, config.option).then(response => {
        axiosResponse = response
    }).catch(error=>{
        console.log("Error",error)
    })

    return axiosResponse
}


module.exports = {
    RequestTickets
}