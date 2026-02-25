const products = [
  {
    id: 1,
    name: "Urban Sprint Sneakers",
    category: "Fashion",
    price: 3499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=80",
    description: "All-day comfort sneakers with lightweight sole and breathable mesh."
  },
  {
    id: 2,
    name: "Cora Midi Dress",
    category: "Fashion",
    price: 2299,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
    description: "Flowy modern dress with a relaxed fit for daily wear."
  },
  {
    id: 3,
    name: "Orbit X Smartwatch",
    category: "Fashion",
    price: 11999,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1200&q=80",
    description: "Stainless steel smartwatch with fitness tracking and 7-day battery."
  },
  {
    id: 4,
    name: "AeroPods Max",
    category: "Tech",
    price: 8999,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
    description: "Active noise cancellation and crystal-clear voice calls."
  },
  {
    id: 5,
    name: "Luma Desk Lamp",
    category: "Home",
    price: 1899,
    rating: 4.3,
    image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&w=1200&q=80",
    description: "Dimmable smart lamp with touch controls and warm/cool modes."
  },
  {
    id: 6,
    name: "Metro Carry Backpack",
    category: "Fashion",
    price: 2799,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=1200&q=80",
    description: "Water-resistant backpack with padded laptop pocket and organizer slots."
  },
  {
    id: 7,
    name: "Volt Mechanical Keyboard",
    category: "Tech",
    price: 5499,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
    description: "Compact RGB mechanical keyboard with tactile switches."
  },
  {
    id: 8,
    name: "Calm Throw Blanket Set",
    category: "Home",
    price: 1599,
    rating: 4.2,
    image: "images/calm-throw-blanket-set.svg",
    description: "Ultra-soft throw with two matching cushion covers for cozy spaces."
  }
];

const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const sortSelect = document.getElementById("sortSelect");
const resultText = document.getElementById("resultText");
const cartCount = document.getElementById("cartCount");
const categoryChips = document.getElementById("categoryChips");
const themeToggle = document.getElementById("themeToggle");
const offerTitle = document.getElementById("offerTitle");
const offerText = document.getElementById("offerText");

const quickViewModal = document.getElementById("quickViewModal");
const closeModal = document.getElementById("closeModal");
const modalImage = document.getElementById("modalImage");
const modalTitle = document.getElementById("modalTitle");
const modalCategory = document.getElementById("modalCategory");
const modalPrice = document.getElementById("modalPrice");
const modalDescription = document.getElementById("modalDescription");
const modalAddToCart = document.getElementById("modalAddToCart");

let activeCategory = "All";
let cartItems = 0;
let selectedProductId = null;

const offers = [
  { title: "Weekend Deal: 20% OFF", text: "On selected tech and accessories" },
  { title: "Style Stack: Buy 2 Get 1", text: "On all fashion products" },
  { title: "Home Refresh Sale", text: "Extra 15% off on home essentials" }
];

function formatPrice(value) {
  return "₹" + value.toLocaleString("en-IN");
}

function getVisibleProducts() {
  const query = searchInput.value.toLowerCase().trim();
  const sortBy = sortSelect.value;

  let visible = products.filter((product) => {
    const byCategory = activeCategory === "All" || product.category === activeCategory;
    const byQuery = product.name.toLowerCase().includes(query);
    return byCategory && byQuery;
  });

  if (sortBy === "low") visible.sort((a, b) => a.price - b.price);
  if (sortBy === "high") visible.sort((a, b) => b.price - a.price);
  if (sortBy === "rating") visible.sort((a, b) => b.rating - a.rating);

  return visible;
}

function updateCart(count = 1) {
  cartItems += count;
  cartCount.textContent = cartItems;
}

function openModal(product) {
  selectedProductId = product.id;
  modalImage.src = product.image;
  modalTitle.textContent = product.name;
  modalCategory.textContent = product.category + " | ⭐ " + product.rating;
  modalPrice.textContent = formatPrice(product.price);
  modalDescription.textContent = product.description;
  quickViewModal.classList.remove("hidden");
}

function renderProducts() {
  const visible = getVisibleProducts();

  productGrid.innerHTML = visible
    .map((product) => {
      return `
        <article class="product-card">
          <img src="${product.image}" alt="${product.name}">
          <div class="product-content">
            <h4>${product.name}</h4>
            <p class="product-meta">${product.category} · ⭐ ${product.rating}</p>
            <div class="product-bottom">
              <span class="price">${formatPrice(product.price)}</span>
              <div class="actions">
                <button data-action="view" data-id="${product.id}">View</button>
                <button data-action="add" data-id="${product.id}">Add</button>
              </div>
            </div>
          </div>
        </article>
      `;
    })
    .join("");

  resultText.textContent = `Showing ${visible.length} products`;
}

categoryChips.addEventListener("click", (event) => {
  const chip = event.target.closest(".chip");
  if (!chip) return;

  activeCategory = chip.dataset.category;
  document.querySelectorAll(".chip").forEach((item) => item.classList.remove("chip-active"));
  chip.classList.add("chip-active");
  renderProducts();
});

searchInput.addEventListener("input", renderProducts);
sortSelect.addEventListener("change", renderProducts);

document.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-action]");
  if (!button) return;

  const productId = Number(button.dataset.id);
  const product = products.find((item) => item.id === productId);
  if (!product) return;

  if (button.dataset.action === "add") {
    updateCart();
  }

  if (button.dataset.action === "view") {
    openModal(product);
  }
});

modalAddToCart.addEventListener("click", () => {
  if (selectedProductId !== null) updateCart();
  quickViewModal.classList.add("hidden");
});

closeModal.addEventListener("click", () => quickViewModal.classList.add("hidden"));
quickViewModal.addEventListener("click", (event) => {
  if (event.target === quickViewModal) quickViewModal.classList.add("hidden");
});

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

setInterval(() => {
  const offer = offers[Math.floor(Math.random() * offers.length)];
  offerTitle.textContent = offer.title;
  offerText.textContent = offer.text;
}, 4500);

renderProducts();
