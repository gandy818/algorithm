function solution(babbling) {
  var answer = 0;
  const canSay = ["aya", "ye", "woo", "ma"];

  for (let i = 0; i < canSay.length; i++) {
    for (let j = 0; j < babbling.length; j++) {
      while (babbling[j].includes(canSay[i])) {
        babbling[j] = babbling[j].replace(canSay[i], " ");
      }
    }
  }

  for (let i = 0; i < babbling.length; i++) {
    if (babbling[i].trim().length === 0) {
      answer++;
    }
  }

  return answer;
}
