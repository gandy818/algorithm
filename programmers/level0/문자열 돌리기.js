const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
  }
});

// for in 구문 활용하면 좀 더 best
// for(let i of str){
//  console.log(i)
// }
