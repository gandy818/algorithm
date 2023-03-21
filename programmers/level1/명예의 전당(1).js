function solution(k, score) {
  var answer = [];
  let tempArr = [];
  for (let i = 0; i < score.length; i++) {
    tempArr.push(score[i]);
    tempArr.sort((a, b) => b - a);
    if (i < k) {
      answer.push(tempArr[tempArr.length - 1]);
    } else {
      answer.push(tempArr[k - 1]);
    }
  }
  return answer;
}
