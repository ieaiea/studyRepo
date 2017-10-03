/*
 라이언은 카카오중학교 학생이다. 라이언은 국어 78점을 맞았다. 라이언의 등급을 출력하시오 (80이상 A, 70이상 B, 69이상 C)
*/
var resultCase = Math.floor(88 / 10); // floor은 반내림입니다. 98 => 9 이렇게 바꿀수있게

switch (resultCase) {
  case 8:
    console.log('A학점 입니다.');
    break;
  case 7:
    console.log('B학점 입니다.');
    break;
  case 6:
    console.log('C학점 입니다.');
    break;
  default:
    console.log('D학점 입니다.');
}
