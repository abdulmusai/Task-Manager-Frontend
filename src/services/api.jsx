import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000/api'
});

// Automatically attach JWT token
API.interceptors.request.use((req) => {

    const token = localStorage.getItem('token');

    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }

    return req;
});

// AUTH
export const login = (formData) =>
    API.post('/auth/login', formData);

// TASKS
export const fetchTasks = () =>
    API.get('/tasks');

export const createTask = (newTask) =>
    API.post('/tasks', newTask);

export const updateTask = (id, updatedData) =>
    API.put(`/tasks/${id}`, updatedData);

export const deleteTask = (id) =>
    API.delete(`/tasks/${id}`);