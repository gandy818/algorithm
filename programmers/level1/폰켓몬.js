function solution(nums) {
  var answer = 0;
  const set = new Set(nums);
  const nonDupArr = [...set];

  nonDupArr.length < nums.length / 2
    ? (answer = nonDupArr.length)
    : (answer = nums.length / 2);

  return answer;
}
