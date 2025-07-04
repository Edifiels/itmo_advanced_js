# Проект "WebSocket Чат"

### 📋 Описание задания

После четвертого занятия вам необходимо создать приложение real-time чата, используя WebSocket технологии. Воссоздайте функциональность, которая была продемонстрирована на занятии: базовый чат с возможностью отправки сообщений в реальном времени между несколькими пользователями.

---

## 📝 Требования к проекту

### 1. Структура проекта

**Создайте проект со следующей структурой:**

```
websocket-chat/
├── backend/
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── index.html
│   ├── chat.js
│   ├── styles.css
└── README.md
```

### 2. Серверная часть (backend/)

**Файл:** `backend/package.json`

```json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "ws": "^8.18.0"
  }
}
```

**Файл:** `backend/server.js`

Реализуйте WebSocket сервер с следующей функциональностью:

- 🌐 Запуск сервера на порту **8080**
- 👋 Отправка приветственного сообщения новым клиентам
- 📢 Пересылка всех сообщений всем подключенным клиентам (broadcast)
- 📝 Логирование подключений и отключений в консоль
- 🛡️ Обработка некорректных JSON сообщений

**Требуемая структура сообщений:**

```javascript
// Системное сообщение (от сервера)
{
    type: 'system',
    content: 'Добро пожаловать в чат!'
}

// Пользовательское сообщение
{
    type: 'user',
    content: 'Текст сообщения пользователя'
}
```

### 3. Клиентская часть (frontend/)

**Файл:** `frontend/index.html`

Создайте HTML страницу с:

- 🏷️ Заголовок "WebSocket Чат"
- 💬 Область отображения сообщений с id="chat"
- 📝 Форма для ввода сообщений с полем input и кнопкой "Отправить"
- 🎨 Подключение CSS и JavaScript файлов

**Файл:** `frontend/chat.js`

Реализуйте клиентскую логику:

- 🔗 Подключение к WebSocket серверу на `ws://localhost:8080`
- 📨 Обработка входящих сообщений и их отображение
- ✉️ Отправка сообщений через форму
- 🎨 Добавление CSS класса `system-message` для системных сообщений
- 📜 Автоматическая прокрутка чата к последнему сообщению
- 🔍 Логирование событий соединения в консоль браузера

**Файл:** `frontend/styles.css`

Создайте стили для:

- 📱 Центрирование контента с максимальной шириной 600px
- 💬 Область чата высотой 300px с прокруткой
- 📝 Горизонтальное расположение поля ввода и кнопки
- 🎨 Стилизация системных сообщений (серый цвет, курсив)

---

## 🎯 Обязательная функциональность

### **Серверная часть должна:**

1. ✅ Запускаться на порту 8080
2. ✅ Принимать WebSocket соединения
3. ✅ Отправлять приветственное сообщение новым клиентам
4. ✅ Пересылать все полученные сообщения всем подключенным клиентам
5. ✅ Логировать события подключения/отключения
6. ✅ Обрабатывать ошибки парсинга JSON

### **Клиентская часть должна:**

1. ✅ Подключаться к WebSocket серверу
2. ✅ Отображать входящие сообщения в реальном времени
3. ✅ Отправлять сообщения через форму
4. ✅ Различать системные и пользовательские сообщения
5. ✅ Автоматически прокручивать чат вниз
6. ✅ Очищать поле ввода после отправки

---

## 🔧 Техническая спецификация

### **Установка и запуск:**

```bash
# 1. Установка зависимостей backend
cd backend
npm install

# 2. Запуск WebSocket сервера
npm start
# Сервер должен вывести: "WebSocket сервер запущен на порту 8080"

# 3. Открытие клиентской части
# Откройте frontend/index.html в браузере
# Или используйте Live Server в VS Code
```

### **Тестирование:**

