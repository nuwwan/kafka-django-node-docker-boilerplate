import express from "express";
import bodyParser from "body-parser";
import studentRouter from "./routes/Student.r";
import connectDB from "./config/db";

// define app port
const APP_PORT = 4000;

// create express application
const app = express();

// connect to mongodb
connectDB()

// add body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// define a home route
app.get("/", (req, res) => {
  // send welcome message
  res.send("Hello from Q&A Engine app!");
});

// register routers
app.use("/api/student", studentRouter);

//  start the server and listen to the port
app.listen(APP_PORT, () => {
  console.log(`Application is running on http://localhost:${APP_PORT}`);
});
