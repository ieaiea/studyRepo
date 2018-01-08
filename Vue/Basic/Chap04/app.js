// 컴포넌트 선언
var Foo = { template : '<h2>Foo</h2>'};
var Bar = { template : '<h2>Bar</h2>'};

// 경로에따른 컴포넌트
var routes = [
  {path : '/foo', component : Foo},
  {path : '/bar', component : Bar}
];

// 라우터 선언
var router = new VueRouter({
  routes : routes
});

// 인스턴스 선언
var app = new Vue({
  router : router
}).$mount('#app');