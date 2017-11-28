
# DOM 조작
앞서 선택과 탐색을 알아봤으니 그 가져온 결과를 어떻게 조작할지에 대해서 알아볼게요

## innerText
텍스트 노드의 값을 바꿀 수 있습니다.
```html
<div id="txt_status">수정전</div>

var div = document.getElementById('txt_status');
div.innerText = '수정후'; // 수정후로 잘 바뀌셨나요??
```
## className
class의 값을 변경또는 검색할 수 있어요
```html
<div class="root" id="root">Root</div>

var div = document.getElementById('root');
console.log(div.className); // root
div.className = 'modify'; // 개발자 도구로 확인해보세요 class가 modify로 바뀌었나요?
```

## id 
id의 값을 변경또는 검색할 수 있어요
```html
<div class="root" id="root">Root</div>

var div = document.querySelector('.root');
console.log(div.id); // root
div.id = 'modify'; // 개발자 도구로 확인해보세요 id가 modify로 바뀌었나요?
```

## Attribute
hasAttribute(attribute) : 속성을 가지고 있는지 확인합니다.
getAttribute(attribute) : 속성의 값을 가져옵니다.
setAttribute(attribute, value) : 속성의 값을 바꿀 수 있습니다.
removeAttribute(attribute) : 속성의 값을 제거할 수 있어요

```html
<div class="root" id="root">안녕하세요</div>

var div = document.getElementById('root');
console.log(div.hasAttribute('class')); // class의 존재여부
console.log(div.getAttribute('class')); // class 속성의 값
div.setAttribute('class', 'modify'); // class 속성의 값을 변경
console.log(div.getAttribute('class')); // 변경된 후의 class 값 
div.removeAttribute('class'); // 클래스 제거 
div.className = 'newClass'; // class 이름 추가
```

attributes : 선택된 태그의 전체 속성을 볼 수 있습니다.
clientHeight, clientWidth : scrollbar, margin, border를 제외한 높이와 너비를 반환해 줍니다.
scrollHeight, scrollWidth : 스크롤 가능한 범위까지 포함한 태그의 높이와 너비를 반환해 줍니다.
offsetHeight, offsetWidth : 태그의 margin만 제외한 높이와 너비를 반환해 줍니다.

style 제어 : https://jsfiddle.net/fbzffnd4/ 참고해주세요
 
다 외우지 않으셔도되요 필요할때마다 찾아보고 사용하시면 됩니다. 그래도 이런것들이 있어야겠죠?? 그래야 찾아서 쓸테니까요
  
## ClassName 
Class의 이름을 추가할 수 있습니다.
 ```html
<div class="root" id="root">안녕하세요</div>
 
var div = document.getElementById('root');
div.className = 'newClass'; // class 이름 추가
console.log(div.getAttribute('class')); // newClass
```

# 태그 만들기
실직적인 HTML를 조작하기전에 Element, TextNode 를 생성하는 법을 살펴보고 갈게요
 
## document.createElement
```js
document.createElement(태그이름); // 이런식으로 만듭니다.
```

div를 하나 만들어보겠습니다.   
```js
var div = document.createElement('div'); // 바로 생성되는 것이 아니라 메모리에 저장을 시켜놓습니다.
```

## document.createTextNode
```js
document.createTextNode(텍스트); // 이런식으로 만듭니다.
```
앞에 만든 div에 텍스트를 추가해보겠습니다.
```js
var div = document.createElement('div'); // 바로 생성되는 것이 아니라 메모리에 저장을 시켜놓습니다.
var text = document.createTextNode('안녕하세요');  // 바로 생성되는 것이 아니라 메모리에 저장을 시켜놓습니다. 

div.appendChild(text); // appendChild는 뒤에서 배울에요 자식요소로 주가해주는 함수입니다.
```

## document.createDocumentFragment
**Reflow와 Repaint**를 들어보셨나요?! 이건 중요한 개념이라 다른 포스트에서 세세하게 다루겠습니다.   
간단히 설명드리면 처음 HTML이 렌더링될때 CSS에따른 (색상, 위치 등)을 계산하여 렌더 트리를 생성합니다.   
생성된걸 토대로 브라우저에 그려줍니다.    
우리가 동적으로 만든 태그를 사이에 껴넣으면 어떻게 될까요? 또 다시 위치를 잡아줘야하고 다시 그려줘야되겠죠?   
이 과정을 **Reflow와 Repaint**이라고합니다.

우리가 div를 100개를 추가한다고 가정할게요. 100번의 반복문을 돌면서 100개의 태그를 추가했습니다.    
우리는 반복문이 알아서 추가해주니까 아주편하지만 그것을 계산하고 그리고 과정을 100번을 반복하는 브라우저 입장에서는 죽을 맛 인거죠    

그래서 DocumentFragment라는 가상의 공간을 만들어서 그곳에 100개를 추가하고 단 한번만 실제 DOM에 추가를 해주는 것입니다.
100번 **Reflow와 Repaint**이 일어날 것을 한번만 계산하도록 해주는 것이지요 

```js
var div = document.createElement('div'); 
var text = document.createTextNode('안녕하세요');  
div.appendChild(text);

var fragment =  document.createDocumentFragment();

var index = 0;
while(++index < 100) {
  fragment.appendChild(div); // appendChild로 fragment에 넣어줍니다.  appendChild는 곧 배울거에요 지금은 그냥 추가하는 용도로 쓰인다는 것만 알아주세요
}
```

## HTML 콘텐츠 조작
innerText : 텍스트를 변경 시킬 수 있습니다.     
innerHTML : 텍스트를 변경 또는 태그를 추가시켜줄 수 있습니다.

```html
<div>수정전</div>
<ul class="list_item">
    
</ul>

var div = document.querySelector('div');
div.innerText = '수정후';

var ul = document.querySelector('.list_item');
ul.innerHTML = '<li>item추가</li>' 
```
태그 추가와 텍스트 변경 잘되었나요??

## appendChild
요소.appendChild(추가할것)를 하게되면 요소의 자식으로 추가됩니다.
```html
<div id="root"></div>

var fragment =  document.createDocumentFragment();

var index = 0;
while(++index < 20) {
  var div = document.createElement('div'); 
  var text = document.createTextNode('안녕하세요');  
  div.appendChild(text);
  fragment.appendChild(div);
}
document.getElementById('root').appendChild(fragment);
```
root 안으로 잘 추가되시나요? 

## removeChild
선택된 자식요소를 삭제합니다.
```html 
<ul id="list_item">
    <li>item1</li>
    <li>item2</li>
    <li>item3</li>
</ul>
var ul = document.getElementById('list_item');
console.log(ul.children);
ul.removeChild(ul.children[0]); // children을 이용하면 자식들을 가져올 수 있습니다.  
```

## insertBefore
부모.insertBefore(추가, 기준) 을 넣어주시면 기준의 형제태그로 넣을 수 있습니다.

```html 
<ul class="list_item">
   <li id="item_1">기준노드</li>
</ul>

var ul = document.querySelector('.list_item');
var li = document.getElementById('item_1');

var newLi = document.createElement('li');
var text = document.createTextNode('추가');
newLi.appendChild(text);

ul.insertBefore(newLi, li);
```

새로 추가된 li가 #item_1의 형제요소로 잘 들어갔나요??

더 많지만 필요할때마다 알아보도록해요!! 분량이 너무 많아서 최대한 쪼개서 올리긴 했지만 많은 양에 절대 포기하지마시구!    
절대 외울 필요없습니다. 필요할때마다 보세요!!  