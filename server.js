const express = require("express"); // Search for express library in node_modules
const app = express(); // Creqte instance of express constructor, called app

app.listen(3000, function () {
  // Start server on http://localhost:3000
  console.log("server is running");
});

// Then run server in cmd with node [path to ]\server.js
