const express = require("express"); // Search for express library in node_modules
const app = express(); // Creqte instance of express constructor, called app

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) {
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData
  });
});

app.get('/users/:id', function (req, res) {
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id
  })
})

app.listen(3000, function () {
  // Start server on http://localhost:3000
  console.log("Server is running");
});
// Then run server in cmd with node [path to ]\server.js
