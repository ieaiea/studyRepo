var http = require('http'); // http 모듈 가져오기
var hostname = '127.0.0.1'; // ip설정을 해주고
var port = 8080; // port 설정도 해줍니다.

http.createServer(function(request, response){
  // request 요청, response 응답에 대한 것들이 들어있습니다. 자세한것은 뒤에 예제를 진행하면서 살펴보겠습니다.
  response.writeHead(200, {'Content-Type' : 'text/plain'}); // head 설정
  response.write('Hello Node.js'); // 화면에  Hello Node.js를 그려주겠다.
  response.end(); // 응답을 끝냄
}).listen(port, hostname, function(){
  console.log(port, ' Server Run....');
});