
## Ajax (Asynchronous JavaScript and XML)
Ajax란 자바스크립트를 이용해서 비동기적(Asynchronous)으로 서버와 브라우저가 데이터(XML, JSON, HTML…)를 통신하는 방식을 말해요
        
가장 눈에보이는 예를 들어보자면 페이스북 포스트들을 볼때 맨아래로 스크롤이 내려가면 추가로 데이터를 불러와서 페이지 전환없이 아래 붙여주잖아요?    
"페이지 전환없이" 라는 말이 중요합니다. 화면전환(깜빡)거림없이 우리가 원하는 부분만 변경되는 작업을 Ajax를 통해서 할 수있어요. 

### 비동기와 동기
그럼 여기서 "비동기적"이라는 말에 대해서 먼저 알아볼게요.

동기와 비동기의 차이를 쉽게 풀어서 써보자면. 
1. 우리가 공부를하러 카페에 갔습니다.
2. 아메리카노를 주문했습니다.
3. 이 카페는 진동벨이 없어서 아메리카노가 완성될때까지 기다렸다가 받아가야하는 구조입니다.
4. 아메리카노를 기다리는 동안 우리는 공부를 못하고 아메리카노만 기다려야했습니다.
5. 아메리카노를 받고 자리를 잡고 공부를 하기 시작합니다.
  
위에 간단한 예를 들었습니다. 아메리카노가 나오기전까지 우리는 아무것도 할 수 없었어요(극단적인예.. 지만) 이런게 동기에요 앞에 처리되야하는 부분이 끝나야지 후 작업이 이루어집니다.    

비동기를 예로 들어볼까요
1. 우리가 공부를하러 카페에 갔습니다.
2. 아메리카노를 주문했습니다.
3. 이 카페는 진동벨이 있어서 미리 자리를 잡고 공부를 하고 있었습니다.
4. 진동벨이 울렸습니다. 그때 아메리카노를 받아옵니다.
5. 하던작업을 마무리합니다.

이처럼 앞작업이 마무리되지 않아도, 자신의 차례가 오면 작업을하고 다시 본래작업으로 돌아와서 작업을하고 이런식으로 이루어지는 방식이 비동기입니다.  
 
### XMLHttpRequest
클라이언트에서 서버 방향으로의 비동기 통신은 XHR(XMLHttpRequest)의 등장으로 시작되었다고해요. 
브라우저는 XMLHttpRequest 객체를 이용하여 Ajax 요청을 생성하고 전송할 수 있어요. 서버가 브라우저의 요청에 응답을 반환하면 같은 XMLHttpRequest 객체가 그 결과를 처리해줍니다.   

하나하나 살펴볼게요. 우선 XMLHttpRequest객체를 생성합니다.
```js
var req = new XMLHttpRequest();  // XMLHttpRequest 생성
```

#### XMLHttpRequest.open 
XMLHttpRequest.open 통해서 요청을 준비할 수 있어요
```js
var req = new XMLHttpRequest();  // XMLHttpRequest 생성
req.open(method, url, aysnc); 

// 1. method : GET POST PUT DELETE 
// 2. 요청 보낼 URL 
// 3. true/false default true는 비동기입니다.
```

데이터를 요청하기전에 간단한게 json-server를 띄우는 법을 알아볼게요 아직 노드를 다뤄보지않으셨으니 깊게는 들어가지 않습니다. 따라치셔도 무방해요  