1. 🌐 Откройте `frontend/index.html` в **нескольких вкладках браузера**
2. ✍️ Отправьте сообщение в одной вкладке
3. ✅ Убедитесь, что сообщение появилось во **всех вкладках**
4. 🔍 Проверьте консоль браузера на наличие логов соединения
5. 📊 Проверьте консоль сервера на наличие логов подключений

### **Структура сообщений в коде:**

**Сервер отправляет приветствие:**

```javascript
ws.send(JSON.stringify({
    type: 'system',
    content: 'Добро пожаловать в чат!'
}));
```

**Клиент отправляет сообщение:**

```javascript
const message = {
    type: 'user',
    content: messageInput.value
};
socket.send(JSON.stringify(message));
```

---

## 📚 Подсказки для реализации

### **Backend (server.js) - основные блоки:**

```javascript
const WebSocket = require('ws');

// 1. Создание WebSocket сервера
const wss = new WebSocket.Server({ port: 8080 });

// 2. Обработка новых соединений
wss.on('connection', function connection(ws) {
    // Логирование подключения
    // Отправка приветственного сообщения
    
    // 3. Обработка входящих сообщений
    ws.on('message', function incoming(message) {
        // Парсинг JSON
        // Логирование
        // Broadcast всем клиентам
    });
    
    // 4. Обработка отключений
    ws.on('close', function close() {
        // Логирование отключения
    });
});
```

### **Frontend (chat.js) - основные блоки:**

```javascript
// 1. Получение элементов DOM
const chat = document.getElementById('chat');
const messageForm = document.getElementById('messageForm');
const messageInput = document.getElementById('messageInput');

// 2. Создание WebSocket соединения
const socket = new WebSocket('ws://localhost:8080');

// 3. Обработка событий WebSocket
socket.onopen = (e) => { /* логирование */ };
socket.onmessage = (event) => { /* отображение сообщения */ };
socket.onclose = (event) => { /* логирование */ };
socket.onerror = (error) => { /* логирование */ };

// 4. Обработка отправки формы
messageForm.onsubmit = (e) => { /* отправка сообщения */ };
```

---

## 🚀 Как сдать задание

1. Создайте репозиторий на GitHub с названием `websocket-chat-[ваша-фамилия]`
2. Выполните задание согласно требованиям
3. Создайте файл `README.md` с:
   - Инструкцией по запуску тестов
   - Описанием тестируемых функций
   - Результатами покрытия тестами
4. Убедитесь, что в `.gitignore` добавлен `node_modules`
5. Все тесты должны проходить при запуске `npm test`
6. Отправьте ссылку на репозиторий преподавателю курса

*Если нет опыта работы с GitHub, то допускается сдача задания в виде архива без папки* `node_modules`

---

## ❓ Частые вопросы

**Q: Сервер не запускается - "Error: listen EADDRINUSE"**

A: Порт 8080 занят. Закройте другие приложения или измените порт в коде.

**Q: Клиент не может подключиться к серверу**

A: Убедитесь, что сервер запущен и слушает порт 8080. Проверьте URL в клиентском коде.

**Q: Сообщения не отображаются**

A: Проверьте консоль браузера на ошибки. Убедитесь, что JSON парсится корректно.

**Q: Системные сообщения выглядят как обычные**

A: Проверьте CSS класс `system-message` и его применение в JavaScript.

**Q: Можно ли использовать другой порт?**

A: Да, но измените порт в сервере и клиенте одновременно.

---

## 💡 Дополнительные задания (необязательно)

После выполнения основного задания можете добавить:

### **Простые улучшения:**

- 🕒 Временные метки сообщений
- 👤 Поле для ввода имени пользователя
- 🎨 Улучшенные стили интерфейса
- 📱 Адаптивный дизайн для мобильных

### **Продвинутые функции:**

- 🔄 Автоматическое переподключение при обрыве связи
- 📊 Счетчик подключенных пользователей
- 🔔 Уведомления о подключении/отключении пользователей
- 💾 Сохранение истории сообщений в localStorage

---

## **Удачи в выполнении задания! 🎯**