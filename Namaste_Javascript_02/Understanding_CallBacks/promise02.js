const p1 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve("P1 Success");
    // }, 3000);
    setTimeout(() => {
      reject("P1 Failure");
    }, 3000);
  });
  
  const p2 = new Promise((resolve, reject) => {
    // setTimeout(() => { resolve("P2 Success"); }, 1000);
    setTimeout(() => {
      reject("P2 Failure");
    }, 1000);
  });
  
  const p3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //   resolve("P3 Success");
    // }, 4000);
    setTimeout(() => {
      reject("P3 Failure");
    }, 4000);
  });
  
  // Promise.all([p1, p2, p3])
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // Promise.allSettled([p1, p2, p3])
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  // Promise.race([p1, p2, p3])
  //   .then((res) => {
  //     console.log(res);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   });
  Promise.any([p1, p2, p3])
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
      console.log(err.errors);
      
    });
  