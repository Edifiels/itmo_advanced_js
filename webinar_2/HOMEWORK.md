# Проект "Fake Store" с асинхронными возможностями

---

## 📋 Описание задания

После второго занятия вам необходимо расширить базовое приложение Fake Store API, добавив современные асинхронные возможности. Примените все изученные концепции: промисы, async/await, Event Loop оптимизацию и обработку ошибок.

---

## 📝 Требования к проекту

### 1. Создание и настройка проекта

**Используйте Vite для создания проекта:**

- Инициализируйте проект с названием `fake-store`
- Выберите Vanilla JavaScript (не React/Vue)
- Настройте ESLint и Prettier из предыдущего занятия

### 2. Функциональные требования

Реализуйте приложение Fake Store со следующим функционалом:

### **Функция 1: Список товаров**

- ➕ Добавление товаров
- 🔢 Загрузка товаров
- 🗑️ Удаление товаров

### **Функция 2: Корзина покупок**

- ➕ Добавление товаров в корзину
- 🔢 Изменение количества товаров
- 🗑️ Удаление товаров из корзины
- 💰 Подсчет общей стоимости

### 3. npm скрипты

**Добавьте в** `package.json` следующие скрипты:

- `dev` - запуск dev сервера Vite
- `build` - production сборка
- `preview` - просмотр production сборки
- `lint` - проверка кода с помощью ESLint
- `lint:fix` - автоматическое исправление ошибок ESLint
- `format` - форматирование всех файлов с Prettier
- `format:check` - проверка форматирования

---

## 🎯 Технические требования

### **Использование API Fake Store:**

**Основные endpoints:**

- `GET /products` - список всех товаров
- `GET /products/{id}` - товар по ID
- `GET /products/categories` - список категорий
- `GET /products/category/{category}` - товары категории
- `POST /products` - добавление товара (для тестирования)

---

## 📚 Полезные ресурсы

**Документация:**

- [Fake Store API](https://fakestoreapi.com/docs)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [Performance API](https://developer.mozilla.org/en-US/docs/Web/API/Performance)

**Примеры и туториалы:**

- [JavaScript Event Loop](https://javascript.info/event-loop)
- [Async/Await Best Practices](https://blog.bitsrc.io/6-tips-for-better-async-await-javascript-e4f2f7d4b48)
- [LocalStorage Best Practices](https://blog.logrocket.com/localstorage-javascript-complete-guide/)

---

## 🚀 Как сдать задание

1. Создайте репозиторий на GitHub с названием `fake-store-[ваша-фамилия]`
2. Выполните задание согласно требованиям
3. Создайте файл `README.md` с:
   - Инструкцией по запуску проекта
   - Описанием реализованных функций
4. Убедитесь, что в `.gitignore` добавлен `node_modules`
5. Отправьте ссылку на репозиторий преподавателю курса

*Если нет опыта работы с GitHub, то допускается сдача задания в виде архива без папки* `node_modules`

---

## ❓ Частые вопросы

**Q: Можно ли использовать CSS фреймворк?**

A: Да, но сосредоточьтесь на JavaScript функциональности.

**Q: Как тестировать POST/PUT/DELETE запросы?**

A: Fake Store API возвращает фиктивные ответы, можно имитировать изменения в UI.

**Q: Что делать если API недоступен?**

A: Реализуйте fallback с mock данными и покажите error handling.

---

## 💡 Подсказки

- Начните с базовой загрузки товаров, потом добавляйте функции по одной
- Используйте `try/catch` во всех async функциях
- Тестируйте каждую функцию отдельно перед интеграцией

## **Удачи в выполнении задания! 🎯**