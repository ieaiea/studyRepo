# 오늘의 할일

## 프로젝트 개요 
하루 목표를 정하고 그에 대한 이야기를 나눌 수 있는 공간이 필요해서 만들게 되었습니다.

## 사용된 기술 
React.js / Node.js / HTML & CSS & Sass / Webpack

## 기능 
Todo 추가, 삭제, 수정, 댓글 추가, 삭제, 수정 
- components
  - Header 
    - Header 
  - Content 
    - Content (Todo)
    - Comment (Comment)
  - Footer
    - Footer : 필터링
    
- Container 
  - Header 
    - Header : Todo 추가
  - Comment  
    - CommentContainer : 댓글 추가
  -Content      
    - ContentList (Todo Container) : Todo 삭제, 수정, 상태값 변경
    
- Actions
    - ActionTypes : 액션 타입
    - index : 액션생선자
    
- Reducers
    - todo : 액션에 따른 Todo State 변경
   
## 개발일지 
- 2017.09.27 : 기존 코드 Redux 구조로 변경 
- 2017.09.28 : Todo CRUD 구현, CSS 위치 components로 변경

## ETC
- Classnames
https://www.npmjs.com/package/classnames
- Auto TextArea
https://www.npmjs.com/package/react-textarea-autosize
- TimeAgo
https://www.npmjs.com/package/react-timeago
- Ref
https://velopert.com/1148
- React redux 
https://github.com/reactjs/react-redux
- React Alert
https://www.npmjs.com/package/react-alert

## 브렌치
01_CRUD_REDUX : 기존 코드 Redux 구조로 변경, Todo CRUD 구현 
02_COMMENT_REDUX : 댓글을 Redux 구조로 변경

## 느낀점
1. Redex를 쓰니 확실히 데이터의 흐름이 눈에 보입니다.
2. 하지만 Redux가 익숙치않아 아직은 조금 복잡한것 같습니다.
3. CSS가 한곳에 모여있어 스타일 수정이 불편하여 다음 데이터베이스 연동시에는 컴포넌트에 css를 import시켜야겠습니다.