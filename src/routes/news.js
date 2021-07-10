const express = require("express");
const axios = require("axios");

const newsRouter = express.Router();

newsRouter.get('', async(req, res) => {
    try {
        const endpoint = await axios.get(`https://raddy.co.uk/wp-json/wp/v2/posts`);
        res.render('news', { articles: endpoint.data });
    } catch (err) {
        if (err.response) {
            console.log(err.response.data);
            console.log(err.response.status);
        } else if (err.request)
            console.log(err.request);
        else
            console.log("Error", err.message);
    }
});

 module.exports = newsRouter;
