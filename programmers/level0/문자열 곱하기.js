// 다음번엔 repeat() 함수 사용하기 : my_string.repeat(k)
function solution(my_string, k) {
  var answer = "";
  for (let i = 0; i < k; i++) {
    answer += my_string;
  }
  return answer;
}
