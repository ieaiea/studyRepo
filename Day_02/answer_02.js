
/* 예제2)
 라이언은 1~30 사이의 숫자중 짝수들의 숫자만 더하는 프로그램을 만들고싶다.
 1 ~ 30 사이의 수들중 짝수만 골라내어 합산하는 프로그램을 만들어보자.
*/
var result = 0;

for (var i = 0; i <= 100; i++) {
  if (i % 2 != 0) continue; // %는 나머지 연산자 입니다.
  console.log('짝수 :', i);
  result += i; // result = result + i;
}

console.log('총합', result);