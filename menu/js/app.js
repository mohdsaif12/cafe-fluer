// =====================================================
// APP.JS — UI Rendering and Event Listeners
// =====================================================

document.addEventListener('DOMContentLoaded', () => {
  // === DOM Elements ===
  const categoryContainer = document.getElementById('category-container');
  const itemsContainer = document.getElementById('items-container');
  const cartIcon = document.getElementById('cart-icon');
  const cartBadge = document.getElementById('cart-badge');
  const viewCartBtn = document.getElementById('view-cart-btn');
  const checkoutSection = document.getElementById('checkout-section');
  const mainMenuSection = document.getElementById('main-menu-section');
  const backToMenuBtn = document.getElementById('back-to-menu');
  const checkoutItemsList = document.getElementById('checkout-items');
  const checkoutTotal = document.getElementById('checkout-total');
  const placeOrderBtn = document.getElementById('place-order-btn');
  const roomInput = document.getElementById('room-input');
  const phoneInput = document.getElementById('phone-input');
  const notesInput = document.getElementById('notes-input');
  const successModal = document.getElementById('success-modal');
  const contactBtn = document.getElementById('contact-btn');
  const currentCategoryTitle = document.getElementById('current-category-title');

  let activeCategoryIndex = 0;

  // === Initialize ===
  function init() {
    renderCategories();
    renderItems(activeCategoryIndex);
    updateCartUI();
    setupEventListeners();
    
    if(CONFIG.DEMO_MODE) {
       console.log("Running in DEMO MODE. Configure GOOGLE_SCRIPT_URL in config.js for real orders.");
    }
  }

  // === Render Functions ===
  
  // Render category tabs
  function renderCategories() {
    categoryContainer.innerHTML = '';
    MENU_DATA.forEach((category, index) => {
      const btn = document.createElement('button');
      btn.className = `category-btn ${index === activeCategoryIndex ? 'active' : ''}`;
      // Note: Ignoring icon for now to match design pure text look
      btn.textContent = category.name;
      btn.addEventListener('click', () => {
        activeCategoryIndex = index;
        renderCategories(); // Re-render to update active class
        renderItems(index);
      });
      categoryContainer.appendChild(btn);
    });
  }

  // Render items for specific category
  function renderItems(categoryIndex) {
    const category = MENU_DATA[categoryIndex];
    currentCategoryTitle.textContent = category.name;
    itemsContainer.innerHTML = '';
    
    category.items.forEach(item => {
      const cartItem = cart.find(i => i.id === item.id);
      const qtyInCart = cartItem ? cartItem.qty : 0;

      const itemCard = document.createElement('div');
      itemCard.className = 'item-card';
      
      itemCard.innerHTML = `
        <div class="item-img" style="background-image: url('${item.image}')"></div>
        <div class="item-info">
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="item-bottom">
            <span class="price">${CONFIG.CURRENCY}${item.price}</span>
            ${qtyInCart > 0 
              ? `<div class="qty-controls">
                   <button class="qty-btn decrement" data-id="${item.id}">-</button>
                   <span class="qty-value">${qtyInCart}</span>
                   <button class="qty-btn increment" data-id="${item.id}">+</button>
                 </div>`
              : `<button class="add-btn" data-id="${item.id}">+</button>`
            }
          </div>
        </div>
      `;
      itemsContainer.appendChild(itemCard);
    });

    // Attach event listeners to newly created buttons
    document.querySelectorAll('.add-btn, .increment').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        addToCart(id);
        renderItems(activeCategoryIndex); // Update specific item UI
      });
    });

    document.querySelectorAll('.decrement').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = parseInt(e.target.getAttribute('data-id'));
        removeFromCart(id);
        renderItems(activeCategoryIndex); // Update specific item UI
      });
    });
  }

  // Required globally to be called from cart.js
  window.updateCartUI = function() {
    const count = getCartCount();
    cartBadge.textContent = count;
    
    if (count > 0) {
      cartBadge.classList.add('visible');
      viewCartBtn.querySelector('.cart-text').innerHTML = `View Cart &bull; ${count} Item${count > 1 ? 's' : ''}`;
    } else {
      cartBadge.classList.remove('visible');
      // Reset button text back to default
      viewCartBtn.querySelector('.cart-text').innerHTML = 'View Cart';
      if (checkoutSection.classList.contains('active')) {
        hideCheckout();
      }
    }
  };

  // Render the checkout screen list
  function renderCheckout() {
    const currentCart = getCartItems();
    checkoutItemsList.innerHTML = '';
    
    currentCart.forEach(item => {
      const itemEl = document.createElement('div');
      itemEl.className = 'checkout-item';
      itemEl.innerHTML = `
        <div class="checkout-item-info">
          <h4>${item.name}</h4>
          <span>${item.qty}x Quantity</span>
        </div>
        <div class="checkout-item-price">${CONFIG.CURRENCY}${item.price * item.qty}</div>
      `;
      checkoutItemsList.appendChild(itemEl);
    });

    checkoutTotal.textContent = `${CONFIG.CURRENCY}${getCartTotal()}`;
  }

  // === UI Transitions ===
  function showCheckout() {
    if (getCartCount() === 0) return;
    renderCheckout();
    mainMenuSection.classList.remove('active');
    checkoutSection.classList.add('active');
    window.scrollTo(0, 0);
  }

  function hideCheckout() {
    checkoutSection.classList.remove('active');
    mainMenuSection.classList.add('active');
    window.scrollTo(0, 0);
    renderItems(activeCategoryIndex); // refresh UI
  }

  // === Event Listeners ===
  function setupEventListeners() {
    cartIcon.addEventListener('click', showCheckout);
    viewCartBtn.addEventListener('click', showCheckout);
    backToMenuBtn.addEventListener('click', hideCheckout);
    
    // Contact action
    contactBtn.addEventListener('click', () => {
      window.open(`https://wa.me/${CONFIG.WHATSAPP_NUMBER}?text=Hi%20${CONFIG.CAFE_NAME}`, '_blank');
    });

    // Place Order action
    placeOrderBtn.addEventListener('click', async () => {
      const room = roomInput.value.trim();
      const phone = phoneInput.value.trim();
      const notes = notesInput.value.trim();

      if (!room || !phone) {
        alert("Please enter both Room Number and Phone Number.");
        return;
      }

      placeOrderBtn.disabled = true;
      placeOrderBtn.textContent = 'Processing...';

      const orderData = {
        items: getCartItems(),
        roomNumber: room,
        phone: phone,
        total: getCartTotal(),
        notes: notes
      };

      const result = await placeOrder(orderData);

      if (result.success) {
        // Show success modal FIRST
        successModal.classList.add('active');

        // Reset form inputs immediately
        roomInput.value = '';
        phoneInput.value = '';
        notesInput.value = '';

        // Clear cart state WITHOUT triggering updateCartUI's auto-hideCheckout
        cart = [];

        // Reset button state immediately
        placeOrderBtn.disabled = false;
        placeOrderBtn.textContent = 'Place Order';

        // After 3 seconds: close modal, go back to menu, and fully refresh UI
        setTimeout(() => {
          successModal.classList.remove('active');
          // Manually switch sections (don't use hideCheckout which checks cart)
          checkoutSection.classList.remove('active');
          mainMenuSection.classList.add('active');
          window.scrollTo(0, 0);
          // Now fully re-render the items grid (resets all qty controls to "+" buttons)
          renderItems(activeCategoryIndex);
          // Reset cart badge and view cart button
          updateCartUI();
        }, 3000);
      } else {
        alert("Failed to place order. Please try again or contact the front desk.");
        placeOrderBtn.disabled = false;
        placeOrderBtn.textContent = 'Place Order';
      }
    });
  }

  // Start app
  init();
});
