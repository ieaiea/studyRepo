
# JQuery Ajax 
이번에는 제이쿼리를 이용한 비동기 통신에 대해서 알아보겠습니다.
이론적인부분은 [자바스크립트 HttpRequest](https://appear.github.io/2017/09/20/JavaScript/javascript_25/)에서 다뤘습니다.

제이쿼리 Ajax에서는 실습적인 부분만 다루겠습니다.

일단 어떻게 생겼는지 먼저 살펴볼까요?
```js
(function($){
	$.ajax({  // jQuery.ajax와 동일한 표현입니다.
		url : ‘데이터를 요청할 주소’,
		type : ‘메소드 타입 post / get / put 등 ..’,
		data : {‘서버로 보낼 데이터가 있다면 이곳에 적어줍니다’},
		dataType : ‘요청받을 데이터 타입 json, xml 등..’,
		success : function(res){}, // 성공시 실행될 함수
		fail : function(err){}, // 실패시 실행될 함수
		always : function(res){} // 성공 실패 여부에 상관없이 실행됩니다.
	})
})(jQuery)
```

이렇게도 쓸 수 있습니다. Promise 패턴을 흉내낸 가짜 Promise라고 많이들 부르더라고요

```js
(function($){
	$.ajax({  // jQuery.ajax와 동일한 표현입니다.
		url : ‘데이터를 요청할 주소’,
		type : ‘메소드 타입 post / get / put 등 ..’,
		data : {‘서버로 보낼 데이터가 있다면 이곳에 적어줍니다’},
		dataType : ‘요청받을 데이터 타입 json, xml 등..’,
	})
	.done(function(data){}) // 성공시 동작
	.fail(function(err){}) // 실패시 동작
	.always(function(data){}) // 항상 동작
})(jQuery)
```

## get, post
get과 post만을 이용할 수 있습니다.

```js
$.get(‘요청주소’, ‘데이터’, function(data){})        
$.post(‘요청주소’, '데이터', function(res) {
  // 성공 시 동작
}, '데이터타입');
```

아래와 같이 사용할 수 있습니다.

```js
$.get('http://localhost:3000/person', function(data){
  console.log(data);
});

$.post('http://localhost:3000/person',{page : 1}, function(data){
  console.log(data);
})
```

## getJSON
$.getJSON( ‘요청주소’,[ data ], function(data){})

아래와 같이 사용할 수 있습니다.
```js
$.getJSON('http://localhost:3000/person', function(data){
  console.log(data);
})
```

## 실습
2가지를 만들어볼건데요. 첫번째는 버튼을 눌렀을때 데이터를 불러와서 리스트로 뿌려주는것과 전 시간에 만든 무한스크롤에 ajax를 붙여보겠습니다.

#### 데이터 준비
db.json 이란 이름으로 파일을 만들어주세요
```js
// db.json
{
  "person": [
    { "id": 1, "name": "a", "job": "frontEnd" },
    { "id": 2, "name": "b", "author": "frontEnd" },
    { "id": 3, "name": "c", "author": "frontEnd" },
    { "id": 4, "name": "d", "author": "frontEnd" },
    { "id": 5, "name": "e", "author": "frontEnd" }
  ]
}
```
Json-server 설치해주셔야됩니다.

```js
npm install -g json-server

json-server start db.json -p 3000

// http://localhost:3000/person로 확인가능합니다.
```
#### 버튼으로 데이터 가져오기

index.html 파일을 만들어주세요. 버튼을 눌렀을때 data를 불러오도록 해보겠습니다.


```html
// index.html
<ul class="list_member"></ul>
<script src="https://code.jquery.com/jquery-2.2.1.js"></script>
<script>
	var $btn = $('.btn_member');
	var $list = $('.list_member');

	$btn.on('click', function(e){
		$.ajax({
			type: 'GET', // get 방식으로
			dataType: 'json', // json 타입의 데이터를
			url: " http://localhost:3000/person", // 요청
		})
		.done(function (data) { // 성공시 호출
			$list.empty(); // 불러오기전에 ul의 내용을 한번 비워줍니다. 값이 계속 찍히는걸 방지
			data.forEach(function (value) {
				$list.append("<li>"+value.name+"</li>");
			});
		})
		.fail(function (err) { // 실패시 호출되는 함수
			console.error('데이터 불러오기 실패');
		});
	});
</script>
```
리스트가 잘 불러지시나요??


#### 무한 스크롤
그러면 전에 했던 무한스크롤에 Ajax를 붙여서 무한스크롤을 만들어보겠습니다.

index.html
```html
<style>
.wrap_scroll {
  width: 200px;
  height: 400px;
  overflow: auto;
  background-color: #fff;
}
.box {
  width: 100%;
  height: 300px;
  border-top: 2px solid #000;
  background: #cbcbcb;
}
</style>
<div class="wrap_scroll">
    <div class="box"></div>
    <div class="box"></div>
</div>
<script src="https://code.jquery.com/jquery-2.2.1.js"></script>
<script>
var ctx = $('.wrap_scroll'); 
var $maxHeight, $ctxScrollTop, ctxScrollHeight, color; // 변수 선언 

ctx.on('scroll', function (e) {
	$maxHeight = $(this).height(); // 박스 높이값
	$ctxScrollTop = $(this).scrollTop(); // 스크롤 위치값
	ctxScrollHeight = this.scrollHeight; // 스크롤포함 높이값

	color = Math.floor((Math.random() * 999999) + 1); // 랜덤 color

	if (ctxScrollHeight - $ctxScrollTop === $maxHeight) {
		$.ajax({
			type: 'GET', // get 방식으로 요청
			dataType: 'json', // json 타입
			url: "http://localhost:3000/person", // 데이터를 불러오는 json-server 주소입니다 .
		})
		.done(function (data) { // 성공시 호출될 함수
		  setTimeout(function () { // 1초의 딜레이를 주었습니다.
		  data.forEach(function (value) { // 데이터의 갯수에 따라서 div를 추가해줬습니다 ㅎㅎ
		    ctx.append("<div class='box' style='background-color: #"+color+"'>"+value.name+"</div>");
		  });
		}, 1000);
		})
		.fail(function (err) { // 실패했을때 불러질 함수
		  console.error('데이터 불러오기 실패');
		});
	}
});
</script>
```

페이스북이나 인스타그램같이 스크롤을 내리면서 데이터를 불러오는 방식의 페이지를보면 데이터 요청시 로딩바 같은게 뜨고 데이터가 불러짐과 동시에 로딩바가 사라지는거 보신적 있으신가요?!    
그 로딩바를 우리 무한스크롤에 한번 적용해보겠습니다.

```html
<style>
.wrap_scroll {
	position: relative;
	width: 200px;
	height: 400px;
	overflow: auto;
	text-align: center;
	line-height: 300px;
	font-size: 2.5rem;
	color: #fff;
}
.wrap_scroll .spiner{
	position: fixed;
	top: 170px;
	left : 70px;
	width: 50px;
	height: 50px;
	display: none; // 기본적으로 스피너는 none으로 가려져있습니다.
	border: 5px solid yellow;
	border-color: yellow transparent transparent;
	border-radius: 50%;
	animation : spin 1s linear infinite;
}
@keyframes spin {
	100% {  transform: rotate(360deg);  }
}
.box {
	width: 100%;
	height: 300px;
	border-top: 2px solid #000;
	background: #cbcbcb;
}
</style>
<div class="wrap_scroll">
	<div class="box">아이템</div>
	<div class="box">아이템</div>
	<div class="spiner"></div>
</div>
<script src="https://code.jquery.com/jquery-2.2.1.js"></script>
<script>
var ctx = $('.wrap_scroll');
var $maxHeight, $ctxScrollTop, ctxScrollHeight, color; // 변수 선언
var $spiner = $('.spiner'); // 스피너 추가

ctx.on('scroll', function (e) {
	$maxHeight = $(this).height(); // 박스 높이값
	$ctxScrollTop = $(this).scrollTop(); // 스크롤 위치값
	ctxScrollHeight = this.scrollHeight; // 스크롤포함 높이값

	color = Math.floor((Math.random() * 999999) + 1); // 랜덤 color

	if (ctxScrollHeight - $ctxScrollTop === $maxHeight) {
		$.ajax({
			type: 'GET', // get 방식으로 요청
			dataType: 'json', // json 타입
			url: "http://localhost:3000/person", // 데이터를 불러오는 json-server 주소입니다 .
			beforeSend : function(){ // 요청을 보내기전
				$spiner.show(); // 요청을 보내기전에 스피너를 보여줍니다.
			}
		})
		.done(function (data) { // 성공시 호출될 함수
			setTimeout(function () { // 1초의 딜레이를 주었습니다.
				data.forEach(function (value) { // 데이터의 갯수에 따라서 div를 추가해줬습니다 ㅎㅎ
				    ctx.append("<div class='box' style='background-color: #"+color+"'>"+value.name+"</div>");
			    });
			    $spiner.hide(); // 요청이 마무리된후 스피너를 다시 가려줍니다.
			}, 1000);
		})
		.fail(function (err) { // 실패했을때 불러질 함수
			console.error('데이터 불러오기 실패');
		});
	}
});
</script>
```
