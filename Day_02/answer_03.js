/* 예제3) 아래 모양으로 *을 찍어보세요

*
**
***
****

*/


// 방법 1
var result = ''; // * 누적을 위한 변수
for(var i = 0; i < 5; i += 1){
  for(var j = i; j >= 0; j -=1 ){ // *을 해당 카운트번수만큼 돌게끔 만들어줍니다.
    result += '*'; // 카운트만큼 * 누적
  }
  result += '\n'; // \n은 한줄 바꾸기 br같은 역할을 해줍니다.
}
console.log(result);

// 방법 2
var result = '';

for(var i = 0; i < 5; i += 1){
  console.log('*'.repeat(i));  // 스트링.repeat(숫자) => 스트링을 숫자만큼 반복해준다.
}