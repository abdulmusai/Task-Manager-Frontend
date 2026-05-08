import React, { useEffect, useState } from 'react';
import {
    fetchTasks,
    createTask,
    updateTask,
    deleteTask
} from '../services/api';

const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [title, setTitle] = useState('');

    // Fetch tasks on load
    useEffect(() => {

        const getTasks = async () => {
            try {
                const { data } = await fetchTasks();
                setTasks(data);
            } catch (err) {
                console.error(err);
            }
        };

        getTasks();

    }, []);

    // CREATE
    const handleAdd = async () => {

        if (!title) return;

        try {
            const { data } = await createTask({
                title,
                description: 'New Task'
            });

            setTasks([...tasks, data]);
            setTitle('');

        } catch (err) {
            console.error(err);
        }
    };

    // UPDATE
    const handleToggle = async (id, currentStatus) => {

        try {

            const { data } = await updateTask(id, {
                completed: !currentStatus
            });

            setTasks(
                tasks.map((t) =>
                    t._id === id ? data : t
                )
            );

        } catch (err) {
            console.error(err);
        }
    };

    // DELETE
    const handleDelete = async (id) => {

        try {

            await deleteTask(id);

            setTasks(
                tasks.filter((t) => t._id !== id)
            );

        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className='task-container'>

            <h2>My Tasks</h2>

            <div className='input-group'>

                <input
                    value={title}
                    placeholder='What needs to be done?'
                    onChange={(e) => setTitle(e.target.value)}
                />

                <button onClick={handleAdd}>
                    Add Task
                </button>

            </div>

            <ul>

                {tasks.map((task) => (

                    <li
                        key={task._id}
                        style={{
                            textDecoration: task.completed
                                ? 'line-through'
                                : 'none'
                        }}
                    >

                        <span
                            onClick={() =>
                                handleToggle(
                                    task._id,
                                    task.completed
                                )
                            }
                        >
                            {task.title}
                        </span>

                        <button
                            onClick={() =>
                                handleDelete(task._id)
                            }
                            style={{
                                marginLeft: '10px',
                                color: 'red'
                            }}
                        >
                            Delete
                        </button>

                    </li>

                ))}

            </ul>

        </div>
    );
};

export default TaskList;


