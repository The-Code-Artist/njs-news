const express = require("express");

const app = express();
const port = 5000;

// Middleware configuration.
app.use(express.static('public'));
app.use('/css', express.static(`${__dirname}public/css`));
app.use('/img', express.static(`${__dirname}public/img`));
app.use('/js', express.static(`${__dirname}public/js`));

// Templating engine configuration.
app.set("views", "./src/views");
app.set("view engine", "ejs");

// Listen on port 5000
app.listen(port, () => console.log(`App is running on port ${port}`));
