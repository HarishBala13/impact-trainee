var express = require("express");
var session = require("express-session");
var cookie = require("cookie-parser");

const server = express();
let PORT = 3000;
let user = "";

server.use(cookie());

server.use(session({ secret:"vishiyam__top__secret", resave: false, saveUninitialized: true }));

server.get('/setstatus', (req, res) => {
    res.status(201).send("Successfully setted status!");
});

server.get('/set-cookie', (req, res) => {
    res.cookie("user","Harish",{ maxAge: 100 * 1000, httpOnly: true});
    res.send("Cookie has been created for a user until maxAge: 100 * 1000");
});

server.get('/get-cookie', (req, res) => {
    user = req.cookies.user;
    if(user)
        res.send(`Cookie has been caught for user ${user}`);
});

server.get('/remove-cookie', (req, res) => {
    let cookiee = res.cookie.toString();
    console.log(cookiee);
});

server.all('/req-method', (req, res) => {
    switch(req.method)
    {
        case 'GET':
            res.send(`User ${user} is in {${req.method}}`);
            break;
        case 'POST':
            res.send(`User ${user} is in {${req.method}}`);
            break;
        case 'PATCH':
            res.send(`User ${user} is in {${req.method}}`);
            break;
        default:
            break;
    }

})

server.listen(PORT, (err) => {
    if(err) console.log(err)
    else console.log(`App running on Port:- ${PORT} successfully`);
})