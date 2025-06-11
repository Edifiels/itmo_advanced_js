let products = [];

const API_URL = 'https://fakestoreapi.com';

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

function displayProducts() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';

    products.forEach((product) => {
        const productElement = document.createElement('div');
        productElement.className = 'product';
        productElement.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p>$${product.price}</p>
            <button onclick="deleteProduct(${product.id})">Удалить</button>
      `;
        productList.appendChild(productElement);
    });
}

async function addProduct(event) {
    event.preventDefault();

    const newProduct = {
        title: document.getElementById('productTitle').value,
        price: parseFloat(document.getElementById('productPrice').value),
        description: document.getElementById('productDescription').value,
        image: document.getElementById('productImage').value,
        category: document.getElementById('productCategory').value,
    };

    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newProduct),
        });
        if (!response.ok) {
            throw new Error('Не удалось добавить товар');
        }
        const addedProduct = await response.json();
        showMessage(`Товар ${addedProduct.title} успешно добавлен!`, 'success');
        products.push(addedProduct);
        displayProducts();
    } catch (error) {
        showMessage('Ошибка при добавлении товара: ' + error.message, 'error');
    }
}

async function deleteProduct(id) {
    try {
        const response = await fetch(`${API_URL}/products/${id}`, {
            method: 'DELETE',
        });
        if (!response.ok) {
            throw new Error('Не удалось удалить товар');
        }
        showMessage('Товар успешно удален!', 'success');
        products = products.filter((product) => product.id !== id);
        displayProducts();
    } catch (error) {
        showMessage('Ошибка при удалении товара: ' + error.message, 'error');
    }
}

function showMessage(message, type = 'success') {
    const messageElement = document.getElementById('message');
    messageElement.textContent = message;
    messageElement.className = type;
    messageElement.style.display = 'block';
    setTimeout(() => (messageElement.style.display = 'none'), 3000);
}

document
    .getElementById('addProductForm')
    .addEventListener('submit', addProduct);
getProducts();
