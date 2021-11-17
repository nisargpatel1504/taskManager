const express = require('express');
const app = express();
const tasks = require('./Routes/tasks');
const port = 3000;
const connectDB = require('./Database/connect');
require('dotenv').config();
app.use(express.json());


app.use('/api/v1/tasks',tasks);

const start = async () => {
    try {
        
        await connectDB(process.env.Mongo_URL);
        app.listen(port,() => {
            console.log("server is running on : ",port);
            });

    } catch (error) {
        console.log(error);
    }
}

start();
