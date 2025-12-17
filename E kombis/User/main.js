// Data menu
const menuItems = [
  {
    id: 1,
    name: "White Shirt Midi Dress with Belt",
    description:
      "Midi dress model shirt dress berkerah dengan lengan pendek dan kancing depan. Dilengkapi belt warna coklat untuk mempertegas pinggang. Tampilan clean, rapi, dan modern—pas untuk outfit kantor, meeting, atau casual elegant look.",
    price: 390000,
    category: "makanan",
    image:
      "https://i.pinimg.com/736x/16/ff/57/16ff57baf3f907c4a9e7ca263e76e523.jpg",
    stock: 8,
  },
  {
    id: 2,
    name: "Linen Pinstripe Pleated Shorts – Cream",
    description:
      "Celana pendek berbahan linen dengan motif garis halus (pinstripe). Memiliki detail lipit di bagian depan sehingga terlihat rapi dan stylish. Nyaman dipakai karena ringan dan breathable, cocok untuk outfit kasual atau semi-formal.",
    price: 260000,
    category: "makanan",
    image:
      "https://i.pinimg.com/1200x/1b/bd/07/1bbd0790d0281fab4765fe54bf22441a.jpg",
    stock: 12,
  },
  {
    id: 3,
    name: "White V-Neck Pleated Midi Dress",
    description:
      "Midi dress putih dengan potongan V-neck dalam, lengan pendek, dan detail pleats yang memberikan siluet ramping. Terdapat aksen belt panel terstruktur di bagian pinggang sehingga memberi kesan elegan dan mewah. Cocok untuk acara formal, brunch, atau look classy harian.",
    price: 420000,
    category: "makanan",
    image:
      "https://i.pinimg.com/1200x/33/57/c4/3357c477e1afec8114f2510ac85db259.jpg",
    stock: 6,
  },
  {
    id: 4,
    name: "High-Waist Tailored Belted Shorts – Taupe",
    description:
      "Celana pendek high-waist dengan potongan tailored yang rapi. Dilengkapi double belt warna coklat dengan detail buckle emas untuk sentuhan elegan. Bahannya tampak tebal namun tetap ringan, cocok untuk look chic & classy.",
    price: 280000,
    category: "minuman",
    image:
      "https://i.pinimg.com/736x/70/47/4c/70474cfbc4f51e083610b18f441396db.jpg",
    stock: 7,
  },
  {
    id: 5,
    name: "Blue Floral Collar Midi Dress",
    description:
      "Midi dress bermotif bunga dengan warna dasar biru. Modelnya berkerah, V-neck, dan memiliki tali pinggang untuk mempermanis siluet. Bahan terlihat flowy dan feminin, cocok untuk acara outdoor, holiday, atau summer vibes.",
    price: 450000,
    category: "minuman",
    image:
      "https://i.pinimg.com/1200x/4a/9c/fd/4a9cfdf3dc9cefead0b73f9d0b9fc691.jpg",
    stock: 9,
  },
  {
    id: 6,
    name: "Sweater Kerah V Knit Pocket Beige",
    description:
      "Sweater rajut warna beige dengan kerah V ala polo. Dilengkapi detail garis hitam di kerah, manset, dan saku dada sehingga tampak clean & classic. Cocok untuk gaya kasual yang tetap rapi.",
    price: 250000,
    category: "minuman",
    image:
      "https://i.pinimg.com/1200x/2b/6d/e6/2b6de66ac5c9f45c62b2a67127a1d333.jpg",
    stock: 15,
  },
  {
    id: 7,
    name: "Sweater Cable Knit Collar White",
    description:
      "Sweater putih model cable-knit dengan kerah polo. Tekstur rajut kabel memberi kesan elegan dan hangat, pas untuk tampilan minimalis yang tetap cozy. Nyaman dipakai harian.",
    price: 300000,
    category: "dessert",
    image:
      "https://i.pinimg.com/1200x/b0/bb/e2/b0bbe257f21de72eeed78842b0c265ff.jpg",
    stock: 5,
  },
  {
    id: 8,
    name: "Tweed Pocket Chain-Belt Shorts – White",
    description:
      "Celana pendek tweed putih dengan dua saku depan dan aksen kancing kecil. Dilengkapi gold chain belt yang memberi tampilan mewah ala high-fashion. Cocok untuk look elegan atau acara stylish.",
    price: 350000,
    category: "dessert",
    image:
      "https://i.pinimg.com/736x/f3/32/13/f33213fb62cfdc960f43514e001d8df0.jpg",
    stock: 6,
  },
  {
    id: 9,
    name: "Sweater Striped Polo Navy",
    description:
      "Sweater rajut navy dengan motif garis horizontal putih dan kerah polo kontras. Model crop ringan dan gaya nautical membuatnya terlihat modern dan stylish, cocok dipadukan dengan jeans atau skirt.",
    price: 270000,
    category: "makanan",
    image:
      "https://i.pinimg.com/1200x/8f/9b/8d/8f9b8d53eca90976e1169629be639f31.jpg",
    stock: 4,
  },
];

