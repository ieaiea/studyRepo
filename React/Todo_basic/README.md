# 오늘의 할일

## 프로젝트 개요 
하루 목표를 정하고 그에 대한 이야기를 나눌 수 있는 공간이 필요해서 만들게 되었습니다.

## 사용된 기술 
React.js / Node.js / HTML & CSS & Sass / Webpack

## 기능 
Todo 추가, 삭제, 수정, 댓글 추가, 삭제, 수정 
- components
  - Header 
    - Header : Todo 추가
  - Content 
    - Content (Todo) : Todo 뷰
    - ContentList (Todo Container) : Todo 삭제, 수정, 상태값 변경, 댓글 추가 
    - CommentContainer : 댓글 추가
    - Comment (Comment) : 댓글 뷰
  - Footer
    - Footer : 필터링   
   
## 개발일지 
- 2017.09.21 : 마크업 개발 & 서버 & 리액트 세팅
- 2017.09.22 : 목표추가, 목표리스트불러오기, 목표삭제 구현 (DB 연동 x 목데이터 사용)
- 2017.09.25 : AutoTextArea, TimeAgo, 댓글 추가, Todo 상태값 변경 구현
- 2017.09.26 : Update, Filter, Router 구현

## ETC
- Classnames
https://www.npmjs.com/package/classnames
- Auto TextArea
https://www.npmjs.com/package/react-textarea-autosize
- TimeAgo
https://www.npmjs.com/package/react-timeago
- Ref
https://velopert.com/1148

## 브렌치
1. 01_CRD : 목표추가, 목표리스트불러오기, 목표삭제 구현
2. 02_Comment : AutoTextArea, TimeAgo, 댓글 추가, Todo 상태값 변경 구현
3. 03_Update : Update, Filter, Router 구현

## 느낀점
1. 주 State가 TodoList 이다보니 최대한 쪼개보려해도 App이 너무 방대해짐...
2. 부모 - 자식 / 자식 - 부모 - 자식간의 State 통신이 너무 복잡하다. 리덕스의 필요성을 느꼈다.. 
3. Dom접근이 아직까지는 익숙해서 State 기반으로 다둘라고 하기보다 Dom으로 많이 접근하려해 많은 고난이있었다...