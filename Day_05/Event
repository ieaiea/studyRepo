
# Event
전시간에 이벤트루프가 어떻게 돌아가는지 이론으로는 다뤘습니다. 오늘은 실습을 하면서 배워봐요    
드디어 콘솔의 늪에서 벗어날 때가 왔습니다.. 사실 DOM을 다루면서 벗어나긴 했지만 눈에 확확보이는 변화를 즐기기엔 부족했죠   
그걸 오늘 배울 이벤트가 채워줄겁니다.    

그럼 시작해볼까요?? 

**이벤트**란 무엇일까요?     
말그대로 사건입니다. 우리가 어떤 행동을 취했을때 그에 맞는 사건이 일어나는건데요   

멜론 플레이리스트에서 음악을 리스트에서 삭제하기위해 삭제버튼을 눌렀을때 플레이리스트에서 삭제가되고
무서운 웹툰을 보다보면 스크롤의 위치에 따라서 화면의 배경이 변합니다.    

## 이벤트 리스너
어떻게 이런일이 가능한 것 이냐면, **이벤트 리스너**라는 것이 해당 이벤트를 항상 듣고 있습니다.   
이벤트를 듣고있다가 해당 이벤트가 일어나면 그에 맞는 로직을 실행 시켜주는 것 입니다.   

```js
대상.addEventListener(이벤트타입, 콜백, 버블링캡쳐링);
```
위의 코드처럼 사용할 수 있어요
 
## 콜백
혹시, **콜백 함수**를 알고 계신가요?
앞에서 이벤트 리스너와 그 이벤트에 따른 로직이라는 말이 나왔는데요 여기서 로직을 실행시킬 수 있는 방법이 콜백함수를 이용하는 겁니다.   
말그대로 콜백이에요 등록만 해놓고 조건이 충족되었을때 부르는 함수입니다. 콜백함수는 보통함수들과 다르게 바로 실행되지않아요!  

버튼이 눌렸을때 박스의 색상이 변경되어야한다면, 박스의 색을 변경시키는함수를 콜백으로 클릭 이벤트에 달아놓고   
클릭 이벤트가 일어났을때 박스의 색상을 변경시키는 함수를 불러오는 것입니다.   

```js
var btn = document.getElementById('btn'); // btn이라는 아이디를 가진 버튼이 있다고 가정 
btn.addEventListener('click', function(evt){ // 콜백에는 항상 event 객체가 넘어옵니다.
  console.log(this); // this 시간에 배웠던거 기억나시나요 ? 이벤트의 this는 항상 호출한 친구를 부릅니다. 이떄의 this = btn 
  console.log(evt); // click 이벤트에 관한 객체가 넘어옵니다.
  function inner(){
    console.log(this); // 이때의 this는 당연히 함수호출 패턴으로 분류되서 window가 찍힙니다.
  }
  inner();
})
```
버튼을 잡아서 이벤트를 걸어줄건데 이벤트 타입은 click이고 버튼이 클릭됬을때 콜백에서는 this를 찍어줘! 라는 코드입니다.   

this와 evt를 찍어봤을때 아래 사진과같이 나옵니다.
![event](/pubilc/event02.png)
 

## 구현 
실제로 만들어보면서 익혀볼까요?

1.브라우저가 배가 고픕니다. 버튼을 눌르면 브라우저에게 밥을 줄 수 있습니다. 3초 후 다시 배가 고프다고합니다.   
(배고픔 알림) => (밥주기) => (배부르다고 알림) => (3초후 다시 배고픔 알림)

구현 : https://jsfiddle.net/fcf7hxL3/3/
2.빨간색의 상자가 있습니다. 버튼을 눌렀을때 상자를 파란색으로 바꿔주세요

구현 : https://jsfiddle.net/t1gc87nv/1/

3.클릭된 위치의 좌표가 궁금해요
구현 : https://jsfiddle.net/m4b9h265/

4.간단한 로그인을 해보고싶어요
구현 : https://jsfiddle.net/c7h7cd1d/

5.스크롤 위치를 알고싶어요 (자세한건 제이쿼리를 이용해서 무한 스크롤할때 해볼게요)
구현 : https://jsfiddle.net/fdpsqmu3/

6.해당영역에 마우스가 들어왔는지 나갔는지 알고싶어요
구현 : https://jsfiddle.net/q7pxodw0/


