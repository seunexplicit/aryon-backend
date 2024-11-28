# User Posts Backend API

A RESTful API backend service that manages users and their posts, built with Node.js, Express, and SQLite.

## Features

- User management with pagination
- User details retrieval
- User posts management
- SQLite database integration
- CORS enabled
- Error handling middleware

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js (v12 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd user-posts-backend
```

2. Install dependencies:
```bash
npm install
```

## Running the Application

### Development Mode
To run the application in development mode with hot-reloading:
```bash
npm run dev
```

### Production Mode
To run the application in production mode:
```bash
npm start
```

The server will start on port 3001 by default. You can modify this by setting the `PORT` environment variable.

## API Endpoints

### Users

- **GET** `/api/users`
  - Get a paginated list of users

- **GET** `/api/users/:userId`
  - Get details of a specific user

- **GET** `/api/users/:userId/posts`
  - Get all posts for a specific user

- **DELETE** `/api/users/posts/:postId`
  - Delete a specific post


## Error Handling

The application includes global error handling middleware that catches and processes errors appropriately. All errors are returned in JSON format with appropriate HTTP status codes.

## Development

### Available Scripts

- `npm start`: Runs the application in production mode
- `npm run dev`: Runs the application in development mode with nodemon
- `npm test`: Runs the test suite (Jest)

## Environment Variables

The following environment variables can be configured:
- `PORT`: Server port number (default: 3001)

## Production Deployment

This project includes a `vercel.json` configuration file and is ready to be deployed to Vercel or similar platforms.