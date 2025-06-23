import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from './todoSlice';
import './styles/TaskInput.css';

// Компонент для добавления новой задачи
function TaskInput() {
    const [text, setText] = useState(''); // Локальное состояние для хранения текста новой задачи
    const dispatch = useDispatch(); // Хук useDispatch для отправки действий в Redux Store

    const handleSubmit = (e) => {
        e.preventDefault(); // Предотвращаем перезагрузку страницы при отправке формы
        // Проверяем, что текст не пустой
        if (text.trim()) {
            dispatch(addTask(text)); // Отправляем действие addTask с текстом задачи
            setText(''); // Очищаем поле ввода после добавления задачи
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-input-form">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)} // Обновляем текст задачи при изменении ввода
                placeholder="Введите новую задачу"
                className="task-input"
            />
            <button type="submit" className="task-button">
                Добавить
            </button>
        </form>
    );
}

export default TaskInput;
