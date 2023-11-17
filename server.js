// server file using expressjs
const express = require ('express');
const app = express();
const port = 8000;

app.set("views", "templates");
app.set("view engine", "pug");

app.use(express.static('resources'));

// run middle to show http request and response
// on terminal
app.use((req, res, next)=> {
    console.log(req.method, `localhost:${port}${req.path}`);
    // run the actual request handler
    next();
    console.log(res.statusCode, res.statusMessage);
})

app.get("/", (req, res)=>{
    res.render("main.pug");
})

app.get("/images/index.jpeg", (req, res)=>{
    res.send("index.jpeg");
})

app.get("/css/main.css", (req, res)=>{
    res.send("main.css");
})

// listen to port 8000
app.listen(port, ()=>{
    console.log(`Listening on port${port} ...`);
})