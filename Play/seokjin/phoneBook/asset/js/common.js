// 생성자함수
var Person = (function(){
	var Person = function(name, phone){
		this.name = name;
		this.phone = phone;
	};
	Person.prototype.getName = function(){
		return this.name;
	};
	Person.prototype.getPhone = function(){
		return this.phone;
	};
	return Person;
})();

// 전화번호부
var Book = (function(){
	var Book = function(name){
		this.list = [];
	};

	// 등록
	Book.prototype.addObj = function(name, phone){		
		this.list.push( new Person(name, phone) );
	};
	Book.prototype.showList = function(){
		console.log(this.list);
	};

	// 이름으로 index찾기
	Book.prototype.findIndex1 = function(name, phone){
		var index = -1;
		this.list.forEach(function(v, i){
			if(v.getName() === name){
				index = i;
			}
		});
		return index;
	};

	// 이름과 번호로 index찾기
	Book.prototype.findIndex2 = function(name, phone){
		var index = -1;
		this.list.forEach(function(v, i){
			if( v.getName() === name && v.getPhone() === phone ){
				index = i;
			}
		});
		return index;
	};
 
	// 이름으로 검색
	Book.prototype.findPerson = function(name){
		// b.findIndex1(name);
		// console.dir(b.findIndex1(name));
		var idx = b.findIndex1(name);
		if( idx < 0 ){
			result.innerText = "존재하지 않는 이름";
			return false;
		}
		result.innerText = name + ", " + this.list[idx].phone;
	};

	// 이름과 번호로 삭제
	Book.prototype.subObj = function(name, phone){
		var idx = b.findIndex2(name, phone);
		if( idx < 0 ){
			alert("일치하는 이름이 x");
			return false;
		}
		this.list.splice( idx, 1 );
	};

	// 수정
	Book.prototype.modiObj = function(name, phone, modiName, modiPhone){
		var idx = b.findIndex2(name, phone);
		if( idx < 0 ){
			alert("기존이름과 기본번호가 일치x");
			return false;
		}
		this.list.splice( idx, 1, new Person(modiName, modiPhone) );
	};

	return Book;
})();

var b = new Book();

// 함수실행
function event(){
	var registForm = document.getElementById('registForm'),
		searchForm = document.getElementById('searchForm'),
		deleteForm = document.getElementById('deleteForm'),
		modifyForm = document.getElementById('modifyForm');
	registForm.addEventListener('submit', function(e){
		e.preventDefault();
		var registNameVal = document.getElementById('registName').value,
			registNumVal = String( document.getElementById('registNum').value ),
			registNumVal = registNumVal.replace( /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3" );

		b.addObj(registNameVal, registNumVal);
	});
	searchForm.addEventListener('submit', function(e){
		e.preventDefault();
		var searchNameVal = document.getElementById('searchName').value,
			result = document.getElementById('result');
		result.innerText = '';

		b.findPerson(searchNameVal);
	});
	deleteForm.addEventListener('submit', function(e){
		e.preventDefault();
		var deleteNameVal = document.getElementById('deleteName').value,
			deleteNumVal = document.getElementById('deleteNum').value;
			deleteNumVal = deleteNumVal.replace( /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3" );

		b.subObj(deleteNameVal, deleteNumVal);
	});
	modifyForm.addEventListener('submit', function(e){
		e.preventDefault();
		var originNameVal = document.getElementById('originName').value,
			originNumVal = String( document.getElementById('originNum').value ),
			modifyNameVal = document.getElementById('modifyName').value,
			modifyNumVal = String( document.getElementById('modifyNum').value ),
			originNumVal = originNumVal.replace( /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3" ),
			modifyNumVal = modifyNumVal.replace( /(^02.{0}|^01.{1}|[0-9]{3})([0-9]+)([0-9]{4})/,"$1-$2-$3" );

		b.modiObj(originNameVal, originNumVal, modifyNameVal, modifyNumVal);
	});
}
event();