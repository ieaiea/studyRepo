# 자바스크립트란?
웹페이지들은 간단하게 기본적으로 다음과 같은 구조로 이루어져 있습니다.    
자바스크립트는 HTML, CSS와 함께 웹을 구성하는 요소중 하나로 웹브라우저에서 동작하는 언어입니다. 
* [HTML](https://developer.mozilla.org/ko/docs/Learn/HTML/Introduction_to_HTML/Getting_started) : 현재 우리가 보고있는 페이지를 어떻게 브라우저에 보여줄지 알려주는 마크업 언어
* [CSS](https://developer.mozilla.org/ko/docs/Web/CSS/%EC%8B%9C%EC%9E%91%ED%95%98%EA%B8%B0/CSS%EB%9E%80) : HTML로 그려준것을 어떻게 이쁘게 보여줄지
* [JAVASCRIPT](https://developer.mozilla.org/ko/docs/Learn/JavaScript/First_steps/What_is_JavaScript) :  이쁘게 보여지는것들을 어떻게 동작시킬지

## 자바스크립트에 영향을 준 언어
자바스크립트의 프로그래밍 스타일은 함수형 프로그래밍과 객체지향 프로그래밍을 함께 사용합니다.
* 자바 : 문법, '원시 값 vs 객체 관계'
* 스키마와 오크  : 함수
* 셀프 : 프로토타입 상속
* 펄과 파이썬 : 문자열과 배열, 정규표현식

## 역사
초기의 자바스크립트는 웹페이지의 보조적 기능을 수행하기 위한 용도로 사용되었었습니다. 중요한 로직들은 서버사이드에서 처리를 하고 클라이언트단에서는 받은 데이터 또는 HTML등을 렌더링 해주는 수준이었습니다.   
JQuery 같은 라이브러리의 등장으로 DOM을 쉽게 다룰 수 있어졌고, 브라우저엔진과 웹의 발전으로 서버사이드에서 하던일들의 많은 부분들을 클라이언트단으로 이동되었습니다.

* 1997년 : DOM 제어를 이용하여 컨텐츠와 스타일의변화를 주는 것이 가능해졌다. IE4와 넷스케이프 등 동적 HTML제어가 등장하였습니다.
* 1999년 : IE5에서 서버요청을 보내고 텍스트형식의 데이터를 받는것이 가능해졌습니다.
* 2001년 : 더글락스 크락포드는 텍스트 형식으로 데이터를 저장하는 문법을 [JSON](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/JSON)이라 칭하고 문서화했습니다.
* 2005년 : 비동기 방식의 Ajax의 등장 대표적으로 Google Maps가 있다. Ajax 등장이후 JSON이 인기를 끌기시작했습니다.
* 2006년 : DOM을 간편하게 할 수 있도록 JQuery가 API를 제공하여 Javascript 에게 날개를 달아 주는 시기였습니다. 
* 2007년 : 애플이 [WebKit](https://ko.wikipedia.org/wiki/%EC%9B%B9%ED%82%B7)엔진을 소개하였습니다. WebKit은 안드로이드의 메인엔진이고,iOS의 유일한 엔진으로 모바일 시장을 지배하고 있습니다.
* 2008년 : 구글 크롬 [V8](https://ko.wikipedia.org/wiki/%ED%81%AC%EB%A1%AC_V8)엔진의 등장으로 자바스크립트의 느리다는 인식을 바꿔주는 큰 발전이있었습니다.   
* 2009년 : Node.js의 등장 서버사이드언어를 자바스크립트로 구성할 수 있게되었습니다. 

## 동작원리
웹페이지를 서버에요청하고 응답을받아 브라우저에 표시를 합니다. 브라우저는 서버로부터 Html, CSS, Javascript파일을 응답받습니다. Html, CSS 파일은 렌더링 엔진의 HTML파서와 CSS파서에 의해 파싱되어 DOM, [CSSOM(CSS Object Model)](https://developer.mozilla.org/ko/docs/Web/API/CSS_Object_Model)트리로 파싱되고 렌더트리로 결합됩니다
HTML파서는 Script태그를 만나면 DOM생성 프로세스를 중지하고 Javascript 엔진에게 제어권한을 넘깁니다. 태그위치에따라 DOM생성이 지연될 수 있습니다. (이렇기떄문에 DOM영역 아래에 스크립트태그를 붙이는 것 입니다.)

* 브라우저동작원리 : http://d2.naver.com/helloworld/59361
* WebKit 구동원리 : http://rtcc.hanyang.ac.kr/sitedata/2015_2_ISP/howbrowserswork_20150915.pdf    

## 인터프리트
자바스크립트 책의 앞부분을 보면 자바스크립트는 인터프리터 동작방식의 언어다 라는 말을 본적이 있을겁니다. 

> 여기서 인터프리터란 ? 위에서부터 아래로 코드를 한줄한줄 기계어로변환해가며 실행하는방식을 인터프리터라고합니다.     
 
자바스크립트는 이런 인터프리터 방식을 택한 언어였습니다. 예전 브라우저에서는 자바스크립트가 웹브라우저에서 동작하는 언어이고 컴파일이 필요없다라는 말이있습니다.    
하지만 요즘 브라우저(크롬, 오페라, 파이어폭스, 사파리 등등…)에서는 JIT 컴파일 방식을 택하여 Javascript 코드를 해석하고 있습니다. 

> JIT(Just-In-Time) 컴파일이란?       
컴파일(코드를 기계어로 변환해주는 과정) + 인터프리터방식입니다. Just-In-Time 말 그대로 그 순간 즉, 프로그램 실행시점에 필요한 부분을 바로 컴파일하는 동적 컴파일 방식입니다. 기존 인터프리터방식보다 빠른 실행속도를 보여줍니다. 하지만 JIT 컴파일링은 실행될 때 최초 실행되기 때문에, 최초실행에서는 조금 느릴 수 있습니다.
