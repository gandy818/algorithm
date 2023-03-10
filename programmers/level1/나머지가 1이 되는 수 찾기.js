function solution(n) {
  var answer = 0;
  for (let i = 1000000; i >= 2; i--) {
    if (n % i === 1) {
      answer = i;
    }
  }
  return answer;
}
