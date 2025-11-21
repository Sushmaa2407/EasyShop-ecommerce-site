// ----- Product Data -----
const products = [
  { id: 1, name: "Classic Shirt", price: 499, image: "images/product1.jpg" },
  { id: 2, name: "Running Shoes", price: 1299, image: "images/product2.jpg" },
  { id: 3, name: "Leather Bag", price: 1499, image: "images/product3.jpg" },
  { id: 4, name: "Jeans", price: 999, image: "images/product4.jpg" },
  { id: 5, name: "Watch", price: 599, image: "images/product5.jpg" },
  {id: 6, name: "Heels", price:799, image:"images/product6.jpg"},
  {id: 7, name:"Silk Scarf", price: 899, image:"images/product7.jpg"},
  {id: 8, name:"Cardigan",price:1199,image:"images/product8.jpg"},
  {id:9, name:"Top",price:699,image:"images/product9.jpg"},
  {id:10,name:"Trouser",price:599,image:"images/product10.jpg"}
];

// ----- Render Products -----
const productList = document.getElementById('product-list');

products.forEach(product => {
  const card = document.createElement('div');
  card.classList.add('product-card');

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}">
    <h3>${product.name}</h3>
    <p>₹${product.price}</p>
    <button class="btn add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
  `;

  productList.appendChild(card);
});

// ----- Add to Cart -----
function addToCart(productId) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if product already in cart
  const existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    existingProduct.quantity += 1;
  } else {
    const product = products.find(p => p.id === productId);
    cart.push({ ...product, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert("Product added to cart!");
}
// Highlight active navbar link
function highlightActiveLink() {
  const links = document.querySelectorAll('.navbar nav a');
  const currentPage = window.location.pathname.split("/").pop(); // get file name

  links.forEach(link => {
    const linkPage = link.getAttribute('href');
    
    // Handle home page: '/' or 'index.html'
    if ((currentPage === "" && linkPage === "index.html") || currentPage === linkPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', highlightActiveLink);
