# WebSocket Чат

Демонстрационное приложение чата в реальном времени, построенное на WebSocket технологии. Проект показывает работу с двунаправленной связью между клиентом и сервером, обмен JSON сообщениями и создание интерактивного пользовательского интерфейса.

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 10+ 
- npm или yarn
- Современный браузер с поддержкой WebSocket

### Установка и запуск

#### Backend (сервер)
```bash
# Перейдите в папку backend
cd backend

# Установите зависимости
npm install

# Запустите WebSocket сервер
npm start
```

Сервер запустится на порту 8080.

#### Frontend (клиент)
```bash
# Перейдите в папку frontend
cd frontend

# Откройте index.html в браузере
# Или запустите локальный сервер
python -m http.server 3000
# или
npx http-server -p 3000
```

Откройте несколько вкладок браузера с `http://localhost:3000` для тестирования чата.

## 📁 Структура проекта

```
websocket-chat/
├── backend/
│   ├── server.js        # WebSocket сервер
│   ├── package.json     # Зависимости сервера
│   ├── package-lock.json
│   └── .gitignore       # Игнорируемые файлы
├── frontend/
│   ├── index.html       # HTML интерфейс чата
│   ├── chat.js          # Клиентская логика WebSocket
│   └── styles.css       # Стили интерфейса
└── README.md
```

## 🛠️ Технологии

### Backend
- **Node.js** - Серверная платформа JavaScript
- **ws** - Библиотека WebSocket для Node.js
- **JSON** - Формат обмена данными

### Frontend
- **Vanilla JavaScript** - Чистый JavaScript без фреймворков
- **WebSocket API** - Браузерный API для WebSocket соединений
- **HTML5** - Семантическая разметка
- **CSS3** - Стилизация интерфейса

## 📋 Доступные команды

### Backend
```bash
npm start           # Запуск WebSocket сервера
npm install         # Установка зависимостей
```

### Frontend
```bash
# Запуск локального сервера (опционально)
python -m http.server 3000
npx http-server -p 3000
npx live-server
```

## 🎯 Функциональность

### 1. WebSocket соединение
- Автоматическое подключение к серверу при загрузке страницы
- Обработка событий подключения, отключения и ошибок
- Переподключение при разрыве соединения

### 2. Обмен сообщениями
- Отправка сообщений через форму
- Получение сообщений от других клиентов в реальном времени
- Поддержка системных уведомлений

### 3. Пользовательский интерфейс
- Адаптивный дизайн чата
- Автоматическая прокрутка к новым сообщениям
- Различное отображение пользовательских и системных сообщений

### 4. Обработка ошибок
- Валидация JSON сообщений на сервере
- Обработка ошибок соединения на клиенте
- Логирование событий в консоль

## 🔌 Протокол обмена сообщениями

### Структура сообщения
```javascript
{
  "type": "user" | "system",
  "content": "Текст сообщения"
}
```

### Типы сообщений
- **user** - Сообщение от пользователя
- **system** - Системное уведомление

### Примеры сообщений

#### Приветственное сообщение
```json
{
  "type": "system",
  "content": "Добро пожаловать в чат!"
}
```

#### Пользовательское сообщение
```json
{
  "type": "user",
  "content": "Привет всем!"
}
```

## 💻 Примеры кода

### WebSocket сервер
```javascript
const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', function connection(ws) {
  console.log('Новый клиент подключился');
  
  // Отправка приветственного сообщения
  ws.send(JSON.stringify({
    type: 'system',
    content: 'Добро пожаловать в чат!'
  }));

  // Обработка входящих сообщений
  ws.on('message', function incoming(message) {
    let parsedMessage;
    try {
      parsedMessage = JSON.parse(message);
    } catch (e) {
      console.log('Получено некорректное сообщение');
      return;
    }

    // Рассылка сообщения всем подключенным клиентам
    wss.clients.forEach((client) => {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(parsedMessage));
      }
    });
  });
});
```

### WebSocket клиент
```javascript
const socket = new WebSocket('ws://localhost:8080');

// Обработка подключения
socket.onopen = (e) => {
    console.log('Соединение установлено');
};

// Обработка входящих сообщений
socket.onmessage = (event) => {
    const message = JSON.parse(event.data);
    const messageElement = document.createElement('div');

    if (message.type === 'system') {
        messageElement.classList.add('system-message');
    }

    messageElement.textContent = message.content;
    chat.appendChild(messageElement);
    chat.scrollTop = chat.scrollHeight;
};

// Отправка сообщения
function sendMessage(content) {
    const message = {
        type: 'user',
        content: content
    };
    socket.send(JSON.stringify(message));
}
```

### HTML интерфейс
```html
<h1>WebSocket Чат</h1>
<div id="chat"></div>
<form id="messageForm">
    <input type="text" id="messageInput" placeholder="Введите сообщение" required>
    <button type="submit">Отправить</button>
</form>
```

