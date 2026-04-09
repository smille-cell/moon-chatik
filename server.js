const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Middleware
app.use(cors());
app.use(express.json());

// In-memory user storage for demonstration
let users = {};
let messages = [];

// Endpoint for user registration
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    if (users[username]) {
        return res.status(400).send('User already exists');
    }
    users[username] = { password }; // Store hashed password in real applications
    res.status(201).send('User registered');
});

// Socket.io communication
io.on('connection', (socket) => {
    console.log('A user connected');

    // Handle user message
    socket.on('chat message', (msg) => {
        messages.push(msg);
        io.emit('chat message', msg);
    });

    // Emit all messages to new users
    socket.emit('all messages', messages);

    // Handle user disconnect
    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

// Start server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
