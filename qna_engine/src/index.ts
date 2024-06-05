import express from "express";

// define app port
const APP_PORT = 4000;

// create express application
const app = express();

// define a home route
app.get("/", (req, res) => {
  // send welcome message
  res.send("Hello from Q&A Engine app!");
});

//  start the server and listen to the port
app.listen(APP_PORT, () => {
  console.log(`Application is running on http://localhost:${APP_PORT}`);
});
