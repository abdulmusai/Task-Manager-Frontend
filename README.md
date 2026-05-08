Task Manager App

A modern full-stack Task Manager application built with the MERN stack (MongoDB, Express.js, React, and Node.js). This application allows users to create, manage, update, and delete tasks efficiently through a clean and responsive user interface.

Features
Create new tasks
View all tasks
Update task completion status
Delete tasks
RESTful API integration
JWT Authentication support
Axios API handling
Responsive React frontend
MongoDB database integration
Tech Stack
Frontend
React.js
Vite
Axios
CSS
Backend
Node.js
Express.js
MongoDB
Mongoose
JWT Authentication
Project Structure
task-manager/
│
├── task-manager-frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── task-manager-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
Installation
Clone the Repository
git clone https://github.com/your-username/task-manager.git
Backend Setup
Navigate to Backend Folder
cd task-manager-backend
Install Dependencies
npm install
Create .env File
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
Start Backend Server
npm start

Server runs on:

http://localhost:5000
Frontend Setup
Navigate to Frontend Folder
cd task-manager-frontend
Install Dependencies
npm install
Start Frontend
npm run dev

Frontend runs on:

http://localhost:5173
API Endpoints
Authentication
Method	Endpoint	Description
POST	/api/auth/login	User login
Tasks
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create task
PUT	/api/tasks/:id	Update task
DELETE	/api/tasks/:id	Delete task
Example Task Object
{
  "_id": "123456",
  "title": "Complete MERN project",
  "description": "Finish Task Manager application",
  "completed": false
}
Screenshots

Add screenshots of:

Dashboard
Task Creation
Task List
Authentication Page
Future Improvements
User registration
Task categories
Due dates
Drag-and-drop task management
Real-time updates with Socket.IO
Dark mode
Mobile responsiveness improvements
Deployment to AWS/Vercel/Render
Deployment

Frontend can be deployed on:

Vercel
Netlify

Backend can be deployed on:

Render
Railway
AWS
DigitalOcean

Database:

MongoDB Atlas
Learning Outcomes

This project demonstrates understanding of:

React Hooks
Component Architecture
REST APIs
Express Middleware
MongoDB CRUD Operations
Authentication with JWT
State Management
Axios API Requests
Full-Stack Application Development
Author

Abdulrahman Inuwa

Data Scientist
Full-Stack Developer
Blockchain Professional
Machine Learning Engineer
