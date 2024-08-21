import express from "express";
import { AdminRoute,VandorRoute } from "./routes";
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/admin',AdminRoute)
app.use('/vendor',VandorRoute)

 
app.listen('3000',()=>{
    console.log('Server is running on port 3000');
})