```js
// 버튼리스트
var btnList = {
  hungryBtn : document.getElementById('btn'), // 밥주기 버튼이에요,
  chageBox : document.getElementById('btn2'), // 박스 색상 변경 버튼
  loginBtn : document.getElementById('loginBtn')  // 로그인 버튼
};
// 인풋 리스트
var inputList = { 
  id :  document.getElementById('id'), 
  pw :  document.getElementById('pw') 
};
// EventModule모듈이 없다면 만들어라 라고 한거에요
var EventModule = EventModule || {};

EventModule.click = { // 클릭에 관한 모듈들을 모아놓을거에요
  hungry : function(){  // 밥주기에 대한 함수입니다.
    btnList.hungryBtn.addEventListener('click', function(e){ // this = EventModule 이겠죠 ? bind를 해줬으니까요
	  alert('후.. 배가부릅니다.. 감사해요');
  	setTimeout(function(){
  	  alert('다시 배고파요 밥좀주세요 ㅠㅠ');
  	}, 3000);
	});
  },
  changeColor : function(){
  	btnList.chageBox.addEventListener('click', function(e){
      document.querySelector('.box').style.backgroundColor = 'blue'; // 스타일제어
    })
  },
  clickArea : function(){
  	document.querySelector('.area').addEventListener('click', function(evt){ 
    	// evt 객체가 넘어온다고 그랬었죠?
      console.log(evt); // 일단 이벤트를 한번 찍어보구
      console.log('X :', evt.clientX);
      console.log('Y :', evt.clientY);
      this.innerText = 'X :' + evt.clientX + ' Y :' + evt.clientY
  		// 이벤트의 this는 호출한 녀석 즉, 여기서는 area겠죠? 그 this의 텍스트를 변경해줬습니다.
  })
  }
};

EventModule.input = {
	login : function(){
  	btnList.loginBtn.addEventListener('click', function(e){
      console.log(inputList.id.value); // input에 입력한 같은 value를 통해서 알 수 있어요
      console.log(inputList.pw.value);
      // 운영자의 아이디가 root 비밀번호가 1234라고 가정할게요
      // 입력한후에는 input 창을 비워줄거에요
      if(inputList.id.value === 'root' && inputList.pw.value === '123'){
      	alert('안녕하세요 운영자님 환영합니다')
      }else{ 
      	alert('다시한번 정보를 확인해주세요')
        inputList.id.value = ''; // 인풋창이 잘 비워지나요??
        inputList.pw.value = '';
      }
    });
  }
}

EventModule.scroll = {
	scrollColor : function(){
  	window.addEventListener('scroll', function(evt){
      console.log(window.scrollY); // 스크롤의 높이값은 포함되어있지 않아요
    })
  }
}

EventModule.mouse = {
	mouseCheck : function(){
  	document.querySelector('.mouseArea').addEventListener('mouseover', function(evt) {
      console.log('마우스들어옴')
    })
    document.querySelector('.mouseArea').addEventListener('mouseout', function(evt) {
      console.log('마우스나감')
    })
  }
}
```
간단한게 가장 기본적인 이벤트들을 다뤄봤는데요, 종류는 훨씬 많답니다.     
앞으로 예제를 만들어가면서 배워봐요



## 이벤트 전파
![buble](/pubilc/buble.png)
이벤트가 겹쳐서 중복되는 의도치 않은 이벤트 현상이 일어날때가 있는데요 대표적인 예가 캡처링과 버블링입니다.   
```js
 대상.addEventListener(이벤트타입, 콜백, 버블링캡쳐링) // 3번째 인자로 버블링과 캡처링을 조절할 수 있습니다.
```
캡처링 : 부모의 이벤트가 자식까지 전달되는 현상입니다.
구현 : https://jsfiddle.net/eughcn8f/1/

버블링 : 자식의 이벤트가 부모까지 전달되는 현상입니다.
구현 : https://jsfiddle.net/j8w8ekgn/1/
   
이러한 현상을 막기위한 메서드들이 있습니다.
   
- Event.preventDefault   
폼을 submit하거나 a 링크를 클릭하면 다른 페이지로 이동하잖아요? 기본이벤트를 제거해야될 상황이 분명히 생깁니다.   
이러한 요소가 가지고 있는 기본 동작을 막아버리는 메서드가 preventDefault()입니다.    
구현 : https://jsfiddle.net/n4451cby/

- Event.stopPropagation()   
어느 한 요소를 이용하여 이벤트를 처리한 후 이벤트가 부모 요소로 버블링되는 것을 중단시키기 위한 메서드에요   
구현 : https://jsfiddle.net/ytzs87Lw/   
   
## 이벤트의 종류
### UI Event 
| Event  | Description                                                              |
|--------|--------------------------------------------------------------------------|
| load   | 웹페이지의 로드가 완료되었을 때                                          |
| unload | 웹페이지가 언로드될 때(주로 새로운 페이지를 요청한 경우)                 |
| error  | 브라우저가 자바스크립트 오류를 만났거나 요청한 자원이 존재하지 않는 경우 |
| resize | 브라우저 창의 크기를 조절했을 때                                         |
| scroll | 사용자가 페이지를 위아래로 스크롤할 때                                   |
| select | 텍스트를 선택했을 때                                                     |

###  Keyboard Event
| Event  | Description                                                              |
|--------|--------------------------------------------------------------------------|
| keydown   | 	키를 누르고 있을 때                                         |
| keyup | 누르고 있던 키를 뗄 때                |
| keypress  | 키를 누르고 뗏을 때 |

### Mouse Event
| Event  | Description                                                              |
|--------|--------------------------------------------------------------------------|
| click   | 마우스 버튼을 클릭했을 때                                         |
| dbclick | 마우스 버튼을 더블 클릭했을 때                |
| mousedown  | 	마우스 버튼을 누르고 있을 때 |
| mouseup | 누르고 있던 마우스 버튼을 뗄 때                                        |
| mousemove | 마우스를 움직일 때 (터치스크린에서 동작하지 않는다)                                  |
| mouseover | 마우스를 요소 위로 움직였를 때 (터치스크린에서 동작하지 않는다)                                                    |
| mouseout | 마우스를 요소 밖으로 움직였를 때 (터치스크린에서 동작하지 않는다)                                                   |

### Focus Event
| Event  | Description                                                              |
|--------|--------------------------------------------------------------------------|
| focus/focusin   | 	요소가 포커스를 얻었을 때                                         |
| blur/foucusout | 요소가 포커스를 잃었을 때                |

### Form Event 
| Event  | Description                                                              |
|--------|--------------------------------------------------------------------------|
| input   | 	input 또는 textarea 요소의 값이 변경되었을 때                                         |
| change | select box, checkbox, radio button의 상태가 변경되었을 때              |
| submit | form을 submit할 때 (버튼 또는 키)                |
