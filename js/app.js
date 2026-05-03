/* ========================================
   App - Aplicação Principal Foodtruck
   ======================================== */

// Configurações
const WHATSAPP_NUMBER = "558881199399"; // Helen Bolos & Foodtruck
const PIX_KEY = "88981199399";
const PIX_RECEIVER = "Maria Helenilda Rodrigues Veras";
const PIX_BANK = "Mercado Pago";

const categories = [
  { id: "hamburgueres", name: "Hambúrgueres" },
  { id: "combos", name: "Combos" },
  { id: "pizzas", name: "Pizzas" },
  { id: "bolos", name: "Bolos" },
  { id: "bebidas", name: "Bebidas" },
  { id: "beirutes", name: "Beirutes" },
  { id: "batatas", name: "Batatas" }
];

const products = [
  // Combos
  {
    id: 100,
    category: "combos",
    name: "Combo 1",
    description: "2x Burguer + 2 Refri 250ml + Batata M.",
    price: 46.00,
    tag: "combo"
  },
  {
    id: 101,
    category: "combos",
    name: "Combo 2",
    description: "1 X-Salada + 1 Coca lata + Batata P.",
    price: 29.00,
    tag: "combo"
  },
  {
    id: 102,
    category: "combos",
    name: "Combo 3",
    description: "1 X-tudo + 1 X-Bacon + batata P + 1 Refri 600ml.",
    price: 65.00,
    tag: "combo"
  },
  {
    id: 103,
    category: "combos",
    name: "Combo 4",
    description: "1 X-Egg, 1 X-Calabresa + 2 Batata M + Coca 600ml.",
    price: 58.00,
    tag: "combo"
  },
  {
    id: 1,
    category: "hamburgueres",
    name: "American Burger",
    description: "Pão, hambúrguer, cheddar, bacon, maionese temperada, cebola caramelizada, alface, tomate.",
    price: 18.50,
    tag: "Mais pedido"
  },
  {
    id: 2,
    category: "hamburgueres",
    name: "X-Burger",
    description: "Pão, hambúrguer, queijo",
    price: 10.00,
    tag: "Premium"
  },
  {
    id: 3,
    category: "hamburgueres",
    name: "X-Salada",
    description: "Pão, hambúrguer, queijo, alface, tomate, maionese",
    price: 11.00,
    tag: "Salada"
  },
  {
    id: 4,
    category: "pizzas",
    name: "Pizza 4 Fatias",
    description: "sabores disponiveis - Pernil com mussarela, Portuguesa, Frango com catupiry, Calabresa, Baiana, 3 Queijos.",
    price: 28.00,
    tag: "4 fatias"
  },
  {
    id: 5,
    category: "pizzas",
    name: "Pizza 8 Fatias",
    description: "sabores disponiveis - Pernil com mussarela, Portuguesa, Frango com catupiry, Calabresa, Baiana, 3 Queijos.",
    price: 39.00,
    tag: "8 fatias"
  },
  {
    id: 16,
    category: "hamburgueres",
    name: "X-Tudo",
    description: "Pão, hambúrguer, queijo, alface, tomate, maionese, bacon, ovo, calabresa",
    price: 20.00,
    tag: "Tudo"
  },
  {
    id: 17,
    category: "hamburgueres",
    name: "X-Egg",
    description: "Pão, hambúrguer, queijo, ovo, alface, tomate, maionese",
    price: 13.50,
    tag: "Egg"
  },
  {    id: 18,
    category: "hamburgueres",
    name: "X-Bacon",
    description: "Pão, hambúrguer, queijo, bacon, alface, tomate, maionese",
    price: 17.00,
    tag: "Bacon"
  },
  {    id: 19,
    category: "hamburgueres",
    name: "X-Pernil",
    description: "Pão, hambúrguer, queijo, pernil desfiado, alface, tomate, maionese",
    price: 16.00,
    tag: "Pernil"
  },
  {
    id: 20,
    category: "hamburgueres",
    name: "X-Duplo",
    description: "Pão, hambúrguer 2x, queijo 2x, alface, tomate, maionese",
    price: 20.00,
    tag: "Duplo"
  },
  {
    id: 21,
    category: "hamburgueres",
    name: "X-Tudo Duplo",
    description: "Pão, hambúrguer 2x, queijo 2x, bacon 2x, calabresa 2x, ovo 2x, alface, tomate, maionese",
    price: 29.90,
    tag: "Tudo Duplo"
  },
  {
    id: 22,
    category: "hamburgueres",
    name: "Americano",
    description: "Pão, hambúrguer, maionese, alface, tomate",
    price: 8.00,
    tag: "popular"
  },
  {
    id: 23,
    category: "hamburgueres",
    name: "Bauru",
    description: "Presunto, queijo, tomate, orégano",
    price: 7.00,
    tag: "Popular"
  },
  {
    id: 24,
    category: "hamburgueres",
    name: "Misto Quente",
    description: "Presunto, queijo",
    price: 6.00,
    tag: "Popular"
  },
  {    id: 7,
    category: "hamburgueres",
    name: "X-Calabresa",
    description: "Pão, hambúrguer, queijo, calabresa, alface, tomate, maionese",
    price: 15.50,
    tag: "Calabresa"
  },
  {
    id: 6,
    category: "bolos",
    name: "fatia de bolo",
    description: "Bolo fatiado, consulte os sabores disponíveis no momento do pedido.",
    price: 9.50,
    tag: "Fatia"
  },

  
  {
    id: 9,
    category: "bebidas",
    name: "Refrigerante Lata",
    description: "Consulte os sabores disponíveis no momento do pedido.",
    price: 5.00,
    tag: "Gelado"
  },
  {
    id: 10,
    category: "bebidas",
    name: "refri 2L",
    description: "Sabores selecionados, feito na hora quando disponível.",
    price: 14.00,
    tag: "2 Litros"
  },
  {
    id: 11,
    category: "bebidas",
    name: "coca-cola 2L",
    description: "coca-cola de 2 litros, sabor original.",
    price: 16.00,
    tag: "2 Litros"
  },
  {
    id: 12,
    category: "bebidas",
    name: "coca-cola 600ml",
    description: "coca-cola de 600ml, sabor original.",
    price: 9.50,
    tag: "600ml"
  },
  {
    id: 13,
    category: "bebidas",
    name: "guaraná 1L",
    description: "guaraná de 1 litro, sabor original.",
    price: 9.00,
    tag: "1 Litro"
  },
  {
    id: 14,
    category: "bebidas",
    name: "cerveja",
    description: "cerveja lata.",
    price: 5.00,
    tag: "Gelada"
  },
  {
    id: 15,
    category: "bebidas",
    name: "refri 250ml",
    description: "refrigerante de 250ml, sabor original.",
    price: 3.00,
    tag: "Gelado"
  },
  // Beirutes
  {
    id: 25,
    category: "beirutes",
    name: "Beirute 8 Fatias",
    description: "Beirute grande com 8 fatias - sabores disponiveis - pernil, frango, calabresa e americano.",
    price: 39.00,
    tag: "8 fatias"
  },
  {
    id: 26,
    category: "beirutes",
    name: "Beirute 4 Fatias",
    description: "Beirute médio com 4 fatias  - sabores disponiveis - pernil, frango, calabresa e americano.",
    price: 28.00,
    tag: "4 fatias"
  },
  {
    id: 27,
    category: "beirutes",
    name: "Beirute Individual",
    description: "Beirute individual  - sabores disponiveis - pernil, frango, calabresa e americano.",
    price: 20.00,
    tag: "Individual"
  },
{
    id: 8,
    category: "beirutes",
    name: "tudao artesanal",
    description: "acompanha batata frita.",
    price: 33.99,
    tag: "Tudão",
    image: "img/tudao.jpeg"
},
  // Batatas
  {
    id: 28,
    category: "batatas",
    name: "Batata Porção Pequena",
    description: "Batata frita crocante - porção individual",
    price: 13.00,
    tag: "Porção"
  },
  {
    id: 29,
    category: "batatas",
    name: "Batata Média",
    description: "Batata frita crocante - porção média",
    price: 19.00,
    tag: "Porção"
  },
  {
    id: 30,
    category: "batatas",
    name: "Batata com Cheddar e Bacon",
    description: "Batata frita coberta com cheddar e bacon",
    price: 28.00,
    tag: "Especial"
  },
  {
    id: 31,
    category: "batatas",
    name: "Batata Frita Grande Completa",
    description: "Batata frita completa com cheddar, bacon, calabresa, milho, ervilha e maionese",
    price: 39.00,
    tag: "Gigante"
  },
];