1. 일단 노드를 설치하셔야됩니다.     
 윈도우 : [Node](https://nodejs.org/ko/)    
 맥 : brew install node 하시면됩니다.
 
2. 본인이 작업중이신 프로젝트 루트폴더로 가셔서 터미널로 또는 cmd로 npm install json-server 쳐주시면되요 
 package.json이 생기시면 성공하신거에요 

3. db.json 이라는 파일을 만들어줍니다. 내용은 아래와 같이 채울게요
```json
{
  "person": [
    {"name" : "appear"}
  ]
}
```
4. db.json이 있는 경로에서 json-server db.json 이라고 cmd또는 터미널로 적어주세요
5. http://localhost:3000/person 으로 접속해보시면 json 파일 잘 보이시나요?
6. 여기까지하시면 json-server 세팅이 끝나요

그러면 다시 돌아가서 
```js
var req = new XMLHttpRequest();
	req.open('GET', 'http://localhost:3000/person');
```
간단히 GET과 POST에 대해 말씀드리자면    
GET 메소드의 경우, URL의 일부분인 쿼리문자열(query string)로 데이터를 서버로 전송하는 방식입니다. 막 &page=3&sort=old 이런식으로 붙어서가는거 보신적있죠??      
GET의 경우 url에 저렇게 값이 노출되기 때문에 보안에 위험이 있다고합니다. 
 
POST 메소드의 경우, 데이터를 Request Body에 담아 전송합니다. 그래서 url 자체에선 보이지 않아요. GET보다 보안에 좋겠죠?   

그래서 보통 일반적으로 ID, PW같은 노출되면 위험한정보들으 POST로 요청합니다.

#### XMLHttpRequest.send 
준비를 했으니 요청을 보내야겠죠?
```js
var req = new XMLHttpRequest();  // XMLHttpRequest 생성
req.open(method, url); 
req.send(null); // GET인 경우, send 메소드의 값은 무시되고 request body은 null로 설정됩니다.

// req.send({ name: 'appear', password : '1234'}); POST의 경우 이런식으로 값을 보낼 수 있어요 
```
#### XMLHttpRequest.setRequestHeader
데이터를 전송할때 우리는 전송할 데이터 값의 타입을 Content-type을 통해 설정해줘야해요
1. text type : text/plain, text/html, text/css, text/javascript
2. Application : application/json, application/x-www-form-urlencode
3. file : multipart/formed-data
   
```js
var req = new XMLHttpRequest();  // XMLHttpRequest 생성
req.open('POST', 'http://localhost:3000/person');
req.setRequestHeader('Content-type', 'application/json'); // 우리가 전송할 데이터가 json이기 떄문에 json타입으로 설정
req.send({'name' : 'appear', 'pw' : '1234'}); // GET인 경우, send 메소드의 값은 무시되고 request body은 null로 설정됩니다.

// req.send({ name: 'appear', password : '1234'}); POST의 경우 이런식으로 값을 보낼 수 있어요 
```   

#### response
요청을 보냈으니 응답을 처리해야겠죠 ?

```js
var req = new XMLHttpRequest();
req.open('GET', 'http://localhost:3000/person');
req.send(null);
req.onreadystatechange = function(e){
	if(req.readyState === XMLHttpRequest.DONE){  // readyState : 4 응답완료 => DONE(서버 응답완료) 즉 응답처리가 끝나면
		if(req.status === 200){ // 200 이면 정상
			console.log('응답', req);
		}else{
			console.error('error!!');
		}
	}
}
```
응답이 잘 떨어 지시나요?? 어떤 순서로 동작하는지 한번 살펴볼게요
   
1. XMLHttpRequest 객체를 생성합니다.
2. open으로 요청 준비를합니다.
3. post일경우 보낼 타입을 지정해줍니다.  
4. send로 준비된 요청을 보냅니다. 
5. 서버에서 Response를 반환하여 주는데 비동기로 처리가 되다보니 언제 Response가 클라이언트한테 떨어질지는 아무도 모릅니다. 
6. XMLHttpRequest.onreadystatechange 에서는 도달을 감지하여 Response를 콜백으로 넘겨줍니다.
7. XMLHttpRequest는 XMLHttpRequest.readyState라는 상태를 알수있는 프로퍼티를 제공해주는데요    
    0 (UNSENT) : open 호출이전      
    1 (OPENED) : open 호출완료     
    2 (HEADERS_RECEIVED): send 호출완료      
    3 (LOADING) : 서버응답중 
    4 (DONE): 응답완료  
     