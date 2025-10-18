//
//
//
//

let ice_cream = new Promise((resolve, reject) => {
  let got_ice_cream = true;
  setTimeout(() => {
    if (got_ice_cream) {
      resolve(got_ice_cream);
    } else {
      reject(got_ice_cream);
    }
  }, 3000);
});
ice_cream
  .then(() => {
    console.log("eat ice cream");
  })
  .catch(() => {
    console.log("call mom");
  });
