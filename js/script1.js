// camelzize(str, callback) переводить border-left-width до borderLeftWidth


// -------------------------

// function camelzize(str, callback) {
//   return str
//     .split("-")
//     .map((item, index) => {
//       if (index === 0) {
//         return item;
//       } else {
//         return callback(item);
//       }
//     })
//     .join("");
// }

function camelzize(str, callback) {
  return str
    .split("-")
    .map((item, index) => (index === 0 ? item : callback(item)))
    .join("");
}

function bigLetter(item) {
  return item[0].toUpperCase() + item.slice(1);
}

console.log(camelzize("border-left-width", bigLetter));
