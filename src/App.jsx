import React, { useState } from 'react';
import Login from './components/Login';
import TaskList from './components/TaskList';
import './App.css'

function App() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  return (
    
      <div className='App'>
       <h1>Task Manager</h1>
       {!token ? (
        <Login setToken={setToken}/>
      ) : (
        <>
        <button onClick={() => {localStorage.removeItem('token'); setToken(null);}}>Logout</button>
        <TaskList/>
        </>
      )}
      </div>
  );
}

export default App;
