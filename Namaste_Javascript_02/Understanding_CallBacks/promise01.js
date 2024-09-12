const cart = ["shirt", "pant"];

// createOrder
function createOrder(cart) {
  // some db ops
  console.log("Creating order...");

  return new Promise(function (resolve, reject) {
    let orderId;
    setTimeout(function () {
      if (cart.length) {
        orderId = "12345";
        console.log("OrderId created");
        resolve(orderId);
      }
      else {
        reject("Unable to generate OrderId");
      }
    }, 3000);
  });
}

// processPayment
function processPayment(orderId) {
  console.log("Processing payment..");

  return new Promise(function (resolve, reject) {
    let paymentStatus;
    if (orderId) {
      setTimeout(function () {
        paymentStatus = true;
        console.log("Payment successful!");
        resolve(paymentStatus);
      }, 3000);
    } else {
      paymentStatus = false;
      console.log("Payment failure!");
      reject(paymentStatus);
    }
  });
}
// orderSummary
function orderSummary(paymentStatus) {
  return new Promise(function (resolve, reject) {
    if (paymentStatus) {
      resolve("Order summary: [...items...]");
    } else {
      reject("Order summary: Fail");
    }
  });
}

createOrder(cart)
  .then(function (orderId) {
    return processPayment(orderId);
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (paymentStatus) {
    return orderSummary(paymentStatus);
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (summary) {
    console.log(summary);
  });
