# React TodoList
리액트 투두 리스트

## 환경구성 
- server : Node.js
- front : React.js
- bundle : Webpack
- preset : es6

bundle = React(Webpack), Node(Babel-cli)

Server => bundle => ./root/build/index.js(번들링된파일) => run => env(dev, product)판별 

Front => bundle => ./root/public/bundle.js(번들링된파일) => public/index.html에서 bundle.js 호출 
=> server에서 index.html을 바라보고있음

