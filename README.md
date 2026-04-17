# 🌸 Café Fleur - Project Structure Guide

This document outlines the structure of the Café Fleur ordering system. 
The project is divided into two main parts: the **Customer Menu** and the **Admin Dashboard** (to be built next).

## 📁 Current Folder Structure

```text
cafe fluer menu/
│
├── menu/                         ← [BUILT] Customer-facing menu (scanned via QR)
│   ├── index.html                ← Main menu and checkout page (Single Page App)
│   │
│   ├── css/
│   │   └── menu.css              ← Contains all styling (Dark Green, Gold, Beige theme)
│   │
│   └── js/
│       ├── config.js             ← Global settings (Google Script URL, Demo Mode, WhatsApp #)
│       ├── menu-data.js          ← The actual menu items & categories (Edit this to change menu)
│       ├── cart.js               ← Logic for adding/removing items and calculating totals
│       ├── order.js              ← Logic for sending the final order to the backend
│       └── app.js                ← Main UI logic (renders items, handles button clicks)
│
├── dashboard/                    ← [PENDING] Admin dashboard for the cafe owner
│   ├── index.html                
│   ├── css/
│   │   └── dashboard.css         
│   └── js/
│       ├── config.js             
│       ├── orders.js             
│       └── app.js                
│
└── apps-script/                  ← [PENDING] The Google Sheets backend code
    └── backend.gs                ← The code that will go into Google Apps Script
```

---

## 🛠️ How the Menu Works (Step-by-Step)

If you want to understand or edit the code, here is how the files interact:

1. **`index.html`** loads in the browser. It contains both the Menu View and the Checkout View, hiding one depending on the state.
2. **`app.js`** runs immediately. It reads the data from **`menu-data.js`** and generates the HTML for all the food items dynamically. 
3. When a user clicks "+", **`app.js`** tells **`cart.js`** to add the item.
4. **`cart.js`** updates the internal cart array and tells **`app.js`** to update the cart badge and total.
5. When the user clicks "View Cart", **`app.js`** hides the menu and shows the checkout section (which is already inside `index.html`).
6. When the user clicks "Place Order", **`order.js`** takes over. 
   - If `CONFIG.DEMO_MODE` is `true` (which it is currently), it fakes a 1.5-second loading delay and shows success.
   - If `CONFIG.DEMO_MODE` is `false`, it will send a `fetch()` request to the Google Sheets backend.

---

## 🎨 How to edit the Menu Items

You do NOT need to touch the HTML to change the menu. 
Just open `menu/js/menu-data.js`.

**Example of adding an item:**
```javascript
{
  id: 15,
  name: 'New Coffee',
  description: 'A brand new drink',
  price: 150,
  image: 'https://link-to-your-image.jpg'
}
```
*Note: Every time you add an item, make sure it has a completely unique `id` number!*

---

## 🚀 Next Steps to Build

1. **The Backend:** Write the Google Apps Script (`backend.gs`) and link it to a real Google Sheet.
2. **Link the Menu:** Paste the Google Script URL into `menu/js/config.js` to turn off Demo Mode.
3. **The Dashboard:** Build the `dashboard/` folder so the cafe owner can see the incoming orders.
