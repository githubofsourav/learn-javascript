// *****WITHOUT CALLBACKS*****

function createOrder(cart) {
  // Simulating a DB operation that is time-consuming
  const orderId = "12345";
  console.log("Order created with ID:", orderId);
  return orderId;
}

function processPayment(orderId) {
  if (orderId) {
    console.log("Payment processed for Order ID:", orderId);
  }
}

const cart = ["shoe", "shirt"];
const orderId = createOrder(cart); // Block until order is created
processPayment(orderId); // Proceed to payment after order is created

// *****WITH CALLBACKS*****
function createOrder2(cart, callback) {
    console.log("Creating order...");
  
    // Simulating async operation with setTimeout (as if a DB operation happens)
    setTimeout(() => {
      const orderId = "12345";
      console.log("Order created with ID:", orderId);
      
      // Once the order is created, we call the callback to handle the next step (payment)
      callback(orderId);
    }, 2000); // Simulates a 2-second delay
  }
  
  function processPayment2(orderId) {
    console.log("Processing payment for Order ID:", orderId);
  }
  
  const cart2 = ["shoe", "shirt"];
  
  // Using a callback to handle what happens after order creation
  createOrder2(cart, function(orderId) {
    processPayment2(orderId);  // This only runs after the order is created
  });
  
  