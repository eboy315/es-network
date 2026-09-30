document.addEventListener("DOMContentLoaded", () => {
  const $ = (id) => document.getElementById(id);
  const naira = (n) => "₦" + n.toLocaleString("en-NG");

  /* ---------- Advanced Phone Checker with Multi-Brand Specs & Naira Pricing ---------- */
const phones = [
  // --- Samsung ---
  {
    brand: "Samsung",
    model: "Galaxy S26 Ultra",
    price: 2200000,
    storage: "256GB / 512GB / 1TB",
    ram: "12GB / 16GB RAM",
    specs: "Snapdragon 8 Elite Gen 5, 6.9\" Dynamic AMOLED 2X, 200MP Quad Camera, 5000mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu-VUkpqXOJEtsie_wT-QoX7NCG7I1hJYYXuRMClPAeA&s=10"
  },
  {
    brand: "Samsung",
    model: "Galaxy Z Fold 8 Ultra",
    price: 2925410,
    storage: "512GB / 1TB",
    ram: "16GB RAM",
    specs: "Snapdragon 8 Elite, 8.0\" Foldable Dynamic AMOLED 2X, 200MP Camera, 4400mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9GT6fM4O16a_3n13AKMI5cfNOBxGtXU4B4a0GdCSgOQ&s=10"
  },
  {
    brand: "Samsung",
    model: "Galaxy A57 5G",
    price: 570000,
    storage: "128GB / 256GB",
    ram: "8GB RAM",
    specs: "Exynos Midrange Chip, 6.7\" Super AMOLED 120Hz, 50MP Triple Camera, 5000mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm6ZFaSLqr1acBRLYpDBJ_VZaNsjkYvbkC3GThMYlLVg&s"
  },

  // --- Apple ---
  {
    brand: "Apple",
    model: "iPhone 17 Pro Max",
    price: 2600000,
    storage: "256GB / 512GB / 1TB / 2TB",
    ram: "12GB RAM",
    specs: "Apple A19 Pro Chip, 6.9\" Super Retina XDR OLED, 120Hz ProMotion, Triple 48MP Camera.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3Q_jO0AM9JKSzOOWGZc0OEH64UiIbCcDrrLzmRjo0gQ&s=10"
  },
  {
    brand: "Apple",
    model: "iPhone 17 Pro",
    price: 1700000,
    storage: "256GB / 512GB",
    ram: "12GB RAM",
    specs: "Apple A19 Pro Chip, 6.3\" Super Retina XDR, ProMotion 120Hz, 48MP Telephoto.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu_1cS8yZMCCzKKMj_aAbI_t-yYRgW0co168a2L0p4qA&s=10"
  },

  // --- Google ---
  {
    brand: "Google",
    model: "Pixel 10 Pro",
    price: 1800000,
    storage: "128GB / 256GB / 512GB",
    ram: "16GB RAM",
    specs: "Google Tensor G5, 6.7\" LTPO OLED, Advanced AI Features, 5000mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4eDbAB-ejLJ9C1Sf2TrNYXZpjQE8srRDL10FcwVLatA&s=10"
  },
  {
    brand: "Google",
    model: "Pixel 11 Pro XL",
    price: 1872000,
    storage: "256GB / 512GB",
    ram: "16GB RAM",
    specs: "Google Tensor G6, 6.8\" LTPO OLED, Upgraded Computational Photography, 5060mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSD53yupEznErjnu-pn7DE051iTMnoutj2Bas4lltbYkw&s=10"
  },

  // --- Xiaomi & Redmi ---
  {
    brand: "Xiaomi",
    model: "Redmi Note 17 Pro Max",
    price: 766400,
    storage: "256GB / 512GB",
    ram: "8GB / 12GB RAM",
    specs: "MediaTek Dimensity Processor, 6.67\" AMOLED 120Hz, 200MP Main Camera, 5500mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqErIuiTWGtwoeu1rnyElEGhCOMp8fHHQBTc4ei8I-2A&s=10"
  },
  {
    brand: "Xiaomi",
    model: "Redmi 15C",
    price: 190000,
    storage: "128GB / 256GB",
    ram: "4GB / 8GB RAM",
    specs: "MediaTek Helio Processor, 6.9\" HD+ Display, 50MP Dual Camera, 5000mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF3IK3Fi_iTYy1lVg5z9DHfyMjmfWBeo_M7LdOD4ejbA&s=10"
  },

  // --- Tecno & Infinix ---
  {
    brand: "Tecno",
    model: "Camon 40 Pro",
    price: 348800,
    storage: "256GB",
    ram: "8GB RAM",
    specs: "MediaTek Helio G-Series, 6.78\" AMOLED 120Hz, 50MP OIS Camera, 5000mAh with 70W Fast Charge.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCJNoCWlHsCJqclDVC99TTAGjQ_lNZNXrJppsNmhuRYg&s=10"
  },
  {
    brand: "Infinix",
    model: "Zero Flip",
    price: 1065000,
    storage: "256GB / 512GB",
    ram: "8GB RAM",
    specs: "MediaTek Dimensity 8020, 6.9\" Foldable AMOLED Inner Screen, 50MP Dual Camera, 4720mAh Battery.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAILEc4EPq35n996WgU4naGyekoGhfcQimDbq-jxEB2g&s=10"
  }
];
document.getElementById("phone-search-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const queryInput = document.getElementById("phone-query").value;
  const budgetInput = document.getElementById("phone-budget").value;
  
  // Filter logic (incorporating both query and budget if needed)
  const query = queryInput.toLowerCase().trim();
  const budget = budgetInput ? parseFloat(budgetInput) : Infinity;

  const matchedPhones = phones.filter(p => {
    const matchesQuery = p.model.toLowerCase().includes(query) || p.brand.toLowerCase().includes(query);
    const matchesBudget = p.price <= budget;
    return matchesQuery && matchesBudget;
  });

  const resultsContainer = document.getElementById("phone-results");
  const statusEl = document.getElementById("phone-search-status");
  resultsContainer.innerHTML = "";

  if (matchedPhones.length > 0) {
    statusEl.textContent = `Found ${matchedPhones.length} matching phone(s).`;
    matchedPhones.forEach(foundPhone => {
      const card = document.createElement("article");
      card.className = "card";
      card.innerHTML = `
        <img src="${foundPhone.image}" alt="${foundPhone.model}" loading="lazy" style="width:100%; height:180px; object-fit:cover; border-radius:6px; margin-bottom:10px;">
        <h3>${foundPhone.brand} ${foundPhone.model}</h3>
        <p><strong>Price:</strong> ${naira(foundPhone.price)}</p>
        <p><strong>Storage:</strong> ${foundPhone.storage} | <strong>RAM:</strong> ${foundPhone.ram}</p>
        <p><small>${foundPhone.specs}</small></p>
      `;
      resultsContainer.appendChild(card);
    });
  } else {
    statusEl.textContent = "No phones found matching your criteria.";
  }
});

// Example usage:
checkPhoneDetails("Samsung"); // Will pull up all Samsung phones in the list
// checkPhoneDetails("iPhone 17 Pro Max"); // Will pull up the specific model

  const form = $("phone-search-form");
  const results = $("phone-results");
  const status = $("phone-search-status");

  function renderPhones(list) {
    results.innerHTML = "";
    list.forEach((p) => {
      const card = document.createElement("article");
      card.className = "card phone-card";
      card.innerHTML = `<h3></h3><p>${p.brand}</p><p class="price">About ${naira(p.price)}</p>`;
      card.querySelector("h3").textContent = p.model;
      results.appendChild(card);
    });
  }

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const q = $("phone-query").value.trim().toLowerCase();
      const budgetVal = $("phone-budget").value;
      const budget = budgetVal === "" ? Infinity : Number(budgetVal);
      const found = phones.filter(
        (p) => `${p.brand} ${p.model}`.toLowerCase().includes(q) && p.price <= budget
      );
      renderPhones(found);
      status.textContent = found.length
        ? `${found.length} phone${found.length > 1 ? "s" : ""} found. Prices are estimates; confirm with the seller.`
        : "No phones matched. Try another name or a higher budget.";
    });
  }

  /* ---------- Community poll ---------- */
  const voteForm = $("phone-vote-form");
  const voteStatus = $("phone-vote-status");
  const voteResults = $("phone-vote-results");
  const options = ["iPhone 17 Pro Max", "Samsung Galaxy S26 Ultra", "Google Pixel 10 Pro", "Xiaomi 18 Pro Max", "OnePlus 16"];
  const KEY = "phoneVotes";

  const loadVotes = () => {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
  };
  const saveVotes = (v) => {
    try { localStorage.setItem(KEY, JSON.stringify(v)); } catch { /* storage unavailable */ }
  };

  function showVotes() {
    const votes = loadVotes();
    const total = options.reduce((s, o) => s + (votes[o] || 0), 0);
    voteResults.innerHTML = "";
    if (!total) return;
    options.forEach((o) => {
      const n = votes[o] || 0;
      const pct = Math.round((n / total) * 100);
      const row = document.createElement("div");
      row.innerHTML = `<strong></strong> — ${n} vote${n === 1 ? "" : "s"} (${pct}%)<div class="bar"><span style="width:${pct}%"></span></div>`;
      row.querySelector("strong").textContent = o;
      voteResults.appendChild(row);
    });
  }

  if (voteForm) {
    voteForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const choice = voteForm.querySelector('input[name="phone-vote"]:checked');
      if (!choice) return;
      const votes = loadVotes();
      votes[choice.value] = (votes[choice.value] || 0) + 1;
      saveVotes(votes);
      voteStatus.textContent = `Thanks! You voted for ${choice.value}. `;
      voteForm.reset();
      showVotes();
    });
    showVotes();
  }

  /* ---------- Newsletter ---------- */
  const signup = $("signup-form");
  if (signup) {
    signup.addEventListener("submit", (e) => {
      e.preventDefault();
      // Connect this to your email service (Mailchimp, Brevo, etc.) to collect real signups.
      signup.innerHTML = "<p>Thanks for signing up!</p>";
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menuToggle");
  const mainNavigation = document.getElementById("mainNavigation");
  const siteHeader = document.getElementById("siteHeader");

  if (!menuToggle || !mainNavigation) {
    console.error("Menu toggle or navigation element was not found.");
    return;
  }

  function closeMenu() {
    menuToggle.classList.remove("active");
    mainNavigation.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNavigation.classList.toggle("active");

    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  mainNavigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (
      !mainNavigation.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      closeMenu();
    }
  });

  function updateHeader() {
    siteHeader?.classList.toggle("scrolled", window.scrollY > 15);
  }

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
});