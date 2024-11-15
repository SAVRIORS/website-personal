let cart = [];
let cartCount = 0;
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    cartCount++;
    total += productPrice;

    updateCart();
}

function updateCart() {
    // Update count on the cart button
    document.getElementById("cart-count").textContent = cartCount;

    // Update cart items display
    const cartItems = document.getElementById("cart-items");
    cartItems.innerHTML = '';
    if (cart.length === 0) {
        cartItems.innerHTML = '<li>Keranjang kosong</li>';
    } else {
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - Rp ${item.price}`;
            cartItems.appendChild(li);
        });
    }

    // Update total
    document.getElementById("total").textContent = `Total: Rp ${total}`;
}

function toggleCart() {
    const cartSection = document.getElementById("shopping-cart");
    cartSection.style.display = (cartSection.style.display === "none" || cartSection.style.display === "") ? "block" : "none";
}

function clearCart() {
    cart = [];
    cartCount = 0;
    total = 0;
    updateCart();
}