## 🎓 Учебные цели

Проект демонстрирует:

- ✅ Создание WebSocket сервера на Node.js
- ✅ Работу с библиотекой ws для Node.js
- ✅ Использование WebSocket API в браузере
- ✅ Обмен JSON данными между клиентом и сервером
- ✅ Обработку событий WebSocket (open, message, close, error)
- ✅ Создание интерактивного пользовательского интерфейса
- ✅ Работу с DOM для динамического обновления контента
- ✅ Валидацию и обработку ошибок
- ✅ Broadcast сообщений всем подключенным клиентам
- ✅ Архитектуру клиент-сервер приложений реального времени

## 🔧 Возможности для развития

Проект можно расширить добавив:

### 1. Аутентификация и пользователи
```javascript
// Пример структуры сообщения с пользователем
{
  "type": "user",
  "content": "Привет!",
  "username": "john_doe",
  "timestamp": "2024-01-01T12:00:00Z"
}
```

### 2. Комнаты и каналы
- Создание отдельных комнат для чата
- Присоединение к конкретным каналам
- Приватные сообщения

### 3. Расширенная функциональность
- История сообщений с базой данных
- Эмодзи и форматирование текста
- Отправка файлов и изображений
- Уведомления о наборе текста (typing indicators)

### 4. Улучшение интерфейса
```css
/* Пример стилей для улучшенного интерфейса */
.message {
    padding: 8px 12px;
    margin: 4px 0;
    border-radius: 8px;
    max-width: 70%;
}

.message.own {
    background-color: #007bff;
    color: white;
    margin-left: auto;
}

.message.other {
    background-color: #f1f1f1;
}
```

### 5. Масштабирование
- Использование Redis для масштабирования на несколько серверов
- Load balancing для WebSocket соединений
- Clustering для обработки большого количества соединений

### 6. Безопасность
- Аутентификация пользователей
- Валидация и санитизация сообщений
- Rate limiting для предотвращения спама
- HTTPS/WSS для защищенных соединений

## 🚀 Развертывание

### Локальное развертывание
```bash
# Запуск backend
cd backend && npm start

# Запуск frontend
cd frontend && npx http-server
```

### Продакшен развертывание

#### Heroku
```bash
# Добавьте Procfile в корень проекта
echo "web: node backend/server.js" > Procfile

# Деплой
git add .
git commit -m "Deploy to Heroku"
git push heroku main
```

#### Docker
```dockerfile
# Dockerfile для backend
FROM node:16-alpine
WORKDIR /app
COPY backend/package*.json ./
RUN npm install
COPY backend/ .
EXPOSE 8080
CMD ["npm", "start"]
```

## 🔍 Отладка и мониторинг

### Логирование событий
```javascript
// Расширенное логирование на сервере
wss.on('connection', function connection(ws, request) {
  const ip = request.socket.remoteAddress;
  console.log(`Новое подключение с IP: ${ip}`);
  
  ws.on('close', function close() {
    console.log(`Клиент ${ip} отключился`);
  });
});
```

### Отслеживание метрик
- Количество активных соединений
- Частота отправки сообщений
- Ошибки подключения и их причины

## 🧪 Тестирование

### Тестирование WebSocket соединения
```javascript
// Пример теста WebSocket клиента
const WebSocket = require('ws');

describe('WebSocket Chat', () => {
  let server, client;

  beforeEach(() => {
    server = new WebSocket.Server({ port: 8081 });
    client = new WebSocket('ws://localhost:8081');
  });

  afterEach(() => {
    client.close();
    server.close();
  });

  it('should connect and receive welcome message', (done) => {
    client.on('message', (data) => {
      const message = JSON.parse(data);
      expect(message.type).to.equal('system');
      done();
    });
  });
});
```

## 📊 Производительность

### Оптимизация WebSocket сервера
- Использование connection pooling
- Ограничение размера сообщений
- Heartbeat для проверки активных соединений

### Мониторинг ресурсов
```javascript
// Мониторинг количества подключений
setInterval(() => {
  console.log(`Активных соединений: ${wss.clients.size}`);
}, 30000);
```

## 📝 Известные ограничения

- Отсутствие персистентности сообщений
- Нет аутентификации пользователей
- Ограниченная обработка ошибок сети
- Отсутствие rate limiting

## 🤝 Разработка

При разработке новых функций:

1. Поддерживайте обратную совместимость протокола
2. Валидируйте все входящие данные
3. Обрабатывайте ошибки сети корректно
4. Тестируйте с множественными клиентами
5. Документируйте изменения в протоколе
6. Следите за производительностью при масштабировании

## 📄 Лицензия

Учебный проект для демонстрационных целей.