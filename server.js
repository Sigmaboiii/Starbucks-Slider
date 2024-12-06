const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000; // You can change the port as needed

// Serve static files (images, CSS, JS)
app.use(express.static(path.join(__dirname, '')));

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'main.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
