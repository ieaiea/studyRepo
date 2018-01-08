# 클로저 
드디어 클로저를 다루게되었습니다.. 실행 컨텍스트를 이해하셨다면 이해가 되실 수 도 있지만.. 아마 다들 제일 어려워하는 개념일거라고 생각해요

클로저란 간단하게 내부함수가 외부로 반환된 이후에도 life-cycle이 유지되는 것을 말합니다. 

말로만 하지말고 코드를 한번볼까요?
```js
function add(){
  var a = 5;
    function innerAdd(){ 
      var b = 10;
	  console.log(a + b); // inner에서는 Scope chain을 통해 add 의 a에 접근이 되는거 이제 알고계시죠? 
    }
  innerAdd(); 
}
add();
```
이번에는 add() 안에서 innerAdd()를 실행하지말고 innerAdd 이녀석을 밖으로 던져서 실행시켜볼까요?
```js
function add(){
  var a = 5;
    function innerAdd(){ 
	  var b = 10;
	  console.log(a + b); 
   }
  return innerAdd; // innerAdd를 밖으로 던져줍니다.
}
var innerAdd = add(); // add에서 던진걸 받을 거구요
innerAdd(); // 15 오잉 ??..
```
혹시 이상한걸 느끼셨나요?? 일반적인 함수라면 var innerAdd = add(); 이때 add()를 실행한후 실행이종료되면 실행컨텍스트가 사라지고 변수 a 와 함수 innerAdd 모두 제거되는게 일반적이죠   
그런데 이상하게도 innerAdd(); // 15 라는 값이 찍혔습니다. 변수 a와 함수 innerAdd가 살아있다는 이야기입니다. 즉 실행컨텍스트가 유지되고 있다는거겠죠?   

지금 이런걸 클로저라고 불러요!   
innerAdd()은 내부함수에서 리턴될때 자신의 실행컨텍스트를 기억한 상태로 Scope Chain은 물론이고요 그렇기 때문에 내부함수에서 호출하고있는 add의 변수 a, 자신의 안에 변수 b는 제거되지않고 계속 살아있는거에요   

클로저에 의해 참조되는 변수 add의 변수 a를 `자유변수`라고불러요. 클로저라는 이름은 자유변수에 함수가 닫혀있다(closed)라는 의미로 의역하면 자유변수에 엮여있는 함수라는 뜻이라고 합니다.
아 그리구 클로저로부터 반환된 함수들을 다룰때 내부함수가 외부함수에 있는 변수의 복사본이 아니라 실제 변수에 접근한다는 것에 주의하여야 하셔야됩니다.     
밖에서 고치면 안에도 고쳐져요 (이 특성을 이용해 private한 환경을 만들 수 있어요)

클로저가 뭐에요? 하면 나올만한 예제를 한번볼게요
```js
var calc = (function(){ // 즉시실행으로 모듈화를 할거에요
  var result = 0; 
  
  function sum(num){
  	result += num;
  }
  function sub(num){
  	result -= num;
  }
  function show(){
  	console.log(result);
  }
  return { // 각각의 모듈들을 이름을 지어주고 그안에 넣어서 내보내줄거에요
  	sum : sum,
  	sub : sub,
  	show : show
  }
})();
console.log(calc); // {sum: ƒ, sub: ƒ, show: ƒ} 잘 만들어진걸 볼수있어요
calc.sum(3);
calc.show(); // 3
calc.sub(2);
calc.show(); // 1
```
위의 calc 모듈처럼 var result = 0; 이 값 우리가 위에서 리모콘을 예로들었던 부속품이 이값에 해당합니다. 이값은 우리가 정해준 형식대로만 동작해야합니다.    
이렇게 var result = 0; 값을 private하게 감춰놓고 사용하기위해서 클로저를 이용합니다.

# 결론 
내부함수에서 외부로 반환된 함수는 lexical scoping에 의해서 자신의 환경을 기억한채로 나오게된다. 동작시 scope chain을 통해서 이뤄진다 정도일까요?      
자신의 환경을 기억하고있다는거에 중점을 맞춰서 생각해보시면 아! 그렇구나 하실 수 있으실거에요!! 
   