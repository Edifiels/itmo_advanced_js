# Проект "Posts API Testing" с современными инструментами тестирования

---

## 📋 Описание задания

После третьего занятия вам необходимо создать и протестировать функцию для получения данных из API, используя современные инструменты тестирования JavaScript. **Выберите один из двух подходов**: **Mocha + Chai + Sinon** или **Jest**. Примените все изученные концепции: мокинг, заглушки и обработку асинхронного кода.

---

## 🔧 Выбор инструментов тестирования

### Вариант A: Mocha + Chai + Sinon (классический подход)

**Преимущества:**

- ✅ Гибкость и модульность
- ✅ Большой выбор assertion библиотек
- ✅ Отдельные инструменты для разных задач

### Вариант B: Jest (все в одном)

**Преимущества:**

- ✅ Zero-config настройка
- ✅ Встроенные моки и assertions
- ✅ Snapshot тестирование
- ✅ Покрытие кода из коробки

---

## 📝 Требования к проекту

### 1. Создание и настройка проекта

**Инициализируйте проект:**

- Создайте папку `posts-testing-[ваша-фамилия]`
- Настройте `package.json` с типом `"module"` (для Mocha) или без него (для Jest)
- Выберите один из вариантов настройки ниже

#### 🅰️ Настройка для Mocha + Chai + Sinon

**Установите зависимости:**

```bash
npm install --save-dev mocha chai sinon
```

**package.json:**

```json
{
  "type": "module",
  "scripts": {
    "test": "mocha test/**/*.test.js",
    "test:watch": "mocha test/**/*.test.js --watch"
  },
  "devDependencies": {
    "chai": "^5.1.2",
    "mocha": "^10.7.3",
    "sinon": "^19.0.2"
  }
}
```

**.mocharc.json:**

```json
{
  "extensions": [".js"],
  "spec": "./test/**/*.test.js",
  "recursive": true,
  "node-option": ["experimental-vm-modules"]
}
```

#### 🅱️ Настройка для Jest

**Установите зависимости:**

```bash
npm install --save-dev jest @types/jest
```

**package.json:**

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "@types/jest": "^29.5.0"
  }
}
```

**jest.config.js:**

```javascript
export default {
  testEnvironment: 'node',
  transform: {},
  extensionsToTreatAsEsm: ['.js'],
  globals: {
    'ts-jest': {
      useESM: true
    }
  },
  testMatch: ['**/test/**/*.test.js']
};
```

### 2. Функциональные требования

Реализуйте приложение для работы с постами со следующим функционалом:

**Функция 1: Получение постов**

- 📡 HTTP-запрос к JSONPlaceholder API
- ✅ Проверка статуса ответа
- 📝 Вывод заголовков первых 5 постов
- 📦 Возврат полного массива постов
- ⚠️ Корректная обработка ошибок

**Функция 2: Тестирование**

- 🧪 Unit-тесты для успешных запросов
- 🚫 Тесты для HTTP ошибок
- 🌐 Тесты для сетевых ошибок
- 🎯 Проверка корректности мокинга

### 3. Примеры тестов

#### 🅰️ Пример теста с Mocha + Chai + Sinon

```javascript
import { expect } from 'chai';
import sinon from 'sinon';
import { fetchPosts } from '../src/posts.js';

describe('fetchPosts', () => {
    let sandbox;

    beforeEach(() => {
        sandbox = sinon.createSandbox();
    });

    afterEach(() => {
        sandbox.restore();
    });

    it('должна получать и выводить заголовки постов', async () => {
        const testPosts = [
            { id: 1, title: 'Test Post 1', body: 'Content 1', userId: 1 },
            { id: 2, title: 'Test Post 2', body: 'Content 2', userId: 2 }
        ];

        global.fetch = sandbox.stub().resolves({
            ok: true,
            json: async () => testPosts
        });

        const consoleLogSpy = sandbox.spy(console, 'log');
        const result = await fetchPosts();

        expect(global.fetch.calledOnce).to.be.true;
        expect(global.fetch.calledWith('https://jsonplaceholder.typicode.com/posts')).to.be.true;
        expect(consoleLogSpy.calledWith('Test Post 1')).to.be.true;
        expect(result).to.deep.equal(testPosts);
    });
});
```

#### 🅱️ Пример теста с Jest

```javascript
import { fetchPosts } from '../src/posts.js';