// Account sidebar elements
const accountIcon = document.getElementById("account-icon");
const accountSidebar = document.getElementById("account-sidebar");
const accountClose = document.getElementById("account-close");
const accountContent = document.getElementById("account-content");
const accountGuest = document.getElementById("account-guest");
const accountUser = document.getElementById("account-user");
const showLoginBtn = document.getElementById("show-login");
const showRegisterBtn = document.getElementById("show-register");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const logoutBtn = document.getElementById("logout-btn");
const userNameElem = document.getElementById("user-name");
const userRoleElem = document.getElementById("user-role");
const adminSection = document.getElementById("admin-section");
const usersSection = document.getElementById("users-section");
const usersList = document.getElementById("users-list");
const openAdminDashboard = document.getElementById("open-admin-dashboard");

// Cart state
let cart = JSON.parse(localStorage.getItem("genielle_cart")) || [];
const cartIcon = document.getElementById("cart-icon");
const cartCount = cartIcon.querySelector(".cart-count");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalElement = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const continueShoppingBtn = document.getElementById("continue-shopping");
const cartCloseBtn = document.getElementById("cart-close");
const checkoutModal = document.getElementById("checkout-modal");
const checkoutCloseBtn = document.getElementById("checkout-close");
const checkoutForm = document.getElementById("checkout-form");

// WhatsApp number
const whatsappNumber = "+6281326916468";

// Update cart count
function updateCartCount() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalItems;
}

// Format currency
function formatCurrency(amount) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(amount);
}

// Update cart display
function updateCartDisplay() {
  cartItemsContainer.innerHTML = "";

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = `
                    <div class="cart-empty">
                        <i class="fas fa-shopping-bag"></i>
                        <p>Keranjang belanja Anda masih kosong</p>
                    </div>
                `;
    checkoutBtn.disabled = true;
    checkoutBtn.style.opacity = "0.6";
    checkoutBtn.style.cursor = "not-allowed";
  } else {
    checkoutBtn.disabled = false;
    checkoutBtn.style.opacity = "1";
    checkoutBtn.style.cursor = "pointer";

    cart.forEach((item) => {
      const cartItem = document.createElement("div");
      cartItem.className = "cart-item";
      cartItem.innerHTML = `
                        <div class="cart-item-image">
                            <img src="${item.image}" alt="${item.name}">
                        </div>
                        <div class="cart-item-details">
                            <div class="cart-item-name">${item.name}</div>
                            <div class="cart-item-price">${formatCurrency(
                              item.price
                            )} <span style="color:#666; margin-left:8px; font-size:12px">• Stok: ${(() => {
        const products = getStoredProducts() || menuItems;
        const p = products.find((x) => x.id === item.id);
        return p ? p.stock || 0 : 0;
      })()}</span></div>
                            <div class="cart-item-qty">
                                <button class="decrease-qty" data-id="${
                                  item.id
                                }">-</button>
                                <span>${item.quantity}</span>
                                <button class="increase-qty" data-id="${
                                  item.id
                                }">+</button>
                            </div>
                            <button class="cart-item-remove" data-id="${
                              item.id
                            }">Hapus</button>
                        </div>
                    `;
      cartItemsContainer.appendChild(cartItem);
    });

    // Add event listeners for quantity buttons
    document.querySelectorAll(".decrease-qty").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        updateCartItemQuantity(id, -1);
      });
    });

    document.querySelectorAll(".increase-qty").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        updateCartItemQuantity(id, 1);
      });
    });

    document.querySelectorAll(".cart-item-remove").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = parseInt(this.getAttribute("data-id"));
        removeFromCart(id);
      });
    });
  }

  // Update total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  cartTotalElement.textContent = formatCurrency(total);

  // Save to localStorage
  localStorage.setItem("genielle_cart", JSON.stringify(cart));
}

