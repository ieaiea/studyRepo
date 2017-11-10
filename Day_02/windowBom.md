# Window
쉬어가는 시간으로 Window와 BOM 객체를 다뤄보겠습니다.     
쉬어간다고는 말씀드렸지만 반드시 알고있어야되는 내용입니다.    

Window 객체는 브라우저 전체를 나타냅니다. 예를 들면 현재 주소창에 있는 주소도 알 수 있고요, 현재 브라우저 화면의 넓이도 알 수 있고요   
이처럼 window는 브라우저에 대한 정보를 담고 있습니다.   

또 Window 객체는 모든 객체들의 조상이에요. 
우리가 만드는 전역에 만드는 함수와 변수는 모두 Window로 들어갑니다. 못믿으시겠죠 ?
```js
var name = '고석진';
console.log(name);
console.log(window.name); // window로도 접근이 가능합니다.

var getName = function(){
  console.log('안녕하세요 고석진 입니다.');
};
window.getName();
```

크롭 개발자도구에 window 치시고 . 을 찍어보시면 엄청나게 많은 것들이 포함되어 있을거에요   
매번 window를 붙이기는 비효율적이기 떄문에 window는 생략이 가능하도록 만들어졌습니다. 그렇기 때문에 window로 접근이 가능한거죠!  

자주 쓰이는 것들만 알아보고 나머지는 같이 공부해가면서 차차 알아보도록해요

## 인코딩  
주소창에서 %EB%9D%BC%EC%9D%B4%EC%96%B8 이런거 보셨죠 ?! 서버로 값을 보내고 받는 과정에서 많이 보실거에요. 해결방법을 알아볼게요.   

- encodeURI : 라이언 => %EB%9D%BC%EC%9D%B4%EC%96%B8
- decodeURI : %EB%9D%BC%EC%9D%B4%EC%96%B8 => 라이언

이렇게 생각해주시면 됩니다.

```js
var encode = encodeURI('라이언'); // %EB%9D%BC%EC%9D%B4%EC%96%B8
var decode = decodeURI(encode); // 라이언
```

## 타임아웃, 반복 

- setTimeout : 정해준 초에 실행됩니다. 
- setInterval : 정한 초마다 반복됩니다.

```js
setTimeout(function(){
  console.log('2초뒤에 실행됩니다.');
}, 2000);

setInterval(function(){
  console.log('출근하세요..'); // 1초마다 출근하세요를 찍습니다 ....
}, 1000)
```

# BOM
브라우저와 운영체제에 대한 정보를 담고 있습니다.

## 윈도우 크기 
현재 보고있는 브라우저의 크기를 구할 수 있습니다. 툴바와 스크롤바의 크기를 포함하지 않는다.
- window.innerHeight
- window.innerWidth

## History, Location

- Location : 현재 윈도우에 표시되고 있는 문서의 URL을 나타낸다. href, pathname 등등...
- History :  윈도우의 열람 이력을 최근에 방문한 URL의 배열로 나타냅니다. 뒤로, 앞으로가기 했던것들

```js
console.log(window.location);
console.log(window.history);

window.history.back(); // 뒤로가기
window.history.forward(); // 앞으로가기
```

## Navigator
- userAgent : 현재 브라우저, 운영체제등 유저에 대한 정보를 담고있습니다. IE같은 브라우저 체크에 사용합니다.

등등 ... 너무 많지만 공부하면서 필요할때마다 같이 알아보는걸로 해요!   



 