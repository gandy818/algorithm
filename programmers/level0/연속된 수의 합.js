function solution(num, total) {
  var answer = [];
  let mid;

  mid = Math.floor(total / num);
  if (num % 2 === 0) {
    answer.push(mid, mid + 1);
    for (let i = 1; i < Math.floor(num / 2); i++) {
      answer.push(mid - i, mid + 1 + i);
    }
  } else {
    answer.push(mid);
    for (let i = 1; i <= Math.floor(num / 2); i++) {
      answer.push(mid - i, mid + i);
    }
  }

  return answer.sort((a, b) => a - b);
}
