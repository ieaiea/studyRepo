
# 함수 호이스팅 (Function Hoisting)
이번 시간에는 예상치 못한 오류를 불러올 수 있는 함수 호이스팅에 대해서 알아보겠습니다.    

## 호이스팅
호이스팅이란 무엇 일까요?
var 로 선언한 표현식나 function 선언문 등을 해당 Scope의 맨 위로 옮기는 것을 말합니다.   
자바스크립트는 코드를 실행하기 전에 var 선언문과 function 선언문을 해당 스코프의 맨위로 옮겨버립니다.
함수 호이스팅이 발생하는 원인은 자바스크립트 변수 생성과 초기화(선언과 할당)가 분리되어 진행되기 때문입니다.

표현들이 너무 어렵죠 ...? 코드로 보이시면 금방 이해할 수 있으실거에요 

```js
// sum이라는 함수를 실행해서 1+3값을 result 에 넣어주려고합니다.
// 하지만 실행해보시면 sum is not a function 이라는 에러가 발생합니다..
// 왤까요??.. sum 이라는 함수는 분명 아래 존재하는데 말이죠..??
// 어떻게 된일인지 살펴봅시다.
var result = sum(1,3); 

var sum = function(num1, num2){
   return console.log(num1+num2);
}
```
위에 코드를 실행하면 어떤일이 벌어지냐면요 ~
```js
// var 로 선언되어있는 녀석들이 맨위로 끌어올려집니다. 이때는 변수만 선언될뿐 초기화는 진행되지않아요
var result = undefined; 
var sum = undefined; 

result = sum(1,3);  // 후에 이렇게 위에 선언된 변수들에 초기화가 이루어집니다.

sum = function(num1, num2){ // 마찬가지입니다.
   return console.log(num1+num2);
}
```
몇가지 예를 더들어보자면
```js
// 어떤게 찍힐거같으신가요 ? 당연히 appear 이겠죠
console.log(name);  // 하지만 예상과 다르게 값은 undefined 입니다...
var name = 'appear';
var age = 25;

// 코드를 실행하면 undefined로 미리 변수가 생성되고
var name = undefined;
var age = undefined;

name = 'appear'; // 후에 초기화가 이뤄지기 떄문이에요
age = 25
```
하지만 함수 선언식을 사용한다면
```js
var result = sum(1,3); // 놀랍게도 이때는 실행이됩니다! 

function sum(num1, num2){ // var sum 같은 표현식이아닌 함수 선언식으로 되어있기떄문에 함수가 그대로 끌어올려집니다.
   return console.log(num1+num2);
}
```
위에가 가능한이유는 변수호이스팅과 함수호이스팅이 다르기 때문입니다.   
변수 호이스팅의경우 undefiend로 변수생성이되지만 함수는 그대로 맨위로 올라오기 떄문입니다.

## 주의사항 
변수와 함수명이같을때 변수에 값이 초기화되어있다면 변수가 함수를 덮어씌웁니다.
```js
var getName = 'appear';

function getName(){
  console.log('appear');
}

console.log(typeof getName); // string
```
반대로 변수값이 undefiend 로 선언되어있을경우 변수를 함수가 덮습니다.
```js
var getName; // undefined
function getName() {
     console.log("appear");
}
console.log(typeof getName); // function
```
위에 두가지 주의해서 사용해주세요

> 문제 다음 코드의 결과값을 생각해보세요

```js
console.log(name); // (1)
var name = 'appear';

var getName = function(){
  console.log(newName); // (2)
  var newName = 'newAppear';
  walk(); // (3)
  function walk(){
    console.log(newName + '이 걷습니다'); 
  }
};
console.log(name); (4)
```

## 결론 
함수나 변수를 사용하기전에는 항상 미리 선언을 해두고 사용하시는 버릇을 들이는게 가독성에도 디버깅에도 좋습니다.   