// Estado
let activeCategory = "hamburgueres";
let cart = [];

// Elementos DOM
const categoryTabs = document.getElementById("categoryTabs");
const productsGrid = document.getElementById("productsGrid");
const searchInput = document.getElementById("searchInput");
const cartContent = document.getElementById("cartContent");
const cartTotal = document.getElementById("cartTotal");
const cartCountHeader = document.getElementById("cartCountHeader");
const finishOrderBtn = document.getElementById("finishOrderBtn");
const customerName = document.getElementById("customerName");
const deliveryType = document.getElementById("deliveryType");
const deliveryLocation = document.getElementById("deliveryLocation");
const addressGroup = document.getElementById("addressGroup");
const locationGroup = document.getElementById("locationGroup");
const address = document.getElementById("address");
const paymentMethod = document.getElementById("paymentMethod");
const changeGroup = document.getElementById("changeGroup");
const changeAmount = document.getElementById("changeAmount");
const pixKeyGroup = document.getElementById("pixKeyGroup");
const copyPixBtns = document.querySelectorAll(".copy-pix-btn");
const machineGroup = document.getElementById("machineGroup");
const needMachine = document.getElementById("needMachine");
const note = document.getElementById("note");
const toast = document.getElementById("toast");

// Taxa de entrega
let deliveryFee = 0;

