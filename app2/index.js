const express = require('express');
const Keycloak = require('keycloak-connect');

const config = require("./keycloak.json");

const app = express();

// Keycloak configuration
const keycloak = new Keycloak(config);

// Middleware to protect the static files
app.use(keycloak.middleware({
  logout: '/logout', // Specify the logout URL
}));

// Serve static files from the public folder
app.use(express.static('public'));

// Start the server
const port = 3000; // You can use any port you prefer
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});