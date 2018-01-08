
# This
오늘은 This에 대해서 알아보려고합니다. This 자주보셨죠? 
```js
var person = {
  name : 'appear',
  getName : function(){
    console.log(this.name); // 여기서도 this가 등장하고
  }
};
var Person = function(name){
  this.name = name; // 이때도 this가 등장하지요?
};
```

```js
var person = (function(){
	console.log(this); // window요 ...? 
})();
```

처음에 공부할때 this 때문에 정말 고생했어요.. 이때 this 다르고 저때 this 다르고... 호출 패턴에따라서 this가 다달라지더라구요...   

하나하나 천천히 같이봐봐요!

자바스크립트는 함수가 호출될때 실행컨텍스트가 생기고 **arguments**와**this**가 생성된다는것은 지난 시간에 공부했던거 기억나시나요!?   
혹시 안나신다면 복습겸 다시한번 둘러보고 와주세요!!    

보고오셨다고 생각하고 진행할게요! this가 생성이되는데 이때 this는 함수 호출패턴에 따라 this가 참조하는 값이 달라집니다.   
호출패턴에는 4종류가 있습니다.

- 함수 호출 패턴
- 메소드 호출 패턴
- 생성자 호출 패턴
- apply, call, bind 패턴

## 함수 호출패턴
먼저 함수 호출패턴부터 살펴볼게요. 함수 호출패턴에서 기본적으로 전역함수 내부함수 모두 this는 window(전역객체)를 가리킵니다.   
```js
var outter = function(){
	console.log('outter', this)
	var inner = function(){
		console.log('inner', this);
	};
	inner();
};
outter();
```
![this](/1기%20JS%20스터디/public/this2.png)
CallBack 함수도 마찬가지입니다.
```js
setTimeout(function(){
	console.log(this); // window
}, 100);
```
이때 this를 window가 아닌 다른 것으로 변경하고 싶다면 뒤에 배울 apply, call, bind를 쓰는방법이 있습니다.

위에서 함수 호출패턴에서 기본적으로 전역함수 내부함수 모두 this는 window(전역객체)를 가리킨다고 말씀을 드렸는데 예외 상황이 있습니다.   
바로 **Strict 모드** "엄격한" 모드라고도 부르죠  **Strict 모드** 일때는 보통의 함수 호출패턴의 this와는 다릅니다.  

```js
'use strict' // Strict 모드를 사용하겠다고 선언했습니다.

function func(){
  console.log(this); // undefined
}
func();
```

당연히 this = window일줄 알았는데 undefined가 찍히는거 보이시나요?     
**Strict 모드**의 함수 호출패턴의 this는 undefined 라는거 알아주세요 !!

## 메소드 호출 패턴 
호출된 함수가 객체의 프로퍼티이면 메소드 호출 패턴으로 호출됩니다!     
메소드 내부의 this는 해당 메소드를 소유한 객체 즉 해당 메소드를 호출한 객체에 바인딩됩니다.
```js
var person = {
  name : 'appear',
  getName : function(){
    console.log(this); // person
    console.log(this.name); // appear
  }
};
person.getName();
```
![this](/1기%20JS%20스터디/public/this3.png)
그런데 메서드안에 함수가 존재한다면 그때의 this는 무엇일까요?
```js
var person = {
  name : 'appear',
  getName : function(){
    console.log(this);
    console.log(this.name); 
	function inner(){
		console.log(this); // window
	}
	inner(); // 메서드 내부함수 실행
  }
};
person.getName();
```
이떄는 함수 호출패턴과 마찬가지로 this는 전역객체인 window를 가리킵니다. 

## 생성자 호출 패턴
```js
var Person = function(name){
    this.name = name;  // this는 자신 즉, Person을 가리킨다.
  };
Person.prototype.getName = function(){
  console.log(this.name); // Person.prototype 이기때문에 프로토타입 내에서도 this는 자기자신 Person을 가리킵니다.
};
console.dir(Person);
```
그러면 프로토타입 안에서의 함수 호출의 this는 무엇일까요?
```js
var Person = function(name){
    this.name = name;  // this는 자신 즉, Person을 가리킨다.
  };
Person.prototype.getName = function(){
  console.log(this.name); // Person.prototype 이기때문에 프로토타입 내에서도 this는 자기자신 Person을 가리킵니다.
  function inner(){
    console.log(this); // window가 찍힙니다! 이제 눈에 보이시죠?!
  }
  inner();
};
console.dir(Person);
var p = new Person('appear');
p.getName();
```