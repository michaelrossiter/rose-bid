jQuery(function($)  {
  
    $(window).scroll(function (event) {
        var x = -($(window).scrollLeft());
        $('#nav-wrap').css('left',x + 'px');
        
    });
    
});