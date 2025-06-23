import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTask, toggleTaskStatus } from './todoSlice';
import './styles/TaskList.css';

// Компонент для отображения списка задач
function TaskList() {
    // Получаем задачи из Redux Store в зависимости от текущего фильтра
    const tasks = useSelector((state) => {
        if (state.todos.filter === 'completed') {
            return state.todos.tasks.filter((task) => task.completed); // Показываем только выполненные задачи
        } else if (state.todos.filter === 'incomplete') {
            return state.todos.tasks.filter((task) => !task.completed); // Показываем только невыполненные задачи
        }
        return state.todos.tasks; // Показываем все задачи
    });

    const dispatch = useDispatch(); // Хук useDispatch для отправки действий в Redux Store

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key={task.id} className="task-item">
                    <span
                        style={{
                            textDecoration: task.completed
                                ? 'line-through'
                                : 'none',
                        }} // Зачеркиваем текст, если задача выполнена
                        onClick={() => dispatch(toggleTaskStatus(task.id))} // Переключаем статус задачи при клике
                        className="task-text"
                    >
                        {task.text}
                    </span>
                    <button onClick={() => dispatch(removeTask(task.id))} className="delete-button">Удалить</button> {/* Кнопка для удаления задачи */}
                    </li>
            ))}
        </ul>
    );
}

export default TaskList;
