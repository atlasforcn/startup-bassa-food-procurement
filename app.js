const ingredients = [
  {
    id: "chicken-leg",
    name: "去骨雞腿排",
    category: "肉品",
    spec: "2kg/包",
    unit: "包",
    stock: 18,
    par: 36,
    dailyUse: 8,
    menuCostShare: 0.28,
    quotes: [
      { supplier: "嘉南鮮配", price: 585, moq: 6, lead: "今日可配", rating: 4.8, deliveryFee: 160 },
      { supplier: "雲林冷鏈", price: 560, moq: 12, lead: "明早可配", rating: 4.5, deliveryFee: 120 },
      { supplier: "大成餐飲倉", price: 612, moq: 4, lead: "今日可配", rating: 4.7, deliveryFee: 180 }
    ]
  },
  {
    id: "bok-choy",
    name: "青江菜",
    category: "蔬菜",
    spec: "10kg/箱",
    unit: "箱",
    stock: 5,
    par: 15,
    dailyUse: 4,
    menuCostShare: 0.12,
    quotes: [
      { supplier: "溪口契作農場", price: 430, moq: 2, lead: "今日可配", rating: 4.6, deliveryFee: 90 },
      { supplier: "彰化蔬配", price: 408, moq: 4, lead: "明早可配", rating: 4.3, deliveryFee: 80 },
      { supplier: "嘉義鮮採", price: 455, moq: 2, lead: "今日可配", rating: 4.9, deliveryFee: 130 }
    ]
  },
  {
    id: "rice",
    name: "台梗九號白米",
    category: "米麵雜糧",
    spec: "30kg/袋",
    unit: "袋",
    stock: 7,
    par: 18,
    dailyUse: 3,
    menuCostShare: 0.18,
    quotes: [
      { supplier: "斗南米行", price: 1180, moq: 3, lead: "明早可配", rating: 4.7, deliveryFee: 110 },
      { supplier: "穀倉聯採", price: 1125, moq: 6, lead: "後天可配", rating: 4.4, deliveryFee: 0 },
      { supplier: "雲嘉糧品", price: 1210, moq: 2, lead: "今日可配", rating: 4.6, deliveryFee: 140 }
    ]
  },
  {
    id: "egg",
    name: "洗選雞蛋",
    category: "蛋乳",
    spec: "200顆/箱",
    unit: "箱",
    stock: 2,
    par: 8,
    dailyUse: 1.8,
    menuCostShare: 0.1,
    quotes: [
      { supplier: "中埔牧場", price: 1320, moq: 1, lead: "今日可配", rating: 4.9, deliveryFee: 70 },
      { supplier: "晨光蛋品", price: 1260, moq: 3, lead: "明早可配", rating: 4.4, deliveryFee: 90 },
      { supplier: "安心蛋倉", price: 1380, moq: 1, lead: "今日可配", rating: 4.8, deliveryFee: 120 }
    ]
  },
  {
    id: "soy-sauce",
    name: "釀造醬油",
    category: "調味料",
    spec: "5L/桶",
    unit: "桶",
    stock: 9,
    par: 12,
    dailyUse: 0.8,
    menuCostShare: 0.08,
    quotes: [
      { supplier: "西螺醬園", price: 420, moq: 4, lead: "明早可配", rating: 4.8, deliveryFee: 90 },
      { supplier: "餐飲乾貨所", price: 398, moq: 8, lead: "後天可配", rating: 4.2, deliveryFee: 0 },
      { supplier: "雲嘉糧品", price: 438, moq: 3, lead: "今日可配", rating: 4.5, deliveryFee: 140 }
    ]
  },
  {
    id: "shrimp",
    name: "白蝦仁",
    category: "海鮮",
    spec: "1kg/包",
    unit: "包",
    stock: 4,
    par: 14,
    dailyUse: 3.2,
    menuCostShare: 0.2,
    quotes: [
      { supplier: "布袋海產直送", price: 690, moq: 5, lead: "今日可配", rating: 4.7, deliveryFee: 180 },
      { supplier: "台南冷凍水產", price: 650, moq: 10, lead: "明早可配", rating: 4.5, deliveryFee: 120 },
      { supplier: "大成餐飲倉", price: 725, moq: 4, lead: "今日可配", rating: 4.4, deliveryFee: 180 }
    ]
  },
  {
    id: "tofu",
    name: "板豆腐",
    category: "豆製品",
    spec: "40盒/籃",
    unit: "籃",
    stock: 3,
    par: 10,
    dailyUse: 2.4,
    menuCostShare: 0.09,
    quotes: [
      { supplier: "民雄豆坊", price: 520, moq: 2, lead: "今日可配", rating: 4.6, deliveryFee: 80 },
      { supplier: "中正生鮮聯採", price: 498, moq: 4, lead: "明早可配", rating: 4.4, deliveryFee: 60 },
      { supplier: "嘉義鮮採", price: 545, moq: 2, lead: "今日可配", rating: 4.9, deliveryFee: 130 }
    ]
  },
  {
    id: "noodle",
    name: "冷藏拉麵",
    category: "米麵雜糧",
    spec: "120份/箱",
    unit: "箱",
    stock: 6,
    par: 12,
    dailyUse: 2.2,
    menuCostShare: 0.14,
    quotes: [
      { supplier: "台中製麵", price: 980, moq: 2, lead: "明早可配", rating: 4.7, deliveryFee: 100 },
      { supplier: "餐飲乾貨所", price: 945, moq: 4, lead: "後天可配", rating: 4.2, deliveryFee: 0 },
      { supplier: "雲嘉糧品", price: 1010, moq: 2, lead: "今日可配", rating: 4.5, deliveryFee: 140 }
    ]
  }
];

