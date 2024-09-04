import express from 'express'; // Import the Express library
const app = express(); // Create an instance of an Express application
const wslIp = '172.20.119.130'
const port = 3000; // Define the port on which the server will listen

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Yoooooooooo my slime 🌱'); // Send "Hello World!" as the response
});

// Start the server and listen on the specified port
app.listen(port, wslIp, () => {
  console.log(`Server running on http://${wslIp}:${port}`); // Log a message when the server starts
});