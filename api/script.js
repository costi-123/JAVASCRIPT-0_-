// let promise_1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("this is a message in timeout");
//     resolve();
//   }, 1000);
// });

// promise_1.then(function () {
//   console.log("this is resolved");
// });

// let promise_2 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("this is before the resolve");
//     let error = false;
//     if (error == false) {
//       resolve();
//     } else {
//       reject();
//     }
//   }, 1000);
// });

// promise_2
//   .then(function () {
//     console.log("no error :-) ");
//   })
//   .catch(function () {
//     console.log("there is an error -_-");
//   });

let promise_3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = false;

    if (!error) {
      resolve({ username: "vardhan", email: "costiyadav@gmail.com" });
    } else {
      reject();
    }
  }, 1000);
});

promise_3
  .then(function (user) {
    return user.email;
  })
  .then((email) => {
    console.log(email);
  });
