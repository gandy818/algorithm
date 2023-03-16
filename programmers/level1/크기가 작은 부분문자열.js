function solution(t, p) {
  var answer = 0;
  for (let i = 0; i < t.length; i++) {
    let parts = t.substring(i, i + p.length);
    if (parts.length === p.length) {
      if (parts <= p) {
        answer++;
      }
    }
  }
  return answer;
}
