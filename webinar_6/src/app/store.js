import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

// Настроим Store с использованием функции configureStore, которая автоматизирует
// многие аспекты настройки store, включая подключение middleware
export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});
