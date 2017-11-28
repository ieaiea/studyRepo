(function ($) {
  var FR = FR || {};
  var data = STORE || {};

  FR.module = {
    store: (function () {
      var $select = $('.select_friends');
      var $itemArea = $('.list_friends');
      var $numberArea = $('.total_number');

      var settingOptions = function(){
        var optionList = $("#list_option").html();
        var sTemplate = Handlebars.compile(optionList);

        for(title in data){
          $select.append(sTemplate({title : title}))
        }
      };

      var event = function(){
        $select.on('change', function(e){
          render(data[this.value]);
        });
      };

      var render = function(items){
        $itemArea.empty();
        $numberArea.text(items.length);

        var itemsTemp = $("#list_item").html();
        var sTemplate = Handlebars.compile(itemsTemp);

        items.forEach(function(v, i){
          $itemArea.append(sTemplate(v))
        })
      };

      var init = function(){
        event();
        settingOptions();
      };

      init()
    })(),
    nav : (function(){
      var $navBar = $('.wrap_nav');
      var $navBtn = $('.btn_nav');
      var $closeBtn = $('.nav_close');

      var event = function(){
        $navBtn.on('click', function(e){
          FR.helper.swapClass($navBar, 'open', 'close');
        });
        $closeBtn.on('click', function(e){
          FR.helper.swapClass($navBar, 'close', 'open');
        });
      };

      var init = function(){
        event();
      };

      init();
    })()
  };

  FR.helper = {
    swapClass : function(target, aclass, rclass){
      $(target).addClass(aclass);
      $(target).removeClass(rclass);
    }
  }



})(jQuery)

