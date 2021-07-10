const express = require("express");
const axios = require("axios");

const articleRouter = express.Router();

articleRouter.get("/:id", async (req, res) => {
  try {
    const endpoint = await axios.get(
      `https://raddy.co.uk/wp-json/wp/v2/posts/${req.params.id}`
    );

    res.render("article", { article: endpoint.data });
  } catch (err) {
    if (err.response) {
      res.render("article", { article: null, response: err.response.data });
      console.log(err.response.data);
      console.log(err.response.status);
    } else if (err.request) {
      res.render("article", { article: null, response: err.response.data });
      console.log(err.request);
    } else {
      res.render("article", { article: null, response: err.response.data });
      console.log("Error", err.message);
    }
  }
});

module.exports = articleRouter;