const state = {
  selectedIngredientId: ingredients[0].id,
  cart: [],
  search: "",
  category: "全部",
  urgentOnly: false,
  deliverySlot: "今天 18:00-20:00",
  lastOrderId: ""
};

const catalogBody = document.querySelector("#catalogBody");
const catalogCount = document.querySelector("#catalogCount");
const categoryFilter = document.querySelector("#categoryFilter");
const searchInput = document.querySelector("#searchInput");
const urgentOnly = document.querySelector("#urgentOnly");
const deliverySlot = document.querySelector("#deliverySlot");
const quoteSummary = document.querySelector("#quoteSummary");
const quoteList = document.querySelector("#quoteList");
const bestQuoteButton = document.querySelector("#bestQuoteButton");
const cartList = document.querySelector("#cartList");
const submitOrder = document.querySelector("#submitOrder");
const scheduleBoard = document.querySelector("#scheduleBoard");
const categoryBars = document.querySelector("#categoryBars");
const lowStockList = document.querySelector("#lowStockList");

const money = new Intl.NumberFormat("zh-TW", {
  style: "currency",
  currency: "TWD",
  maximumFractionDigits: 0
});

function formatMoney(value) {
  return money.format(Math.round(value));
}

function getIngredient(id) {
  return ingredients.find((ingredient) => ingredient.id === id);
}

function getBestQuote(ingredient) {
  return [...ingredient.quotes].sort((a, b) => a.price - b.price)[0];
}

function getSelectedIngredient() {
  return getIngredient(state.selectedIngredientId) || ingredients[0];
}

function stockRatio(ingredient) {
  return Math.min(1, ingredient.stock / ingredient.par);
}

function isLowStock(ingredient) {
  return ingredient.stock < ingredient.par * 0.55;
}

function suggestedQty(ingredient) {
  const gap = Math.max(ingredient.par - ingredient.stock, ingredient.dailyUse * 2);
  const bestQuote = getBestQuote(ingredient);
  return Math.max(bestQuote.moq, Math.ceil(gap));
}