// ---- Admin & Persistence Helpers ----
// Users stored under "genielle_users"
function getUsers() {
  return JSON.parse(localStorage.getItem("genielle_users")) || [];
}

function saveUsers(users) {
  localStorage.setItem("genielle_users", JSON.stringify(users));
}

function addUserToStore(user) {
  const users = getUsers();
  user.id = user.id || Date.now();
  users.push(user);
  saveUsers(users);
}

// Products stored under "genielle_products"
function getStoredProducts() {
  return JSON.parse(localStorage.getItem("genielle_products"));
}

function saveProducts(products) {
  localStorage.setItem("genielle_products", JSON.stringify(products));
}

function initProducts() {
  const stored = getStoredProducts();
  if (!stored) {
    // persist initial menu items
    // ensure stock defaults if missing
    const initial = menuItems.map((p) => ({ ...p, stock: p.stock || 10 }));
    saveProducts(initial);
    return initial;
  }
  // convert all price and stock values to numbers if strings
  stored.forEach((p) => {
    p.price = Number(p.price);
    p.stock = Number(p.stock) || 0;
  });
  return stored;
}

// Orders stored under "genielle_orders"
function getOrders() {
  return JSON.parse(localStorage.getItem("genielle_orders")) || [];
}

function saveOrder(order) {
  const orders = getOrders();
  orders.push({ id: Date.now(), ...order });
  localStorage.setItem("genielle_orders", JSON.stringify(orders));
}

/* Admin helpers moved to Share/Admin/admin.js */

// render admin lists
/* Admin: renderAdminUsersList moved to Share/Admin/admin.js */

/* Admin: renderAdminProductsList moved to Share/Admin/admin.js */

/* Admin: renderAdminOrdersList moved to Share/Admin/admin.js */

/* Admin product editor moved to Share/Admin/admin.js */

// Add to cart
function addToCart(itemId, quantity = 1) {
  const productsSource = getStoredProducts() || menuItems;
  const menuItem = productsSource.find((item) => item.id === itemId);
  if (!menuItem) return;

  const available = Number(menuItem.stock) || 0;
  const existingItem = cart.find((item) => item.id === itemId);
  const currentInCart = existingItem ? existingItem.quantity : 0;

  if (available <= 0) {
    showNotification("Stok produk kosong.");
    return;
  }

  if (currentInCart + quantity > available) {
    const allowed = available - currentInCart;
    if (allowed <= 0) {
      showNotification("Anda sudah mencapai batas stok untuk produk ini.");
      return;
    }
    // add only allowed amount
    quantity = allowed;
    showNotification(`Hanya ${allowed} item tersedia. Menambahkan ${allowed}.`);
  }

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      ...menuItem,
      quantity: quantity,
    });
  }

  updateCartCount();
  updateCartDisplay();

  // Show notification
  showNotification(`${menuItem.name} ditambahkan ke keranjang!`);
}

