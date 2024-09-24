let cart = [];
const productSection = document.getElementById('product-section');
const cartItems = document.getElementById('cart-items');
const totalMrpEl = document.getElementById('total-mrp');
const totalAmountEl = document.getElementById('total-amount');

const discount = 50;
const platformFee = 10;
const shippingCharges = 20;



fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(output => {
        displayProducts(output);
    });

function displayProducts(output) {
    output.forEach(output => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        
        productCard.innerHTML = `
            <img src="${output.image}" alt="${output.title}">
            <h3>${output.title}</h3>
            <p>&#x2605 ${output.rating.rate}</p>
            <p>₹${output.price}</p>
            <button onclick="addToCart(${output.id}, '${output.title}', ${output.price}, '${output.image}')">Add to Cart</button>
        `;
        
        productSection.appendChild(productCard);
    });
}
function filterProducts() {
    const searchTerm = document.getElementById('search-box').value.toLowerCase();
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        card.style.display = title.includes(searchTerm) ? '' : 'none';
    });
}


function addToCart(id, title, price, image) {
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, title, price, image, quantity: 1 });
    }
    
    renderCart();
    calculateTotal();
}

function renderCart() {
    cartItems.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" width="50">
            <span>${item.title}</span>
            <span>₹${item.price}</span>
            <span>Quantity: ${item.quantity}</span>
            <button onclick="removeFromCart(${item.id})">X</button>
        `;
        
        cartItems.appendChild(cartItem);
    });
}

function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    renderCart();
    calculateTotal();
}

function calculateTotal() {
    let totalMrp = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    let totalAmount = totalMrp - discount + platformFee + shippingCharges;
    
    totalMrpEl.innerText = totalMrp;
    totalAmountEl.innerText = totalAmount;
}
