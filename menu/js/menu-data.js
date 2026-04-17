// =====================================================
// MENU-DATA.JS — All menu items (hardcoded for demo)
// =====================================================
// Menu items are NOT stored in a database.
// To update the menu, edit this file and redeploy.
// Each category has a name, icon, and array of items.
// Each item has: id, name, description, price, image URL.
// =====================================================

const MENU_DATA = [
  // ── CATEGORY 1: Signature Beverages ──
  {
    name: 'Beverages',
    icon: '🍹',
    items: [
      {
        id: 1,
        name: 'Hibiscus Bloom',
        description: 'Infused with garden berries',
        price: 185,
        image: 'assets/images/hibiscus_bloom.png'
      },
      {
        id: 2,
        name: 'Golden Elixir',
        description: 'Turmeric & spiced honey',
        price: 210,
        image: 'assets/images/golden_elixir.png'
      },
      {
        id: 3,
        name: 'Verdant Mist',
        description: 'Cucumber & lime essence',
        price: 165,
        image: 'assets/images/verdant_mist.png'
      },
      {
        id: 4,
        name: 'Fleur Soda',
        description: 'Elderflower & rose water',
        price: 195,
        image: 'assets/images/hibiscus_bloom.png'
      },
      {
        id: 5,
        name: 'Virgin Mojito',
        description: 'Fresh mint & lime crush',
        price: 65,
        image: 'assets/images/verdant_mist.png'
      }
    ]
  },

  // ── CATEGORY 2: Hot Coffee ──
  {
    name: 'Hot Coffee',
    icon: '☕',
    items: [
      {
        id: 6,
        name: 'Cappuccino',
        description: 'Classic Italian cappuccino',
        price: 79,
        image: 'assets/images/cappuccino.png'
      },
      {
        id: 7,
        name: 'Caramel Latte',
        description: 'Rich caramel drizzle',
        price: 99,
        image: 'assets/images/cappuccino.png'
      },
      {
        id: 8,
        name: 'Hot Chocolate Latte',
        description: 'Velvety cocoa blend',
        price: 79,
        image: 'assets/images/cappuccino.png'
      },
      {
        id: 9,
        name: 'Hazelnut Latte',
        description: 'Nutty & aromatic',
        price: 79,
        image: 'assets/images/cappuccino.png'
      },
      {
        id: 10,
        name: 'Kashmiri Latte',
        description: 'Saffron & cardamom',
        price: 99,
        image: 'assets/images/cappuccino.png'
      }
    ]
  },

  // ── CATEGORY 3: Cold Coffee ──
  {
    name: 'Cold Coffee',
    icon: '🧊',
    items: [
      {
        id: 11,
        name: 'Café Frappe',
        description: 'Blended iced coffee',
        price: 145,
        image: 'assets/images/iced_frappe.png'
      },
      {
        id: 12,
        name: 'Hazelnut Frappe',
        description: 'Nutty iced blend',
        price: 145,
        image: 'assets/images/iced_frappe.png'
      },
      {
        id: 13,
        name: 'Caramel Frappe',
        description: 'Sweet caramel ice blend',
        price: 145,
        image: 'assets/images/iced_frappe.png'
      },
      {
        id: 14,
        name: 'Chocolate Cold Coffee',
        description: 'Chilled chocolate coffee',
        price: 145,
        image: 'assets/images/iced_frappe.png'
      }
    ]
  }
];
