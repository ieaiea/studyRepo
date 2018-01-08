# Object (객체) 
자바스크립트에서 기본데이터타입 (boolean, number, string, null, undefined)을 제외한 모든것은 객체라고 설명드렸었죠 ~   

객체는 이름(key)과 값(value)의 쌍인 속성들을 포함하는 컨테이너라고 할 수 있어요.    
또 데이터를 한 곳에 모으고 구조화하는데 유용합니다.      

사실 null, undefined을 제외한 boolean, number, string도 객체처럼 다룰 수 있습니다.   

## 속성
위에 속성이란 것이 나왔는데 속성은 key(속성명), value(속성값) 이라고 표현합니다.

## 메서드
또 메서드라고 불리는것이 있는데요, 객체는 속성값으로 함수도 포함할 수 있습니다. 속성값이 함수일 경우, 일반 함수와 구분하기 위해 메서드라 부릅니다.

```js
var obj = {
    getName : function(){} // 메서드
}
function getName(){} // 일반함수
```

## 객체생성법
객체를 생성하는 방법은 크게 new Object()를 이용한 생성자방법과 {}로 생성하는 리터럴 방식 생성자함수 3가지가 있습니다.

### new Object 생성자방식
먼저 생성자 방식부터 알아볼게요.

```js
var obj = new Object();
console.log(obj.constructor === Object); // true

obj.name = 'appear';  // 이런식으로 값을 하나하나 추가해줘야됩니다.
obj.age = 25;
```

> constructor는 해당 Object가 어떤 Object를 상속 받았는지를 판단할 수 있게 알려주는 속성입니다.

위에 까지는 아주좋습니다. 성공적으로 객체를 만들었습니다.

```js
var o = new Object(1);
console.log(o.constructor === Number); // true

var o = new Object("I am a string");
console.log(o.constructor === String); // true
console.log(typeof o.substring); // "function"

var o = new Object(true);
console.log(o.constructor === Boolean); // true
```

**여기서 new Object의 문제점이 발생하는데요**
    
Object를 상속받기를 원했지만, new Object로 선언된 것의 리턴값이 자바스크립트 해석기가 스스로 판단해서 다른것을 리턴하는 결과가 생겼습니다..  

그러면 문제점을 정리해보자면 
* number, string, bool등 new Object로 생성하면 Object 엉뚱한 값을 뱉어준다.
* 문제점 아닌 문제점 값을 하나하나 추가해줘야하니 가독성이 떨어진다..

### 리터럴 방식
보통 new Object 보다는 모두 리터럴 방식으로 객체를 생성할거에요
```js
var obj = {}; // 리터럴 방식으로 빈객체 생성
console.log(typeof obj); // object

obj.name = 'appear'; // 이렇게 추가가 가능해요 오잉? 그럼 new Object랑 같은거아니에요? 라고할수있겠죠 
obj.age = 25;

// 이건어떠신가요?
var person = { // 이렇게 한번에 넣어줄 수 도있어요 한눈에보이죠 속성들이
  name : 'appear',
  age : 25,
  // 아직 함수는 잘모르시죠? 괜찮아요 다음 포스트에서 다룰거에요 지금은 객체안에 함수도 들어간다만 알아주세요 그리고 이걸 메서드라고 불러요 ~
  getName : function(){  
    console.log(this.name);
  }
};
console.log(typeof person); // object
console.log(person); // { name: '고석진', age: 25 }

// 속성 사용법
console.log(person.name); // 고석진 키값으로 접근할 수 있습니다.
console.log(person.age); // 25 
console.log(person.getName()); // 고석진 메서드 실행
```

정리해보자면 {} 방식으로 선언하면 
- 가독성이 좋다. 한번에 값들을 넣어줄 수 있기때문에
- new Object 같이 엉뚱한 값을 리턴할 일이없다.

위에 이유때문에 객체는 {}로만 선언을 해서 사용하시는게 좋을거에요

### 사용자 정의함수 (생성자함수)
new 키워드로 객체를 생성하는 방법을 생성자라고하는데요. 위에 new Object => Object도 생성자이기때문에 new로 객체를 만들 수 있는것입니다.   
new Object가 아닌 new 사용자함수 로 선언할 수도 있습니다. 그 방법에 대해서 알아봐요     

