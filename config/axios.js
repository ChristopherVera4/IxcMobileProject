const axiosConfi = (route) => ({
    baseUrl:`https://soportelatam1693238736.zendesk.com/api/v2/${route}`,
    option:{
        headers:{
            'Content-Type':'applicacion/json',
            'Authorization': `Bearer 0be25cf454a029f66ed4dffdc57f9e1a4899779c6daf80f4bed613c2953c7b72`
        }
    }
})

module.exports = {axiosConfi}