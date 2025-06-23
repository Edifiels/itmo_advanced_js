import { createSlice } from '@reduxjs/toolkit';

// Начальное состояние нашего приложения To-Do List
const initialState = {
    tasks: [], // Список задач
    filter: 'all', // Фильтр для задач: 'all', 'completed', 'incomplete'
};

// Создадим slice, который содержит редьюсеры и действия
const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        // Добавление новой задачи
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(), // Уникальный идентификатор для каждой задачи
                text: action.payload,
                completed: false, // По умолчанию задача не выполнена
            });
        },
        // Удаление задачи
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(
                (task) => task.id !== action.payload
            );
        },
        // Переключение статуса выполнения задачи
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find((task) => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        // Установка фильтра
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});

// Экспортируем действия и редьюсер
export const { addTask, removeTask, toggleTaskStatus, setFilter } =
    todoSlice.actions;
export default todoSlice.reducer;