function getFilteredIngredients() {
  return ingredients.filter((ingredient) => {
    const keyword = state.search.trim().toLowerCase();
    const matchesSearch = !keyword || `${ingredient.name}${ingredient.category}${ingredient.spec}`.toLowerCase().includes(keyword);
    const matchesCategory = state.category === "全部" || ingredient.category === state.category;
    const matchesUrgent = !state.urgentOnly || isLowStock(ingredient);
    return matchesSearch && matchesCategory && matchesUrgent;
  });
}

function setupFilters() {
  const categories = ["全部", ...new Set(ingredients.map((ingredient) => ingredient.category))];
  categoryFilter.innerHTML = categories.map((category) => `<option value="${category}">${category}</option>`).join("");
}

function renderCatalog() {
  const filtered = getFilteredIngredients();
  catalogCount.textContent = `${filtered.length} 項`;

  if (!filtered.length) {
    catalogBody.innerHTML = `
      <tr>
        <td colspan="7">
          <div class="empty-state">沒有符合條件的食材，請調整分類或搜尋字。</div>
        </td>
      </tr>
    `;
    return;
  }

  catalogBody.innerHTML = filtered
    .map((ingredient) => {
      const best = getBestQuote(ingredient);
      const ratio = stockRatio(ingredient);
      const levelClass = ratio < 0.35 ? "critical" : ratio < 0.55 ? "low" : "";
      const selectedClass = ingredient.id === state.selectedIngredientId ? "is-selected" : "";
      return `
        <tr class="${selectedClass}" data-id="${ingredient.id}">
          <td>
            <div class="item-name">
              <strong>${ingredient.name}</strong>
              <span>${ingredient.id}</span>
            </div>
          </td>
          <td>${ingredient.category}</td>
          <td>${ingredient.spec}</td>
          <td class="stock-cell">
            ${ingredient.stock}/${ingredient.par} ${ingredient.unit}
            <div class="stock-track">
              <div class="stock-fill ${levelClass}" style="width: ${Math.round(ratio * 100)}%"></div>
            </div>
          </td>
          <td>${ingredient.dailyUse} ${ingredient.unit}/日</td>
          <td>${formatMoney(best.price)} · ${best.supplier}</td>
          <td><button class="table-action" type="button" data-add="${ingredient.id}" title="加入採購車">＋</button></td>
        </tr>
      `;
    })
    .join("");
}

function renderQuotes() {
  const ingredient = getSelectedIngredient();
  const best = getBestQuote(ingredient);
  const sortedQuotes = [...ingredient.quotes].sort((a, b) => a.price - b.price);
  const highest = sortedQuotes[sortedQuotes.length - 1];

  quoteSummary.innerHTML = `
    <strong>${ingredient.name} · ${ingredient.spec}</strong>
    <span>最低報價 ${formatMoney(best.price)}，與最高報價差 ${formatMoney(highest.price - best.price)}。建議補 ${suggestedQty(ingredient)} ${ingredient.unit}。</span>
  `;

  quoteList.innerHTML = sortedQuotes
    .map((quote) => {
      const bestClass = quote.supplier === best.supplier ? "is-best" : "";
      return `
        <article class="quote-card ${bestClass}">
          <div>
            <h3>${quote.supplier}</h3>
            <div class="quote-meta">
              <span>MOQ ${quote.moq} ${ingredient.unit}</span>
              <span>${quote.lead}</span>
              <span>評分 ${quote.rating}</span>
              <span>配送 ${formatMoney(quote.deliveryFee)}</span>
            </div>
          </div>
          <div class="quote-price">
            <strong>${formatMoney(quote.price)}</strong>
            <small>/${ingredient.unit}</small>
            <button class="ghost-button" type="button" data-add="${ingredient.id}" data-supplier="${quote.supplier}">選用</button>
          </div>
        </article>
      `;
    })
    .join("");
}

