const express = require('express');
const app = express();
const path = require('path');
const port = 8000;


app.use("/", express.static(path.join(__dirname, "./public")));

app.use("/", require("./route/router"));


app.set("view engine", "ejs");
app.set('views', path.join(__dirname, './views/'))


app.listen(port, () => {
    console.log(`server is running  at http://localhost:${port}/`);
})