const express =  require('express');
const app = express();
const hbs = require('hbs');
const path = require('path');
const port = process.env.PORT || 3000;

// public static path
// console.log("path:");
// console.log(path.join(__dirname , ".." , 'public'));

const staticPath = path.join(__dirname  , '../public')
const viewsPath = path.join(__dirname , "../templates/views")
const partialsPath = path.join(__dirname , "/templates/partials")

// console.log("static Path : "+staticPath);
// console.log("viws Path : "+viewsPath);
// console.log("partials Path : "+partialsPath);


// showing static website
app.use(express.static(staticPath));

// using HS
app.set('view engine' , 'hbs')
app.set('views',viewsPath)
// hbs.registerPartial(partialsPath);






// routing
app.get("/" , (req , res )=>{
    // res.send("welcome to 1st express project");
    res.render('index')
})
app.get('/weather' , (req , res)=>{
    // res.send('this is weather page');
    res.render('weather')
})

app.get('*' , (req , res) =>{
    // res.send('error 404 page not found');
    res.render('pagenotfound')
})

app.listen(port,()=>{
   console.log('listening to port'+port);
})