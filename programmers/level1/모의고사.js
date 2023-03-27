function solution(answers) {
  var answer = [];
  let x = [1, 2, 3, 4, 5];
  let y = [2, 1, 2, 3, 2, 4, 2, 5];
  let z = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let arr = [
    { name: 1, score: 0 },
    { name: 2, score: 0 },
    { name: 3, score: 0 },
  ];
  let div = 1;
  for (let i = 0; i < answers.length; i++) {
    if (x[i] === undefined) {
      div = Math.floor(i / 5);
      let temp = i - 5 * div;
      if (x[temp] === answers[i]) {
        arr[0].score++;
      }
    }
    if (x[i] === answers[i]) {
      arr[0].score++;
    }

    if (y[i] === undefined) {
      div = Math.floor(i / 8);
      let temp = i - 8 * div;
      if (y[temp] === answers[i]) {
        arr[1].score++;
      }
    }
    if (y[i] === answers[i]) {
      arr[1].score++;
    }

    if (z[i] === undefined) {
      div = Math.floor(i / 10);
      let temp = i - 10 * div;
      if (z[temp] === answers[i]) {
        arr[2].score++;
      }
    }
    if (z[i] === answers[i]) {
      arr[2].score++;
    }
  }
  arr.sort((a, b) => {
    return b.score - a.score;
  });
  answer = [arr[0].name];
  if (arr[0].score === arr[1].score) {
    answer = [arr[0].name, arr[1].name];
  }
  if (arr[0].score === arr[1].score && arr[1].score === arr[2].score) {
    answer = [arr[0].name, arr[1].name, arr[2].name];
  }
  return answer;
}
