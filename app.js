const express = require("express");

const app = express();
app.get("/", (req, res) => {
  console.log("FULL STACK");
  return res.json("Hi");
});
app.listen(8000, () => {
  console.log("The application is running on localhost:8000");
});
