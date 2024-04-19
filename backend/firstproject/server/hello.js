const express = require('express')
const app = express()
const port = 3000

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}
let users=[]

// app.use(myLogger)
app.use(express.json())

app.get("/",(req,res)=>{
  res.json(users)
})


// app.get("/",myLogger, (req, res) => {
//   res.send('<h1>Hello World!</h1>')
// })

app.post("/user",(req,res)=>{
  let data=req.body
  console.log(data)
  users.push(data)
  res.status(200)
  .json({status:'success'})
})
app.get('/about',(req,res)=>{
  res.send("About us!")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

