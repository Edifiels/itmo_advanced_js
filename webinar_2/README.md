# Интернет-магазин на JavaScript

Демонстрационное приложение интернет-магазина, построенное на современном JavaScript с использованием Fake Store API. Проект показывает работу с REST API, CRUD операциями и динамическим контентом без использования фреймворков.

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 16+ 
- npm или yarn

### Установка
```bash
# Клонируйте репозиторий
git clone <repository-url>
cd webinar_2

# Установите зависимости
npm install

# Запустите проект в режиме разработки
npm run dev
```

Приложение откроется по адресу: http://localhost:4173

## 📁 Структура проекта

```
webinar_2/
├── src/
│   ├── main.js          # Основная логика приложения
│   └── style.css        # Стили интерфейса
├── index.html           # HTML разметка
├── package.json         # Зависимости и скрипты
└── vite.config.js       # Конфигурация Vite (опционально)
```

## 🛠️ Технологии

- **Vanilla JavaScript** - ES6+ с модулями и async/await
- **Vite** - Современный инструмент сборки и dev-сервер
- **Fake Store API** - REST API для демонстрации e-commerce функций
- **CSS Grid** - Адаптивная сетка товаров
- **Fetch API** - HTTP запросы к серверу

## 📋 Доступные команды

```bash
npm run dev          # Запуск dev сервера с HMR
npm run build        # Сборка для продакшена
npm run preview      # Предпросмотр продакшен сборки
```

## 🎯 Функциональность

### 1. Просмотр товаров
- Автоматическая загрузка товаров при старте приложения
- Отображение в адаптивной сетке
- Показ изображений, названий и цен

### 2. Добавление товаров
- Форма с валидацией полей
- Отправка POST запроса к API
- Мгновенное обновление списка товаров

**Поля формы:**
- Название товара (обязательное)
- Цена (число с десятичными знаками)
- Описание товара (обязательное)
- URL изображения (обязательное)
- Категория (обязательное)

### 3. Удаление товаров
- Кнопка удаления для каждого товара
- DELETE запрос к API
- Обновление интерфейса без перезагрузки

### 4. Обработка ошибок
- Уведомления об успешных операциях
- Показ ошибок при проблемах с API
- Автоматическое скрытие сообщений через 3 секунды

## 🔌 API Интеграция

Приложение использует [Fake Store API](https://fakestoreapi.com/) для демонстрации:

### Получение товаров
```javascript
GET https://fakestoreapi.com/products
```

### Добавление товара
```javascript
POST https://fakestoreapi.com/products
Content-Type: application/json

{
  "title": "Название товара",
  "price": 99.99,
  "description": "Описание товара",
  "image": "https://example.com/image.jpg",
  "category": "electronics"
}
```

### Удаление товара
```javascript
DELETE https://fakestoreapi.com/products/{id}
```

## 🎨 Пользовательский интерфейс

### Адаптивный дизайн
- Responsive grid layout с помощью CSS Grid
- Автоматическая подстройка количества колонок
- Минимальная ширина карточки товара: 200px

### Карточки товаров
- Изображение товара (максимум 100x100px)
- Название товара
- Цена в долларах
- Кнопка удаления

### Система уведомлений
- Зеленые уведомления для успешных операций
- Красные уведомления для ошибок
- Автоматическое исчезновение через 3 секунды

## 💻 Примеры кода

### Загрузка и отображение товаров
```javascript
async function getProducts() {
    try {
        const response = await fetch(`${API_URL}/products`);
        if (!response.ok) {
            throw new Error('Не удалось получить товары');
        }
        products = await response.json();
        displayProducts(products);
    } catch (error) {
        showMessage('Ошибка при загрузке товаров: ' + error.message, 'error');
    }
}
```

### Добавление нового товара
```javascript
async function addProduct(event) {
    event.preventDefault();
    
    const newProduct = {
        title: document.getElementById('productTitle').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        category: document.getElementById('productCategory').value,
    };

    // Отправка POST запроса...
}
```

### Система уведомлений
```javascript
function showMessage(message, type = 'success') {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type;
    messageElement.style.display = 'block';
    setTimeout(() => messageElement.style.display = 'none', 3000);
}
```

## 🎓 Учебные цели

Проект демонстрирует:

- ✅ Работу с современным JavaScript (ES6+)
- ✅ Асинхронные операции с async/await
- ✅ CRUD операции через REST API
- ✅ Динамическое создание DOM элементов
- ✅ Обработку событий форм
- ✅ Валидацию пользовательского ввода
- ✅ Обработку ошибок HTTP запросов
- ✅ Адаптивную верстку с CSS Grid
- ✅ Vanilla JavaScript без фреймворков

## 🔧 Возможности для развития

Проект можно расширить добавив:

1. **Фильтрация и поиск**
   - Поиск по названию товара
   - Фильтрация по категориям
   - Сортировка по цене

2. **Корзина покупок**
   - Добавление товаров в корзину
   - Подсчет общей стоимости
   - Локальное хранение корзины

3. **Редактирование товаров**
   - Форма редактирования
   - PUT запросы к API
   - Inline editing

4. **Пагинация**
   - Разбивка на страницы
   - Lazy loading
   - Бесконечная прокрутка

5. **Улучшение UX**
   - Loading состояния
   - Подтверждение удаления
   - Drag & drop для изображений

## 🚀 Развертывание

### Для продакшена
```bash
npm run build
```

Файлы будут собраны в папку `dist/` и готовы к размещению на любом статическом хостинге.

### Рекомендуемые хостинги
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📝 Примечания

- API является mock сервисом - реальные изменения не сохраняются
- Изображения загружаются с внешних источников
- Приложение полностью клиентское (SPA)
- Совместимо с современными браузерами (ES6+)

## 🤝 Разработка

При добавлении новых функций:

1. Следуйте принципам чистого кода
2. Добавляйте обработку ошибок
3. Тестируйте на разных размерах экрана
4. Валидируйте пользовательский ввод
5. Используйте современный JavaScript синтаксис

## 📄 Лицензия

Учебный проект для демонстрационных целей.