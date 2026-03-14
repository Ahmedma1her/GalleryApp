require("dotenv").config()
const express = require('express');
const mongoose = require("mongoose");
const app=express();
 const port=process.env.PORT || 3000

const db_Connection=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
            console.log("Database connected successfully");
            
    } catch (error) {
            console.log(`error in Database connection${error}`);
            
    }
}
db_Connection()

app.use(express.json())

const imageRoute = require("./Routes/imageRoute.js")
app.use("/api", imageRoute)























    app.listen(port,()=>{
        console.log(`server is running on port ${port}`);

})