// Status de Funcionamento
function updateStatus() {
  const now = new Date();
  const day = now.getDay(); // 0 = domingo, 1 = segunda, 2 = terça, etc.
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const currentTime = hours * 60 + minutes;

  // Horário de funcionamento
  // Segunda a sexta: 19:00 - 22:00
  // Sábado e domingo: 19:00 - 23:00
  const startTime = 19 * 60; // 19:00
  const isWeekend = day === 0 || day === 6; // 0 = domingo, 6 = sábado
  const endTime = isWeekend ? 23 * 60 : 22 * 60; // 23:00 nos fins de semana, 22:00 nos dias úteis

  const statusHours = document.getElementById("statusHours");
  const statusOpen = document.getElementById("statusOpen");

  // Terça-feira (dia 2) é fechado
  if (day === 2) {
    statusHours.textContent = "Fechado";
    statusHours.style.color = "#ff6b6b";
    statusOpen.textContent = "";
    statusOpen.className = "status-indicator closed";
    return;
  }

  // Verificar se está dentro do horário
  const isOpen = currentTime >= startTime && currentTime < endTime;

  if (isOpen) {
    statusHours.textContent = isWeekend ? "19:00 - 23:00" : "19:00 - 22:00";
    statusHours.style.color = "#51cf66";
    statusOpen.textContent = "🟢 Aberto";
    statusOpen.className = "status-indicator open";
  } else {
    statusHours.textContent = isWeekend ? "19:00 - 23:00" : "19:00 - 22:00";
    statusHours.style.color = "#ff6b6b";
    statusOpen.textContent = "🔴 Fechado";
    statusOpen.className = "status-indicator closed";
  }
}

// Funções Utilitárias
function formatCurrency(value) {
  if (!value) return "Consultar";

  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1800);
}

async function copyPixKey(event) {
  const pixKey = event.currentTarget.dataset.pixKey || PIX_KEY;

  try {
    await navigator.clipboard.writeText(pixKey);
    showToast("Chave Pix copiada");
  } catch (error) {
    const temporaryInput = document.createElement("input");
    temporaryInput.value = pixKey;
    document.body.appendChild(temporaryInput);
    temporaryInput.select();
    document.execCommand("copy");
    temporaryInput.remove();
    showToast("Chave Pix copiada");
  }
}

// Renderização
function renderCategories() {
  categoryTabs.innerHTML = categories.map(category => `
    <button class="category-btn ${category.id === activeCategory ? "active" : ""}" onclick="changeCategory('${category.id}')">
      ${category.name}
    </button>
  `).join("");
}

function renderProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  const filteredProducts = products.filter(product => {
    const matchesCategory = product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  if (filteredProducts.length === 0) {
    productsGrid.innerHTML = `
      <div class="empty-cart">
        Nenhum item encontrado nessa categoria.
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">
      ${product.image ? `<img class="product-image" src="${product.image}" alt="${product.name}" width="1220" height="998" loading="lazy" decoding="async">` : ""}
      <div class="product-top">
        <div>
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        </div>
        <span class="product-tag">${product.tag}</span>
      </div>

      <div class="product-bottom">
        <strong class="price">${formatCurrency(product.price)}</strong>
        <button class="add-btn" onclick="addToCart(${product.id})">+</button>
      </div>
    </article>
  `).join("");
}

function renderCart() {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const total = subtotal + deliveryFee;

  cartCountHeader.textContent = totalItems;
  cartTotal.textContent = total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });

  finishOrderBtn.disabled = cart.length === 0;

  if (cart.length === 0) {
    cartContent.innerHTML = `
      <div class="empty-cart">
        Seu carrinho está vazio. Escolha um item do cardápio para começar.
      </div>
    `;
    return;
  }

  let deliveryInfo = "";
  if (deliveryType.value === "Delivery" && deliveryLocation.value) {
    const locationName = deliveryLocation.value;
    deliveryInfo = `
      <div class="cart-delivery-info">
        <span>📍 ${locationName}</span>
        <span>Taxa: ${formatCurrency(deliveryFee)}</span>
      </div>
    `;
  }

  cartContent.innerHTML = `
    <div class="cart-items">
      ${cart.map(item => `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong>
            <span>${formatCurrency(item.price)} x ${item.quantity}</span>

            <div class="qty-controls">
              <button onclick="decreaseQuantity(${item.id})">-</button>
              <strong>${item.quantity}</strong>
              <button onclick="increaseQuantity(${item.id})">+</button>
            </div>
          </div>

          <button class="remove-btn" onclick="removeFromCart(${item.id})">×</button>
        </div>
      `).join("")}
    </div>
    ${deliveryInfo}
  `;
}

// Ações
function changeCategory(categoryId) {
  activeCategory = categoryId;
  renderCategories();
  renderProducts();
}

