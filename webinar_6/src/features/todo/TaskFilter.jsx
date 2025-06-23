import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from './todoSlice';

// Компонент для фильтрации задач
function TaskFilter() {
    const dispatch = useDispatch(); // Хук useDispatch для отправки действий в Redux Store
    const currentFilter = useSelector((state) => state.todos.filter); // Получаем текущий фильтр из Redux Store

    return (
        <div className="task-filter">
            <button
                onClick={() => dispatch(setFilter('all'))} // Устанавливаем фильтр на 'all'
                disabled={currentFilter === 'all'} // Деактивируем кнопку, если выбран текущий фильтр
                className="filter-button"
            >
                Все
            </button>
            <button
                onClick={() => dispatch(setFilter('completed'))} // Устанавливаем фильтр на 'completed'
                disabled={currentFilter === 'completed'} // Деактивируем кнопку, если выбран текущий фильтр
                className="filter-button"
            >
                Выполненные
            </button>
            <button
                onClick={() => dispatch(setFilter('incomplete'))} // Устанавливаем фильтр на 'incomplete'
                disabled={currentFilter === 'incomplete'} // Деактивируем кнопку, если выбран текущий фильтр
                className="filter-button"
            >
                Невыполненные
            </button>
        </div>
    );
}

export default TaskFilter;
