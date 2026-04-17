// =====================================================
// ORDER.JS — Supabase REST API Integration
// =====================================================

async function placeOrder(orderData) {
  // Demo Mode check
  if (CONFIG.DEMO_MODE) {
    console.log("DEMO MODE: Simulating order placement...", orderData);
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({ success: true, simulated: true });
      }, 1500);
    });
  }

  // Real Mode: Send directly to Supabase via REST API
  try {
    // Generate a unique ID like "ord_169...123"
    const orderId = 'ord_' + Date.now();

    const headers = {
      'apikey': CONFIG.SUPABASE_ANON_KEY,
      'Authorization': 'Bearer ' + CONFIG.SUPABASE_ANON_KEY,
      'Content-Type': 'application/json',
      'Prefer': 'return=minimal'
    };

    // 1. Insert into 'orders' table
    const orderPayload = {
      id: orderId,
      room_number: orderData.roomNumber,
      phone: orderData.phone,
      notes: orderData.notes || '',
      status: 'new'
      // created_at is automatically handled by Supabase
    };

    console.log("Creating order in Supabase...", orderPayload);
    const orderResponse = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/orders`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(orderPayload)
    });

    if (!orderResponse.ok) {
      const err = await orderResponse.text();
      // If the column error occurs, it will be thrown here
      throw new Error(`Orders Table Insert Failed: ${err}`);
    }

    // 2. Insert into 'order_items' table (Batch Insert)
    const itemsPayload = orderData.items.map(item => ({
      order_id: orderId,
      name: item.name,
      qty: item.qty, // Using 'qty' as defined in cart.js
      price: item.price
    }));

    console.log("Inserting order items...", itemsPayload);
    const itemsResponse = await fetch(`${CONFIG.SUPABASE_URL}/rest/v1/order_items`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(itemsPayload)
    });

    if (!itemsResponse.ok) {
      const err = await itemsResponse.text();
      throw new Error(`Order Items Table Insert Failed: ${err}`);
    }

    console.log("Order successfully placed via Supabase!");
    return { success: true, orderId: orderId };

  } catch (error) {
    console.error("Order placement failed:", error);
    return { success: false, error: error.message };
  }
}