function addToCart(productId) {
  const product = products.find(item => item.id === productId);
  const productInCart = cart.find(item => item.id === productId);

  if (productInCart) {
    productInCart.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  showToast("Item adicionado ao pedido");
  renderCart();
}

function increaseQuantity(productId) {
  const productInCart = cart.find(item => item.id === productId);
  productInCart.quantity++;
  renderCart();
}

function decreaseQuantity(productId) {
  const productInCart = cart.find(item => item.id === productId);

  if (productInCart.quantity > 1) {
    productInCart.quantity--;
  } else {
    cart = cart.filter(item => item.id !== productId);
  }

  renderCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

// Finalizar Pedido
function finishOrder() {
  if (cart.length === 0) {
    showToast("Adicione pelo menos um item");
    return;
  }

  const nameValue = customerName.value.trim();
  const deliveryValue = deliveryType.value;
  const locationValue = deliveryLocation.value;
  const addressValue = address.value.trim();
  const paymentValue = paymentMethod.value;
  const changeValue = changeAmount.value;
  const machineValue = needMachine.value;
  const noteValue = note.value.trim();

  if (!nameValue) {
    showToast("Informe seu nome");
    customerName.focus();
    return;
  }

  if (deliveryValue === "Delivery" && !locationValue) {
    showToast("Selecione o local de entrega");
    deliveryLocation.focus();
    return;
  }

  if (deliveryValue === "Delivery" && !addressValue) {
    showToast("Informe o endereço");
    address.focus();
    return;
  }

  if (!paymentValue) {
    showToast("Selecione a forma de pagamento");
    paymentMethod.focus();
    return;
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal + deliveryFee;

  const itemsText = cart.map(item => {
    const itemSubtotal = item.price * item.quantity;
    return `• ${item.quantity}x ${item.name} - ${formatCurrency(itemSubtotal)}`;
  }).join("\n");

  let deliveryInfo = "";
  if (deliveryValue === "Delivery") {
    deliveryInfo = `*Local:* ${locationValue}\n*Taxa entrega:* ${formatCurrency(deliveryFee)}\n*Endereço:* ${addressValue}\n`;
  }

  let paymentInfo = "";
  if (paymentValue === "Dinheiro") {
    paymentInfo = `*Pagamento:* ${paymentValue}\n*Troco:* ${changeValue === "Não" ? "Não precisa" : `Para ${formatCurrency(parseFloat(changeValue))}`}\n`;
  } else if (paymentValue === "Pix") {
    paymentInfo = `*Pagamento:* ${paymentValue}\n`;
  } else if (paymentValue === "Cartao") {
    paymentInfo = `*Pagamento:* ${paymentValue}\n*Maquininha:* ${machineValue}\n`;
  }

  const message = `Olá, Helen Bolos & Foodtruck! Gostaria de fazer um pedido.\n\n` +
    `*Nome:* ${nameValue}\n` +
    `*Tipo:* ${deliveryValue}\n` +
    `${deliveryInfo}` +
    `${paymentInfo}` +
    `\n*Pedido:*\n${itemsText}\n\n` +
    `*Subtotal:* ${formatCurrency(subtotal)}\n` +
    `${deliveryValue === "Delivery" ? `*Taxa entrega:* ${formatCurrency(deliveryFee)}\n` : ""}` +
    `*Total:* ${total.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}\n` +
    `${noteValue ? `\n*Observações:* ${noteValue}\n` : ""}` +
    `\nPode confirmar meu pedido?`;

  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappUrl, "_blank");
}

// Inicialização
function init() {
  // Event listener para tipo de entrega
  deliveryType.addEventListener("change", () => {
    const isDelivery = deliveryType.value === "Delivery";
    locationGroup.style.display = isDelivery ? "block" : "none";
    addressGroup.style.display = "none";
    
    // Resetar valores quando mudar para retirada
    if (!isDelivery) {
      deliveryLocation.value = "";
      address.value = "";
      deliveryFee = 0;
      renderCart();
    }
  });

  // Event listener para local de entrega
  deliveryLocation.addEventListener("change", () => {
    const selectedOption = deliveryLocation.options[deliveryLocation.selectedIndex];
    const fee = parseFloat(selectedOption.getAttribute("data-fee")) || 0;
    deliveryFee = fee;
    
    if (fee > 0) {
      addressGroup.style.display = "block";
      showToast(`Taxa de entrega: ${formatCurrency(fee)}`);
    } else {
      addressGroup.style.display = "none";
      address.value = "";
    }
    
    renderCart();
  });

  // Event listener para forma de pagamento
  paymentMethod.addEventListener("change", () => {
    const payment = paymentMethod.value;
    
    if (payment === "Dinheiro") {
      changeGroup.style.display = "block";
      pixKeyGroup.style.display = "none";
      machineGroup.style.display = "none";
      needMachine.value = "Não";
    } else if (payment === "Pix") {
      changeGroup.style.display = "none";
      changeAmount.value = "Não";
      pixKeyGroup.style.display = "block";
      machineGroup.style.display = "none";
      needMachine.selectedIndex = 0;
    } else if (payment === "Cartao") {
      changeGroup.style.display = "none";
      changeAmount.value = "Não";
      pixKeyGroup.style.display = "none";
      machineGroup.style.display = "block";
    } else {
      changeGroup.style.display = "none";
      pixKeyGroup.style.display = "none";
      changeAmount.value = "Não";
      machineGroup.style.display = "none";
      needMachine.value = "Não";
    }
  });

  copyPixBtns.forEach(button => {
    button.addEventListener("click", copyPixKey);
  });

  // Event listener para busca
  searchInput.addEventListener("input", renderProducts);

  // Event listener para finalizar pedido
  finishOrderBtn.addEventListener("click", finishOrder);

  // Renderização inicial
  renderCategories();
  renderProducts();
  renderCart();
  updateStatus();

  // Atualizar status a cada minuto
  setInterval(updateStatus, 60000);
}

// Iniciar app quando DOM estiver pronto
document.addEventListener("DOMContentLoaded", init);
