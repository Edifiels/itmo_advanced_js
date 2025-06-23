import React from 'react';
import TaskInput from './features/todo/TaskInput';
import TaskList from './features/todo/TaskList';
import TaskFilter from './features/todo/TaskFilter';
import './styles/App.css';

// Главный компонент приложения
function App() {
    return (
        <div className="App">
            <h1>To-Do List с Redux Toolkit</h1>
            <TaskInput />
            <TaskFilter />
            <TaskList />
        </div>
    );
}

export default App;
