// task 1
for (let i = 0; i < 10; i++) {
  let star = "";
  for (let b = 0; b < i; b++) {
    star += "*";
  }
  console.log(star);
  document.getElementById("demo").innerHTML = star;
}
//  task 2
let line = 5;
for (let c = 0; c < line; c++) {
  let number = "";
  for (let d = 0; d < line; d++) {
    number += d;
  }
  console.log(number);
  document.getElementById("task2").innerHTML = number;
}
