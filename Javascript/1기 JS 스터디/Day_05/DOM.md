# DOM (Document Object Model)
DOM에 대해서 알아보겠습니다. 내용이 많아서 지루하실까봐 포스트를 3단계(선택, 탐색, 조작)로 나눴습니다.

브라우저의 렌더링 엔진이 HTML을 브라우저가 이해할 수 있는 구조로 메모리에 적재를 하는데 이를 DOM이라고 합니다.    
HTML의 중첩된 태그로 구성된 계층적인 구조가 DOM에서는 객체로 만들어지고 부모 자식 형제 관계의 트리구조로 이루어집니다.         

> HTML (Hyper Text Markup Language)     
  HTML은 마크업 언어입니다. 웹 브라우저가 콘텐츠를 표현하는 방법을 말합니다.    

정적인 웹페이지에 접근하여 동적으로 웹페이지를 변경할 수 있도록 DOM에 접근하여 요소를 변경할 수 있게 도와주는 것이 DOM API입니다.
      
> API (Application Programming Interface)
  응용 프로그램에서 사용할 수 있도록, 운영 체제나 프로그래밍 언어가 제공하는 기능을 제어할 수 있게 만든 인터페이스를 뜻합니다. 
  
``` html
<html>
  <head>
    <style>
      .item  { color: #999; }
    </style>
  </head>
  <body>
    <div>
      <h1>HTML 입니다</h1>
      <ul>
        <li class="item">Appear</li>
      </ul>
    </div>
  </body>
</html>
```

위의 HTML이 DOM으로 변경된다면 

```js
{
   document: {
      html: {
        head: {},
        body: {
          div : {
          	h1 :{},
          	ul :{
          		li :{}
          	}
          }
        }
      }
    }
 }
```
이런식으로 DOM Tree객체가 만들어집니다.  
Document는 DOM Tree의 가장 최상위입니다. 모든 요소는 Document 객체의 자식에요


> 왜 DOM Tree라고 부를까요?    
  계층구조를 이루고 있기때문에요. Document아래 HTML아래 Head형제 Body이런식으로 말이죠! 
  트리구조에는 Root가 존재해야합니다. 우리는 Document겠죠?
  

![자바스크립트](/Javascript/1기%20JS%20스터디/public/dom.png)

## Node
DOM Tree는 Node들로 구성되어있습니다. Node에 대해서 알아보겠습니다.

- Document Node : 트리의 최상위 노드입니다. Element Node와 Text Node에 접근하려면 Document를 통해야합니다.
- Element Node : `<div></div>, <span></span>`같은 태그들을 의미합니다.
- Text Node : `<span>안녕하세요 Appear입니다.</span>` 에서 "안녕하세요 Appear입니다." 가 Text Node 입니다.

이런 요소들을 Node라고 부릅니다.

# DOM 선택
자바스크립트에서는 DOM을 제어할 수 있게 API를 지원해준다고 했었죠?     
기본적인 것들을 알아봤으니 이제 직접 실습하면서 볼게요!   
제이쿼리가 얼마나 감사한지 느낄 시간입니다 ..      

먼저 노드를 Select해 오는 방법들을 알아볼게요. 참, 찾아지는 노드들을 담고있는 배열은 다 **유사배열**입니다. 주의하세요!   

### document.getElementById(id)
id 속성값으로 요소 노드를 선택해 올 수 있습니다. 
```html
<div id="root"></div>

var div = document.getElementById('root'); 

console.log(div); // <div id="root"></div>
console.log(div.__proto__);           // HTMLDIVElement
console.log(div.__proto__.__proto__); // HTMLElement
console.log(div.__proto__.__proto__.__proto__);           // Element
console.log(div.__proto__.__proto__.__proto__.__proto__); // Node
```
타고 올라가면서 어떤게 찍히는지 한번 확인해보세요! 

### document.querySelector(cssSelector)
CSS Selector를 이용해서 노드를 선택할 수 있습니다. 복수개가 선택된 경우, 첫번째 요소만 반환한다.
```html
<ul class="list_item">
    <li id="item_1">item1</li>
    <li class="item_2">item2</li>
</ul>
```
1.태그를 이용해서 찾기
```js
var ul = document.querySelector('ul'); 
console.log(ul);   
/*
선택한 ul이 들어있는거 보이시죠? 
<ul class="list_item">
    <li id="item_1">item1</li>
    <li class="item_2">item2</li>
</ul>
*/
var li = ul.querySelector('li'); 
console.log(li); // <li>item1</li> 중복된다면 첫번째 요소만 가져온다구 그랬죠 !?
```
여기서 한가지 방법을 알려드리자면 var li = ul.querySelector('li'); 이부분 보시면 ul에 querySelector를 했잖아요?      
만약 ul을 통하지않고 ('ul li')를 하게된다면 매실행때마다 ul을 찾아야합니다.     
li는 ul을 통해서 찾아야되기 떄문에 ul을 최초한번 찾아 변수에 담아놓고 저장된 ul을 통해서 찾습니다.       
이것을 캐싱해 둔다고 이야기합니다.   
   
2.Class를 통해서 찾기
Html은 맨위에 선언한 것을 재활용할 거에요! CSS Selector와 마찬가지로 Class는 .을 붙여줍니다.   

```js
var li = document.querySelector('.item_2');  
console.log(li); // <li class="item_2">item2</li> 
```

3.Id를 통해서 찾기
위에 document.querySelector를 통해서 찾는방법과 querySelector를 통해서 찾는 방법 2가지가 있습니다. id는 #을 붙여줍니다.   

```js
var li = document.querySelector('#item_1');  
console.log(li); // <li id="item_1">item1</li>
```

간단하죠?? querySelector는 중복되는 요소들은 가져오지 못합니다. 만약에 중복되는 요소들도 다가져오고 싶다면 어떻게 해야될까요??  

### document.querySelectorAll(cssSelector)
querySelector는 중복된 값이 있다면 첫번째 요소만 반환했지만 All을 사용하게되면 중복된 요소들도 가져올 수 있어요.    
querySelector와 사용법은 똑같습니다.

```html
<div>
    <span class="item">1</span>
    <span class="item">2</span>
    <span class="item">3</span>
</div>

var elems = document.querySelectorAll('.item');
console.log(elems); // [span.item, span.item, span.item]
```
이때 노드들이 담긴 배열은 유사배열입니다.

### document.getElementsByClassName(class)
해당 Class 값을 가진 요소 노드를 다 가져올 수 있습니다.    
주의 하실점은 IE9 이상에서만 동작합니다.

```html
<div>
    <span class="item">1</span>
    <span class="item">2</span>
    <span class="item">3</span>
</div>

var elems = document.getElementsByClassName('item');
console.log(elems); // [span.item, span.item, span.item]
```
이때 노드들이 담긴 배열은 유사배열입니다.

### document.getElementsByTagName(tagName)
태그 이름으로도 요소 노드를 가져올 수 있습니다.
```html
<ul>
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
</ul>

var liList = document.getElementsByTagName('li');
console.log(liList); // [li, li, li]
```
이때 노드들이 담긴 배열은 유사배열입니다.
