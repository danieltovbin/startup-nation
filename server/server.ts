import express from 'express';
import dotenv from 'dotenv';

const app = express()
dotenv.config()

const PORT = process.env.PORT || 3000
app.use(express.json())


app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})