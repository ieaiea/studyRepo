
# 프로토타입 
이번 포스트에서는 정말 중요한 프로토타입에 대해서 알아보려구합니다.   
혹시 콘솔창에서 사진에 보이는 `_proto_` 라는 것 보신적있으신가요?
```js
var person = {
	name : 'appear',
	age : 25
}
console.dir(person);
```

![프로토타입](/1기%20JS%20스터디/public/proto.png)

사진의 `_proto_`라는 것이 person의 프로토타입 객체입니다.   

그럼 프로토타입 객체는 무엇일까요?? 
자바스크립트의 객체는 부모 역할을 담당하는 객체와 연결되어있습니다. 상속 개념과 같이 부모 객체의 프로퍼티 또는 메소드를 상속받아 사용할 수 있습니다. 
이런 부모 객체를 Prototype(프로토타입) 객체 또는 줄여서 Prototype(프로토타입)이라 부릅니다.

ECMAScript spec에서는 자바스크립트의 객체는 자신의 프로토타입(부모로부터 물려받은)을 가리키는 [[Prototype]]이라는 숨겨진 프로퍼티를 가진다 라고 되어있습니다.
크롬 파이어폭스에서는 [[Prototype]]를 `_proto_`로 구현되어있어요 [[Prototype]]와 `_proto_`는 같은 개념이에요 
그럼 부모와 연결되어있는 것은 **_proto_** 인걸 우린 알았습니다. 
```js
var person = {
	name : 'appear',
	age : 25
}
console.log(person.__proto__ === Object.prototype); // true
```
person은 Object이니 당연히 **person.__proto__ === Object.prototype**은 같겠죠??


## [[Prototype]]와 prototype
[[Prototype]]는 부모로와 연결된 프로토타입이라는건 아셨죠?!   
그런데 끝이 아니에요! 함수의 경우 두개의 프로토타입 영역을 가지고있습니다.     
함수도 객체이기 때문에 부모와 연결된 프로토타입을 가지고 있겠죠? 또 자신의 프로토타입 2가지 영역을 가지고 있습니다.   

![프로토타입](/1기%20JS%20스터디/public/proto2.png) 

늘 그렇듯이 말보단 코드로 한번 살펴볼까요? 혹시 전에 배웠던 생성자 함수 기억나시나요?    

```js
function Person(name, age){
  this.name = name;
  this.age = age;
}
console.dir(Person);
```

이런 형태의 함수 기억나시나요?? 전 시간에는 이런식으로 사용했었는데 이름을 출력하는 함수가 필요해 졌다고 가정해볼게요
```js
function Person(name, age){
  this.name = name;
  this.age = age;
  this.getName = function(){ // 이런식으로 함수를 추가했습니다.
    console.log(this.name);
  }
}
```

혹시 **생성자함수**를 어떨때 쓰는지 알고 계신가요?    
프로그래밍 책을 보신분들이라면 붕어빵과 붕어빵틀 이야기 많이 들어보셨을텐데요   
붕어빵 아저씨가 붕어빵틀이없이 매번 많은 양의 붕어빵을 구우신다면 매번 모양도 다르고 팥양도 일정치않고 많은 고생을 하실거에요   
그래서 나온 제품이 붕어빵틀이겠죠? 매번 같은 모양으로 일정하게 찍어낼 수 있게 미리 틀을 제공해줘서 여러개를 찍어낼때 편의를 줄 수 있는 것 입니다.   
이런 붕어빵틀 역할을 하는것이 **생성자 함수**입니다.   

Person이라는 붕어빵틀을 제공해주고 new Person(1~100)개를 찍어냈을때 항상 일정하게 name과 age를 가지고 있을 수 있게 해주는 겁니다.

우리는 Person이라는 생성자함수를 100개 선언했습니다. 100개가 메모리에 올라간 상태입니다. 
name와 age는 각각의 사람들이 가지고있는 특성이지만 getName이라는 함수는 모두가 공통으로 쓸 수 있을거 같지않나요?   
그런데 getName까지 현재 100개가 올라간 상태에요... 곤란하네요...

