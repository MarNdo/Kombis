// Admin dashboard management script
document.addEventListener("DOMContentLoaded", function () {
  // Elements
  const navItems = document.querySelectorAll(".sidebar-nav .nav-item");
  const usersListEl = document.getElementById("users-list");
  const productsListEl = document.getElementById("products-list");
  const ordersListEl = document.getElementById("orders-list");
  const statUsers = document.getElementById("stat-users");
  const statProducts = document.getElementById("stat-products");
  const statOrders = document.getElementById("stat-orders");
  const cardUsers = document.getElementById("card-users");
  const cardProducts = document.getElementById("card-products");
  const cardOrders = document.getElementById("card-orders");
  const searchInput = document.getElementById("admin-search");
  const addProductTop = document.getElementById("add-product-top");
  const productModal = document.getElementById("product-modal");
  const productForm = document.getElementById("product-form");
  const productModalClose = document.getElementById("product-modal-close");
  const productCancel = document.getElementById("product-cancel");
  const productTitle = document.getElementById("product-modal-title");

  const confirmModal = document.getElementById("confirm-modal");
  const confirmTitle = document.getElementById("confirm-title");
  const confirmMessage = document.getElementById("confirm-message");
  const confirmOk = document.getElementById("confirm-ok");
  const confirmCancel = document.getElementById("confirm-cancel");
  const confirmClose = document.getElementById("confirm-modal-close");

  // Sidebar user info
  const adminUserName = document.getElementById("admin-user-name");
  const adminUserEmail = document.getElementById("admin-user-email");
  const logoutBtn = document.getElementById("admin-logout-btn");

  // Helper: show modal
  function openModal(modal) {
    modal.classList.add("active");
    modal.setAttribute("aria-hidden", "false");
  }
  function closeModal(modal) {
    modal.classList.remove("active");
    modal.setAttribute("aria-hidden", "true");
  }

  // Update sidebar admin identity
  function renderAdminIdentity() {
    const user = JSON.parse(localStorage.getItem("genielle_user")) || {};
    adminUserName.textContent = user.name || "Admin";
    adminUserEmail.textContent = user.email || "admin@example.com";
  }

  // Update stats and card values
  function updateStats() {
    const users = getUsers() || [];
    const products = getStoredProducts() || [];
    const orders = getOrders() || [];
    statUsers.textContent = users.length;
    statProducts.textContent = products.length;
    statOrders.textContent = orders.length;
    cardUsers.textContent = users.length;
    cardProducts.textContent = products.length;
    cardOrders.textContent = orders.length;
  }

  // Render users list
  function renderUsersList(filter = "") {
    const users = getUsers() || [];
    usersListEl.innerHTML = "";
    if (users.length === 0) {
      usersListEl.innerHTML = "<p>Tidak ada pengguna.</p>";
      return;
    }

    const ul = document.createElement("ul");
    users.forEach((u) => {
      if (filter && !`${u.name} ${u.email}`.toLowerCase().includes(filter))
        return;
      const li = document.createElement("li");
      li.innerHTML = `
				<div class="admin-user-name">
					<img src="https://api.dicebear.com/6.x/initials/svg?seed=${encodeURIComponent(
            u.email || u.name
          )}" alt="avatar">
					<div class="user-meta">
						<div style="font-weight:700">${u.name}</div>
						<div style="font-size:12px;color:#666">${u.email}</div>
						<div class="user-role">${u.role || "user"}</div>
					</div>
				</div>
				<div class="user-actions">
					<button class="btn btn-sm btn-secondary toggle-role" data-id="${u.id}">${
        u.role === "admin" ? "Demote" : "Promote"
      }</button>
					<button class="btn btn-sm btn-danger delete-user" data-id="${
            u.id
          }">Hapus</button>
				</div>
			`;
      ul.appendChild(li);
    });
    usersListEl.appendChild(ul);

    // attach events
    usersListEl.querySelectorAll(".toggle-role").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        toggleUserRole(id);
      });
    });
    usersListEl.querySelectorAll(".delete-user").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        confirm(`Hapus pengguna ini?`, () => deleteUser(id));
      });
    });
  }

  // Toggle user role
  function toggleUserRole(id) {
    const users = getUsers();
    const idx = users.findIndex((u) => String(u.id) === String(id));
    if (idx === -1) return;
    users[idx].role = users[idx].role === "admin" ? "user" : "admin";
    saveUsers(users);
    updateStats();
    renderUsersList(searchInput.value.trim().toLowerCase());
    showNotification("Peran pengguna diperbarui.");
  }

  function deleteUser(id) {
    let users = getUsers();
    users = users.filter((u) => String(u.id) !== String(id));
    saveUsers(users);
    updateStats();
    renderUsersList(searchInput.value.trim().toLowerCase());
    showNotification("Pengguna dihapus.");
  }

  // Render products list
  function renderProductsList(filter = "") {
    const products = getStoredProducts() || [];
    productsListEl.innerHTML = "";
    if (products.length === 0) {
      productsListEl.innerHTML = "<p>Tidak ada produk.</p>";
      return;
    }
    const container = document.createElement("div");
    products.forEach((p) => {
      if (filter && !`${p.name} ${p.category}`.toLowerCase().includes(filter))
        return;
      const row = document.createElement("div");
      row.className = "admin-product-row";
      row.innerHTML = `
				<div style="display:flex;gap:12px;align-items:center">
					<img src="${
            p.image || "https://via.placeholder.com/60"
          }" alt="" style="width:60px;height:60px;object-fit:cover;border-radius:6px">
					<div>
						<div style="font-weight:700">${p.name}</div>
						<div class="admin-product-category">${p.category || "-"} • Stok: ${
        p.stock || 0
      }</div>
						<div class="admin-product-desc">${p.description || ""}</div>
					</div>
				</div>
				<div style="display:flex;gap:8px;align-items:center">
					<div style="font-weight:700">${formatCurrency(p.price || 0)}</div>
					<button class="btn btn-sm btn-secondary edit-product" data-id="${
            p.id
          }">Edit</button>
					<button class="btn btn-sm btn-danger delete-product" data-id="${
            p.id
          }">Hapus</button>
				</div>
			`;
      container.appendChild(row);
    });
    productsListEl.appendChild(container);

    productsListEl.querySelectorAll(".edit-product").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        openEditProduct(id);
      });
    });
    productsListEl.querySelectorAll(".delete-product").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        confirm("Hapus produk ini?", () => deleteProduct(id));
      });
    });
  }

  // Open edit product modal
  function openEditProduct(id) {
    const products = getStoredProducts() || [];
    const p = products.find((x) => String(x.id) === String(id));
    if (!p) return;
    document.getElementById("product-id").value = p.id;
    document.getElementById("product-name").value = p.name;
    document.getElementById("product-price").value = p.price;
    document.getElementById("product-category").value = p.category;
    document.getElementById("product-image").value = p.image;
    document.getElementById("product-stock").value = p.stock || 0;
    document.getElementById("product-desc").value = p.description || "";
    productTitle.textContent = "Edit Produk";
    openModal(productModal);
  }

  // Create or update product
  productForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const id = document.getElementById("product-id").value;
    const name = document.getElementById("product-name").value.trim();
    const price = Number(document.getElementById("product-price").value) || 0;
    const category = document.getElementById("product-category").value.trim();
    const image = document.getElementById("product-image").value.trim();
    const stock = Number(document.getElementById("product-stock").value) || 0;
    const description = document.getElementById("product-desc").value.trim();

    const products = getStoredProducts() || [];
    if (id) {
      // update
      const idx = products.findIndex((p) => String(p.id) === String(id));
      if (idx !== -1) {
        products[idx] = {
          ...products[idx],
          name,
          price,
          category,
          image,
          stock,
          description,
        };
      }
    } else {
      const newProduct = {
        id: Date.now(),
        name,
        price,
        category,
        image,
        stock,
        description,
      };
      products.unshift(newProduct);
    }
    saveProducts(products);
    closeModal(productModal);
    updateStats();
    renderProductsList(searchInput.value.trim().toLowerCase());
    showNotification("Produk tersimpan.");
  });

  productModalClose.addEventListener("click", function () {
    closeModal(productModal);
  });
  productCancel.addEventListener("click", function () {
    closeModal(productModal);
  });

  function deleteProduct(id) {
    let products = getStoredProducts() || [];
    products = products.filter((p) => String(p.id) !== String(id));
    saveProducts(products);
    updateStats();
    renderProductsList(searchInput.value.trim().toLowerCase());
    showNotification("Produk dihapus.");
  }

  // Orders list (simple read-only)
  function renderOrdersList() {
    const orders = getOrders() || [];
    ordersListEl.innerHTML = "";
    if (orders.length === 0) {
      ordersListEl.innerHTML = "<p>Tidak ada pesanan.</p>";
      return;
    }
    const container = document.createElement("div");
    orders.forEach((o) => {
      const row = document.createElement("div");
      row.className = "admin-order-row";
      row.style.padding = "12px 0";
      row.style.borderBottom = "1px solid #eee";
      const status = o.status || "pending";
      row.innerHTML = `
			<div>
				<div style="display:flex;gap:8px;align-items:center">
					<div style="font-weight:700">#${o.id} — ${
        o.name || o.email || "Pelanggan"
      }</div>
					<div class="order-status ${
            status === "accepted" ? "accepted" : "pending"
          }" style="font-size:12px;padding:4px 8px;border-radius:6px;margin-left:8px">${
        status === "accepted" ? "Diterima" : "Baru"
      }</div>
				</div>
				<div style="font-size:13px;color:#666">${
          o.items ? o.items.length : 0
        } item — ${formatCurrency(o.total || 0)}</div>
			</div>
			<div style="display:flex;gap:8px;align-items:center">
				<div style="font-size:12px;color:#666">${o.notes || "-"}</div>
				<div style="margin-left:12px;display:flex;gap:8px">
					<button class="btn btn-sm btn-success accept-order" data-id="${o.id}" ${
        status === "accepted" ? "disabled" : ""
      }>${status === "accepted" ? "Sudah Diterima" : "Terima"}</button>
					<button class="btn btn-sm btn-danger delete-order" data-id="${
            o.id
          }">Hapus</button>
				</div>
			</div>
		`;
      container.appendChild(row);
    });
    ordersListEl.appendChild(container);

    // attach order handlers
    ordersListEl.querySelectorAll(".accept-order").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        confirm("Terima pesanan ini?", () => acceptOrder(id));
      });
    });
    ordersListEl.querySelectorAll(".delete-order").forEach((btn) => {
      btn.addEventListener("click", function () {
        const id = this.getAttribute("data-id");
        confirm("Hapus pesanan ini?", () => deleteOrder(id));
      });
    });
  }

  function acceptOrder(id) {
    const orders = getOrders() || [];
    const idx = orders.findIndex((o) => String(o.id) === String(id));
    if (idx === -1) return;
    orders[idx].status = "accepted";
    orders[idx].acceptedAt = Date.now();
    localStorage.setItem("genielle_orders", JSON.stringify(orders));
    renderOrdersList();
    updateStats();
    showNotification("Pesanan diterima.");
  }

  function deleteOrder(id) {
    let orders = getOrders() || [];
    orders = orders.filter((o) => String(o.id) !== String(id));
    localStorage.setItem("genielle_orders", JSON.stringify(orders));
    renderOrdersList();
    updateStats();
    showNotification("Pesanan dihapus.");
  }

  // Confirm modal helper
  let _confirmCb = null;
  function confirm(message, cb) {
    confirmMessage.textContent = message;
    _confirmCb = cb;
    openModal(confirmModal);
  }
  confirmOk.addEventListener("click", function () {
    if (typeof _confirmCb === "function") _confirmCb();
    _confirmCb = null;
    closeModal(confirmModal);
  });
  confirmCancel.addEventListener("click", function () {
    _confirmCb = null;
    closeModal(confirmModal);
  });
  confirmClose.addEventListener("click", function () {
    _confirmCb = null;
    closeModal(confirmModal);
  });

  // Tab switching
  function switchTab(tab) {
    navItems.forEach((n) =>
      n.classList.toggle("active", n.getAttribute("data-tab") === tab)
    );
    usersListEl.style.display = tab === "users" ? "block" : "none";
    productsListEl.style.display = tab === "products" ? "block" : "none";
    ordersListEl.style.display = tab === "orders" ? "block" : "none";
    // re-render
    updateStats();
    if (tab === "users")
      renderUsersList(searchInput.value.trim().toLowerCase());
    if (tab === "products")
      renderProductsList(searchInput.value.trim().toLowerCase());
    if (tab === "orders") renderOrdersList();
  }

  navItems.forEach((n) => {
    n.addEventListener("click", function () {
      const tab = this.getAttribute("data-tab");
      switchTab(tab);
    });
  });

  // Search
  searchInput.addEventListener("input", function () {
    const q = this.value.trim().toLowerCase();
    const active = document
      .querySelector(".sidebar-nav .nav-item.active")
      .getAttribute("data-tab");
    if (active === "users") renderUsersList(q);
    if (active === "products") renderProductsList(q);
  });

  // Add product
  addProductTop.addEventListener("click", function () {
    productForm.reset();
    document.getElementById("product-id").value = "";
    productTitle.textContent = "Tambah Produk";
    openModal(productModal);
  });

  // Logout
  logoutBtn &&
    logoutBtn.addEventListener("click", function () {
      localStorage.removeItem("genielle_user");
      showNotification("Anda telah keluar.");
      renderAdminIdentity();
      // refresh the page so UI updates elsewhere
      setTimeout(() => location.reload(), 600);
    });

  // Init
  renderAdminIdentity();
  updateStats();
  switchTab("users");
});
