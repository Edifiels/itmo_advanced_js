import './style.css';
import mathUtils, { add, multiply, calculateCircleArea } from './utils/math.js';
import { capitalize, truncate } from './utils/string.js';
import { UserService } from './services/UserService.js';

// Демонстрация математических функций
console.log('=== Math Utils Demo ===');
console.log('Add 5 + 3 =', add(5, 3));
console.log('Multiply 4 * 7 =', multiply(4, 7));
console.log('Circle area (radius 5) =', calculateCircleArea(5));
console.log('PI value =', mathUtils.PI);

// Демонстрация строковых функций
console.log('\n=== String Utils Demo ===');
console.log('Capitalize "hello world" =', capitalize('hello world'));
console.log('Truncate long text =', truncate('This is a very long text that needs to be truncated', 20));

// Демонстрация работы с API
console.log('\n=== API Demo ===');
const userService = new UserService();

async function demonstrateAPI() {
  try {
    // Загрузка списка пользователей
    const users = await userService.getAllUsers();
    console.log('Loaded users:', users.slice(0, 3)); // Показываем первых 3

    // Загрузка конкретного пользователя
    const user = await userService.getUserById(1);
    console.log('User details:', user);

    // Загрузка постов пользователя
    const posts = await userService.getUserPosts(1);
    console.log('User posts:', posts.slice(0, 2)); // Показываем первые 2

    // Отображение в UI
    displayUsers(users.slice(0, 5));
    
  } catch (error) {
    console.error('API demonstration failed:', error);
  }
}

function displayUsers(users) {
  const app = document.querySelector('#app');
  
  const usersHTML = users.map(user => `
    <div class="user-card">
      <h3>${user.name}</h3>
      <p><strong>Email:</strong> ${user.email}</p>
      <p><strong>Company:</strong> ${user.company.name}</p>
      <p><strong>Website:</strong> ${user.website}</p>
    </div>
  `).join('');

  app.innerHTML = `
    <div class="container">
      <h1>Advanced JavaScript Course - Day 1</h1>
      <h2>Modern Development Tools Demo</h2>
      <div class="users-grid">
        ${usersHTML}
      </div>
    </div>
  `;
}

// Запуск демонстрации
demonstrateAPI();
