function solution(X, Y) {
  var answer = "";
  let arr = [];
  let listX = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let listY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < X.length; i++) {
    let idx = X.substr(i, 1);
    listX[idx]++;
  }

  for (let i = 0; i < Y.length; i++) {
    let idx = Y.substr(i, 1);
    listY[idx]++;
  }

  for (let i = 0; i < 10; i++) {
    let min = Math.min(listX[i], listY[i]);
    for (let j = 0; j < min; j++) {
      arr.push(i);
    }
  }

  console.log(listX);
  console.log(listY);
  console.log(arr);
  arr.sort((a, b) => b - a);
  let joinList = arr.join("");

  if (joinList.length === 0) {
    answer = "-1";
  } else if (joinList[0] === "0") {
    answer = "0";
  } else answer = joinList;

  return answer;
}
