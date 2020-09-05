// https://lab.github.com/everydeveloper/introduction-to-node-with-express

const express = require("express"); // Search for express library in node_modules
const app = express(); // Create instance of express constructor, called app

// body parser required for POST, included in express module
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const mockUserData = [{ name: "Mark" }, { name: "Jill" }];
app.get("/users", function (req, res) { // Allow to access localhost:port/users
  res.json({
    success: true,
    message: "successfully got users. Nice!",
    users: mockUserData
  });
});

app.get('/users/:id', function (req, res) { // Allow to access localhost:port/users/qqch > and it will returns "qqch" in console
  console.log(req.params.id)
  res.json({
    success: true,
    message: 'got one user',
    user: req.params.id
  })
})

app.post('/login', function (req, res) { // Allow to have a login page in a POST method, more secured
  const username = req.body.username;
  const password = req.body.password;

  const mockUsername = "billyTheKid";
  const mockPassword = "superSecret";

  if (username === mockUsername && password === mockPassword) {
    res.json({
      success: true,
      message: 'password and username match!',
      token: 'encrypted token goes here'
    })
  } else {
    res.json({
      success: false,
      message: 'password and username do not match'
    })
  }
})

app.listen(3000, function () {
  // Start server on http://localhost:3000
  console.log("Server is running");
});
// Then run server in cmd with node [path to ]\server.js
