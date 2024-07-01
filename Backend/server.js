import express from 'express';
import mongoose from "./db/db.js";
import dotenv from 'dotenv';
import routes from "./routes/index.js"

import cors from 'cors';
import router from './routes/index.js';
dotenv.config({path:'./.env'})


const app=express()
app.use(express.json())
app.use(express.static('public'))
app.use(cors())
app.use(router)


app.listen(process.env.PORT,()=>{
    console.log('App is runing @http://localhost:3000')
})