function solution(N, stages) {
  var answer = [];
  let fail = [];
  let users = stages.length;

  stages = stages.sort();
  let arr = stages.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  for (let i = 0; i <= N + 1; i++) {
    if (arr[i] === undefined) {
      arr[i] = 0;
    }
    if (arr[i + 1] === undefined) {
      arr[i + 1] = 0;
    }
    users = users - arr[i];
    if (users > 0 && i < N) {
      fail.push([i + 1, arr[i + 1] / users]);
    } else if (users == 0 && i < N) {
      fail.push([i + 1, 0]);
    }
  }

  //정렬
  fail.sort((a, b) => {
    return b[1] - a[1];
  });
  //맵핑
  answer = fail.map((a) => {
    return a[0];
  });

  return answer;
}
