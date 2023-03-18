function solution(x) {
  var answer = true;
  let copy = x;
  let y = 0;

  while (copy > 0) {
    y += copy % 10;
    copy = Math.floor(copy / 10);
  }
  if (x % y !== 0) return false;
  return answer;
}
