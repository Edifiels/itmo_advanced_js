# Тестирование JavaScript с Mocha, Chai и Sinon

Демонстрационный проект для изучения модульного тестирования в JavaScript с использованием современных инструментов. Проект показывает тестирование асинхронных функций, работу с HTTP запросами и использование заглушек (stubs) и шпионов (spies).

## 🚀 Быстрый старт

### Предварительные требования
- Node.js 16+ 
- npm или yarn

### Установка
```bash
# Клонируйте репозиторий
git clone <repository-url>
cd js_tests

# Установите зависимости
npm install

# Запустите тесты
npm test
```

## 📁 Структура проекта

```
js_tests/
├── src/
│   ├── index.js         # Точка входа приложения
│   └── users.js         # Модуль для работы с пользователями
├── test/
│   └── fetchUsers.test.js  # Тесты для функции fetchUsers
├── .mocharc.json        # Конфигурация Mocha
├── package.json         # Зависимости и скрипты
└── .gitignore          # Игнорируемые файлы
```

## 🛠️ Технологии

- **ES6+ Modules** - Современные JavaScript модули с import/export
- **Mocha** - Фреймворк для тестирования с BDD синтаксисом
- **Chai** - Библиотека утверждений (assertions) с readable API
- **Sinon** - Библиотека для создания заглушек, шпионов и моков
- **Fetch API** - Современный способ выполнения HTTP запросов
- **JSONPlaceholder** - Бесплатный REST API для тестирования

## 📋 Доступные команды

```bash
npm test            # Запуск всех тестов
npm test -- --watch # Запуск тестов в режиме наблюдения
npm test -- --grep "название теста"  # Запуск конкретного теста
```

## 🎯 Функциональность

### 1. Получение данных пользователей
- Асинхронная функция `fetchUsers()` для загрузки данных
- Обработка HTTP ответов и ошибок
- Вывод имен пользователей в консоль

### 2. Обработка ошибок
- Проверка статуса HTTP ответа
- Выброс исключений при ошибках
- Логирование ошибок в консоль

### 3. Модульное тестирование
- Тестирование успешных сценариев
- Тестирование обработки ошибок
- Использование заглушек для изоляции тестов
- Проверка вызовов функций с помощью шпионов

## 🔌 API Интеграция

Проект использует [JSONPlaceholder](https://jsonplaceholder.typicode.com/) для демонстрации:

### Получение пользователей
```javascript
GET https://jsonplaceholder.typicode.com/users
```

**Пример ответа:**
```json
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz"
  }
]
```

## 🧪 Тестирование

### Структура тестов
- **describe** - группировка связанных тестов
- **beforeEach/afterEach** - подготовка и очистка перед/после каждого теста
- **it** - отдельные тестовые случаи

### Используемые паттерны
- **Sandbox** - изоляция заглушек и шпионов между тестами
- **Stubs** - замена внешних зависимостей (fetch API)
- **Spies** - отслеживание вызовов функций (console.log)

## 💻 Примеры кода

### Основная функция
```javascript
export async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        
        users.forEach(user => {
            console.log(user.name);
        });
        
        return users;
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
        throw error;
    }
}
```

### Тестирование успешного сценария
```javascript
it('должна получать и выводить имена пользователей', async () => {
    const testUsers = [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith' }
    ];

    global.fetch = sandbox.stub().resolves({
        ok: true,
        json: async () => testUsers
    });

    const consoleLogSpy = sandbox.spy(console, 'log');

    await fetchUsers();

    expect(global.fetch.calledOnce).to.be.true;
    expect(consoleLogSpy.calledWith('John Doe')).to.be.true;
});
```

### Тестирование обработки ошибок
```javascript
it('должна обрабатывать ошибки при неудачном запросе', async () => {
    global.fetch = sandbox.stub().resolves({
        ok: false,
        status: 404
    });

    try {
        await fetchUsers();
        expect.fail('Функция должна была выбросить ошибку');
    } catch (error) {
        expect(error.message).to.include('HTTP error! status: 404');
    }
});
```

## 🎓 Учебные цели

Проект демонстрирует:

- ✅ Написание модульных тестов с Mocha и Chai
- ✅ Использование Sinon для создания заглушек и шпионов
- ✅ Тестирование асинхронного кода с async/await
- ✅ Изоляция тестов с помощью sandbox
- ✅ Мокирование внешних зависимостей
- ✅ Проверка вызовов функций и их параметров
- ✅ Тестирование как успешных, так и ошибочных сценариев
- ✅ Современный синтаксис JavaScript (ES6+)
- ✅ Работу с HTTP API и обработку ответов

## 🔧 Возможности для развития

Проект можно расширить добавив:

1. **Дополнительные тесты**
   - Тестирование edge cases
   - Проверка работы с пустыми ответами
   - Тестирование таймаутов

2. **Покрытие кода**
   - Интеграция с Istanbul/nyc
   - Отчеты о покрытии
   - CI/CD pipeline с проверкой покрытия

3. **Дополнительные функции**
   - Фильтрация пользователей
   - Кеширование данных
   - Retry логика при ошибках

4. **Продвинутое тестирование**
   - Integration тесты
   - E2E тестирование
   - Property-based тестирование

5. **Инструменты разработки**
   - ESLint для линтинга
   - Prettier для форматирования
   - Husky для git hooks

## 🚀 Интеграция с CI/CD

### GitHub Actions пример
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '16'
      - run: npm install
      - run: npm test
```

## 📊 Отчеты о тестировании

Для получения подробных отчетов используйте:

```bash
# Запуск с подробным выводом
npm test -- --reporter spec

# JSON отчет
npm test -- --reporter json > test-results.json

# HTML отчет (требует mochawesome)
npm test -- --reporter mochawesome
```

## 📝 Лучшие практики

### Структура тестов
- Один файл тестов на один модуль
- Группировка связанных тестов в describe блоки
- Описательные названия тестов

### Изоляция тестов
- Использование beforeEach/afterEach для подготовки
- Sandbox для изоляции заглушек
- Независимость тестов друг от друга

### Тестирование асинхронного кода
- Всегда возвращайте Promise или используйте async/await
- Тестируйте как успешные, так и ошибочные сценарии
- Проверяйте правильность обработки ошибок

## 🤝 Разработка

При добавлении новых тестов:

1. Следуйте паттерну AAA (Arrange, Act, Assert)
2. Используйте описательные названия тестов
3. Группируйте связанные тесты в describe блоки
4. Изолируйте внешние зависимости
5. Тестируйте граничные случаи
6. Проверяйте обработку ошибок

## 📄 Лицензия

Учебный проект для демонстрационных целей.