// Update cart item quantity
function updateCartItemQuantity(itemId, change) {
  const item = cart.find((item) => item.id === itemId);
  if (!item) return;

  if (change > 0) {
    const productsSource = getStoredProducts() || menuItems;
    const product = productsSource.find((p) => p.id === itemId);
    const available = product ? Number(product.stock) || 0 : 0;
    if (item.quantity + change > available) {
      showNotification("Stok tidak mencukupi untuk menambah jumlah.");
      return;
    }
  }

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(itemId);
  } else {
    updateCartCount();
    updateCartDisplay();
  }
}

// Remove from cart
function removeFromCart(itemId) {
  cart = cart.filter((item) => item.id !== itemId);
  updateCartCount();
  updateCartDisplay();
}

// Show notification
function showNotification(message) {
  // Create notification element
  const notification = document.createElement("div");
  notification.style.cssText = `
                position: fixed;
                top: 100px;
                right: 20px;
                background-color: var(--navy);
                color: white;
                padding: 15px 20px;
                border-radius: 4px;
                z-index: 2000;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
                max-width: 300px;
            `;
  notification.textContent = message;

  document.body.appendChild(notification);

  // Remove after 3 seconds
  setTimeout(() => {
    if (notification.parentNode) {
      notification.parentNode.removeChild(notification);
    }
  }, 3000);
}

// Renders the account sidebar based on login state
function renderAccount() {
  const user = JSON.parse(localStorage.getItem("genielle_user"));
  if (user) {
    accountGuest.style.display = "none";
    accountUser.style.display = "block";
    userNameElem.textContent = user.name || user.email || "Pengguna";
    userRoleElem.textContent =
      "Peran: " + (user.role === "admin" ? "admin" : "pengguna");
    if (user.role === "admin") {
      adminSection.style.display = "block";
      usersSection.style.display = "block";
    } else {
      adminSection.style.display = "none";
      usersSection.style.display = "none";
    }
  } else {
    accountGuest.style.display = "block";
    accountUser.style.display = "none";
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "none";
  }
}

// Load menu items
function loadMenuItems(category = "all") {
  const menuContainer = document.getElementById("menu-items");
  menuContainer.innerHTML = "";
  const productsSource = getStoredProducts() || menuItems;
  const filteredItems =
    category === "all"
      ? productsSource
      : productsSource.filter((item) => item.category === category);

  filteredItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.className = "menu-item fade-in";
    menuItem.innerHTML = `
                    <div class="menu-item-image">
                        <img src="${item.image}" alt="${item.name}">
                    </div>
                    <div class="menu-item-content">
                        <div class="menu-item-header">
                            <h3 class="menu-item-title">${item.name}</h3>
                            <div class="menu-item-price">${formatCurrency(
                              item.price
                            )}</div>
                        </div>
                        <p class="menu-item-desc">${item.description}</p>
                        <div class="menu-item-footer">
                            <div class="quantity-controls">
                                <button class="qty-btn decrease" data-id="${
                                  item.id
                                }">-</button>
                                <span class="quantity" data-id="${
                                  item.id
                                }">1</span>
                                <button class="qty-btn increase" data-id="${
                                  item.id
                                }" ${
      item.stock <= 0 ? "disabled" : ""
    }>+</button>
                            </div>
                            <div class="menu-item-stock" data-id="${
                              item.id
                            }" style="margin-right:8px">Stok: ${
      item.stock !== undefined ? item.stock : 0
    }</div>
                            <button class="btn btn-primary add-to-cart" data-id="${
                              item.id
                            }" ${item.stock <= 0 ? "disabled" : ""}>${
      item.stock <= 0 ? "Habis" : "Tambah"
    }</button>
                        </div>
                    </div>
                `;
    menuContainer.appendChild(menuItem);
  });

  // Add event listeners for quantity controls
  document.querySelectorAll(".qty-btn.decrease").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-id"));
      const quantityElement = document.querySelector(
        `.quantity[data-id="${id}"]`
      );
      let quantity = parseInt(quantityElement.textContent);
      if (quantity > 1) {
        quantity--;
        quantityElement.textContent = quantity;
      }
    });
  });

  document.querySelectorAll(".qty-btn.increase").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-id"));
      const quantityElement = document.querySelector(
        `.quantity[data-id="${id}"]`
      );
      let quantity = parseInt(quantityElement.textContent);
      const productsSource = getStoredProducts() || menuItems;
      const product = productsSource.find((p) => p.id === id);
      const available = product ? Number(product.stock) || 0 : 0;
      if (quantity + 1 > available) {
        showNotification("Stok tidak mencukupi untuk menambah jumlah.");
        return;
      }
      quantity++;
      quantityElement.textContent = quantity;
    });
  });

  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = parseInt(this.getAttribute("data-id"));
      const quantityElement = document.querySelector(
        `.quantity[data-id="${id}"]`
      );
      const quantity = parseInt(quantityElement.textContent);
      addToCart(id, quantity);

      // Reset quantity
      quantityElement.textContent = "1";
    });

    // Make the whole product card clickable (but ignore clicks on controls)
  });

  // Trigger fade-in animation
  setTimeout(() => {
    document.querySelectorAll(".fade-in").forEach((el) => {
      el.classList.add("visible");
    });
  }, 100);

  // Make the whole product card clickable (but ignore clicks on controls)
  document.querySelectorAll(".menu-item").forEach((card) => {
    card.addEventListener("click", function (e) {
      // ignore if clicking a button or control inside the card
      if (
        e.target.closest(".qty-btn") ||
        e.target.closest(".add-to-cart") ||
        e.target.closest(".menu-item-footer")
      )
        return;
      const addBtn = card.querySelector(".add-to-cart");
      if (!addBtn) return;
      const id = parseInt(addBtn.getAttribute("data-id"));
      addToCart(id, 1);
    });
  });
}

