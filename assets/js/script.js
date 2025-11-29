// Mobile nav toggle
const header = document.querySelector(".site-header");
const navToggle = document.querySelector(".nav-toggle");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    header.classList.toggle("nav-open");
  });

  document.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      header.classList.remove("nav-open");
    });
  });
}

// Add shadow on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 10) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

// Dynamic year in footer
const yearEl = document.getElementById("year");
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

// Simple front-end cart
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartEmptyEl = document.querySelector(".cart-empty");

const cart = {};

function formatMoney(amount) {
  return `$${amount.toFixed(2).replace(/\.00$/, "")}`;
}

function renderCart() {
  if (!cartItemsEl || !cartTotalEl) return;

  const entries = Object.values(cart);
  cartItemsEl.innerHTML = "";

  if (entries.length === 0) {
    if (cartEmptyEl) cartEmptyEl.style.display = "block";
    cartTotalEl.textContent = "$0";
    return;
  }

  if (cartEmptyEl) cartEmptyEl.style.display = "none";

  let total = 0;

  entries.forEach((item) => {
    total += item.price * item.qty;

    const li = document.createElement("li");
    li.className = "cart-item";

    const main = document.createElement("div");
    main.className = "cart-item-main";

    const name = document.createElement("span");
    name.className = "cart-item-name";
    name.textContent = item.name;

    const qty = document.createElement("span");
    qty.className = "cart-item-qty";
    qty.textContent = `Qty: ${item.qty}`;

    main.appendChild(name);
    main.appendChild(qty);

    const price = document.createElement("span");
    price.className = "cart-item-price";
    price.textContent = formatMoney(item.price * item.qty);

    li.appendChild(main);
    li.appendChild(price);
    cartItemsEl.appendChild(li);
  });

  cartTotalEl.textContent = formatMoney(total);
}

document.querySelectorAll(".add-to-cart").forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".product-card");
    if (!card) return;

    const id = card.dataset.id;
    const name = card.dataset.name;
    const price = parseFloat(card.dataset.price || "0");

    if (!id || !name || !price) return;

    if (!cart[id]) {
      cart[id] = { id, name, price, qty: 0 };
    }
    cart[id].qty += 1;

    renderCart();
  });
});
