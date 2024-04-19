import "./config.js"
import { addUser} from "./models/user.js";
import express, {json} from 'express';
import { getUsers } from "./models/user.js";
const app= express();
app.use(express.json())
const port= process.env.PORT || 3000;

app.post("/user",async(req,res)=>{
    try{
    let result= await addUser(req.body)
    res.json(result)
    }catch(error){
        res.status(400).json({error})
    }
})

app.get('/user',async(req,res)=>{
    try {
        let users =await getUsers()
        res.json
    } catch (e) {
        res.status(400).json({error:e})
    }
})

app.listen(port,()=>{
    console.log('server is running at port number'+port)
})
// async function init(){
//     // const uri=`mongodb://${process.env.HOST}:${process.env.DBPORT}/${process.env.DBNAME}`
//     let status= await addUser({name:"Anup",age:"24",marks:[]});
//     console.log(status)
//     return
// }
// await init()