// Мокируем fetch глобально
global.fetch = jest.fn();

describe('fetchPosts', () => {
    beforeEach(() => {
        fetch.mockClear();
        console.log = jest.fn();
    });

    it('должна получать и выводить заголовки постов', async () => {
        const testPosts = [
            { id: 1, title: 'Test Post 1', body: 'Content 1', userId: 1 },
            { id: 2, title: 'Test Post 2', body: 'Content 2', userId: 2 }
        ];

        fetch.mockResolvedValueOnce({
            ok: true,
            json: async () => testPosts
        });

        const result = await fetchPosts();

        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts');
        expect(console.log).toHaveBeenCalledWith('Test Post 1');
        expect(result).toEqual(testPosts);
    });

    it('должна обрабатывать HTTP ошибки', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
            status: 404
        });

        await expect(fetchPosts()).rejects.toThrow('HTTP error! status: 404');
    });
});
```

### 4. npm скрипты

#### 🅰️ Для Mocha + Chai + Sinon:

```json
{
  "scripts": {
    "test": "mocha test/**/*.test.js",
    "test:watch": "mocha test/**/*.test.js --watch"
  }
}
```

#### 🅱️ Для Jest:

```json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  }
}
```

---

## 🎯 Технические требования

**Использование JSONPlaceholder API:**

**Основной endpoint:**

- `GET https://jsonplaceholder.typicode.com/posts` - список всех постов

**Структура ответа:**

```json
[
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident...",
    "body": "quia et suscipit..."
  }
]
```

**Обязательные технологии:**

- ✅ **Mocha + Chai + Sinon** ИЛИ **Jest** - инструменты тестирования
- ✅ **ES6 Modules** - современные модули
- ✅ **async/await** - асинхронный код
- ✅ **Мокинг fetch** - изоляция от внешних зависимостей

**Файловая структура:**

```
project/
├── src/
│   ├── index.js           # Точка входа
│   └── posts.js           # Основная функция
├── test/
│   └── fetchPosts.test.js # Тесты
├── package.json
├── .mocharc.json         # Только для Mocha
├── jest.config.js        # Только для Jest
├── .gitignore
└── index.html
```

---

## 📚 Полезные ресурсы

**Документация для Mocha стека:**

- [Mocha Testing Framework](https://mochajs.org/)
- [Chai Assertion Library](https://www.chaijs.com/)
- [Sinon.JS Mocking](https://sinonjs.org/)

**Документация для Jest:**

- [Jest Testing Framework](https://jestjs.io/)
- [Jest Mock Functions](https://jestjs.io/docs/mock-functions)
- [Jest Async Testing](https://jestjs.io/docs/asynchronous)

**Общие ресурсы:**

- [JSONPlaceholder API](https://jsonplaceholder.typicode.com/)
- [JavaScript Testing Best Practices](https://github.com/goldbergyoni/javascript-testing-best-practices)

---

## 🚀 Как сдать задание

1. Создайте репозиторий на GitHub с названием `posts-testing-[ваша-фамилия]`
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

**Q: Какой подход выбрать - Mocha или Jest?**

A: Mocha + Chai + Sinon для изучения отдельных инструментов, Jest для быстрого старта.

**Q: Нужно ли тестировать реальный API?**

A: Нет, используйте моки для изоляции от внешних зависимостей.

**Q: Что делать если не получается настроить ES6 модули?**

A: Для Mocha: убедитесь в `"type": "module"` в package.json. Для Jest: используйте jest.config.js с ESM настройками.

**Q: Сколько тестов нужно написать?**

A: Минимум 2: успешный запрос, HTTP ошибка.

**Q: Можно ли смешивать подходы?**

A: Нет, выберите один стек и используйте его во всем проекте.

**Q: Как посмотреть покрытие тестами?**

A: Для Jest: `npm run test:coverage`. Для Mocha: установите nyc отдельно.

---

## 💡 Подсказки

- **Для обоих подходов:** Начните с написания функции `fetchPosts`, потом переходите к тестам
- **Mocha:** Используйте `sandbox.createSandbox()` для изоляции тестов
- **Jest:** Используйте `jest.fn()` для создания моков
- **Общее:** В тестах сначала настраивайте моки, потом вызывайте функцию
- **Отладка:** Используйте `console.log` в тестах временно для понимания процесса

## **Удачи в выполнении задания! 🎯**