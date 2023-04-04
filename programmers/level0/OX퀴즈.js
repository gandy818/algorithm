function solution(quiz) {
  var answer = [];

  for (item of quiz) {
    if (eval(item.replace("=", "==="))) {
      answer.push("O");
    } else {
      answer.push("X");
    }
  }

  return answer;
}
