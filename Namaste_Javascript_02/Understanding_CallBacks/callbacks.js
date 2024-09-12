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
const orderId1 = createOrder(cart); // Block until order is created
processPayment(orderId); // Proceed to payment after order is created

// *****WITH CALLBACKS*****

// createOrder
function createOrder2(cart, doPayment) {
  // some db ops
  console.log("Creating order...");

  let orderId;
  // Simulating async operation with setTimeout (as if a DB operation happens)
  setTimeout(function () {
    if (cart.length) orderId = "12345";
    console.log("OrderId created");
    // Once the order is created, we call the callback to handle the next step (payment)
    doPayment(orderId);
  }, 3000);
  return orderId;
}

// processPayment
function processPayment2(orderId, getOrderSummary) {
  console.log("Processing payment..");
  let paymentStatus;
  if (orderId) {
    setTimeout(function () {
      paymentStatus = true;
      console.log("Payment successful!");
      getOrderSummary(paymentStatus);
    }, 3000);
  } else {
    paymentStatus = false;
    console.log("failed to process payment");
  }
  return paymentStatus;
}
// orderSummary
function orderSummary2(paymentStatus) {
  if (paymentStatus) {
    console.log("Order summary: ", cart);
  } else {
    console.log("Order summary: Fail");
  }
}

// Using a callback to handle what happens after order creation
const orderId2 = createOrder2(cart, function (orderId) {
  processPayment2(orderId, function (paymentStatus) {
    // This only runs after the order is created
    orderSummary2(paymentStatus);
  });
});
