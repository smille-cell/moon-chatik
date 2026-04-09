# Moon Chat

## Features
- Real-time messaging
- User authentication
- Chat rooms and direct messaging
- File sharing
- Message history
- Notifications

## Installation Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/smille-cell/moon-chatik.git
   ```
2. Navigate to the project directory:
   ```bash
   cd moon-chatik
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the application:
   ```bash
   npm start
   ```

## Project Structure
```
moon-chatik/
├── src/
│   ├── components/          # React components
│   ├── services/            # API services
│   ├── hooks/               # Custom hooks
│   └── App.js               # Main application file
├── public/
├── package.json
└── README.md
```

## API Endpoints
| Method | Endpoint                   | Description                            |
|--------|----------------------------|----------------------------------------|
| GET    | /api/messages              | Retrieve all messages                  |
| POST   | /api/messages              | Send a new message                     |
| GET    | /api/users                 | Retrieve all users                     |
| POST   | /api/users/register        | Register a new user                   |
| POST   | /api/users/login           | User login                             |

## Socket Events
- `message`: Triggered when a new message is sent.
- `userJoined`: Triggered when a user joins the chat.
- `userLeft`: Triggered when a user leaves the chat.

## Technologies Used
- React
- Node.js
- Express.js
- Socket.IO
- MongoDB

## Future Enhancements
- Video and voice call support
- Improved message search functionality
- User status indicators (online/offline)
- Enhanced security features
