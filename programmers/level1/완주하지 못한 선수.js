function solution(participant, completion) {
  var answer = "";
  let newPart = participant.sort();
  let newComp = completion.sort();

  for (let i = 0; i < newPart.length; i++) {
    if (newPart[i] !== newComp[i]) {
      return newPart[i];
    }
  }
  answer = newPart[i];
  return answer;
}
