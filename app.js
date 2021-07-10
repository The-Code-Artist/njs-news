const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 5000;

// Middleware configuration.
app.use(express.static("public"));
app.use('/css', express.static(`${__dirname}public/css`));
app.use('/img', express.static(`${__dirname}public/img`));
app.use('/js', express.static(`${__dirname}public/js`));
app.use(bodyParser.urlencoded({ extended: true }));

// Templating engine configuration.
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Routes
const newsRoute = require("./src/routes/news");
const articleRoute = require("./src/routes/article");

app.use('/', newsRoute);
app.use("/article", articleRoute);

// Listen on port 5000
app.listen(port, () => console.log(`App is running on port ${port}`));
