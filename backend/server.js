const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const connectDB = require('./config/db');
const errorHandler = require('./middleware/error');


//Connect to database
connectDB();

//Route files
const tasks = require('./routes/tasks.js');

//Load env vars
dotenv.config({ path: "./config/config.env" });

const app = express();

// const logger =(req,res,next)=>{
//     req.hello ="Hello World";
//     console.log(`${req.method} ${req.protocol}://${req.get("host")}${req.originalUrl}`);
//     next();
// };

//Dev logging middleware
if(process.env.NODE_ENV ==="development"){
    app.use(morgan("dev"));
}



//Mount routers

//Mount routers

app.use("/api/v1/tasks", tasks);


app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
    PORT, 
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    // server.close(() => process.exit(1));
 });