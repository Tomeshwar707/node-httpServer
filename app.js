const http=require("http")
const fs=require("fs")
// const { callbackify } = require("util")
// This is a Comment from github resp
const app=http.createServer((req,res)=>
{
    if(req.url==="/")
        {

            const pageData=fs.readFileSync("Pages/index.html")
            // res.write("<h1>Server Started...........</h1>")
            res.write(pageData)

            res.end()

        }
   else if(req.url==="/about"){
    const pageData=fs.readFileSync("Pages/about.html")

    // res.write("<h1>About Page</h1>")
    res.write(pageData)

    res.end()
   }else if(req.url==="/contact"){
    const pageData=fs.readFileSync("Pages/contact.html")

    res.write(pageData)
    res.end()
   } else{
    

    res.writeHead(404,{"Content-Type":"text/html"})
    const pageData=fs.readFileSync("Pages/404.html")
        res.write(pageData)
        res.end()
       }
   
})
//--req /res status code

// 200-299 ok State  req and res  success
// 300-399 information res & req success
// 400-499 req failed res invalid
// 500-599 req success nut res failed

// app.listen(port,ip, callback-function)
app.listen(4000,()=>{
    console.log("Server Started on http://127.0.0.1:4000")
}
)