// Send order via WhatsApp
function sendOrderViaWhatsApp(orderData) {
  const { name, email, phone, table, notes, pickupMethod, cartItems, total } =
    orderData;

  let message = `*PESANAN GENIELLE*\n\n`;
  message += `*Data Pelanggan:*\n`;
  message += `Nama: ${name}\n`;
  message += `Email: ${email}\n`;
  message += `WhatsApp: ${phone}\n`;
  if (table) message += `Nomor Meja: ${table}\n`;
  message += `Metode Pengambilan: ${
    pickupMethod === "dine-in"
      ? "Dine-in"
      : pickupMethod === "takeaway"
      ? "Takeaway"
      : "Delivery"
  }\n`;
  if (notes) message += `Catatan: ${notes}\n\n`;

  message += `*Detail Pesanan:*\n`;
  cartItems.forEach((item, index) => {
    message += `${index + 1}. ${item.name} x${item.quantity} = ${formatCurrency(
      item.price * item.quantity
    )}\n`;
  });

  message += `\n*Total: ${formatCurrency(total)}*\n\n`;
  message += `_Pesanan ini dibuat melalui website Genielle_`;

  // Encode message for URL
  const encodedMessage = encodeURIComponent(message);
  const whatsappURL = `https://wa.me/${whatsappNumber.replace(
    "+",
    ""
  )}?text=${encodedMessage}`;

  // Open WhatsApp in new tab
  window.open(whatsappURL, "_blank");
}

