// Show loader on page load
window.addEventListener('load', function() {
    const loader = document.getElementById('loader');
    loader.style.display = 'none'; // Hide loader
});

// Toggle menu for mobile view
function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('active'); // Toggle menu visibility
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex'; // Show/hide menu
}

// Add to cart functionality
let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    alert(`${productName} has been added to your cart!`);
}

// Newsletter subscription
function subscribe() {
    const email = document.getElementById('newsletter-email').value;
    if (validateEmail(email)) {
        document.getElementById('subscribe-message').innerText = 'Thank you for subscribing!';
        document.getElementById('newsletter-email').value = ''; // Clear the input
    } else {
        document.getElementById('subscribe-message').innerText = 'Please enter a valid email address.';
    }
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}