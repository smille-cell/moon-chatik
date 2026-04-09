// Client-side JavaScript code for Socket.io communication, authentication, real-time messaging, typing indicators, user search, and theme management

const socket = io('http://localhost:3000'); // Replace with your server URL

// Theme management
const themeButton = document.getElementById('theme-toggle');
themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Authentication
const loginForm = document.getElementById('login-form');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    socket.emit('login', username);
});

// Real-time messaging
const messageForm = document.getElementById('message-form');
const messageInput = document.getElementById('message-input');
const messagesContainer = document.getElementById('messages');

messageForm.addEventListener('submit', (event) => {
    event.preventDefault();
    socket.emit('chat message', messageInput.value);
    messageInput.value = '';
});

socket.on('chat message', (msg) => {
    const item = document.createElement('li');
    item.textContent = msg;
    messagesContainer.appendChild(item);
});

// Typing indicator
let typing = false;
const typingTimeout = 300;

messageInput.addEventListener('input', () => {
    if (!typing) {
        typing = true;
        socket.emit('typing');
    }
    clearTimeout(typingTimeout);
    setTimeout(() => {
        typing = false;
        socket.emit('stop typing');
    }, typingTimeout);
});

socket.on('typing', () => {
    const indicator = document.getElementById('typing-indicator');
    indicator.textContent = 'A user is typing...';
});

socket.on('stop typing', () => {
    const indicator = document.getElementById('typing-indicator');
    indicator.textContent = '';
});

// User search
const searchInput = document.getElementById('user-search');
searchInput.addEventListener('input', () => {
    const query = searchInput.value;
    socket.emit('search user', query);
});

socket.on('search results', (results) => {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';
    results.forEach(user => {
        const item = document.createElement('div');
        item.textContent = user;
        resultsContainer.appendChild(item);
    });
});

// Initialize connection
socket.on('connect', () => {
    console.log('Connected to the server');
}); 

socket.on('disconnect', () => {
    console.log('Disconnected from the server');
});