// Initialize
document.addEventListener("DOMContentLoaded", function () {
  // Initialize or load products, then load menu items
  initProducts();
  loadMenuItems();

  // Seed default admin & sample user if users list is empty
  const existingUsers = getUsers();
  if (!existingUsers || existingUsers.length === 0) {
    const defaultAdmin = {
      id: Date.now(),
      name: "Admin G",
      email: "admin@genielle.local",
      role: "admin",
    };
    const defaultUser = {
      id: Date.now() + 1,
      name: "Guest User",
      email: "user@genielle.local",
      role: "user",
    };
    saveUsers([defaultAdmin, defaultUser]);
  }

  // Update cart display
  updateCartCount();
  updateCartDisplay();

  // Navbar scroll effect
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  const mobileMenu = document.getElementById("mobile-menu");
  const navMenu = document.querySelector(".nav-menu");

  mobileMenu.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    mobileMenu.querySelector("i").classList.toggle("fa-bars");
    mobileMenu.querySelector("i").classList.toggle("fa-times");
  });

  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll(".nav-menu a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navMenu.classList.remove("active");
      mobileMenu.querySelector("i").classList.add("fa-bars");
      mobileMenu.querySelector("i").classList.remove("fa-times");
    });
  });

  // Category filtering
  document.querySelectorAll(".category-btn").forEach((btn) => {
    btn.addEventListener("click", function () {
      const category = this.getAttribute("data-category");

      // Update active button
      document.querySelectorAll(".category-btn").forEach((b) => {
        b.classList.remove("active");
      });
      this.classList.add("active");

      // Load filtered items
      loadMenuItems(category);
    });
  });

  // Reload menu button
  const reloadMenuBtn = document.getElementById("reload-menu");
  reloadMenuBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    loadMenuItems();
    showNotification("Produk dimuat ulang.");
  });

  // Cart sidebar toggle
  cartIcon.addEventListener("click", function (e) {
    e.preventDefault();
    cartSidebar.classList.add("active");
  });

  cartCloseBtn.addEventListener("click", function () {
    cartSidebar.classList.remove("active");
  });

  continueShoppingBtn.addEventListener("click", function () {
    cartSidebar.classList.remove("active");
  });

  // Account sidebar toggle
  accountIcon?.addEventListener("click", function (e) {
    e.preventDefault();
    accountSidebar.classList.add("active");
    renderAccount();
  });

  accountClose?.addEventListener("click", function () {
    accountSidebar.classList.remove("active");
  });

  // Account actions: show login/register forms
  showLoginBtn?.addEventListener("click", function () {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
  });

  showRegisterBtn?.addEventListener("click", function () {
    registerForm.style.display = "block";
    loginForm.style.display = "none";
  });

  // Login submit (demo)
  loginForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const nameFromEmail = email.split("@")[0] || "Pengguna";

    // check saved users list
    const savedUsers = JSON.parse(localStorage.getItem("genielle_users")) || [];
    const found = savedUsers.find((u) => u.email === email);

    const role = found
      ? found.role
      : email.toLowerCase().includes("admin")
      ? "admin"
      : "user";
    const name = found ? found.name : nameFromEmail;
    const userObj = { name, email, role };

    // If the user is new, add to users list
    if (!found) {
      savedUsers.push(userObj);
      localStorage.setItem("genielle_users", JSON.stringify(savedUsers));
    }

    localStorage.setItem("genielle_user", JSON.stringify(userObj));
    showNotification("Berhasil masuk sebagai " + userObj.name);
    renderAccount();
  });

  // Register submit (demo)
  registerForm?.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const role = "user";
    const userObj = { name, email, role };

    // Persist to users list
    const savedUsers = JSON.parse(localStorage.getItem("genielle_users")) || [];
    const exists = savedUsers.find((u) => u.email === email);
    if (!exists) {
      savedUsers.push(userObj);
      localStorage.setItem("genielle_users", JSON.stringify(savedUsers));
    }

    localStorage.setItem("genielle_user", JSON.stringify(userObj));
    showNotification("Akun berhasil dibuat untuk " + userObj.name);
    renderAccount();
  });

  // Logout
  logoutBtn?.addEventListener("click", function () {
    localStorage.removeItem("genielle_user");
    showNotification("Anda telah keluar");
    renderAccount();
  });

  // Orders, profile and admin links (demo behaviours)
  document
    .getElementById("orders-link")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("genielle_user"));
      if (!user) {
        showNotification(
          "Silakan masuk terlebih dahulu untuk melihat pesanan."
        );
        return;
      }
      showNotification("Menampilkan pesanan untuk " + user.name);
      accountSidebar.classList.remove("active");
    });

  document
    .getElementById("profile-link")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("genielle_user"));
      if (!user) {
        showNotification("Silakan masuk terlebih dahulu untuk melihat profil.");
        return;
      }
      showNotification("Profil: " + user.name + " (" + user.email + ")");
      accountSidebar.classList.remove("active");
    });

  // Open admin dashboard (only for admins)
  openAdminDashboard?.addEventListener("click", function (e) {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("genielle_user"));
    if (!user || user.role !== "admin") {
      showNotification("Hanya admin yang dapat mengakses panel ini.");
      return;
    }
    // Navigate to dedicated admin page
    window.location.href = "../Admin/admin.html";
  });

  document
    .getElementById("users-link")
    ?.addEventListener("click", function (e) {
      e.preventDefault();
      const user = JSON.parse(localStorage.getItem("genielle_user"));
      if (!user || user.role !== "admin") {
        showNotification("Hanya admin yang dapat melihat daftar pengguna.");
        return;
      }
      showNotification("Menampilkan daftar pengguna...");
      accountSidebar.classList.remove("active");
    });

  // Checkout button
  checkoutBtn.addEventListener("click", function () {
    if (cart.length === 0) return;

    cartSidebar.classList.remove("active");
    checkoutModal.classList.add("active");
  });

  // Close checkout modal
  checkoutCloseBtn.addEventListener("click", function () {
    checkoutModal.classList.remove("active");
  });

  // Checkout form submission
  checkoutForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("customer-name")?.value || "";
    const email = document.getElementById("customer-email")?.value || "";
    const phone = document.getElementById("customer-phone")?.value || "";
    const table = document.getElementById("customer-table")?.value || "";
    const notes = document.getElementById("customer-notes")?.value || "";
    const pickupMethod =
      document.querySelector('input[name="pickup-method"]:checked')?.value ||
      "";
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderData = {
      name,
      email,
      phone,
      table,
      notes,
      pickupMethod,
      cartItems: cart,
      total,
    };

    // Check and reduce stock for each item before sending order
    const productsSource = getStoredProducts() || menuItems;
    // Validate stock availability
    for (const ci of cart) {
      const product = productsSource.find((p) => p.id === ci.id);
      if (!product) {
        showNotification(`Produk ${ci.name} tidak ditemukan.`);
        return;
      }
      if (Number(product.stock) < ci.quantity) {
        showNotification(`Stok tidak mencukupi untuk ${ci.name}.`);
        return;
      }
    }

    // Deduct stock
    cart.forEach((ci) => {
      const product = productsSource.find((p) => p.id === ci.id);
      product.stock = Number(product.stock) - ci.quantity;
    });
    // Save updated products
    saveProducts(productsSource);

    // Send order via WhatsApp
    sendOrderViaWhatsApp(orderData);

    // persist order for admin view
    saveOrder(orderData);

    // Close modal and clear cart
    checkoutModal.classList.remove("active");
    cart = [];
    updateCartCount();
    updateCartDisplay();

    // Refresh menu UI so stock values update
    loadMenuItems();

    // Show success message
    showNotification(
      "Pesanan berhasil dikirim! Silakan periksa WhatsApp Anda."
    );

    // Reset form
    checkoutForm.reset();
  });

  // Scroll animation
  function checkFadeIn() {
    const fadeElements = document.querySelectorAll(".fade-in");

    fadeElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < window.innerHeight - elementVisible) {
        element.classList.add("visible");
      }
    });
  }

  // Initial check on page load
  window.addEventListener("load", checkFadeIn);

  // Check on scroll
  window.addEventListener("scroll", checkFadeIn);

  // Newsletter form submission
  const newsletterForm = document.querySelector(".newsletter-form");
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');

    // Simple validation
    if (emailInput.value && emailInput.value.includes("@")) {
      alert("Terima kasih telah berlangganan Genielle!");
      emailInput.value = "";
    } else {
      alert("Harap masukkan alamat email yang valid.");
    }
  });

  // If we're on the admin page, initialize the admin dashboard
  // Admin page initializer moved to Admin/admin.js
});

// Add CSS for animations
const style = document.createElement("style");
style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
            
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
            
            .btn-block {
                display: block;
                width: 100%;
            }
        `;
document.head.appendChild(style);
