import express from "express";

const app = express();

app.use('/',(req,res)=>{
    res.send(`Hello this is food delivery app backend`)
})
app.listen('3000',()=>{
    console.log('Server is running on port 3000');
})