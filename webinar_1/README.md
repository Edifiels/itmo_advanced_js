# JavaScript Webinar Project

Демонстрационный проект для изучения современных инструментов и практик разработки на JavaScript. Проект включает настройку Vite, ESLint, Prettier и демонстрирует работу с модулями, API и современным JavaScript.

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 16+ 
- npm или yarn

### Установка
```bash
# Клонируйте репозиторий
git clone <repository-url>
cd webinar_1

# Установите зависимости
npm install

# Запустите проект в режиме разработки
npm run dev
```

Приложение откроется по адресу: http://localhost:3000

## 📁 Структура проекта

```
webinar_1/
├── src/
│   ├── services/
│   │   └── UserService.js      # Сервис для работы с пользователями
│   ├── utils/
│   │   ├── api.js              # API клиент для HTTP запросов
│   │   ├── math.js             # Математические утилиты
│   │   └── string.js           # Строковые утилиты
│   ├── main.js                 # Основной файл приложения
│   └── style.css               # Стили
├── index.html                  # HTML шаблон
├── vite.config.js              # Конфигурация Vite
├── eslint.config.js            # Конфигурация ESLint
├── .prettierrc                 # Конфигурация Prettier
└── package.json                # Зависимости и скрипты
```

## 🛠️ Технологии

- **Vite** - Современный инструмент сборки
- **ESLint** - Статический анализ кода
- **Prettier** - Форматирование кода
- **Vanilla JavaScript** - ES6+ модули и современный синтаксис
- **JSONPlaceholder API** - Тестовый API для демонстрации

## 📋 Доступные команды

### Разработка
```bash
npm run dev          # Запуск dev сервера
npm run build        # Сборка для продакшена
npm run preview      # Предпросмотр продакшен сборки
```

### Качество кода
```bash
npm run lint         # Проверка ESLint
npm run lint:fix     # Автоисправление ESLint
npm run format       # Форматирование Prettier
npm run format:check # Проверка форматирования
```

### Комбинированные команды
```bash
npm run check        # Полная проверка (lint + format)
npm run fix          # Полное исправление (lint:fix + format)
```

## 🎯 Функциональность

### 1. Математические утилиты (`utils/math.js`)
- Базовые арифметические операции
- Вычисления для окружности
- Константы (PI)

```javascript
import { add, multiply, calculateCircleArea } from './utils/math.js';

console.log(add(5, 3));                    // 8
console.log(multiply(4, 7));               // 28
console.log(calculateCircleArea(5));       // 78.54
```

### 2. Строковые утилиты (`utils/string.js`)
- Капитализация
- Преобразование в kebab-case и camelCase
- Обрезка текста

```javascript
import { capitalize, truncate, kebabCase } from './utils/string.js';

console.log(capitalize('hello world'));           // "Hello world"
console.log(truncate('Long text...', 10));        // "Long te..."
console.log(kebabCase('someVariableName'));       // "some-variable-name"
```

### 3. API клиент (`utils/api.js`)
- HTTP методы (GET, POST, PUT, DELETE)
- Обработка ошибок
- Настраиваемые заголовки

### 4. Сервис пользователей (`services/UserService.js`)
- Получение списка пользователей
- CRUD операции
- Получение постов пользователя

```javascript
const userService = new UserService();

const users = await userService.getAllUsers();
const user = await userService.getUserById(1);
const posts = await userService.getUserPosts(1);
```

## 🎨 Демонстрация

При запуске приложения выполняется демонстрация всех возможностей:

1. **Математические функции** - примеры вычислений
2. **Строковые операции** - обработка текста
3. **API запросы** - загрузка данных пользователей
4. **UI отображение** - рендеринг карточек пользователей

Результаты выводятся в консоль браузера и отображаются на странице.

## ⚙️ Конфигурация инструментов

### ESLint
- Современный flat config (ESLint 9.x)
- Интеграция с Prettier
- Правила для ES6+ синтаксиса
- Поддержка браузера и Node.js

### Prettier
- Единообразное форматирование
- Одинарные кавычки
- Точки с запятой
- 2 пробела для отступов

### Vite
- Hot Module Replacement (HMR)
- Автоматическое открытие браузера
- Source maps для разработки
- Оптимизированная сборка

## 🔧 Настройка IDE

### VS Code
Установите рекомендуемые расширения:
- ESLint
- Prettier - Code formatter

Настройки автоматического форматирования уже включены.

### Другие редакторы
Используйте команды npm для линтинга и форматирования:
```bash
npm run fix    # Автоисправление и форматирование
```

## 🎓 Учебные цели

Этот проект демонстрирует:

- ✅ Настройку современного окружения разработки
- ✅ Модульную архитектуру JavaScript
- ✅ Работу с асинхронными операциями
- ✅ Интеграцию инструментов качества кода
- ✅ Современные практики организации кода
- ✅ HTTP клиент и работу с API

## 📝 Примечания

- Проект использует JSONPlaceholder API для демонстрации
- Все файлы проходят автоматическую проверку ESLint и Prettier
- Поддержка современных браузеров (ES6+)
- Готов к расширению и добавлению новых модулей

## 🤝 Разработка

При добавлении нового кода:

1. Следуйте настроенным правилам ESLint
2. Используйте `npm run fix` для автоформатирования
3. Проверяйте код командой `npm run check`
4. Добавляйте новые утилиты в соответствующие папки

## 📄 Лицензия

Учебный проект для демонстрационных целей.