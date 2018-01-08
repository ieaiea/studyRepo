## Scope란?
Scope란 말그대로 코드의 영역이라는 뜻입니다. 지역 (local), 전역 (Global)로 나눌 수 있습니다.       
Scope를 이해한다면 우리가 선언한 변수가 어디까지 참조가될 수 있고, 어디까지 살아있을 수 있는지를 조절할 수 있습니다.

### 전역변수 지역변수
```js
var global = 'global'; // 전역

function func(){
  var local = 'local'; // 지역
}
func();
```
위 코드에서  global 같이 아무것도 감싸지지않은 가장 바깥영역의 변수를 전역변수 (global)라고 부릅니다. func안에 감싸져있는 변수를 지역변수 (local)라고 부릅니다. 

만약에 전역과 지역변수의 이름이 같으면 어떻게 될까요?
```js
var value = 'global';
function func(){
	var value = 'local';
	console.log(value); // local
}
func();
console.log(value); // global
```
func 안에서 지역변수 value를 호출했죠? 이때는 자신의 영역 (local scope)안에서 해당 변수 (value)를 먼저 찾아봅니다.    
자신의 영역(local Scope)안에 value가 있죠? 그래서 자신의 value를 콘솔에 찍어준것입니다.  
Javascript에서는 기본적으로 외부영역에서 내부영역에 접근할 수 없어요. (다음에 배울 클로저를 이용하면 가능하지만요) 내부에서는 외부로의 접근이 가능합니다.       
그렇기 떄문에 밖에서 console.log(value) 실행을떄는 func안에 value는 볼 수 없기떄문에 자신의 영역 (global)의 value를 찍은것 입니다.

## 스코프체인 
내부에서 찾는다 -> (없음) -> 전역스코프까지 넓혀가면서 찾아갑니다. 이런것을 `스코프 체인`이라고 불러요.
```js
var value = 'global';
function outFunc(){
	console.log(value);// 이때의 value는 local영역의 value가 없으니 global의 value를 찾아가요
	function innerFunc(){
		console.log(value); // 이때도 마찬가지 local에 value가 없으니 global의 value를 찾아가요
		var innerValue = 'local'; // 지역 변수를 하나 선언해서 global에서 한번 불러볼게요
	}
	innerFunc();
}
outFunc();
console.log(innerValue); // innerValue is not defined 위에서 말씀드렸듯이 외부에서 내부는 바라볼 수 없어요! innerValue가 선언된 줄도 모르고있어요.
```
이제 우리는 알 수 있어요 내부에서 어떤일이 일어나더라도 외부에는 영향을 미칠 수 없어요.

그렇다면 이런경우는 어떨까요?
```js
var value = 'global';
function func(){
	value = 'local'; 
	console.log(value); // local
}
func();
console.log(value); // local
```
위의 경우 func 내부에서 선언된 value를 보면 var value가 아니라 그냥 value지요? `var가 생략된 경우 자바스크립트는 value를 전역변수로 판단 및 생성을 합니다.`  
func내부에서 value를 전역변수로 생성하려고보니 글로벌에 value가 이미 존재를 하고있습니다. 그래서 value의 값을 바꿔버린것이지요. 그래서 local이 된 것 입니다.
내부에서는 어떤일이 일어나도 외부에 영향을 미칠 수 없다고했는데 ... 이런일이 .... 이래서 전역변수를 사용하지 말아야합니다.    
여러곳에서 같은 전역변수를 사용하게되면 위와 같이 변수의 값을 맘대로 바꿔버릴 수 있어요. 전역변수를 줄이는 법은 후에 패턴들을 살펴보면서 고쳐볼게요

## Block Scope 와 Function Scope 
자바는 블로스코프를 사용하고 자바스크립트는 함수스코프를 사용합니다. 블로스코프와 함수스코프 들어보셨나요? 못들어보셨어도 괜찮아요 지금 알려드릴게요.
```js
// 자바의 경우
public static void main(String args[]){
	// 이 안쪽이 하나의 scope를 이룹니다. {} 블록 말그대로 블록안이 하나의 영역이라는 뜻입니다.
}
// 자바스크립트는 함수스코프라고 했었죠?

function func() {
    if (true) {
        var name = 'appear';
    }
    console.log(name); // appear
}
func();
// 만약 자바스크립트가 블록스코프였다면 name에 접근이 안되겠지만 함수 스코프기때문에 접근이 가능합니다. 

// 조금더 자세히 보자면

var global = ''; // 전역
function out(){
	// 하나의 스코프
	console.log(global); // global
	var valueOut = 'out';
	function inner(){
		// 또 하나의 스코프
		console.log(valueOut); // out
		 var valueInner = 'inner';
	}
	inner();
	console.log(valueInner); // not defined
}
out();
console.log(valueOut); // not defined
```
이 처럼 자바스크립트는 함수 단위로 스코프가 이뤄집니다. 또 내부에서 외부는 접근이 가능하지만 외부에선 내부 접근이 불가능한걸 볼 수 있죠.

## 렉시컬 스코프 (Lexical scope)
렉시컬 스코프란 소스코드가 작성되는 시점에 스코프가 결정되는 것을 렉시컬 스코프라고 표현합니다. 코드로 간단히 보자면
```js
var name = 'appear'; // 전역에 name이라는 변수를 하나 선언했습니다.

function print(){
  console.log(name);
}
function getName(){
	var name = 'innerName';
	print(); // appear 
}
getName();
```
위에 콘솔을 찍어주는 print() 함수를 호춣합니다.  결과는 appear이 찍힙니다.   
왜일까요? 저는 처음에 당연히 getName함수안에서 실행이되었으니 getName의 name을 찍을줄 알았습니다.  
이떄 나오는 개념이 렉시컬 스코프입니다. print라는 함수는 getName의 밖에 선언되어있습니다. 글로벌 영역이지요   
print()가 실행이된다면 자신의 로컬 영역에서 name을 한번 찾을테고 없으니까 자신이랑 가까운 글로벌 영역으로 올라가 글로벌의 name를 찍는 것 입니다.    
이처럼 소스코드가 작정되는 시점에 스코프가 정해지는 것을 렉시컬 스코프라고합니다. 