function addToCart(ingredientId, supplierName) {
  const ingredient = getIngredient(ingredientId);
  const quote = supplierName
    ? ingredient.quotes.find((item) => item.supplier === supplierName)
    : getBestQuote(ingredient);
  const existing = state.cart.find((item) => item.ingredientId === ingredientId && item.supplier === quote.supplier);

  if (existing) {
    existing.qty += quote.moq;
  } else {
    state.cart.push({
      ingredientId,
      supplier: quote.supplier,
      qty: Math.max(quote.moq, suggestedQty(ingredient)),
      slot: state.deliverySlot
    });
  }

  renderAll();
}

function removeFromCart(index) {
  state.cart.splice(index, 1);
  renderAll();
}

function updateCartQty(index, qty) {
  const line = state.cart[index];
  const ingredient = getIngredient(line.ingredientId);
  const quote = ingredient.quotes.find((item) => item.supplier === line.supplier);
  line.qty = Math.max(quote.moq, Number(qty) || quote.moq);
  renderAll();
}

function updateCartSupplier(index, supplier) {
  const line = state.cart[index];
  const ingredient = getIngredient(line.ingredientId);
  const quote = ingredient.quotes.find((item) => item.supplier === supplier);
  line.supplier = supplier;
  line.qty = Math.max(line.qty, quote.moq);
  renderAll();
}

function updateCartSlot(index, slot) {
  state.cart[index].slot = slot;
  renderAll();
}

function lineQuote(line) {
  const ingredient = getIngredient(line.ingredientId);
  return ingredient.quotes.find((quote) => quote.supplier === line.supplier);
}

function cartSubtotal() {
  return state.cart.reduce((sum, line) => sum + line.qty * lineQuote(line).price, 0);
}

function deliveryFees() {
  const grouped = new Map();
  state.cart.forEach((line) => {
    const quote = lineQuote(line);
    const current = grouped.get(line.supplier) || 0;
    grouped.set(line.supplier, Math.max(current, quote.deliveryFee));
  });
  return [...grouped.values()].reduce((sum, fee) => sum + fee, 0);
}

function bestPossibleSubtotal() {
  return state.cart.reduce((sum, line) => {
    const ingredient = getIngredient(line.ingredientId);
    return sum + line.qty * getBestQuote(ingredient).price;
  }, 0);
}

function renderCart() {
  if (!state.cart.length) {
    cartList.innerHTML = `<div class="empty-state">尚未加入食材。從目錄或報價比較選用供應商後，採購單會在這裡計算 MOQ、配送費與總金額。</div>`;
  } else {
    cartList.innerHTML = state.cart
      .map((line, index) => {
        const ingredient = getIngredient(line.ingredientId);
        const quote = lineQuote(line);
        const supplierOptions = ingredient.quotes
          .map((item) => `<option value="${item.supplier}" ${item.supplier === line.supplier ? "selected" : ""}>${item.supplier} · ${formatMoney(item.price)}</option>`)
          .join("");
        const slotOptions = [...deliverySlot.options]
          .map((option) => `<option value="${option.value}" ${option.value === line.slot ? "selected" : ""}>${option.value}</option>`)
          .join("");

        return `
          <article class="cart-row">
            <div>
              <h3>${ingredient.name}</h3>
              <small>${ingredient.spec} · MOQ ${quote.moq} ${ingredient.unit}</small>
            </div>
            <input type="number" min="${quote.moq}" step="1" value="${line.qty}" data-qty="${index}" aria-label="${ingredient.name} 數量">
            <select data-supplier-select="${index}" aria-label="${ingredient.name} 供應商">${supplierOptions}</select>
            <div class="line-total">
              <strong>${formatMoney(line.qty * quote.price)}</strong>
              <small>${formatMoney(quote.price)}/${ingredient.unit}</small>
            </div>
            <button class="remove-button" type="button" data-remove="${index}" title="移除">×</button>
            <select data-slot-select="${index}" aria-label="${ingredient.name} 配送時段">${slotOptions}</select>
          </article>
        `;
      })
      .join("");
  }

  const suppliers = new Set(state.cart.map((line) => line.supplier));
  const subtotal = cartSubtotal();
  const fee = deliveryFees();

  document.querySelector("#supplierCount").textContent = `${suppliers.size} 家`;
  document.querySelector("#cartSubtotal").textContent = formatMoney(subtotal);
  document.querySelector("#deliveryFee").textContent = formatMoney(fee);
  document.querySelector("#cartTotal").textContent = formatMoney(subtotal + fee);
}

