let mark = 12;
let s = "";
// if (mark === 12) {
//   s = "OK";
// } else if (mark > 7 && mark < 12) {
//   s = "Good";
// } else {
//   s = "Not OK";
// }

// s = mark === 12 ? "OK" : "Not OK";
s = mark === 12 ? "OK" : mark > 7 && mark < 12 ? "Good" : "Not OK";
alert(s);
