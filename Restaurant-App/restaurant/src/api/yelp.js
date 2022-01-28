import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer CTWwivppG53i37QAbcP6moxuCcq7DsgBmaQ_mG9QAKDIL3CELLawQ5zTDsuFARfbhDdAoBh3KWGz7Xgl620gl7cxpgkoZAHDcU8zq-hGI0BMr-2YBb1g_uMWuLHeYXYx'
    }
})