이럴때 프로토타입의 진가가 나타납니다!! 
```js
function Person(name, age){
  this.name = name;
  this.age = age;
}
Person.prototype.getName = function(){ // prototype 선언 
  console.log(this.name);
};
console.log(Person);
```

위처럼 프로토타입으로 함수들을 빼줄 수 있습니다.
       
![프로토타입](/1기%20JS%20스터디/public/proto3.png)

prototype 영역에 getName이 추가된거 보이시나요? 위에서 설명했듯이 부모에게 받은 [[Prototype]]과 자신의 영역 prototype이 2개가 존재한다는 사실 이제 아셨죠 ?!    

그러면 이쯤에서 궁금한게 도대체 저렇게해서 어떤점이 좋은겁니까? 오히려 더 어려워보입니다. 라는 질문이 들어올 수 도 있을거같아요   
프로토타입 영역은 매번 생성되지않아요 최초 Person이 생성되면서 한번 메모리에 올라갑니다.    
즉 위에서 getName함수 100개가 메모리에 올라갈 필요없이 단 한개만 메모리에 올려서 나머지 생성자 함수들에서는 메모리상의 getName을 가져다 쓸 수 있게 해줄 수 있습니다.   



## Constructor
![프로토타입](/1기%20JS%20스터디/public/proto4.png)
사진처럼 프로토타입객체는 constructor 프로퍼티를 갖게되어있어요.
constructor가 뭔지 궁금하시지 않나요? 이 constructor 프로퍼티는 객체는 자신을 생성한 객체를 가리키는데요.    
Person() 생성자 함수에 의해 생성된 객체를 생성한 객체는 Person() 생성자 함수잖아요!   
프로토타입객체의 constructor 프로퍼티는 객체를 생성하는 생성자 함수 객체를 가리킨다고 알아주세요.

```js
var copy = function(obj){
	if (obj == null || typeof obj != 'object') return obj;  
	 // 넘겨받은 객체와 똑같은 타입의 객체를 만들어 주는 메소드에요 console.dir(obj); 하셔서 constructor에 무엇이 들었는지 참고해주세요
	var copyObj = obj.constructor(); 
	
	for(var attr in obj){ 
		 if(obj.hasOwnProperty(attr)){  
		  	 copyObj[attr] = obj[attr];
		 }
	}
	return copyObj;
}
```

## 프로토타입 체이닝 
```js
function Person(name, age){
  this.name = name;
  this.age = age;
}
console.log(Person.toString()); 
```
Person에는 분명 toString이라는 메서드가 존재하지않습니다. 그런데 왜 에러가 나지않을까요?!
자바스크립트에서는 객체의 프로퍼티나 메소드에 접근하려고 할 때 해당 객체에 접근하려는 프로퍼티 또는 메소드가 없다면 [[Prototype]]를 링크를 따라 자신의 부모 역할을 하는 프로토타입 객체의 프로퍼티나 메소드를 차례대로 검색하기때문에   
toString을 사용하더라도 에러가 뜨지않는 것 입니다.

이것을 프로토타입 체인이라 합니다.

```js
var person = {
  name : 'appear',
  age : 25
}
console.log(person.toString());
console.log(person.__proto__ === Object.prototype); // true
console.log(person.toString === Object.prototype.toString); // true
```

## 결론 
1.Prototype에는 2가지 영역이 존재합니다.
- 부모로부터 받은영역
- 자신이 가지고있는 영역

2.Prototype 영역은 최초 단한번만 메모리에 올라가고 자신의 영역으로 들어가고, 사용시 메모리에 있는 함수들을 가져다 쓸 수 있습니다. 이것을 프로토타입 체이닝이라고 부릅니다.

3.Prototype객체는 Constructor를 가지고 있는데 Constructor란 자신을 생성한 객체를 가리킵니다.
오늘도 고생하셨습니다. 조금은 어려운 개념일 수 있지만. 영역구분만 확실히 지어주신다면 금방 이해하실 수 있을거에요

4.person.toString같은 없는 메서드를 접근하려할때 자신의 영역에 존재하지않는다면 [[Prototype]]링크를 따라가 찾아서 실행합니다. 없다면 에러가나겠죠?
