$(function() {
    //Menu 임시로 닫기버튼
    $("#btn_nav").click(function(){
        $('.wrap_gnb').animate({ 'left':'100%'});;
    });
    //특정영역 제외
    $(document).click(function(e){
        if(!$(e.target).is("#btn_nav")){
            $('.wrap_gnb').animate({'left': '-100%'})
        };
    });


    //기본 리스트 윈도우 로드
    var selectItem = $('#charSelect option:selected').text();
    var count = Object.keys(STORE[selectItem]).length;
    $('.total_number').text(count);
    console.log($('#charSelect option:selected').text());

    //JsonList function
    function jsonList(count , selectItem){
        for(var i = 0; i< count; i++) {
            $('.list_friends').append(
                '<li><a href="javascript:;" class="link_friends"><span class="wrap_thumb">' +
                '<img src="images/' + STORE[selectItem][i]["images"] +'" class="thumb_items"/>' +
                '<span class="ico_soldout">' + STORE[selectItem][i]["stock"] + '</span></span>' +
                '<strong class="tit_item">' + STORE[selectItem][i]["name"] + '</strong>' +
                '<span class="price_item">'+ STORE[selectItem][i]["price"] +'원</span></a></li>'
            );
        };
    }
    //Defalut List
    jsonList(count , selectItem);
    //List Change Event
    $('#charSelect').change(function(){
        //선택된 아이템
        selectItem = $('#charSelect option:selected').text();
        //아이템의 갯수
        count = Object.keys(STORE[selectItem]).length;
        $('.total_number').text(count);
        //Json값 붙이기
        $('.list_friends').empty();
        jsonList(count , selectItem);
    });

    //이미지 가로값
    var imgSize = $('.list_slide > li:eq(0) > img').width();
    var liNum = $('.list_slide > li').length -1;
    var maxSize = imgSize * liNum;
    var check = 0;
    var selectCount = 1;
    console.log('현재 브라우저 이미지 사이즈 : ' + imgSize);
    console.log('li 태그 개수 :' + liNum);
    console.log('최대 사이즈 : ' + maxSize);

    //li 클래스 추가 삭제 function
    function liremoveClass(liIndex){
        $('.list_slide_nav > li').eq(liIndex).removeClass('on');
    }
    function liAddClass(liIndex){
        $('.list_slide_nav > li').eq(liIndex).addClass('on');
    }
    //이미지 위치 function
    function tranformEdit(check){
        $('.list_slide > li').css({'transform' : "translate(-"+ check +"px , 0)"});
        $('.list_slide > li').animate({'transform' : "translate(-"+ check +"px , 0)"});
    }

    //뒤로가기버튼
    $('.btn_slide.btn_prev').on('click', function(){
        if(check > 0){
            check-= imgSize;
            tranformEdit(check);
        }else{
           check = 0;
        }
    });
    //앞으로가기버튼
    $('.btn_slide.btn_next').on('click' , function(){
        console.log('next' +  check);
        if(check < maxSize){
            check += imgSize;
            tranformEdit(check);
            if(selectCount <= liNum){
                liremoveClass(selectCount-1);
                liAddClass(selectCount);
                selectCount++;
            }
        }else{
            liremoveClass(selectCount-1);
            liAddClass(0);
            selectCount = 1;
            check = 0;
            tranformEdit(check);
        }
    });

    //선택버튼 보류(if index로 받는게 아니라 새로운 방법을 찾아야함)
    $('.list_slide_nav > li').on('click' , function(){
        if($(this).index() == '0'){
            $('.list_slide_nav > li').removeClass('on');
            $(this).addClass("on");
            tranformEdit(0);
        }else if($(this).index() == '1'){
            $('.list_slide_nav > li').removeClass('on');
            $(this).addClass("on");
            check = maxSize/2;
            tranformEdit(check);
        }else{
            $('.list_slide_nav > li').removeClass('on');
            $(this).addClass("on");
            check = maxSize;
            tranformEdit(check);
        }
    });

    //자동 슬라이드 selectCount=선택박스체크 변수

    var autoSlide = setInterval(function() {
        check+= imgSize;
        if(check <= maxSize){
            tranformEdit(check);
            if(selectCount <= liNum){
                liremoveClass(selectCount-1);
                liAddClass(selectCount);
                selectCount++;
            }
        }else{
            liremoveClass(selectCount-1);
            liAddClass(0);
            selectCount = 1;
            tranformEdit(0);
            check = 0;
        }}, 3000);

    // 마우스
    $('.wrap_slide').hover(function(){
        clearInterval(autoSlide);
    });
    /* 마우스가 떠났을때 이벤트
    $('.wrap_slide').mouseleave(function(){
        window.setInterval( autoSlide , 3000);
    });
    */
    //브라우저가 움직일때마다 resize
    $(window).resize(function(){
        imgSize = $('.list_slide > li:eq(0) > img').width();
        maxSize = imgSize * liNum;
        var add = 0;
        if(imgSize > check){
            add = imgSize - check;
            check+= add;
            add = 0;
        }else{
            add = check - imgSize;
            check-= add;
            add = 0;
        }
        tranformEdit(check);
    })

    //스와이프 오른쪽 왼쪽
    $('.list_slide').bind('swiperight', function(e){
        if(check < maxSize){
            console.log(maxSize/check);
            check += imgSize;
            tranformEdit(check);
        }else{
            console.log('초과 : ' + check);
            check = 0;
            tranformEdit(check);
        }
    });
    $('.list_slide').bind('swipeleft', function(e){
        if(check > 0){
            check-= imgSize;
            tranformEdit(check);
        }else{
            check = 0;
        }
    });
});


