const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  for (let i = 0; i < str.length; i++) {
    if (65 <= str.charCodeAt(i) && str.charCodeAt(i) <= 90) {
      answer.push(str[i].toLowerCase());
    } else answer.push(str[i].toUpperCase());
  }
  console.log(answer.join(""));
});
