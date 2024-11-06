// //Task 1
function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}
delay(2000).then(() => {
  console.log("hello");
});

// //Task2;
function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 100) + 1;
      resolve(random);
    }, 2000);
  });
}

fetchdata()
  .then((number) => {
    console.log(number);
  })
  .catch((error) => {
    console.error(error);
  });

//Task3
function processData(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}
processData(40).then((number) => {
  console.log(number);
});

// //task4
function fetchdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const random = Math.floor(Math.random() * 100) + 1;
      resolve(random);
    }, 2000);
  });
}
function processData(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * 2);
    }, 2000);
  });
}
fetchdata()
  .then((number) => processData(number))
  .then((processData) => {
    console.log("Processed data is " + processData);
  });
