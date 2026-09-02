const express = require('express');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Use compression middleware for gzip/deflate compression
app.use(compression());

// Example route
app.get('/', (req, res) => {
  res.json({ message: 'Server with compression middleware is running!' });
});

// Start server
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
