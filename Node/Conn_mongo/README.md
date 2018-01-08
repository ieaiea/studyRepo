# MVC_mongodb

## 목표
Express, Mongo DB, Passport & Session 로그인처리를 MVC패턴으로 구성한다.

## 구현사진 
![todo](../img/todomvc.png)
![todo](../img/todomvc01.png)
![todo](../img/todomvc02.png) 

## 기술
1 . session 
 - secret – 쿠키를 임의로 변조하는것을 방지하기 위한 값 입니다. 이 값을 통하여 세션을 암호화 하여 저장합니다.
 - resave – 세션을 언제나 저장할 지 (변경되지 않아도) 정하는 값입니다. express-session documentation에서는 이 값을 false 로 하는것을 권장하고 필요에 따라 true로 설정합니다.
 - saveUninitialized – 세션이 저장되기 전에 uninitialized 상태로 미리 만들어서 저장합니다.
 
2. 이벤트루프
 - nextTick : https://nodejs.org/ko/docs/guides/event-loop-timers-and-nexttick/ 
