// Get cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartList = document.getElementById('cart-list');
const totalPriceEl = document.getElementById('total-price');

// Function to render cart
function renderCart() {
  cartList.innerHTML = '';

  if(cart.length === 0) {
    cartList.innerHTML = '<p>Your cart is empty!</p>';
    totalPriceEl.innerText = 'Total: ₹0';
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <h3>${item.name}</h3>
      <p>Price: ₹${item.price}</p>
      <p>Quantity: ${item.quantity}</p>
      <p>Subtotal: ₹${item.price * item.quantity}</p>
      <button class="btn remove-btn" onclick="removeFromCart(${index})">Remove</button>
    `;

    cartList.appendChild(card);
    total += item.price * item.quantity;
  });

  totalPriceEl.innerText = `Total: ₹${total}`;
}

// Remove item from cart
function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem('cart', JSON.stringify(cart));
  renderCart();
}

// Render cart on page load
renderCart();
