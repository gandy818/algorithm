function solution(s) {
  var answer = 0;
  let init = s.split("")[0];
  if (init === "-" || parseInt(init) !== NaN) {
    answer = s / 1;
  } else if (init === "+") {
    answer = s.substr(1, s.length);
  }
  return answer;
}
