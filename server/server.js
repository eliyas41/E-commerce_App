import http from 'http';
import app from './app/app.js';

// Create the server
const PORT = process.env.PORT || 7000;
const server = http.createServer(app);
server.listen(PORT, console.log(`Server is up and running on port ${PORT}`));
