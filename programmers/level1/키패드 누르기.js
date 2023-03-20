function solution(numbers, hand) {
  var answer = "";
  let thumbL = 10;
  let thumbR = 12;
  let numberArr = numbers.map((x) => {
    if (x === 0) {
      return 11;
    }
    return x;
  });
  let arr = [];

  //현재 엄지위치, 누를 손
  for (let i = 0; i < numberArr.length; i++) {
    //1, 4, 7
    if (numberArr[i] === 1 || numberArr[i] === 4 || numberArr[i] === 7) {
      arr.push({
        thumbL: thumbL,
        thumbR: thumbR,
        number: numberArr[i],
        result: "L",
      });
      thumbL = numberArr[i];
    }
    //3, 6, 9
    else if (numberArr[i] === 3 || numberArr[i] === 6 || numberArr[i] === 9) {
      arr.push({
        thumbL: thumbL,
        thumbR: thumbR,
        number: numberArr[i],
        result: "R",
      });
      thumbR = numberArr[i];
    }
    //2, 5, 8, 10
    else {
      let tempThumbL = thumbL;
      let tempThumbR = thumbR;
      let spaceL = 0;
      let spaceR = 0;

      //1,4,7,10 이면 + 1
      if (thumbL === 1 || thumbL === 4 || thumbL === 7 || thumbL === 10) {
        //현재 손이 가운데 키패드로 오도록 +1
        tempThumbL += 1;
        spaceL = 1;

        //눌러야하는 값과 일치하면 거리 = 1
        if (tempThumbL === numberArr[i]) spaceL = 1;
      }

      //3,6,9, 12 이면 -1
      if (thumbR === 3 || thumbR === 6 || thumbR === 9 || thumbR === 12) {
        //현재 손이 가운데 키패드로 오도록 -1
        tempThumbR -= 1;
        spaceR = 1;

        //눌러야하는 값과 일치하면 거리 = 1
        if (tempThumbR === numberArr[i]) spaceR = 1;
      }

      //이전 왼손 엄지손가락 위치
      if (
        tempThumbL === 2 ||
        tempThumbL === 5 ||
        tempThumbL === 8 ||
        tempThumbL === 11
      ) {
        if (Math.abs(tempThumbL - numberArr[i]) % 3 === 0) {
          spaceL += Math.abs(tempThumbL - numberArr[i]) / 3;
        }
      }
      //이전 오른손 엄지 손가락 위치
      if (
        tempThumbR === 2 ||
        tempThumbR === 5 ||
        tempThumbR === 8 ||
        tempThumbR === 11
      ) {
        if (Math.abs(tempThumbR - numberArr[i]) % 3 === 0) {
          spaceR += Math.abs(tempThumbR - numberArr[i]) / 3;
        }
      }

      //오른쪽이 작으면 오른쪽으로 누른다
      if (spaceL > spaceR) {
        arr.push({
          thumbL: thumbL,
          thumbR: thumbR,
          number: numberArr[i],
          result: "R",
        });
        thumbR = numberArr[i];
      }
      //왼쪽이 더 작으면 왼쪽으로 누른다
      else if (spaceL < spaceR) {
        arr.push({
          thumbL: thumbL,
          thumbR: thumbR,
          number: numberArr[i],
          result: "L",
        });
        thumbL = numberArr[i];
      }
      //같으면
      else if (spaceL == spaceR) {
        //왼손잡이이면
        if (hand === "left") {
          arr.push({
            thumbL: thumbL,
            thumbR: thumbR,
            number: numberArr[i],
            result: "L",
          });
          thumbL = numberArr[i];
        }
        //오른손잡이이면
        else if (hand === "right") {
          arr.push({
            thumbL: thumbL,
            thumbR: thumbR,
            number: numberArr[i],
            result: "R",
          });
          thumbR = numberArr[i];
        }
      }
    }
    answer += arr[i].result;
  }

  return answer;
}
