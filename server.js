// server file using expressjs
const express = require ('express');
const app = express();
const port = 8000;

app.set("views", "templates");
app.set("view engine", "pug");

app.use(express.static('resources'));

// run middle to show http request and response
// on terminal to response's status code and message
app.use((req, res, next)=> {
    console.log(req.method, `localhost:${port}${req.path}`);
    // run the actual request handler
    next();
    console.log(res.statusCode, res.statusMessage);
})

// get main page
app.get("/", (req, res)=>{
    res.render("main.pug");
})

// get project page
app.get("/projects", (req, res)=>{
    res.render("projects.pug");
})

// get resume page
app.get("/resume", (req, res)=>{
    res.render("resume.pug");
})

// get image for main page
app.get("/images/index.jpeg", (req, res)=>{
    res.send("me.jpeg");
})

// get css style for normal mode
app.get("/css/main.css", (req, res)=>{
    res.send("main.css");
})

// get css style for dark mode
app.get("/css/main.dark.css", (req, res)=>{
    res.send("main.dark.css");
})

// listen to port 8000
app.listen(port, ()=>{
    console.log(`Listening on port${port} ...`);
})