# To-Do List с Redux Toolkit

Современное React приложение для управления задачами, построенное с использованием Redux Toolkit для управления состоянием. Проект демонстрирует лучшие практики разработки React приложений с предсказуемым управлением состоянием и feature-based архитектурой.

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 16+ 
- npm или yarn

### Установка
```bash
# Клонируйте репозиторий
git clone <repository-url>
cd redux-todo-example

# Установите зависимости
npm install

# Запустите проект в режиме разработки
npm run dev
```

Приложение откроется по адресу: http://localhost:5173

## 📁 Структура проекта

```
redux-todo-example/
├── src/
│   ├── app/
│   │   └── store.js              # Конфигурация Redux Store
│   ├── features/
│   │   └── todo/
│   │       ├── TaskInput.jsx     # Компонент ввода задач
│   │       ├── TaskList.jsx      # Компонент списка задач
│   │       ├── TaskFilter.jsx    # Компонент фильтрации
│   │       ├── todoSlice.js      # Redux slice для задач
│   │       └── styles/           # Стили компонентов
│   │           ├── TaskInput.css
│   │           ├── TaskList.css
│   │           └── TaskFilter.css
│   ├── styles/
│   │   ├── App.css              # Глобальные стили приложения
│   │   └── index.css            # Базовые стили
│   ├── App.jsx                  # Главный компонент
│   └── main.jsx                 # Точка входа приложения
├── public/                      # Статические файлы
├── index.html                   # HTML шаблон
├── package.json                 # Зависимости и скрипты
├── vite.config.js              # Конфигурация Vite
└── eslint.config.js            # Конфигурация ESLint
```

## 🛠️ Технологии

- **React 18.3** - Современная библиотека для создания пользовательских интерфейсов
- **Redux Toolkit 2.3** - Официальный инструментарий для эффективной работы с Redux
- **React-Redux 9.1** - Официальные привязки React для Redux
- **Vite 5.4** - Современный и быстрый инструмент сборки
- **ESLint** - Статический анализатор кода с правилами для React
- **CSS Modules** - Изолированные стили компонентов

## 📋 Доступные команды

```bash
npm run dev         # Запуск dev сервера с HMR
npm run build       # Сборка для продакшена
npm run preview     # Предпросмотр продакшен сборки
npm run lint        # Проверка кода с ESLint
```

## 🎯 Функциональность

### 1. Управление задачами
- **Добавление задач** через форму ввода с валидацией
- **Удаление задач** с помощью кнопки удаления
- **Переключение статуса** задач (выполнено/не выполнено) кликом по тексту

### 2. Фильтрация задач
- **Все задачи** - отображение полного списка
- **Выполненные** - только завершенные задачи  
- **Невыполненные** - только активные задачи

### 3. Пользовательский интерфейс
- Адаптивный дизайн с современными стилями
- Визуальные индикаторы состояния (зачеркнутый текст)
- Интуитивное взаимодействие с hover эффектами

### 4. Управление состоянием
- Централизованное состояние через Redux Store
- Иммутабельные обновления с Redux Toolkit
- Предсказуемый поток данных

## 🏗️ Архитектура Redux

### Store Configuration
```javascript
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});
```

### Todo Slice
```javascript
const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        tasks: [],
        filter: 'all'
    },
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({
                id: Date.now(),
                text: action.payload,
                completed: false,
            });
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(
                task => task.id !== action.payload
            );
        },
        toggleTaskStatus: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        setFilter: (state, action) => {
            state.filter = action.payload;
        },
    },
});
```

## 💻 Примеры кода

### Компонент добавления задач
```jsx
function TaskInput() {
    const [text, setText] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            dispatch(addTask(text));
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Введите новую задачу"
            />
            <button type="submit">Добавить</button>
        </form>
    );
}
```

### Компонент списка задач с фильтрацией
```jsx
function TaskList() {
    const tasks = useSelector((state) => {
        if (state.todos.filter === 'completed') {
            return state.todos.tasks.filter(task => task.completed);
        } else if (state.todos.filter === 'incomplete') {
            return state.todos.tasks.filter(task => !task.completed);
        }
        return state.todos.tasks;
    });

    const dispatch = useDispatch();

    return (
        <ul>
            {tasks.map((task) => (
                <li key={task.id}>
                    <span
                        style={{
                            textDecoration: task.completed ? 'line-through' : 'none'
                        }}
                        onClick={() => dispatch(toggleTaskStatus(task.id))}
                    >
                        {task.text}
                    </span>
                    <button onClick={() => dispatch(removeTask(task.id))}>
                        Удалить
                    </button>
                </li>
            ))}
        </ul>
    );
}
```

### Provider обертка
```jsx
import { Provider } from 'react-redux';
import { store } from './app/store';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);
```

## 🎓 Учебные цели

Проект демонстрирует:

- ✅ Современную архитектуру React приложений
- ✅ Управление состоянием с Redux Toolkit
- ✅ Feature-based структуру проекта
- ✅ Использование React Hooks (useState, useDispatch, useSelector)
- ✅ Создание и использование Redux slices
- ✅ Иммутабельные обновления состояния
- ✅ Компонентную архитектуру с разделением ответственности
- ✅ Работу с формами и пользовательским вводом
- ✅ Условный рендеринг и фильтрацию данных
- ✅ Современные инструменты разработки (Vite, ESLint)
- ✅ CSS модули и компонентные стили

