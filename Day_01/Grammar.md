# 기본문법
자바스크립트 언어를 다루기위한 가장 기초적인 문법을 공부해보겠습니다.
  
## 자료형 
### 기본자료형
혹시 자바스크립트의 기본 자료형이 무엇무엇이 있는줄 아십니까? 라고 질문을 던졌을때 생각보다 많은 분들이 바로바로 대답을 못해주셨습니다.
아시는분들은 한번 정리할겸 새로 배우시는분들은 알고 넘어가야되는 부분입니다!   
  
오브젝트를 제외한 변경 불가능한값 (immutable value)
* Boolean : true 와 false 의 두 가지 값을 가질 수 있다.
* Null : Null 타입은 딱 한 가지 값, null 을 가질 수 있다.
* Undefined : 값을 `할당`하지 않은 변수는 undefined 값을 가진다.
* Number
* String
* Symbol (ECMAScript 6에 추가) : Symbol은 유일하고 변경 불가능한 (immutable) 기본값 (primitive value) 이다

typeof를 이용하면 값의 타입을 알 수 있습니다. 아직은 new라든지 valueOf같은 함수는 모르셔도됩니다. 결과값만 봐주세요  

> 테스트는 크롬 개발자도구를 이용하시거나 [JS Fiddle](https://jsfiddle.net), 또는 사용하고계시는 IDE를 이용해주셔도됩니다 ㅎㅎ
```js  
typeof true; //"boolean"
typeof Boolean(true); //"boolean"
typeof new Boolean(true); //"object"
typeof (new Boolean(true)).valueOf(); //"boolean"
 
typeof "appear"; //"string"
typeof String("appear"); //"string"
typeof new String("appear"); //"object"
typeof (new String("appear")).valueOf(); //"string"
 
typeof 123; //"number"
typeof Number(123); //"number"
typeof new Number(123); //"object"
typeof (new Number(123)).valueOf(); //"number"
```
### Object (객체형, 참조형)
* 기본본자료형(Primitives)을 제외한 나머지 값들(배열, 함수, 정규표현식 등)은 모두 객체입니다.
* 함수, 배열, 날짜, 정규식 등..

### 자바스크립트의 타입
보통의 언어들과는 다르게 자바스크립트는 변수의 타입을 미리 선언할 필요가 없습니다. 타입은 프로그램이 처리되는 과정에서 자동으로 파악될 것입니다. 이를 느슨한 데이터 타입(loosley data type)라고 칭합니다.   
선언을 해줄떄는 편하지만 타입이 선언되지않다보니 사용시에 타입체크를 해줘야하는 불편함이 있을 수 있습니다. 이를 보완한것이 [타입스크립트](https://hyunseob.github.io/2016/09/25/typescript-introduction/) 입니다.
```js
var foo = 25;    // foo 는 이제 Number 
var foo = "apepar"; // foo 는 이제 String 
var foo = true;  // foo 는 이제 Boolean 

// ex) Java는 변수 선언시 타입을 정해줘야합니다.
public string name = "appear";
private int age = 25;
```
### 변수 
프로그래밍을 접하면 가장 먼저 만나는 단어가 변수라는 단어일텐데요 변수가 무엇을 뜻할까요?

> 변수란   
> 나중에 쓰기위해 값을 담아놓는 공간, 메모리상의 주소를 의미합니다. 조금더 사용하기 쉽게 var name = appear 같은 name(식별자)를 사용합니다. 

* 변수에 값을 대입하는것을 초기화라고 부릅니다.
* 낙타 표기법이라 불리는 camelCase를 사용합니다. ex)firstName 같이 첫번째단어는 소문자 다음단어부터는 첫글자를 대문자로 사용합니다.
```js
var String = ''; // 문자열
var Number = 0; // 숫자
var Bool = false; // 불린
var Null = null; // 널
var Undefined = undefined; // 언디파인드
var Array = []; // 배열
var Obj = {}; // 객체
var Func = function() {}; // 함수
```

# 연산자
자바스크립트 연산자에는 여러 종류가있는데요 자주쓰이는 것들을 우선적으로 보겠습니다.   

> console.log()안에 내용은 개발자 도구에서 확인해볼 수 있도록 도와주는 디버깅용 함수입니다.  

#### 사칙연산 + - * / %
```js
console.log(5 + 2);
console.log(45 - 4);
console.log(5 * 3);
console.log(12 / 3);
console.log(12 % 3);
```
또는 변수를 이용해도 됩니다. 위에서 설명드렸듯이 값을 담아놓는 공간으로 이용합니다 var num = 5 -> = 은 `대입연산자`입니다.
```js
var num = 5;
var num2 = 15;

console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2);
```
+=, -=, *=, /= 을 이용한 연산 
```js
var num = 0; 
// num에 기존값에 새로운 값을 연산해주고싶을때  
num = num + 5; // 적용전
num += 5; // 이런식으로 줄여줄 수 있어요
```
더하기 연산자는 문자열을 합칠수도 있어요 
```js
console.log('안녕' + '하세요');
```

#### 비교연산자    
비교연산자는 == (Equal Operator) 느슨한비교연산자와 === 엄격한(Strict Equal Operator)이 존재합니다.    
자바스크립트에서는 될 수 있으면 === 을 써야합니다. 이유를 알려드릴게요
```js
var str = '5';
var num = 5;

console.log(str == num); // 결과값이 어떻게 떨어질까요 ? 저는 처음에 당연히 false 인줄 알았는데요 이상하게도 결과값은 true 로 떨어집니다.
```
위에 경우 '5'와 5가 들어왔을때 자바스크립트는 영리하게도 ...? 같은 5라는 데이터로 인식을 한다고합니다. 그렇기때문에 예상치도 못한 결과를 가져올 수 가 있어요.
`===` 의 경우 값의 타입/형식을 체크해줘서 비교하기때문에 정화한 결과를 가져올 수 있습니다.
```js
console.log(str === num); //false
```
= 대입 == 느슨한체크 === 엄격한체크 기억해주세요 ~

- 크기 비교 연산자 
<, > (크다작다), <= , >= (작거나 같고, 크거나 같다)는 알고계시지요?! 넘어가겠습니다 ㅎㅎ 

#### AND OR 연산자  
&&(and) or ||(or) 연산자가 저는 처음에 너무 헛갈렸습니다.. &&은 모두참, ||은 하나라도 참이면 성립입니다.
```js
var bool = true;
var bool2 = false;
if(bool){ console.log('if문은 아직 신경쓰지마세요 true라는 값을 봐주세요 !') } // 실행됨 console.log()의 값이 찍힘
if(bool2){ console.log('if문은 아직 신경쓰지마세요 true라는 값을 봐주세요 !') } // 실행안됨
// 이렇게 연속해서도 사용할 수 있어요 이때 &&와 || 가 등장합니다. && 연산이기때문에 모두가 참이어야하는데 bool2가 거짓이니 실행되지않습니다. 
if(bool && bool2){ console.log('if문은 아직 신경쓰지마세요 bool 값을 봐주세요 !') } 
// 이렇게 연속해서도 사용할 수 있어요 이때 &&와 || 가 등장합니다. || 연산이기때문에 하나라도 참이라면 실행이됩니다.  
if(bool || bool2){ console.log('if문은 아직 신경쓰지마세요 bool 값을 봐주세요 !') } 
```

#### 증감연산자 
-— 와 ++ 보신적 있으신가요?
```js
var num = 10;

// 복잡한 로직(과정)이 있다고 가정하겠습니다.
// 상황 1 : —num (연산전 num을 1감소 시키고 시작하겠다는 의미입나다) => 로직실행(이때의 num은 9이겠죠?);
// 상황 2 : num— (연산후에 num을 1감소 시키겠다는 의미입나다) => 로직실행(이때의 num은 10이겠죠) => 이후에 num 1감소
// ++num , num++ 도 마찬가지입니다.
```

#### !와 !! 
!는 ture, false를 반대로 !!는 값들(배열, 객체또는 String, Number 등등..)을 boolean값으로 변경해줘요
```js
var check = true;
console.log(!check); // false
var string = 'appear';
console.log(!!string); // true 아래에서도 설명드리겠지만 빈문자열 "" 은 false로 판별됩니다.
```

### Truthy과 Falsy values
기본적인 true, false 말고 Boolean에서 false로 판단되는 경우가 몇가지 더 있습니다. 중요한개념입니다!!

- undefined
- null
- 0
- NaN (Not a Number)
- "" (빈문자열)

