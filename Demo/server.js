// server.js
const express = require('express');

// Create an Express application
const app = express();

// Middleware to log IP addresses
app.use((req, res, next) => {
  console.log(`Request from IP: ${req.ip}`);
  next();
});

// Define a route
app.get('/', (req, res) => {
  res.send('Howdy Partner, Your IP address is: ' + req.ip);
});

// Start the server
const port = process.env.PORT || 3000;
const host = '0.0.0.0'; // Listen on all network interfaces
app.listen(port, host, () => {
  console.log(`Server is running on ${host}:${port}`);
});