- 생성자 함수 이름은 일반적으로 대문자로 시작합니다 (약속) => 이것은 생성자 함수임을 인식하도록 도움을 준다.   
- 속성 또는 메서드명 앞에 기술한 this는 생성자 함수로 생성될 인스턴스(자기자신)를 가리킨다.

```js
// name을 받는 Person 생성자 함수에요 name을 매개변수라고 부를 거에요 지금의 name은 그냥 아무의미없는 이름일 뿐이에요 
var Person = function(name) { 
  this.name = name;   // this가 자기자신이라고했죠? this 는 Person이에요 Person.name = 넘겨받은 name으로 하겠다고하는거에요
  this.say = function() { 
    console.log("I am" + this.name); // this.name을 부르내요 I am Person.name(넘겨받은이름)이 찍히겠죠? 
  };
}

// 사용을 해볼게요 new 를 이용해서 사용할 수 있어요
var p = new Person('고석진'); // name을 받기로했으니 appear이라는 값을 넣어줬어요
console.log(p); // 객체가 찍힐거에요 
p.say(); // I am appear 이찍히겠죠 ? 이런식으로 사용할 수 있어요
```

## 객체 속성 추가, 삭제, 탐색, 갱신 
위에 선언법은 충분히 알아봤으니 사용법을 알아봐요
 
### 추가 
```js
var obj = {}; // 빈객체
obj.name = "고석진";
console.log(obj); // Object {name: "고석진"}
```

### 삭제
```js
var obj = {}; // 빈객체
obj.name = "고석진";
console.log(obj); // Object {name: "고석진"}
delete obj.name; // delete 를 사용해서 삭제
console.log(obj); // Object {}
```

### 갱신 
이미 존재하는 속성명(key)라면 값을 갱신 없다면 새로 속성명, 값을 추가합니다.
```js
var obj = {}; // 빈객체
obj.name = "고석진";
console.log(obj); // Object {name: "고석진"}
obj.name = "수정 고석진"; // 속성값 변경
console.log(obj); // Object {name: "수정 고석진"}
```

### 탐색
객체명[속성명]으로 접근하면 속성명에 해당하는 속성값을 뺴올 수 있어요. 이때 주의 하실점이있습니다.
```js
var obj = {
  "name-first" : '고석진' // 처럼 속성명에 - 이 들어간경우
};
console.log(obj.name-first); // 로 가져오게되면 -을 연산처리해버리기 때문에 원하는 결과를 얻을 수 없어요 
console.log(obj['name-first']); // 이런식으로 해주시면됩니다.
```

```js
var person = {
  name : '고석진',
  age : 25
};

var key;
for(key in person)  {
  console.log(key + ': ' + person[key]); // key에 속성명이 들어갑니다. 
}
/*
name : appear,
age : 25
*/
```

for in은 프로토타입 체인까지 확인하기때문에 hasOwnProperty (자기자신의 속성인기 판별해주는)라는 함수와 동반되어야하는데   
이부분은 뒤에프로토타입을 공부하면서 살펴보겠습니다. 

## 팁 
위에 생성자함수를 사용하려면 new를 써줘야된다고 배웟습니다. 만약에 실수를 해서 생성자 함수를 실행할때 new가 빠진다면 우리가 원하는대로 생성자함수가 안만들어지겠죠?   
new를 강제로 하는 패턴이있습니다.    

```js
var Person = function(name){
  // instanceof는 우변 피연산자의 프로토타입이 좌변 피연산자의 프로토타입 체인에 있는지 찾아주는 연산자입니다. 
  // 쉽게말하면 this가 Person을 통해서 만들어진건지 판단해줍니다.
	if(!(this instanceof Person)){ // 그게 아니라면 new를 통해서 만들어서 return 해줍니다.
	  return new Person(name);
	}
	this.name = name;
}
```

> 문제 (객체 생성방식은 {} 또는 생성자 함수)
>   1. 빈 사람 객체를 하나 만든다.     
>   2. 객체에 name,age 속성을 추가한다.
>   3. 객체에 getName이라는 메서드를 만든다. getName은 자기 자신의 이름을 console에 찍어준다.
>   4. name 속성의 값을 변경한다.
>   5. 다시 getName을 이용해서 name 속성의 값을 찍어본다.
>   6. name속성을 삭제한다.
>   7. 조건문을 사용해서 name속성이 없다면 다시 name 속성을 추가해준다.
>   8. 최종 Object를 탐색하여 console에 찍는다.
  
정답 : https://jsfiddle.net/xbmjL2vc/
