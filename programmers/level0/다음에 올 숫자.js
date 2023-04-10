function solution(common) {
  var answer = 0;
  for (let i = 0; i < common.length; i++) {
    if (common[1] - common[0] === common[2] - common[1]) {
      let arith = common[1] - common[0];
      answer = common[common.length - 1] + arith;
    } else {
      let arith = common[1] / common[0];
      answer = common[common.length - 1] * arith;
    }
  }
  return answer;
}
