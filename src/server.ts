import express from 'express'; // Import the Express library
const { execSync } = require('child_process');

const app = express(); // Create an instance of an Express application
const wslIp = '172.23.4.155'
const port = 3000; // Define the port on which the server will listen
const windowsIp = getWindowsIp();

function getWindowsIp() {
  try {
    const result = execSync('cmd.exe /C "ipconfig | findstr /i "IPv4""').toString().trim();
    const ipMatch = result.match(/IPv4 Address[.\s]*: ([\d.]+)/);
    return ipMatch ? ipMatch[1] : '127.0.0.1';  // Return the first IP address found or fallback to localhost
  } catch (error) {
    console.error('Error getting Windows IP address:', error);
    return '127.0.0.1';  // Fallback to localhost if there's an error
  }
}

// Define a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Yoooooooooo my slime 🌱'); // Send "Hello World!" as the response
});

// Start the server and listen on the specified port
app.listen(port, wslIp, () => {
  console.log(`Server running on http://${windowsIp}:${port}`); // Log a message when the server starts
});