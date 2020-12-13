const PORT = 3000;
const PORT_HTTPS = 4000;
const express = require("express");
const fs = require("fs");
const app = express();
const httpPre = require("http");
const http = httpPre.Server(app);
const https = require("https");

//cors
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader("Access-Control-Allow-Methods", "GET,POST");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "X-Requested-With,content-type"
    );
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
});


app.use(express.static(__dirname + "/public/"));

http.listen(PORT, function () {
    console.log("listening on PORT:" + PORT);
});

https
    .createServer(
        {
            key: fs.readFileSync("63040593_192.168.137.1.key"),
            cert: fs.readFileSync("63040593_192.168.137.1.cert"),
        },
        app
    )
    .listen(PORT_HTTPS, function () {
        console.log(
            "Example app listening on port (HTTPS)" +
            PORT_HTTPS +
            "! Go to https://localhost:" +
            PORT_HTTPS
        );
    });