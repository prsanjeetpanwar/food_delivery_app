import express from "express";
import { AdminRoute,VandorRoute } from "./routes";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import { MONGODB_URL } from "./config";

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/admin',AdminRoute)
app.use('/vendor',VandorRoute)

mongoose.connect(MONGODB_URL)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Failed to connect to MongoDB', err);
    });
 
app.listen('3000',()=>{
    console.log('Server is running on port 3000');
})