## 🔧 Возможности для развития

Проект можно расширить добавив:

### 1. Персистентность данных
```javascript
// localStorage middleware
const persistedState = localStorage.getItem('reduxState')
    ? JSON.parse(localStorage.getItem('reduxState'))
    : {};

store.subscribe(() => {
    localStorage.setItem('reduxState', JSON.stringify(store.getState()));
});
```

### 2. Дополнительные функции
- **Редактирование задач** с inline editing
- **Приоритеты задач** (высокий, средний, низкий)
- **Категории задач** с цветовой кодировкой
- **Дедлайны задач** с напоминаниями
- **Поиск по задачам** с фильтрацией по тексту

### 3. Улучшение UX
```jsx
// Drag & Drop для изменения порядка
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

// Анимации переходов
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// Уведомления
import { toast } from 'react-toastify';
```

### 4. Тестирование
```javascript
// Redux testing
import { configureStore } from '@reduxjs/toolkit';
import todoReducer, { addTask } from './todoSlice';

describe('todoSlice', () => {
    it('should add a task', () => {
        const store = configureStore({ reducer: { todos: todoReducer } });
        store.dispatch(addTask('Test task'));
        
        const state = store.getState();
        expect(state.todos.tasks).toHaveLength(1);
        expect(state.todos.tasks[0].text).toBe('Test task');
    });
});
```

### 5. TypeScript интеграция
```typescript
// types.ts
interface Task {
    id: number;
    text: string;
    completed: boolean;
    priority?: 'low' | 'medium' | 'high';
    category?: string;
    dueDate?: Date;
}

interface TodoState {
    tasks: Task[];
    filter: 'all' | 'completed' | 'incomplete';
    searchQuery: string;
}
```

### 6. Асинхронные операции
```javascript
// Async thunks для API вызовов
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTasks = createAsyncThunk(
    'todos/fetchTasks',
    async () => {
        const response = await api.getTasks();
        return response.data;
    }
);
```

## 🚀 Развертывание

### Продакшен сборка
```bash
npm run build
```

### Развертывание на Vercel
```bash
npm install -g vercel
vercel
```

### Развертывание на Netlify
```bash
npm run build
# Загрузите папку dist на Netlify
```

### Docker развертывание
```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🔍 Отладка и DevTools

### Redux DevTools
Установите [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools) для браузера

### Полезные инструменты
```javascript
// Debug middleware
const logger = (store) => (next) => (action) => {
    console.log('dispatching', action);
    let result = next(action);
    console.log('next state', store.getState());
    return result;
};
```

## 📊 Производительность

### Оптимизация рендеринга
```jsx
import { memo } from 'react';

// Мемоизация компонентов
const TaskItem = memo(({ task, onToggle, onDelete }) => {
    return (
        <li>
            <span onClick={() => onToggle(task.id)}>{task.text}</span>
            <button onClick={() => onDelete(task.id)}>Удалить</button>
        </li>
    );
});
```

### Селекторы с мемоизацией
```javascript
import { createSelector } from '@reduxjs/toolkit';

const selectFilteredTasks = createSelector(
    [(state) => state.todos.tasks, (state) => state.todos.filter],
    (tasks, filter) => {
        switch (filter) {
            case 'completed':
                return tasks.filter(task => task.completed);
            case 'incomplete':
                return tasks.filter(task => !task.completed);
            default:
                return tasks;
        }
    }
);
```

## 🧪 Тестирование

### Unit тесты для компонентов
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import TaskInput from './TaskInput';
import todoReducer from './todoSlice';

test('adds a task when form is submitted', () => {
    const store = configureStore({ reducer: { todos: todoReducer } });
    
    render(
        <Provider store={store}>
            <TaskInput />
        </Provider>
    );
    
    const input = screen.getByPlaceholderText(/введите новую задачу/i);
    const button = screen.getByRole('button', { name: /добавить/i });
    
    fireEvent.change(input, { target: { value: 'Test task' } });
    fireEvent.click(button);
    
    expect(store.getState().todos.tasks).toHaveLength(1);
});
```

## 📝 Лучшие практики

### Структура Redux
- Используйте feature-based организацию файлов
- Создавайте отдельные slices для разных доменов
- Применяйте мемоизированные селекторы для сложных вычислений

### React компоненты
- Разделяйте презентационные и контейнерные компоненты
- Используйте TypeScript для типизации props
- Применяйте мемоизацию для оптимизации рендеринга

### Управление состоянием
- Держите состояние максимально плоским
- Используйте нормализованную структуру для сложных данных
- Избегайте дублирования данных в store

## 🤝 Разработка

При добавлении новых функций:

1. Следуйте принципам Redux (single source of truth, immutability)
2. Создавайте отдельные slices для новых features
3. Пишите тесты для новых компонентов и редьюсеров
4. Документируйте новые действия и селекторы
5. Поддерживайте консистентность в именовании
6. Используйте TypeScript для типизации

## 📄 Лицензия

Учебный проект для демонстрационных целей.