function renderSchedule() {
  if (!state.cart.length) {
    scheduleBoard.innerHTML = `<div class="empty-state">採購單尚無品項。加入品項後會依供應商與配送時段彙整。</div>`;
    return;
  }

  const groups = new Map();
  state.cart.forEach((line) => {
    const key = `${line.slot}__${line.supplier}`;
    const ingredient = getIngredient(line.ingredientId);
    const quote = lineQuote(line);
    if (!groups.has(key)) {
      groups.set(key, {
        supplier: line.supplier,
        slot: line.slot,
        items: [],
        fee: quote.deliveryFee
      });
    }
    groups.get(key).items.push(`${ingredient.name} ${line.qty}${ingredient.unit}`);
  });

  scheduleBoard.innerHTML = [...groups.values()]
    .map((group) => {
      const warning = group.slot.includes("後天") ? "warning" : "";
      const tag = group.slot.includes("後天") ? "需確認" : "可排車";
      return `
        <article class="schedule-row">
          <div>
            <strong>${group.slot} · ${group.supplier}</strong>
            <span>${group.items.join("、")} · 配送費 ${formatMoney(group.fee)}</span>
          </div>
          <span class="status-tag ${warning}">${tag}</span>
        </article>
      `;
    })
    .join("");
}

function projectedStock(ingredient) {
  const incoming = state.cart
    .filter((line) => line.ingredientId === ingredient.id)
    .reduce((sum, line) => sum + line.qty, 0);
  return ingredient.stock + incoming;
}

function renderAnalytics() {
  const subtotal = cartSubtotal();
  const projectedCoverage = ingredients.map((ingredient) => projectedStock(ingredient) / ingredient.dailyUse);
  const averageCoverage = projectedCoverage.reduce((sum, days) => sum + days, 0) / projectedCoverage.length;
  const weightedCost = state.cart.reduce((sum, line) => {
    const ingredient = getIngredient(line.ingredientId);
    return sum + line.qty * lineQuote(line).price * ingredient.menuCostShare;
  }, 0);
  const costPerCover = state.cart.length ? weightedCost / 180 : 0;
  const revenuePerCover = 260;
  const margin = state.cart.length ? Math.max(0, ((revenuePerCover - costPerCover) / revenuePerCover) * 100) : 0;

  document.querySelector("#coverageDays").textContent = `${averageCoverage.toFixed(1)} 天`;
  document.querySelector("#coverageBadge").textContent = `${averageCoverage.toFixed(1)} 天`;
  document.querySelector("#costPerCover").textContent = formatMoney(costPerCover);
  document.querySelector("#metricMargin").textContent = `${margin.toFixed(1)}%`;

  const categoryTotals = new Map();
  state.cart.forEach((line) => {
    const ingredient = getIngredient(line.ingredientId);
    const current = categoryTotals.get(ingredient.category) || 0;
    categoryTotals.set(ingredient.category, current + line.qty * lineQuote(line).price);
  });
  const maxCategoryTotal = Math.max(...categoryTotals.values(), 1);

  if (!state.cart.length) {
    categoryBars.innerHTML = `<div class="empty-state">加入採購品項後，這裡會顯示各分類採購金額佔比。</div>`;
  } else {
    categoryBars.innerHTML = [...categoryTotals.entries()]
      .sort((a, b) => b[1] - a[1])
      .map(([category, total]) => `
        <div class="bar-row">
          <span>${category}</span>
          <div class="bar-track">
            <div class="bar-fill" style="width: ${Math.max(8, Math.round((total / maxCategoryTotal) * 100))}%"></div>
          </div>
          <strong>${formatMoney(total)}</strong>
        </div>
      `)
      .join("");
  }

  const lowItems = ingredients
    .map((ingredient) => ({
      ingredient,
      days: projectedStock(ingredient) / ingredient.dailyUse
    }))
    .filter((item) => item.days < 4)
    .sort((a, b) => a.days - b.days);

  lowStockList.innerHTML = lowItems.length
    ? lowItems
        .map(({ ingredient, days }) => `
          <div class="low-row">
            <div>
              <strong>${ingredient.name}</strong>
              <span>採購後庫存 ${projectedStock(ingredient)} ${ingredient.unit}，約 ${days.toFixed(1)} 天</span>
            </div>
            <button class="ghost-button" type="button" data-add="${ingredient.id}">補貨</button>
          </div>
        `)
        .join("")
    : `<div class="empty-state">採購後所有品項皆高於 4 天安全水位。</div>`;

  document.querySelector("#metricLowStock").textContent = lowItems.length;
  document.querySelector("#metricTotal").textContent = formatMoney(subtotal + deliveryFees());
  document.querySelector("#metricSavings").textContent = `已節省 ${formatMoney(Math.max(0, subtotal - bestPossibleSubtotal()))}`;
  document.querySelector("#metricUnscheduled").textContent = state.cart.filter((line) => line.slot.includes("後天")).length;
}

function submitCurrentOrder() {
  if (!state.cart.length) {
    state.lastOrderId = "尚無品項";
  } else {
    state.lastOrderId = `PO-${new Date().getHours()}${String(new Date().getMinutes()).padStart(2, "0")}-${state.cart.length}L`;
  }
  document.querySelector("#lastOrderBadge").textContent = state.lastOrderId;
}

function renderAll() {
  renderCatalog();
  renderQuotes();
  renderCart();
  renderSchedule();
  renderAnalytics();
}

function bindEvents() {
  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderCatalog();
  });

  categoryFilter.addEventListener("change", (event) => {
    state.category = event.target.value;
    renderCatalog();
  });

  urgentOnly.addEventListener("change", (event) => {
    state.urgentOnly = event.target.checked;
    renderCatalog();
  });

  deliverySlot.addEventListener("change", (event) => {
    state.deliverySlot = event.target.value;
  });

  catalogBody.addEventListener("click", (event) => {
    const addButton = event.target.closest("[data-add]");
    if (addButton) {
      addToCart(addButton.dataset.add);
      return;
    }

    const row = event.target.closest("tr[data-id]");
    if (row) {
      state.selectedIngredientId = row.dataset.id;
      renderAll();
    }
  });

  quoteList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (button) {
      addToCart(button.dataset.add, button.dataset.supplier);
    }
  });

  bestQuoteButton.addEventListener("click", () => {
    addToCart(state.selectedIngredientId);
  });

  cartList.addEventListener("input", (event) => {
    if (event.target.matches("[data-qty]")) {
      updateCartQty(Number(event.target.dataset.qty), event.target.value);
    }
  });

  cartList.addEventListener("change", (event) => {
    if (event.target.matches("[data-supplier-select]")) {
      updateCartSupplier(Number(event.target.dataset.supplierSelect), event.target.value);
    }
    if (event.target.matches("[data-slot-select]")) {
      updateCartSlot(Number(event.target.dataset.slotSelect), event.target.value);
    }
  });

  cartList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-remove]");
    if (button) {
      removeFromCart(Number(button.dataset.remove));
    }
  });

  lowStockList.addEventListener("click", (event) => {
    const button = event.target.closest("[data-add]");
    if (button) {
      addToCart(button.dataset.add);
    }
  });

  submitOrder.addEventListener("click", () => {
    submitCurrentOrder();
  });
}

setupFilters();
bindEvents();
renderAll();
