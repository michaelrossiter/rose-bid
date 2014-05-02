jQuery(function($)  {
  
    $(window).scroll(function (event) {
        var x = -($(window).scrollLeft());
        $('#nav-wrap').css('left',x + 'px');
        
    });
    
});
!function(a){"use strict";"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){"use strict";var b=window.Slick||{};b=function(){function c(c,d){var f,g,e=this;if(e.defaults={accessibility:!0,arrows:!0,autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(a,b){return'<button type="button">'+(b+1)+"</button>"},dots:!1,draggable:!0,easing:"linear",fade:!1,infinite:!0,lazyLoad:"ondemand",onBeforeChange:null,onAfterChange:null,onInit:null,onReInit:null,pauseOnHover:!0,responsive:null,slide:"div",slidesToShow:1,slidesToScroll:1,speed:300,swipe:!0,touchMove:!0,touchThreshold:5,useCSS:!0,vertical:!1},e.initials={animating:!1,autoPlayTimer:null,currentSlide:0,currentLeft:null,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,$list:null,touchObject:{},transformsEnabled:!1},a.extend(e,e.initials),e.activeBreakpoint=null,e.animType=null,e.animProp=null,e.breakpoints=[],e.breakpointSettings=[],e.cssTransitions=!1,e.paused=!1,e.positionProp=null,e.$slider=a(c),e.$slidesCache=null,e.transformType=null,e.transitionType=null,e.windowWidth=0,e.windowTimer=null,e.options=a.extend({},e.defaults,d),e.originalSettings=e.options,f=e.options.responsive||null,f&&f.length>-1){for(g in f)f.hasOwnProperty(g)&&(e.breakpoints.push(f[g].breakpoint),e.breakpointSettings[f[g].breakpoint]=f[g].settings);e.breakpoints.sort(function(a,b){return b-a})}e.autoPlay=a.proxy(e.autoPlay,e),e.autoPlayClear=a.proxy(e.autoPlayClear,e),e.changeSlide=a.proxy(e.changeSlide,e),e.setPosition=a.proxy(e.setPosition,e),e.swipeHandler=a.proxy(e.swipeHandler,e),e.dragHandler=a.proxy(e.dragHandler,e),e.keyHandler=a.proxy(e.keyHandler,e),e.autoPlayIterator=a.proxy(e.autoPlayIterator,e),e.instanceUid=b++,e.init()}var b=0;return c}(),b.prototype.addSlide=function(b,c,d){var e=this;if("boolean"==typeof c)d=c,c=null;else if(0>c||c>=e.slideCount)return!1;e.unload(),"number"==typeof c?0===c&&0===e.$slides.length?a(b).appendTo(e.$slideTrack):d?a(b).insertBefore(e.$slides.eq(c)):a(b).insertAfter(e.$slides.eq(c)):d===!0?a(b).prependTo(e.$slideTrack):a(b).appendTo(e.$slideTrack),e.$slides=e.$slideTrack.children(this.options.slide),e.$slideTrack.children(this.options.slide).remove(),e.$slideTrack.append(e.$slides),e.$slidesCache=e.$slides,e.reinit()},b.prototype.animateSlide=function(b,c){var d={},e=this;e.transformsEnabled===!1?e.options.vertical===!1?e.$slideTrack.animate({left:b},e.options.speed,e.options.easing,c):e.$slideTrack.animate({top:b},e.options.speed,e.options.easing,c):e.cssTransitions===!1?a({animStart:e.currentLeft}).animate({animStart:b},{duration:e.options.speed,easing:e.options.easing,step:function(a){e.options.vertical===!1?(d[e.animType]="translate("+a+"px, 0px)",e.$slideTrack.css(d)):(d[e.animType]="translate(0px,"+a+"px)",e.$slideTrack.css(d))},complete:function(){c&&c.call()}}):(e.applyTransition(),d[e.animType]=e.options.vertical===!1?"translate3d("+b+"px, 0px, 0px)":"translate3d(0px,"+b+"px, 0px)",e.$slideTrack.css(d),c&&setTimeout(function(){e.disableTransition(),c.call()},e.options.speed))},b.prototype.applyTransition=function(a){var b=this,c={};c[b.transitionType]=b.options.fade===!1?b.transformType+" "+b.options.speed+"ms "+b.options.cssEase:"opacity "+b.options.speed+"ms "+b.options.cssEase,b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.autoPlay=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer),a.slideCount>a.options.slidesToShow&&a.paused!==!0&&(a.autoPlayTimer=setInterval(a.autoPlayIterator,a.options.autoplaySpeed))},b.prototype.autoPlayClear=function(){var a=this;a.autoPlayTimer&&clearInterval(a.autoPlayTimer)},b.prototype.autoPlayIterator=function(){var a=this;a.options.infinite===!1?1===a.direction?(a.currentSlide+1===a.slideCount-1&&(a.direction=0),a.slideHandler(a.currentSlide+a.options.slidesToScroll)):(0===a.currentSlide-1&&(a.direction=1),a.slideHandler(a.currentSlide-a.options.slidesToScroll)):a.slideHandler(a.currentSlide+a.options.slidesToScroll)},b.prototype.buildArrows=function(){var b=this;b.options.arrows===!0&&b.slideCount>b.options.slidesToShow&&(b.$prevArrow=a('<button type="button" class="slick-prev">Previous</button>').appendTo(b.$slider),b.$nextArrow=a('<button type="button" class="slick-next">Next</button>').appendTo(b.$slider),b.options.infinite!==!0&&b.$prevArrow.addClass("slick-disabled"))},b.prototype.buildDots=function(){var c,d,b=this;if(b.options.dots===!0&&b.slideCount>b.options.slidesToShow){for(d='<ul class="slick-dots">',c=0;c<=b.getDotCount();c+=1)d+="<li>"+b.options.customPaging.call(this,b,c)+"</li>";d+="</ul>",b.$dots=a(d).appendTo(b.$slider),b.$dots.find("li").first().addClass("slick-active")}},b.prototype.buildOut=function(){var b=this;b.$slides=b.$slider.children(b.options.slide+":not(.slick-cloned)").addClass("slick-slide"),b.slideCount=b.$slides.length,b.$slidesCache=b.$slides,b.$slider.addClass("slick-slider"),b.$slideTrack=0===b.slideCount?a('<div class="slick-track"/>').appendTo(b.$slider):b.$slides.wrapAll('<div class="slick-track"/>').parent(),b.$list=b.$slideTrack.wrap('<div class="slick-list"/>').parent(),b.$slideTrack.css("opacity",0),b.options.centerMode===!0&&(b.options.infinite=!0,b.options.slidesToScroll=1,0===b.options.slidesToShow%2&&(b.options.slidesToShow=3)),a("img[data-lazy]",b.$slider).not("[src]").addClass("slick-loading"),b.setupInfinite(),b.buildArrows(),b.buildDots(),b.options.accessibility===!0&&b.$list.prop("tabIndex",0),b.setSlideClasses(0),b.options.draggable===!0&&b.$list.addClass("draggable")},b.prototype.checkResponsive=function(){var c,d,b=this;if(b.originalSettings.responsive&&b.originalSettings.responsive.length>-1&&null!==b.originalSettings.responsive){d=null;for(c in b.breakpoints)b.breakpoints.hasOwnProperty(c)&&a(window).width()<b.breakpoints[c]&&(d=b.breakpoints[c]);null!==d?null!==b.activeBreakpoint?d!==b.activeBreakpoint&&(b.activeBreakpoint=d,b.options=a.extend({},b.defaults,b.breakpointSettings[d]),b.refresh()):(b.activeBreakpoint=d,b.options=a.extend({},b.defaults,b.breakpointSettings[d]),b.refresh()):null!==b.activeBreakpoint&&(b.activeBreakpoint=null,b.options=a.extend({},b.defaults,b.originalSettings),b.refresh())}},b.prototype.changeSlide=function(b){var c=this;switch(b.data.message){case"previous":c.slideHandler(c.currentSlide-c.options.slidesToScroll);break;case"next":c.slideHandler(c.currentSlide+c.options.slidesToScroll);break;case"index":c.slideHandler(a(b.target).parent().index()*c.options.slidesToScroll);break;default:return!1}},b.prototype.destroy=function(){var b=this;b.autoPlayClear(),b.touchObject={},a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.unwrap().unwrap(),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style"),b.$slider.removeClass("slick-slider"),b.$slider.removeClass("slick-initialized"),b.$list.off(".slick"),a(window).off(".slick-"+b.instanceUid)},b.prototype.disableTransition=function(a){var b=this,c={};c[b.transitionType]="",b.options.fade===!1?b.$slideTrack.css(c):b.$slides.eq(a).css(c)},b.prototype.fadeSlide=function(a,b){var c=this;c.cssTransitions===!1?(c.$slides.eq(a).css({zIndex:1e3}),c.$slides.eq(a).animate({opacity:1},c.options.speed,c.options.easing,b)):(c.applyTransition(a),c.$slides.eq(a).css({opacity:1,zIndex:1e3}),b&&setTimeout(function(){c.disableTransition(a),b.call()},c.options.speed))},b.prototype.filterSlides=function(a){var b=this;null!==a&&(b.unload(),b.$slideTrack.children(this.options.slide).remove(),b.$slidesCache.filter(a).appendTo(b.$slideTrack),b.reinit())},b.prototype.getCurrent=function(){var a=this;return a.currentSlide},b.prototype.getDotCount=function(){var e,a=this,b=0,c=0,d=0;for(e=a.options.infinite===!0?a.slideCount+a.options.slidesToShow-a.options.slidesToScroll:a.slideCount;e>b;)d++,c+=a.options.slidesToScroll,b=c+a.options.slidesToShow;return d},b.prototype.getLeft=function(a){var c,d,b=this,e=0;return b.slideOffset=0,d=b.$slides.first().outerHeight(),b.options.infinite===!0?(b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideWidth*b.options.slidesToShow,e=-1*d*b.options.slidesToShow),0!==b.slideCount%b.options.slidesToScroll&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=-1*b.slideCount%b.options.slidesToShow*b.slideWidth,e=-1*b.slideCount%b.options.slidesToShow*d)):0!==b.slideCount%b.options.slidesToShow&&a+b.options.slidesToScroll>b.slideCount&&b.slideCount>b.options.slidesToShow&&(b.slideOffset=b.slideCount%b.options.slidesToShow*b.slideWidth,e=b.slideCount%b.options.slidesToShow*d),b.options.centerMode===!0&&(b.slideOffset+=b.slideWidth*Math.floor(b.options.slidesToShow/2)-b.slideWidth),c=b.options.vertical===!1?-1*a*b.slideWidth+b.slideOffset:-1*a*d+e},b.prototype.init=function(){var b=this;a(b.$slider).hasClass("slick-initialized")||(a(b.$slider).addClass("slick-initialized"),b.buildOut(),b.setProps(),b.startLoad(),b.loadSlider(),b.initializeEvents(),b.checkResponsive()),null!==b.options.onInit&&b.options.onInit.call(this,b)},b.prototype.initArrowEvents=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.on("click.slick",{message:"previous"},a.changeSlide),a.$nextArrow.on("click.slick",{message:"next"},a.changeSlide))},b.prototype.initDotEvents=function(){var b=this;b.options.dots===!0&&b.slideCount>b.options.slidesToShow&&a("li",b.$dots).on("click.slick",{message:"index"},b.changeSlide)},b.prototype.initializeEvents=function(){var b=this;b.initArrowEvents(),b.initDotEvents(),b.$list.on("touchstart.slick mousedown.slick",{action:"start"},b.swipeHandler),b.$list.on("touchmove.slick mousemove.slick",{action:"move"},b.swipeHandler),b.$list.on("touchend.slick mouseup.slick",{action:"end"},b.swipeHandler),b.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},b.swipeHandler),b.options.pauseOnHover===!0&&b.options.autoplay===!0&&(b.$list.on("mouseenter.slick",b.autoPlayClear),b.$list.on("mouseleave.slick",b.autoPlay)),b.options.accessibility===!0&&b.$list.on("keydown.slick",b.keyHandler),a(window).on("orientationchange.slick.slick-"+b.instanceUid,function(){b.checkResponsive(),b.setPosition()}),a(window).on("resize.slick.slick-"+b.instanceUid,function(){a(window).width!==b.windowWidth&&(clearTimeout(b.windowDelay),b.windowDelay=window.setTimeout(function(){b.windowWidth=a(window).width(),b.checkResponsive(),b.setPosition()},50))}),a(window).on("load.slick.slick-"+b.instanceUid,b.setPosition)},b.prototype.initUI=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.show(),a.$nextArrow.show()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.show(),a.options.autoplay===!0&&a.autoPlay()},b.prototype.keyHandler=function(a){var b=this;37===a.keyCode?b.changeSlide({data:{message:"previous"}}):39===a.keyCode&&b.changeSlide({data:{message:"next"}})},b.prototype.lazyLoad=function(){var c,d,e,f,b=this;b.options.centerMode===!0?(e=b.options.slidesToShow+b.currentSlide-1,f=e+b.options.slidesToShow+2):(e=b.options.infinite?b.options.slidesToShow+b.currentSlide:b.currentSlide,f=e+b.options.slidesToShow),c=b.$slider.find(".slick-slide").slice(e,f),a("img[data-lazy]",c).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}),b.currentSlide>=b.slideCount-b.options.slidesToShow?(d=b.$slider.find(".slick-cloned").slice(0,b.options.slidesToShow),a("img[data-lazy]",d).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})})):0===b.currentSlide&&(d=b.$slider.find(".slick-cloned").slice(-1*b.options.slidesToShow),a("img[data-lazy]",d).not("[src]").each(function(){a(this).css({opacity:0}).attr("src",a(this).attr("data-lazy")).removeClass("slick-loading").load(function(){a(this).animate({opacity:1},200)})}))},b.prototype.loadSlider=function(){var a=this;a.setPosition(),a.$slideTrack.css({opacity:1}),a.$slider.removeClass("slick-loading"),a.initUI(),"progressive"===a.options.lazyLoad&&a.progressiveLazyLoad()},b.prototype.postSlide=function(a){var b=this;null!==b.options.onAfterChange&&b.options.onAfterChange.call(this,b,a),b.animating=!1,b.setPosition(),b.swipeLeft=null,b.options.autoplay===!0&&b.paused===!1&&b.autoPlay()},b.prototype.progressiveLazyLoad=function(){var c,d,b=this;c=a("img[data-lazy]").not("[src]").length,c>0&&(d=a(a("img[data-lazy]",b.$slider).not("[src]").get(0)),d.attr("src",d.attr("data-lazy")).removeClass("slick-loading").load(function(){b.progressiveLazyLoad()}))},b.prototype.refresh=function(){var b=this;b.destroy(),a.extend(b,b.initials),b.init()},b.prototype.reinit=function(){var a=this;a.$slides=a.$slideTrack.children(a.options.slide).addClass("slick-slide"),a.slideCount=a.$slides.length,a.currentSlide>=a.slideCount&&0!==a.currentSlide&&(a.currentSlide=a.currentSlide-a.options.slidesToScroll),a.setProps(),a.setupInfinite(),a.buildArrows(),a.updateArrows(),a.initArrowEvents(),a.buildDots(),a.updateDots(),a.initDotEvents(),a.setSlideClasses(0),a.setPosition(),null!==a.options.onReInit&&a.options.onReInit.call(this,a)},b.prototype.removeSlide=function(a,b){var c=this;return"boolean"==typeof a?(b=a,a=b===!0?0:c.slideCount-1):a=b===!0?--a:a,c.slideCount<1||0>a||a>c.slideCount-1?!1:(c.unload(),c.$slideTrack.children(this.options.slide).eq(a).remove(),c.$slides=c.$slideTrack.children(this.options.slide),c.$slideTrack.children(this.options.slide).remove(),c.$slideTrack.append(c.$slides),c.$slidesCache=c.$slides,c.reinit(),void 0)},b.prototype.setCSS=function(a){var d,e,b=this,c={};d="left"==b.positionProp?a+"px":"0px",e="top"==b.positionProp?a+"px":"0px",c[b.positionProp]=a,b.transformsEnabled===!1?b.$slideTrack.css(c):(c={},b.cssTransitions===!1?(c[b.animType]="translate("+d+", "+e+")",b.$slideTrack.css(c)):(c[b.animType]="translate3d("+d+", "+e+", 0px)",b.$slideTrack.css(c)))},b.prototype.setDimensions=function(){var a=this;a.options.centerMode===!0?a.$slideTrack.children(".slick-slide").width(a.slideWidth):a.$slideTrack.children(".slick-slide").width(a.slideWidth),a.options.vertical===!1?(a.$slideTrack.width(Math.ceil(a.slideWidth*a.$slideTrack.children(".slick-slide").length)),a.options.centerMode===!0&&a.$list.css({padding:"0px "+a.options.centerPadding})):(a.$list.height(a.$slides.first().outerHeight()*a.options.slidesToShow),a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight()*a.$slideTrack.children(".slick-slide").length)),a.options.centerMode===!0&&a.$list.css({padding:a.options.centerPadding+" 0px"}))},b.prototype.setFade=function(){var c,b=this;b.$slides.each(function(d,e){c=-1*b.slideWidth*d,a(e).css({position:"relative",left:c,top:0,zIndex:800,opacity:0})}),b.$slides.eq(b.currentSlide).css({zIndex:900,opacity:1})},b.prototype.setPosition=function(){var a=this;a.setValues(),a.setDimensions(),a.options.fade===!1?a.setCSS(a.getLeft(a.currentSlide)):a.setFade()},b.prototype.setProps=function(){var a=this;a.positionProp=a.options.vertical===!0?"top":"left","top"===a.positionProp?a.$slider.addClass("slick-vertical"):a.$slider.removeClass("slick-vertical"),(void 0!==document.body.style.WebkitTransition||void 0!==document.body.style.MozTransition||void 0!==document.body.style.msTransition)&&a.options.useCSS===!0&&(a.cssTransitions=!0),void 0!==document.body.style.MozTransform&&(a.animType="MozTransform",a.transformType="-moz-transform",a.transitionType="MozTransition"),void 0!==document.body.style.webkitTransform&&(a.animType="webkitTransform",a.transformType="-webkit-transform",a.transitionType="webkitTransition"),void 0!==document.body.style.msTransform&&(a.animType="transform",a.transformType="transform",a.transitionType="transition"),a.transformsEnabled=null!==a.animType},b.prototype.setValues=function(){var a=this;a.listWidth=a.$list.width(),a.listHeight=a.$list.height(),a.slideWidth=a.options.vertical===!1?Math.ceil(a.listWidth/a.options.slidesToShow):Math.ceil(a.listWidth)},b.prototype.setSlideClasses=function(a){var c,d,e,b=this;b.$slider.find(".slick-slide").removeClass("slick-active").removeClass("slick-center"),d=b.$slider.find(".slick-slide"),b.options.centerMode===!0?(c=Math.floor(b.options.slidesToShow/2),a>=c&&a<=b.slideCount-1-c?b.$slides.slice(a-c,a+c+1).addClass("slick-active"):(e=b.options.slidesToShow+a,d.slice(e-c+1,e+c+2).addClass("slick-active")),0===a?d.eq(d.length-1-b.options.slidesToShow).addClass("slick-center"):a===b.slideCount-1&&d.eq(b.options.slidesToShow).addClass("slick-center"),b.$slides.eq(a).addClass("slick-center")):a>0&&a<b.slideCount-b.options.slidesToShow?b.$slides.slice(a,a+b.options.slidesToShow).addClass("slick-active"):(e=b.options.infinite===!0?b.options.slidesToShow+a:a,d.slice(e,e+b.options.slidesToShow).addClass("slick-active")),"ondemand"===b.options.lazyLoad&&b.lazyLoad()},b.prototype.setupInfinite=function(){var c,d,e,b=this;if((b.options.fade===!0||b.options.vertical===!0)&&(b.options.centerMode=!1),b.options.infinite===!0&&b.options.fade===!1&&(d=null,b.slideCount>b.options.slidesToShow)){for(e=b.options.centerMode===!0?b.options.slidesToShow+1:b.options.slidesToShow,c=b.slideCount;c>b.slideCount-e;c-=1)d=c-1,a(b.$slides[d]).clone().attr("id","").prependTo(b.$slideTrack).addClass("slick-cloned");for(c=0;e>c;c+=1)d=c,a(b.$slides[d]).clone().attr("id","").appendTo(b.$slideTrack).addClass("slick-cloned");b.$slideTrack.find(".slick-cloned").find("[id]").each(function(){a(this).attr("id","")})}},b.prototype.slideHandler=function(a){var b,c,d,e,f=null,g=this;return g.animating===!0?!1:(b=a,f=g.getLeft(b),d=g.getLeft(g.currentSlide),e=0!==g.slideCount%g.options.slidesToScroll?g.options.slidesToScroll:0,g.currentLeft=null===g.swipeLeft?d:g.swipeLeft,g.options.infinite===!1&&(0>a||a>g.slideCount-g.options.slidesToShow+e)?(b=g.currentSlide,g.animateSlide(d,function(){g.postSlide(b)}),!1):(g.options.autoplay===!0&&clearInterval(g.autoPlayTimer),c=0>b?0!==g.slideCount%g.options.slidesToScroll?g.slideCount-g.slideCount%g.options.slidesToScroll:g.slideCount-g.options.slidesToScroll:b>g.slideCount-1?0:b,g.animating=!0,null!==g.options.onBeforeChange&&a!==g.currentSlide&&g.options.onBeforeChange.call(this,g,g.currentSlide,c),g.currentSlide=c,g.setSlideClasses(g.currentSlide),g.updateDots(),g.updateArrows(),g.options.fade===!0?(g.fadeSlide(c,function(){g.postSlide(c)}),!1):(g.animateSlide(f,function(){g.postSlide(c)}),void 0)))},b.prototype.startLoad=function(){var a=this;a.options.arrows===!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.hide(),a.$nextArrow.hide()),a.options.dots===!0&&a.slideCount>a.options.slidesToShow&&a.$dots.hide(),a.$slider.addClass("slick-loading")},b.prototype.swipeDirection=function(){var a,b,c,d,e=this;return a=e.touchObject.startX-e.touchObject.curX,b=e.touchObject.startY-e.touchObject.curY,c=Math.atan2(b,a),d=Math.round(180*c/Math.PI),0>d&&(d=360-Math.abs(d)),45>=d&&d>=0?"left":360>=d&&d>=315?"left":d>=135&&225>=d?"right":"vertical"},b.prototype.swipeEnd=function(b){var c=this;if(c.$list.removeClass("dragging"),void 0===c.touchObject.curX)return!1;if(c.touchObject.swipeLength>=c.touchObject.minSwipe)switch(a(b.target).on("click.slick",function(b){b.stopImmediatePropagation(),b.stopPropagation(),b.preventDefault(),a(b.target).off("click.slick")}),c.swipeDirection()){case"left":c.slideHandler(c.currentSlide+c.options.slidesToScroll),c.touchObject={};break;case"right":c.slideHandler(c.currentSlide-c.options.slidesToScroll),c.touchObject={}}else c.touchObject.startX!==c.touchObject.curX&&(c.slideHandler(c.currentSlide),c.touchObject={})},b.prototype.swipeHandler=function(a){var b=this;if("ontouchend"in document&&b.options.swipe===!1)return!1;if(b.options.draggable===!1&&!a.originalEvent.touches)return!1;switch(b.touchObject.fingerCount=a.originalEvent&&void 0!==a.originalEvent.touches?a.originalEvent.touches.length:1,b.touchObject.minSwipe=b.listWidth/b.options.touchThreshold,a.data.action){case"start":b.swipeStart(a);break;case"move":b.swipeMove(a);break;case"end":b.swipeEnd(a)}},b.prototype.swipeMove=function(a){var c,d,e,f,b=this;return f=void 0!==a.originalEvent?a.originalEvent.touches:null,c=b.getLeft(b.currentSlide),!b.$list.hasClass("dragging")||f&&1!==f.length?!1:(b.touchObject.curX=void 0!==f?f[0].pageX:a.clientX,b.touchObject.curY=void 0!==f?f[0].pageY:a.clientY,b.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(b.touchObject.curX-b.touchObject.startX,2))),d=b.swipeDirection(),"vertical"!==d?(void 0!==a.originalEvent&&b.touchObject.swipeLength>4&&a.preventDefault(),e=b.touchObject.curX>b.touchObject.startX?1:-1,b.swipeLeft=b.options.vertical===!1?c+b.touchObject.swipeLength*e:c+b.touchObject.swipeLength*(b.$list.height()/b.listWidth)*e,b.options.fade===!0||b.options.touchMove===!1?!1:b.animating===!0?(b.swipeLeft=null,!1):(b.setCSS(b.swipeLeft),void 0)):void 0)},b.prototype.swipeStart=function(a){var c,b=this;return 1!==b.touchObject.fingerCount||b.slideCount<=b.options.slidesToShow?(b.touchObject={},!1):(void 0!==a.originalEvent&&void 0!==a.originalEvent.touches&&(c=a.originalEvent.touches[0]),b.touchObject.startX=b.touchObject.curX=void 0!==c?c.pageX:a.clientX,b.touchObject.startY=b.touchObject.curY=void 0!==c?c.pageY:a.clientY,b.$list.addClass("dragging"),void 0)},b.prototype.unfilterSlides=function(){var a=this;null!==a.$slidesCache&&(a.unload(),a.$slideTrack.children(this.options.slide).remove(),a.$slidesCache.appendTo(a.$slideTrack),a.reinit())},b.prototype.unload=function(){var b=this;a(".slick-cloned",b.$slider).remove(),b.$dots&&b.$dots.remove(),b.$prevArrow&&(b.$prevArrow.remove(),b.$nextArrow.remove()),b.$slides.removeClass("slick-slide slick-active slick-visible").removeAttr("style")},b.prototype.updateArrows=function(){var a=this;a.options.arrows===!0&&a.options.infinite!==!0&&a.slideCount>a.options.slidesToShow&&(a.$prevArrow.removeClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled"),0===a.currentSlide?(a.$prevArrow.addClass("slick-disabled"),a.$nextArrow.removeClass("slick-disabled")):a.currentSlide>=a.slideCount-a.options.slidesToShow&&(a.$nextArrow.addClass("slick-disabled"),a.$prevArrow.removeClass("slick-disabled")))},b.prototype.updateDots=function(){var a=this;null!==a.$dots&&(a.$dots.find("li").removeClass("slick-active"),a.$dots.find("li").eq(a.currentSlide/a.options.slidesToScroll).addClass("slick-active"))},a.fn.slick=function(a){var c=this;return c.each(function(c,d){d.slick=new b(d,a)})},a.fn.slickAdd=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.addSlide(a,b,c)})},a.fn.slickCurrentSlide=function(){var a=this;return a.get(0).slick.getCurrent()},a.fn.slickFilter=function(a){var b=this;return b.each(function(b,c){c.slick.filterSlides(a)})},a.fn.slickGoTo=function(a){var b=this;return b.each(function(b,c){c.slick.slideHandler(a)})},a.fn.slickNext=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"next"}})})},a.fn.slickPause=function(){var a=this;return a.each(function(a,b){b.slick.autoPlayClear(),b.slick.paused=!0})},a.fn.slickPlay=function(){var a=this;return a.each(function(a,b){b.slick.paused=!1,b.slick.autoPlay()})},a.fn.slickPrev=function(){var a=this;return a.each(function(a,b){b.slick.changeSlide({data:{message:"previous"}})})},a.fn.slickRemove=function(a,b){var c=this;return c.each(function(c,d){d.slick.removeSlide(a,b)})},a.fn.slickSetOption=function(a,b,c){var d=this;return d.each(function(d,e){e.slick.options[a]=b,c===!0&&(e.slick.unload(),e.slick.reinit())})},a.fn.slickUnfilter=function(){var a=this;return a.each(function(a,b){b.slick.unfilterSlides()})},a.fn.unslick=function(){var a=this;return a.each(function(a,b){b.slick.destroy()})}});
/*! jQuery UI - v1.10.4 - 2014-04-25
* http://jqueryui.com
* Includes: jquery.ui.core.js, jquery.ui.widget.js, jquery.ui.mouse.js, jquery.ui.slider.js
* Copyright 2014 jQuery Foundation and other contributors; Licensed MIT */


(function(e,t){function i(t,i){var s,a,o,r=t.nodeName.toLowerCase();return"area"===r?(s=t.parentNode,a=s.name,t.href&&a&&"map"===s.nodeName.toLowerCase()?(o=e("img[usemap=#"+a+"]")[0],!!o&&n(o)):!1):(/input|select|textarea|button|object/.test(r)?!t.disabled:"a"===r?t.href||i:i)&&n(t)}function n(t){return e.expr.filters.visible(t)&&!e(t).parents().addBack().filter(function(){return"hidden"===e.css(this,"visibility")}).length}var s=0,a=/^ui-id-\d+$/;e.ui=e.ui||{},e.extend(e.ui,{version:"1.10.4",keyCode:{BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,NUMPAD_ADD:107,NUMPAD_DECIMAL:110,NUMPAD_DIVIDE:111,NUMPAD_ENTER:108,NUMPAD_MULTIPLY:106,NUMPAD_SUBTRACT:109,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}}),e.fn.extend({focus:function(t){return function(i,n){return"number"==typeof i?this.each(function(){var t=this;setTimeout(function(){e(t).focus(),n&&n.call(t)},i)}):t.apply(this,arguments)}}(e.fn.focus),scrollParent:function(){var t;return t=e.ui.ie&&/(static|relative)/.test(this.css("position"))||/absolute/.test(this.css("position"))?this.parents().filter(function(){return/(relative|absolute|fixed)/.test(e.css(this,"position"))&&/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0):this.parents().filter(function(){return/(auto|scroll)/.test(e.css(this,"overflow")+e.css(this,"overflow-y")+e.css(this,"overflow-x"))}).eq(0),/fixed/.test(this.css("position"))||!t.length?e(document):t},zIndex:function(i){if(i!==t)return this.css("zIndex",i);if(this.length)for(var n,s,a=e(this[0]);a.length&&a[0]!==document;){if(n=a.css("position"),("absolute"===n||"relative"===n||"fixed"===n)&&(s=parseInt(a.css("zIndex"),10),!isNaN(s)&&0!==s))return s;a=a.parent()}return 0},uniqueId:function(){return this.each(function(){this.id||(this.id="ui-id-"+ ++s)})},removeUniqueId:function(){return this.each(function(){a.test(this.id)&&e(this).removeAttr("id")})}}),e.extend(e.expr[":"],{data:e.expr.createPseudo?e.expr.createPseudo(function(t){return function(i){return!!e.data(i,t)}}):function(t,i,n){return!!e.data(t,n[3])},focusable:function(t){return i(t,!isNaN(e.attr(t,"tabindex")))},tabbable:function(t){var n=e.attr(t,"tabindex"),s=isNaN(n);return(s||n>=0)&&i(t,!s)}}),e("<a>").outerWidth(1).jquery||e.each(["Width","Height"],function(i,n){function s(t,i,n,s){return e.each(a,function(){i-=parseFloat(e.css(t,"padding"+this))||0,n&&(i-=parseFloat(e.css(t,"border"+this+"Width"))||0),s&&(i-=parseFloat(e.css(t,"margin"+this))||0)}),i}var a="Width"===n?["Left","Right"]:["Top","Bottom"],o=n.toLowerCase(),r={innerWidth:e.fn.innerWidth,innerHeight:e.fn.innerHeight,outerWidth:e.fn.outerWidth,outerHeight:e.fn.outerHeight};e.fn["inner"+n]=function(i){return i===t?r["inner"+n].call(this):this.each(function(){e(this).css(o,s(this,i)+"px")})},e.fn["outer"+n]=function(t,i){return"number"!=typeof t?r["outer"+n].call(this,t):this.each(function(){e(this).css(o,s(this,t,!0,i)+"px")})}}),e.fn.addBack||(e.fn.addBack=function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}),e("<a>").data("a-b","a").removeData("a-b").data("a-b")&&(e.fn.removeData=function(t){return function(i){return arguments.length?t.call(this,e.camelCase(i)):t.call(this)}}(e.fn.removeData)),e.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()),e.support.selectstart="onselectstart"in document.createElement("div"),e.fn.extend({disableSelection:function(){return this.bind((e.support.selectstart?"selectstart":"mousedown")+".ui-disableSelection",function(e){e.preventDefault()})},enableSelection:function(){return this.unbind(".ui-disableSelection")}}),e.extend(e.ui,{plugin:{add:function(t,i,n){var s,a=e.ui[t].prototype;for(s in n)a.plugins[s]=a.plugins[s]||[],a.plugins[s].push([i,n[s]])},call:function(e,t,i){var n,s=e.plugins[t];if(s&&e.element[0].parentNode&&11!==e.element[0].parentNode.nodeType)for(n=0;s.length>n;n++)e.options[s[n][0]]&&s[n][1].apply(e.element,i)}},hasScroll:function(t,i){if("hidden"===e(t).css("overflow"))return!1;var n=i&&"left"===i?"scrollLeft":"scrollTop",s=!1;return t[n]>0?!0:(t[n]=1,s=t[n]>0,t[n]=0,s)}})})(jQuery);(function(t,e){var i=0,s=Array.prototype.slice,n=t.cleanData;t.cleanData=function(e){for(var i,s=0;null!=(i=e[s]);s++)try{t(i).triggerHandler("remove")}catch(o){}n(e)},t.widget=function(i,s,n){var o,a,r,h,l={},c=i.split(".")[0];i=i.split(".")[1],o=c+"-"+i,n||(n=s,s=t.Widget),t.expr[":"][o.toLowerCase()]=function(e){return!!t.data(e,o)},t[c]=t[c]||{},a=t[c][i],r=t[c][i]=function(t,i){return this._createWidget?(arguments.length&&this._createWidget(t,i),e):new r(t,i)},t.extend(r,a,{version:n.version,_proto:t.extend({},n),_childConstructors:[]}),h=new s,h.options=t.widget.extend({},h.options),t.each(n,function(i,n){return t.isFunction(n)?(l[i]=function(){var t=function(){return s.prototype[i].apply(this,arguments)},e=function(t){return s.prototype[i].apply(this,t)};return function(){var i,s=this._super,o=this._superApply;return this._super=t,this._superApply=e,i=n.apply(this,arguments),this._super=s,this._superApply=o,i}}(),e):(l[i]=n,e)}),r.prototype=t.widget.extend(h,{widgetEventPrefix:a?h.widgetEventPrefix||i:i},l,{constructor:r,namespace:c,widgetName:i,widgetFullName:o}),a?(t.each(a._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,r,i._proto)}),delete a._childConstructors):s._childConstructors.push(r),t.widget.bridge(i,r)},t.widget.extend=function(i){for(var n,o,a=s.call(arguments,1),r=0,h=a.length;h>r;r++)for(n in a[r])o=a[r][n],a[r].hasOwnProperty(n)&&o!==e&&(i[n]=t.isPlainObject(o)?t.isPlainObject(i[n])?t.widget.extend({},i[n],o):t.widget.extend({},o):o);return i},t.widget.bridge=function(i,n){var o=n.prototype.widgetFullName||i;t.fn[i]=function(a){var r="string"==typeof a,h=s.call(arguments,1),l=this;return a=!r&&h.length?t.widget.extend.apply(null,[a].concat(h)):a,r?this.each(function(){var s,n=t.data(this,o);return n?t.isFunction(n[a])&&"_"!==a.charAt(0)?(s=n[a].apply(n,h),s!==n&&s!==e?(l=s&&s.jquery?l.pushStack(s.get()):s,!1):e):t.error("no such method '"+a+"' for "+i+" widget instance"):t.error("cannot call methods on "+i+" prior to initialization; "+"attempted to call method '"+a+"'")}):this.each(function(){var e=t.data(this,o);e?e.option(a||{})._init():t.data(this,o,new n(a,this))}),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{disabled:!1,create:null},_createWidget:function(e,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=i++,this.eventNamespace="."+this.widgetName+this.uuid,this.options=t.widget.extend({},this.options,this._getCreateOptions(),e),this.bindings=t(),this.hoverable=t(),this.focusable=t(),s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this._create(),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:t.noop,_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){this._destroy(),this.element.unbind(this.eventNamespace).removeData(this.widgetName).removeData(this.widgetFullName).removeData(t.camelCase(this.widgetFullName)),this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName+"-disabled "+"ui-state-disabled"),this.bindings.unbind(this.eventNamespace),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")},_destroy:t.noop,widget:function(){return this.element},option:function(i,s){var n,o,a,r=i;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof i)if(r={},n=i.split("."),i=n.shift(),n.length){for(o=r[i]=t.widget.extend({},this.options[i]),a=0;n.length-1>a;a++)o[n[a]]=o[n[a]]||{},o=o[n[a]];if(i=n.pop(),1===arguments.length)return o[i]===e?null:o[i];o[i]=s}else{if(1===arguments.length)return this.options[i]===e?null:this.options[i];r[i]=s}return this._setOptions(r),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return this.options[t]=e,"disabled"===t&&(this.widget().toggleClass(this.widgetFullName+"-disabled ui-state-disabled",!!e).attr("aria-disabled",e),this.hoverable.removeClass("ui-state-hover"),this.focusable.removeClass("ui-state-focus")),this},enable:function(){return this._setOption("disabled",!1)},disable:function(){return this._setOption("disabled",!0)},_on:function(i,s,n){var o,a=this;"boolean"!=typeof i&&(n=s,s=i,i=!1),n?(s=o=t(s),this.bindings=this.bindings.add(s)):(n=s,s=this.element,o=this.widget()),t.each(n,function(n,r){function h(){return i||a.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof r?a[r]:r).apply(a,arguments):e}"string"!=typeof r&&(h.guid=r.guid=r.guid||h.guid||t.guid++);var l=n.match(/^(\w+)\s*(.*)$/),c=l[1]+a.eventNamespace,u=l[2];u?o.delegate(u,c,h):s.bind(c,h)})},_off:function(t,e){e=(e||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,t.unbind(e).undelegate(e)},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){t(e.currentTarget).addClass("ui-state-hover")},mouseleave:function(e){t(e.currentTarget).removeClass("ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){t(e.currentTarget).addClass("ui-state-focus")},focusout:function(e){t(e.currentTarget).removeClass("ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}})})(jQuery);(function(t){var e=!1;t(document).mouseup(function(){e=!1}),t.widget("ui.mouse",{version:"1.10.4",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.bind("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).bind("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):undefined}),this.started=!1},_mouseDestroy:function(){this.element.unbind("."+this.widgetName),this._mouseMoveDelegate&&t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(i){if(!e){this._mouseStarted&&this._mouseUp(i),this._mouseDownEvent=i;var s=this,n=1===i.which,a="string"==typeof this.options.cancel&&i.target.nodeName?t(i.target).closest(this.options.cancel).length:!1;return n&&!a&&this._mouseCapture(i)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){s.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(i)&&this._mouseDelayMet(i)&&(this._mouseStarted=this._mouseStart(i)!==!1,!this._mouseStarted)?(i.preventDefault(),!0):(!0===t.data(i.target,this.widgetName+".preventClickEvent")&&t.removeData(i.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return s._mouseMove(t)},this._mouseUpDelegate=function(t){return s._mouseUp(t)},t(document).bind("mousemove."+this.widgetName,this._mouseMoveDelegate).bind("mouseup."+this.widgetName,this._mouseUpDelegate),i.preventDefault(),e=!0,!0)):!0}},_mouseMove:function(e){return t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button?this._mouseUp(e):this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){return t(document).unbind("mousemove."+this.widgetName,this._mouseMoveDelegate).unbind("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),!1},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}})})(jQuery);(function(t){var e=5;t.widget("ui.slider",t.ui.mouse,{version:"1.10.4",widgetEventPrefix:"slide",options:{animate:!1,distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this.element.addClass("ui-slider ui-slider-"+this.orientation+" ui-widget"+" ui-widget-content"+" ui-corner-all"),this._refresh(),this._setOption("disabled",this.options.disabled),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle").addClass("ui-state-default ui-corner-all"),a="<a class='ui-slider-handle ui-state-default ui-corner-all' href='#'></a>",o=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)o.push(a);this.handles=n.add(t(o.join("")).appendTo(this.element)),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options,i="";e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?this.range.removeClass("ui-slider-range-min ui-slider-range-max").css({left:"",bottom:""}):(this.range=t("<div></div>").appendTo(this.element),i="ui-slider-range ui-widget-header ui-corner-all"),this.range.addClass(i+("min"===e.range||"max"===e.range?" ui-slider-range-"+e.range:""))):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){var t=this.handles.add(this.range).filter("a");this._off(t),this._on(t,this._handleEvents),this._hoverable(t),this._focusable(t)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this.element.removeClass("ui-slider ui-slider-horizontal ui-slider-vertical ui-widget ui-widget-content ui-corner-all"),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,a,o,r,l,h,u=this,c=this.options;return c.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-u.values(e));(n>i||n===i&&(e===u._lastChangedValue||u.values(e)===c.min))&&(n=i,a=t(this),o=e)}),r=this._start(e,o),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=o,a.addClass("ui-state-active").focus(),l=a.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-a.width()/2,top:e.pageY-l.top-a.height()/2-(parseInt(a.css("borderTopWidth"),10)||0)-(parseInt(a.css("borderBottomWidth"),10)||0)+(parseInt(a.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,o,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this.handles.removeClass("ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,a;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),a=this._valueMin()+s*n,this._trimAlignValue(a)},_start:function(t,e){var i={handle:this.handles[e],value:this.value()};return this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("start",t,i)},_slide:function(t,e,i){var s,n,a;this.options.values&&this.options.values.length?(s=this.values(e?0:1),2===this.options.values.length&&this.options.range===!0&&(0===e&&i>s||1===e&&s>i)&&(i=s),i!==this.values(e)&&(n=this.values(),n[e]=i,a=this._trigger("slide",t,{handle:this.handles[e],value:i,values:n}),s=this.values(e?0:1),a!==!1&&this.values(e,i))):i!==this.value()&&(a=this._trigger("slide",t,{handle:this.handles[e],value:i}),a!==!1&&this.value(i))},_stop:function(t,e){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._trigger("stop",t,i)},_change:function(t,e){if(!this._keySliding&&!this._mouseSliding){var i={handle:this.handles[e],value:this.value()};this.options.values&&this.options.values.length&&(i.value=this.values(e),i.values=this.values()),this._lastChangedValue=e,this._trigger("change",t,i)}},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),undefined):this._value()},values:function(e,i){var s,n,a;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),undefined;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this.options.values&&this.options.values.length?this._values(e):this.value();for(s=this.options.values,n=arguments[0],a=0;s.length>a;a+=1)s[a]=this._trimAlignValue(n[a]),this._change(null,a);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),t.Widget.prototype._setOption.apply(this,arguments),e){case"orientation":this._detectOrientation(),this.element.removeClass("ui-slider-horizontal ui-slider-vertical").addClass("ui-slider-"+this.orientation),this._refreshValue();break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=0;n>s;s+=1)this._change(null,s);this._animateOff=!1;break;case"min":case"max":this._animateOff=!0,this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this.options.values&&this.options.values.length){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_valueMin:function(){return this.options.min},_valueMax:function(){return this.options.max},_refreshValue:function(){var e,i,s,n,a,o=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,u={};this.options.values&&this.options.values.length?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),u["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](u,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),a=this._valueMax(),i=a!==n?100*((s-n)/(a-n)):0,u["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](u,r.animate),"min"===o&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===o&&"horizontal"===this.orientation&&this.range[h?"animate":"css"]({width:100-i+"%"},{queue:!1,duration:r.animate}),"min"===o&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===o&&"vertical"===this.orientation&&this.range[h?"animate":"css"]({height:100-i+"%"},{queue:!1,duration:r.animate}))},_handleEvents:{keydown:function(i){var s,n,a,o,r=t(i.target).data("ui-slider-handle-index");switch(i.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(i.preventDefault(),!this._keySliding&&(this._keySliding=!0,t(i.target).addClass("ui-state-active"),s=this._start(i,r),s===!1))return}switch(o=this.options.step,n=a=this.options.values&&this.options.values.length?this.values(r):this.value(),i.keyCode){case t.ui.keyCode.HOME:a=this._valueMin();break;case t.ui.keyCode.END:a=this._valueMax();break;case t.ui.keyCode.PAGE_UP:a=this._trimAlignValue(n+(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.PAGE_DOWN:a=this._trimAlignValue(n-(this._valueMax()-this._valueMin())/e);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(n===this._valueMax())return;a=this._trimAlignValue(n+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(n===this._valueMin())return;a=this._trimAlignValue(n-o)}this._slide(i,r,a)},click:function(t){t.preventDefault()},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),t(e.target).removeClass("ui-state-active"))}}})})(jQuery);
/*! UIkit 2.5.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */


(function(t){if("function"==typeof define&&define.amd&&define("uikit",function(){var e=t(window,window.jQuery,window.document);return e.load=function(t,i,n,o){var s,a=t.split(","),r=[],l=(o.config&&o.config.uikit&&o.config.uikit.base?o.config.uikit.base:"").replace(/\/+$/g,"");if(!l)throw Error("Please define base path to uikit in the requirejs config.");for(s=0;a.length>s;s+=1){var u=a[s].replace(/\./g,"/");r.push(l+"/js/addons/"+u)}i(r,function(){n(e)})},e}),!window.jQuery)throw Error("UIkit requires jQuery");window&&window.jQuery&&t(window,window.jQuery,window.document)})(function(t,e,i){"use strict";var n=e.UIkit||{},o=e("html"),s=e(window);return n.fn?n:(n.version="2.5.0",n.fn=function(t,i){var o=arguments,s=t.match(/^([a-z\-]+)(?:\.([a-z]+))?/i),a=s[1],r=s[2];return n[a]?this.each(function(){var t=e(this),s=t.data(a);s||t.data(a,s=new n[a](this,r?void 0:i)),r&&s[r].apply(s,Array.prototype.slice.call(o,1))}):(e.error("UIkit component ["+a+"] does not exist."),this)},n.support={},n.support.transition=function(){var t=function(){var t,e=i.body||i.documentElement,n={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}(),n.support.animation=function(){var t=function(){var t,e=i.body||i.documentElement,n={WebkitAnimation:"webkitAnimationEnd",MozAnimation:"animationend",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(t in n)if(void 0!==e.style[t])return n[t]}();return t&&{end:t}}(),n.support.requestAnimationFrame=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||t.oRequestAnimationFrame||function(e){t.setTimeout(e,1e3/60)},n.support.touch="ontouchstart"in window&&navigator.userAgent.toLowerCase().match(/mobile|tablet/)||t.DocumentTouch&&document instanceof t.DocumentTouch||t.navigator.msPointerEnabled&&t.navigator.msMaxTouchPoints>0||t.navigator.pointerEnabled&&t.navigator.maxTouchPoints>0||!1,n.support.mutationobserver=t.MutationObserver||t.WebKitMutationObserver||t.MozMutationObserver||null,n.Utils={},n.Utils.debounce=function(t,e,i){var n;return function(){var o=this,s=arguments,a=function(){n=null,i||t.apply(o,s)},r=i&&!n;clearTimeout(n),n=setTimeout(a,e),r&&t.apply(o,s)}},n.Utils.removeCssRules=function(t){var e,i,n,o,s,a,r,l,u,c;t&&setTimeout(function(){try{for(c=document.styleSheets,o=0,r=c.length;r>o;o++){for(n=c[o],i=[],n.cssRules=n.cssRules,e=s=0,l=n.cssRules.length;l>s;e=++s)n.cssRules[e].type===CSSRule.STYLE_RULE&&t.test(n.cssRules[e].selectorText)&&i.unshift(e);for(a=0,u=i.length;u>a;a++)n.deleteRule(i[a])}}catch(h){}},0)},n.Utils.isInView=function(t,i){var n=e(t);if(!n.is(":visible"))return!1;var o=s.scrollLeft(),a=s.scrollTop(),r=n.offset(),l=r.left,u=r.top;return i=e.extend({topoffset:0,leftoffset:0},i),u+n.height()>=a&&u-i.topoffset<=a+s.height()&&l+n.width()>=o&&l-i.leftoffset<=o+s.width()?!0:!1},n.Utils.options=function(t){if(e.isPlainObject(t))return t;var i=t?t.indexOf("{"):-1,n={};if(-1!=i)try{n=Function("","var json = "+t.substr(i)+"; return JSON.parse(JSON.stringify(json));")()}catch(o){}return n},n.Utils.template=function(t,e){for(var i,n,o,s,a=t.replace(/\n/g,"\\n").replace(/\{\{\{\s*(.+?)\s*\}\}\}/g,"{{!$1}}").split(/(\{\{\s*(.+?)\s*\}\})/g),r=0,l=[],u=0;a.length>r;){if(i=a[r],i.match(/\{\{\s*(.+?)\s*\}\}/))switch(r+=1,i=a[r],n=i[0],o=i.substring(i.match(/^(\^|\#|\!|\~|\:)/)?1:0),n){case"~":l.push("for(var $i=0;$i<"+o+".length;$i++) { var $item = "+o+"[$i];"),u++;break;case":":l.push("for(var $key in "+o+") { var $val = "+o+"[$key];"),u++;break;case"#":l.push("if("+o+") {"),u++;break;case"^":l.push("if(!"+o+") {"),u++;break;case"/":l.push("}"),u--;break;case"!":l.push("__ret.push("+o+");");break;default:l.push("__ret.push(escape("+o+"));")}else l.push("__ret.push('"+i.replace(/\'/g,"\\'")+"');");r+=1}s=["var __ret = [];","try {","with($data){",u?'__ret = ["Not all blocks are closed correctly."]':l.join(""),"};","}catch(e){__ret = [e.message];}",'return __ret.join("").replace(/\\n\\n/g, "\\n");',"function escape(html) { return String(html).replace(/&/g, '&amp;').replace(/\"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');}"].join("\n");var c=Function("$data",s);return e?c(e):c},n.Utils.events={},n.Utils.events.click=n.support.touch?"tap":"click",e.UIkit=n,e.fn.uk=n.fn,e.UIkit.langdirection="rtl"==o.attr("dir")?"right":"left",e(function(){if(e(i).trigger("uk-domready"),n.support.mutationobserver){var t=new n.support.mutationobserver(n.Utils.debounce(function(){e(i).trigger("uk-domready")},300));t.observe(document.body,{childList:!0,subtree:!0}),n.support.touch&&n.Utils.removeCssRules(/\.uk-(?!navbar).*:hover/)}}),o.addClass(n.support.touch?"uk-touch":"uk-notouch"),n)}),function(t,e){"use strict";var i=t(window),n="resize orientationchange",o=function(s,a){var r=this,l=t(s);l.data("stackMargin")||(this.element=l,this.columns=this.element.children(),this.options=t.extend({},o.defaults,a),this.columns.length&&(i.on(n,function(){var n=function(){r.process()};return t(function(){n(),i.on("load",n)}),e.Utils.debounce(n,150)}()),t(document).on("uk-domready",function(){r.columns=r.element.children(),r.process()}),this.element.data("stackMargin",this)))};t.extend(o.prototype,{process:function(){var e=this;this.revert();var i=!1,n=this.columns.filter(":visible:first"),o=n.length?n.offset().top:!1;if(o!==!1)return this.columns.each(function(){var n=t(this);n.is(":visible")&&(i?n.addClass(e.options.cls):n.offset().top!=o&&(n.addClass(e.options.cls),i=!0))}),this},revert:function(){return this.columns.removeClass(this.options.cls),this}}),o.defaults={cls:"uk-margin-small-top"},e.stackMargin=o,t(document).on("uk-domready",function(){t("[data-uk-margin]").each(function(){var i,n=t(this);n.data("stackMargin")||(i=new o(n,e.Utils.options(n.attr("data-uk-margin"))))})})}(jQuery,jQuery.UIkit),function(t){function e(t,e,i,n){return Math.abs(t-e)>=Math.abs(i-n)?t-e>0?"Left":"Right":i-n>0?"Up":"Down"}function i(){u=null,h.last&&(h.el.trigger("longTap"),h={})}function n(){u&&clearTimeout(u),u=null}function o(){a&&clearTimeout(a),r&&clearTimeout(r),l&&clearTimeout(l),u&&clearTimeout(u),a=r=l=u=null,h={}}function s(t){return t.pointerType==t.MSPOINTER_TYPE_TOUCH&&t.isPrimary}var a,r,l,u,c,h={},d=750;t(function(){var f,p,m,g=0,v=0;"MSGesture"in window&&(c=new MSGesture,c.target=document.body),t(document).bind("MSGestureEnd",function(t){var e=t.originalEvent.velocityX>1?"Right":-1>t.originalEvent.velocityX?"Left":t.originalEvent.velocityY>1?"Down":-1>t.originalEvent.velocityY?"Up":null;e&&(h.el.trigger("swipe"),h.el.trigger("swipe"+e))}).on("touchstart MSPointerDown",function(e){("MSPointerDown"!=e.type||s(e.originalEvent))&&(m="MSPointerDown"==e.type?e:e.originalEvent.touches[0],f=Date.now(),p=f-(h.last||f),h.el=t("tagName"in m.target?m.target:m.target.parentNode),a&&clearTimeout(a),h.x1=m.pageX,h.y1=m.pageY,p>0&&250>=p&&(h.isDoubleTap=!0),h.last=f,u=setTimeout(i,d),c&&"MSPointerDown"==e.type&&c.addPointer(e.originalEvent.pointerId))}).on("touchmove MSPointerMove",function(t){("MSPointerMove"!=t.type||s(t.originalEvent))&&(m="MSPointerMove"==t.type?t:t.originalEvent.touches[0],n(),h.x2=m.pageX,h.y2=m.pageY,g+=Math.abs(h.x1-h.x2),v+=Math.abs(h.y1-h.y2))}).on("touchend MSPointerUp",function(i){("MSPointerUp"!=i.type||s(i.originalEvent))&&(n(),h.x2&&Math.abs(h.x1-h.x2)>30||h.y2&&Math.abs(h.y1-h.y2)>30?l=setTimeout(function(){h.el.trigger("swipe"),h.el.trigger("swipe"+e(h.x1,h.x2,h.y1,h.y2)),h={}},0):"last"in h&&(isNaN(g)||30>g&&30>v?r=setTimeout(function(){var e=t.Event("tap");e.cancelTouch=o,h.el.trigger(e),h.isDoubleTap?(h.el.trigger("doubleTap"),h={}):a=setTimeout(function(){a=null,h.el.trigger("singleTap"),h={}},250)},0):h={},g=v=0))}).on("touchcancel MSPointerCancel",o),t(window).on("scroll",o)}),["swipe","swipeLeft","swipeRight","swipeUp","swipeDown","doubleTap","tap","singleTap","longTap"].forEach(function(e){t.fn[e]=function(i){return t(this).on(e,i)}})}(jQuery),function(t,e){"use strict";var i=function(e,n){var o=this;this.options=t.extend({},i.defaults,n),this.element=t(e),this.element.data("alert")||(this.element.on("click",this.options.trigger,function(t){t.preventDefault(),o.close()}),this.element.data("alert",this))};t.extend(i.prototype,{close:function(){function t(){e.trigger("closed").remove()}var e=this.element.trigger("close");this.options.fade?e.css("overflow","hidden").css("max-height",e.height()).animate({height:0,opacity:0,"padding-top":0,"padding-bottom":0,"margin-top":0,"margin-bottom":0},this.options.duration,t):t()}}),i.defaults={fade:!0,duration:200,trigger:".uk-alert-close"},e.alert=i,t(document).on("click.alert.uikit","[data-uk-alert]",function(n){var o=t(this);if(!o.data("alert")){var s=new i(o,e.Utils.options(o.data("uk-alert")));t(n.target).is(o.data("alert").options.trigger)&&(n.preventDefault(),s.close())}})}(jQuery,jQuery.UIkit),function(t,e){"use strict";var i=function(e,n){var o=this,s=t(e);s.data("buttonRadio")||(this.options=t.extend({},i.defaults,n),this.element=s.on("click",this.options.target,function(e){e.preventDefault(),s.find(o.options.target).not(this).removeClass("uk-active").blur(),s.trigger("change",[t(this).addClass("uk-active")])}),this.element.data("buttonRadio",this))};t.extend(i.prototype,{getSelected:function(){this.element.find(".uk-active")}}),i.defaults={target:".uk-button"};var n=function(e,i){var o=t(e);o.data("buttonCheckbox")||(this.options=t.extend({},n.defaults,i),this.element=o.on("click",this.options.target,function(e){e.preventDefault(),o.trigger("change",[t(this).toggleClass("uk-active").blur()])}),this.element.data("buttonCheckbox",this))};t.extend(n.prototype,{getSelected:function(){this.element.find(".uk-active")}}),n.defaults={target:".uk-button"};var o=function(e,i){var n=this,s=t(e);s.data("button")||(this.options=t.extend({},o.defaults,i),this.element=s.on("click",function(t){t.preventDefault(),n.toggle(),s.trigger("change",[s.blur().hasClass("uk-active")])}),this.element.data("button",this))};t.extend(o.prototype,{options:{},toggle:function(){this.element.toggleClass("uk-active")}}),o.defaults={},e.button=o,e.buttonCheckbox=n,e.buttonRadio=i,t(document).on("click.buttonradio.uikit","[data-uk-button-radio]",function(n){var o=t(this);if(!o.data("buttonRadio")){var s=new i(o,e.Utils.options(o.attr("data-uk-button-radio")));t(n.target).is(s.options.target)&&t(n.target).trigger("click")}}),t(document).on("click.buttoncheckbox.uikit","[data-uk-button-checkbox]",function(i){var o=t(this);if(!o.data("buttonCheckbox")){var s=new n(o,e.Utils.options(o.attr("data-uk-button-checkbox")));t(i.target).is(s.options.target)&&t(i.target).trigger("click")}}),t(document).on("click.button.uikit","[data-uk-button]",function(){var e=t(this);e.data("button")||(new o(e,e.attr("data-uk-button")),e.trigger("click"))})}(jQuery,jQuery.UIkit),function(t,e){"use strict";var i=!1,n=function(o,s){var a=this,r=t(o);r.data("dropdown")||(this.options=t.extend({},n.defaults,s),this.element=r,this.dropdown=this.element.find(".uk-dropdown"),this.centered=this.dropdown.hasClass("uk-dropdown-center"),this.justified=this.options.justify?t(this.options.justify):!1,this.boundary=t(this.options.boundary),this.boundary.length||(this.boundary=t(window)),"click"==this.options.mode||e.support.touch?this.element.on("click",function(e){var n=t(e.target);n.parents(".uk-dropdown").length||((n.is("a[href='#']")||n.parent().is("a[href='#']"))&&e.preventDefault(),n.blur()),a.element.hasClass("uk-open")?(n.is("a")||!a.element.find(".uk-dropdown").find(e.target).length)&&(a.element.removeClass("uk-open"),i=!1):a.show()}):this.element.on("mouseenter",function(){a.remainIdle&&clearTimeout(a.remainIdle),a.show()}).on("mouseleave",function(){a.remainIdle=setTimeout(function(){a.element.removeClass("uk-open"),a.remainIdle=!1,i&&i[0]==a.element[0]&&(i=!1)},a.options.remaintime)}),this.element.data("dropdown",this))};t.extend(n.prototype,{remainIdle:!1,show:function(){i&&i[0]!=this.element[0]&&i.removeClass("uk-open"),this.checkDimensions(),this.element.addClass("uk-open"),i=this.element,this.registerOuterClick()},registerOuterClick:function(){var e=this;t(document).off("click.outer.dropdown"),setTimeout(function(){t(document).on("click.outer.dropdown",function(n){!i||i[0]!=e.element[0]||!t(n.target).is("a")&&e.element.find(".uk-dropdown").find(n.target).length||(i.removeClass("uk-open"),t(document).off("click.outer.dropdown"))})},10)},checkDimensions:function(){if(this.dropdown.length){var e=this.dropdown.css("margin-"+t.UIkit.langdirection,"").css("min-width",""),i=e.show().offset(),n=e.outerWidth(),o=this.boundary.width(),s=this.boundary.offset()?this.boundary.offset().left:0;if(this.centered&&(e.css("margin-"+t.UIkit.langdirection,-1*(parseFloat(n)/2-e.parent().width()/2)),i=e.offset(),(n+i.left>o||0>i.left)&&(e.css("margin-"+t.UIkit.langdirection,""),i=e.offset())),this.justified&&this.justified.length){var a=this.justified.outerWidth();if(e.css("min-width",a),"right"==t.UIkit.langdirection){var r=o-(this.justified.offset().left+a),l=o-(e.offset().left+e.outerWidth());e.css("margin-right",r-l)}else e.css("margin-left",this.justified.offset().left-i.left);i=e.offset()}n+(i.left-s)>o&&(e.addClass("uk-dropdown-flip"),i=e.offset()),0>i.left&&e.addClass("uk-dropdown-stack"),e.css("display","")}}}),n.defaults={mode:"hover",remaintime:800,justify:!1,boundary:t(window)},e.dropdown=n;var o=e.support.touch?"click":"mouseenter";t(document).on(o+".dropdown.uikit","[data-uk-dropdown]",function(i){var s=t(this);if(!s.data("dropdown")){var a=new n(s,e.Utils.options(s.data("uk-dropdown")));("click"==o||"mouseenter"==o&&"hover"==a.options.mode)&&a.show(),a.element.find(".uk-dropdown").length&&i.preventDefault()}})}(jQuery,jQuery.UIkit),function(t,e){"use strict";var i=t(window),n="resize orientationchange",o=function(s,a){var r=this,l=t(s);l.data("gridMatchHeight")||(this.options=t.extend({},o.defaults,a),this.element=l,this.columns=this.element.children(),this.elements=this.options.target?this.element.find(this.options.target):this.columns,this.columns.length&&(i.on(n,function(){var n=function(){r.match()};return t(function(){n(),i.on("load",n)}),e.Utils.debounce(n,150)}()),t(document).on("uk-domready",function(){r.columns=r.element.children(),r.elements=r.options.target?r.element.find(r.options.target):r.columns,r.match()}),this.element.data("gridMatchHeight",this)))};t.extend(o.prototype,{match:function(){this.revert();var e=this.columns.filter(":visible:first");if(e.length){var i=Math.ceil(100*parseFloat(e.css("width"))/parseFloat(e.parent().css("width")))>=100?!0:!1,n=this;if(!i)return this.options.row?(this.element.width(),setTimeout(function(){var e=!1,i=[];n.elements.each(function(){var o=t(this),s=o.offset().top;s!=e&&i.length&&(n.matchHeights(t(i)),i=[],s=o.offset().top),i.push(o),e=s}),i.length&&n.matchHeights(t(i))},0)):this.matchHeights(this.elements),this}},revert:function(){return this.elements.css("min-height",""),this},matchHeights:function(e){if(!(2>e.length)){var i=0;e.each(function(){i=Math.max(i,t(this).outerHeight())}).each(function(){var e=t(this),n=i-(e.outerHeight()-e.height());e.css("min-height",n+"px")})}}}),o.defaults={target:!1,row:!1};var s=function(i,n){var o=t(i);if(!o.data("gridMargin")){this.options=t.extend({},s.defaults,n);var a=new e.stackMargin(o,this.options);o.data("gridMargin",a)}};s.defaults={cls:"uk-grid-margin"},e.gridMatchHeight=o,e.gridMargin=s,t(document).on("uk-domready",function(){t("[data-uk-grid-match],[data-uk-grid-margin]").each(function(){var i,n=t(this);n.is("[data-uk-grid-match]")&&!n.data("gridMatchHeight")&&(i=new o(n,e.Utils.options(n.attr("data-uk-grid-match")))),n.is("[data-uk-grid-margin]")&&!n.data("gridMargin")&&(i=new s(n,e.Utils.options(n.attr("data-uk-grid-margin"))))})})}(jQuery,jQuery.UIkit),function(t,e,i){"use strict";function n(e,i){return i?("object"==typeof e?(e=e instanceof jQuery?e:t(e),e.parent().length&&(i.persist=e,i.persist.data("modalPersistParent",e.parent()))):e="string"==typeof e||"number"==typeof e?t("<div></div>").html(e):t("<div></div>").html("$.UIkitt.modal Error: Unsupported data type: "+typeof e),e.appendTo(i.element.find(".uk-modal-dialog")),i):void 0}var o=!1,s=t("html"),a=function(i,n){var o=this;this.element=t(i),this.options=t.extend({},a.defaults,n),this.transition=e.support.transition,this.dialog=this.element.find(".uk-modal-dialog"),this.scrollable=function(){var t=o.dialog.find(".uk-overflow-container:first");return t.length?t:!1}(),this.element.on("click",".uk-modal-close",function(t){t.preventDefault(),o.hide()}).on("click",function(e){var i=t(e.target);i[0]==o.element[0]&&o.options.bgclose&&o.hide()})};t.extend(a.prototype,{scrollable:!1,transition:!1,toggle:function(){return this[this.isActive()?"hide":"show"]()},show:function(){return this.isActive()?void 0:(o&&o.hide(!0),this.element.removeClass("uk-open").show(),this.resize(),o=this,s.addClass("uk-modal-page").height(),this.element.addClass("uk-open").trigger("uk.modal.show"),this)},hide:function(t){if(this.isActive()){if(!t&&e.support.transition){var i=this;this.element.one(e.support.transition.end,function(){i._hide()}).removeClass("uk-open")}else this._hide();return this}},resize:function(){var t="padding-"+("left"==e.langdirection?"right":"left");if(this.scrollbarwidth=window.innerWidth-s.width(),s.css(t,this.scrollbarwidth),this.element.css(t,""),this.dialog.offset().left>this.scrollbarwidth&&this.element.css(t,this.scrollbarwidth),this.scrollable){this.scrollable.css("height",0);var i=Math.abs(parseInt(this.dialog.css("margin-top"),10)),n=this.dialog.outerHeight(),o=window.innerHeight,a=o-2*(20>i?20:i)-n;this.scrollable.css("height",this.options.minScrollHeight>a?"":a)}},_hide:function(){this.element.hide().removeClass("uk-open"),s.removeClass("uk-modal-page").css("padding-"+("left"==e.langdirection?"right":"left"),""),o===this&&(o=!1),this.element.trigger("uk.modal.hide")},isActive:function(){return o==this}}),a.dialog={tpl:'<div class="uk-modal"><div class="uk-modal-dialog"></div></div>'},a.defaults={keyboard:!0,show:!1,bgclose:!0,minScrollHeight:150};var r=function(e,i){var n=this,o=t(e);o.data("modal")||(this.options=t.extend({target:o.is("a")?o.attr("href"):!1},i),this.element=o,this.modal=new a(this.options.target,i),o.on("click",function(t){t.preventDefault(),n.show()}),t.each(["show","hide","isActive"],function(t,e){n[e]=function(){return n.modal[e]()}}),this.element.data("modal",this))};r.dialog=function(e,i){var o=new a(t(a.dialog.tpl).appendTo("body"),i);return o.element.on("uk.modal.hide",function(){o.persist&&(o.persist.appendTo(o.persist.data("modalPersistParent")),o.persist=!1),o.element.remove()}),n(e,o),o},r.alert=function(e,i){r.dialog(['<div class="uk-margin uk-modal-content">'+(e+"")+"</div>",'<div class="uk-modal-buttons"><button class="uk-button uk-button-primary uk-modal-close">Ok</button></div>'].join(""),t.extend({bgclose:!1,keyboard:!1},i)).show()},r.confirm=function(e,i,n){i=t.isFunction(i)?i:function(){};var o=r.dialog(['<div class="uk-margin uk-modal-content">'+(e+"")+"</div>",'<div class="uk-modal-buttons"><button class="uk-button uk-button-primary js-modal-confirm">Ok</button> <button class="uk-button uk-modal-close">Cancel</button></div>'].join(""),t.extend({bgclose:!1,keyboard:!1},n));o.element.find(".js-modal-confirm").on("click",function(){i(),o.hide()}),o.show()},r.Modal=a,e.modal=r,t(document).on("click.modal.uikit","[data-uk-modal]",function(i){var n=t(this);if(n.is("a")&&i.preventDefault(),!n.data("modal")){var o=new r(n,e.Utils.options(n.attr("data-uk-modal")));o.show()}}),t(document).on("keydown.modal.uikit",function(t){o&&27===t.keyCode&&o.options.keyboard&&(t.preventDefault(),o.hide())}),i.on("resize orientationchange",e.Utils.debounce(function(){o&&o.resize()},150))}(jQuery,jQuery.UIkit,jQuery(window)),function(t,e){"use strict";var i,n=t(window),o=t(document),s={show:function(e){if(e=t(e),e.length){var a=t("html"),r=e.find(".uk-offcanvas-bar:first"),l="right"==t.UIkit.langdirection,u=(r.hasClass("uk-offcanvas-bar-flip")?-1:1)*(l?-1:1),c=-1==u&&n.width()<window.innerWidth?window.innerWidth-n.width():0;i={x:window.scrollX,y:window.scrollY},e.addClass("uk-active"),a.css({width:window.innerWidth,height:window.innerHeight}).addClass("uk-offcanvas-page"),a.css(l?"margin-right":"margin-left",(l?-1:1)*(r.outerWidth()-c)*u).width(),r.addClass("uk-offcanvas-bar-show").width(),e.off(".ukoffcanvas").on("click.ukoffcanvas swipeRight.ukoffcanvas swipeLeft.ukoffcanvas",function(e){var i=t(e.target);if(!e.type.match(/swipe/)&&!i.hasClass("uk-offcanvas-close")){if(i.hasClass("uk-offcanvas-bar"))return;if(i.parents(".uk-offcanvas-bar:first").length)return}e.stopImmediatePropagation(),s.hide()}),o.on("keydown.ukoffcanvas",function(t){27===t.keyCode&&s.hide()})}},hide:function(e){var n=t("html"),s=t(".uk-offcanvas.uk-active"),a="right"==t.UIkit.langdirection,r=s.find(".uk-offcanvas-bar:first");s.length&&(t.UIkit.support.transition&&!e?(n.one(t.UIkit.support.transition.end,function(){n.removeClass("uk-offcanvas-page").attr("style",""),s.removeClass("uk-active"),window.scrollTo(i.x,i.y)}).css(a?"margin-right":"margin-left",""),setTimeout(function(){r.removeClass("uk-offcanvas-bar-show")},50)):(n.removeClass("uk-offcanvas-page").attr("style",""),s.removeClass("uk-active"),r.removeClass("uk-offcanvas-bar-show"),window.scrollTo(i.x,i.y)),s.off(".ukoffcanvas"),o.off(".ukoffcanvas"))}},a=function(e,i){var n=this,o=t(e);o.data("offcanvas")||(this.options=t.extend({target:o.is("a")?o.attr("href"):!1},i),this.element=o,o.on("click",function(t){t.preventDefault(),s.show(n.options.target)}),this.element.data("offcanvas",this))};a.offcanvas=s,e.offcanvas=a,o.on("click.offcanvas.uikit","[data-uk-offcanvas]",function(i){i.preventDefault();var n=t(this);n.data("offcanvas")||(new a(n,e.Utils.options(n.attr("data-uk-offcanvas"))),n.trigger("click"))})}(jQuery,jQuery.UIkit),function(t,e){"use strict";function i(e){var i=t(e),n="auto";if(i.is(":visible"))n=i.outerHeight();else{var o={position:i.css("position"),visibility:i.css("visibility"),display:i.css("display")};n=i.css({position:"absolute",visibility:"hidden",display:"block"}).outerHeight(),i.css(o)}return n}var n=function(e,i){var o=this,s=t(e);s.data("nav")||(this.options=t.extend({},n.defaults,i),this.element=s.on("click",this.options.toggle,function(e){e.preventDefault();var i=t(this);o.open(i.parent()[0]==o.element[0]?i:i.parent("li"))}),this.element.find(this.options.lists).each(function(){var e=t(this),i=e.parent(),n=i.hasClass("uk-active");e.wrap('<div style="overflow:hidden;height:0;position:relative;"></div>'),i.data("list-container",e.parent()),n&&o.open(i,!0)}),this.element.data("nav",this))};t.extend(n.prototype,{open:function(e,n){var o=this.element,s=t(e);this.options.multiple||o.children(".uk-open").not(e).each(function(){t(this).data("list-container")&&t(this).data("list-container").stop().animate({height:0},function(){t(this).parent().removeClass("uk-open")})}),s.toggleClass("uk-open"),s.data("list-container")&&(n?s.data("list-container").stop().height(s.hasClass("uk-open")?"auto":0):s.data("list-container").stop().animate({height:s.hasClass("uk-open")?i(s.data("list-container").find("ul:first")):0}))}}),n.defaults={toggle:">li.uk-parent > a[href='#']",lists:">li.uk-parent > ul",multiple:!1},e.nav=n,t(document).on("uk-domready",function(){t("[data-uk-nav]").each(function(){var i=t(this);i.data("nav")||new n(i,e.Utils.options(i.attr("data-uk-nav")))})})}(jQuery,jQuery.UIkit),function(t,e,i){"use strict";var n,o,s=function(e,i){var n=this,o=t(e);o.data("tooltip")||(this.options=t.extend({},s.defaults,i),this.element=o.on({focus:function(){n.show()},blur:function(){n.hide()},mouseenter:function(){n.show()},mouseleave:function(){n.hide()}}),this.tip="function"==typeof this.options.src?this.options.src.call(this.element):this.options.src,this.element.attr("data-cached-title",this.element.attr("title")).attr("title",""),this.element.data("tooltip",this))};t.extend(s.prototype,{tip:"",show:function(){if(o&&clearTimeout(o),this.tip.length){n.stop().css({top:-2e3,visibility:"hidden"}).show(),n.html('<div class="uk-tooltip-inner">'+this.tip+"</div>");var e=this,i=t.extend({},this.element.offset(),{width:this.element[0].offsetWidth,height:this.element[0].offsetHeight}),s=n[0].offsetWidth,a=n[0].offsetHeight,r="function"==typeof this.options.offset?this.options.offset.call(this.element):this.options.offset,l="function"==typeof this.options.pos?this.options.pos.call(this.element):this.options.pos,u={display:"none",visibility:"visible",top:i.top+i.height+a,left:i.left},c=l.split("-");"left"!=c[0]&&"right"!=c[0]||"right"!=t.UIkit.langdirection||(c[0]="left"==c[0]?"right":"left");var h={bottom:{top:i.top+i.height+r,left:i.left+i.width/2-s/2},top:{top:i.top-a-r,left:i.left+i.width/2-s/2},left:{top:i.top+i.height/2-a/2,left:i.left-s-r},right:{top:i.top+i.height/2-a/2,left:i.left+i.width+r}};t.extend(u,h[c[0]]),2==c.length&&(u.left="left"==c[1]?i.left:i.left+i.width-s);var d=this.checkBoundary(u.left,u.top,s,a);if(d){switch(d){case"x":l=2==c.length?c[0]+"-"+(0>u.left?"left":"right"):0>u.left?"right":"left";break;case"y":l=2==c.length?(0>u.top?"bottom":"top")+"-"+c[1]:0>u.top?"bottom":"top";break;case"xy":l=2==c.length?(0>u.top?"bottom":"top")+"-"+(0>u.left?"left":"right"):0>u.left?"right":"left"}c=l.split("-"),t.extend(u,h[c[0]]),2==c.length&&(u.left="left"==c[1]?i.left:i.left+i.width-s)}u.left-=t("body").position().left,o=setTimeout(function(){n.css(u).attr("class","uk-tooltip uk-tooltip-"+l),e.options.animation?n.css({opacity:0,display:"block"}).animate({opacity:1},parseInt(e.options.animation,10)||400):n.show(),o=!1},parseInt(this.options.delay,10)||0)}},hide:function(){this.element.is("input")&&this.element[0]===document.activeElement||(o&&clearTimeout(o),n.stop(),this.options.animation?n.fadeOut(parseInt(this.options.animation,10)||400):n.hide())},content:function(){return this.tip},checkBoundary:function(t,e,n,o){var s="";return(0>t||t-i.scrollLeft()+n>window.innerWidth)&&(s+="x"),(0>e||e-i.scrollTop()+o>window.innerHeight)&&(s+="y"),s}}),s.defaults={offset:5,pos:"top",animation:!1,delay:0,src:function(){return this.attr("title")}},e.tooltip=s,t(function(){n=t('<div class="uk-tooltip"></div>').appendTo("body")}),t(document).on("mouseenter.tooltip.uikit focus.tooltip.uikit","[data-uk-tooltip]",function(){var i=t(this);i.data("tooltip")||(new s(i,e.Utils.options(i.attr("data-uk-tooltip"))),i.trigger("mouseenter"))})}(jQuery,jQuery.UIkit,jQuery(window)),function(t,e){"use strict";var i=function(e,n){var o=this,s=t(e);if(!s.data("switcher")){if(this.options=t.extend({},i.defaults,n),this.element=s.on("click",this.options.toggle,function(t){t.preventDefault(),o.show(this)}),this.options.connect){this.connect=t(this.options.connect).find(".uk-active").removeClass(".uk-active").end();var a=this.element.find(this.options.toggle),r=a.filter(".uk-active");r.length?this.show(r):(r=a.eq(this.options.active),this.show(r.length?r:a.eq(0)))}this.element.data("switcher",this)}};t.extend(i.prototype,{show:function(e){e=isNaN(e)?t(e):this.element.find(this.options.toggle).eq(e);var i=e;if(!i.hasClass("uk-disabled")){if(this.element.find(this.options.toggle).filter(".uk-active").removeClass("uk-active"),i.addClass("uk-active"),this.options.connect&&this.connect.length){var n=this.element.find(this.options.toggle).index(i);this.connect.children().removeClass("uk-active").eq(n).addClass("uk-active")}this.element.trigger("uk.switcher.show",[i])}}}),i.defaults={connect:!1,toggle:">*",active:0},e.switcher=i,t(document).on("uk-domready",function(){t("[data-uk-switcher]").each(function(){var n=t(this);n.data("switcher")||new i(n,e.Utils.options(n.attr("data-uk-switcher")))})})}(jQuery,jQuery.UIkit),function(t,e){"use strict";var i=function(e,n){var o=this,s=t(e);if(!s.data("tab")){if(this.element=s,this.options=t.extend({},i.defaults,n),this.options.connect&&(this.connect=t(this.options.connect)),window.location.hash){var a=this.element.children().filter(window.location.hash);a.length&&this.element.children().removeClass("uk-active").filter(a).addClass("uk-active")}var r=t('<li class="uk-tab-responsive uk-active"><a href="javascript:void(0);"></a></li>'),l=r.find("a:first"),u=t('<div class="uk-dropdown uk-dropdown-small"><ul class="uk-nav uk-nav-dropdown"></ul><div>'),c=u.find("ul");l.html(this.element.find("li.uk-active:first").find("a").text()),this.element.hasClass("uk-tab-bottom")&&u.addClass("uk-dropdown-up"),this.element.hasClass("uk-tab-flip")&&u.addClass("uk-dropdown-flip"),this.element.find("a").each(function(e){var i=t(this).parent(),n=t('<li><a href="javascript:void(0);">'+i.text()+"</a></li>").on("click",function(){o.element.data("switcher").show(e)});t(this).parents(".uk-disabled:first").length||c.append(n)}),this.element.uk("switcher",{toggle:">li:not(.uk-tab-responsive)",connect:this.options.connect,active:this.options.active}),r.append(u).uk("dropdown",{mode:"click"}),this.element.append(r).data({dropdown:r.data("dropdown"),mobilecaption:l}).on("uk.switcher.show",function(t,e){r.addClass("uk-active"),l.html(e.find("a").text())}),this.element.data("tab",this)}};i.defaults={connect:!1,active:0},e.tab=i,t(document).on("uk-domready",function(){t("[data-uk-tab]").each(function(){var n=t(this);n.data("tab")||new i(n,e.Utils.options(n.attr("data-uk-tab")))})})}(jQuery,jQuery.UIkit),function(t,e){"use strict";var i=t(window),n=[],o=function(){for(var t=0;n.length>t;t++)e.support.requestAnimationFrame.apply(window,[n[t].check])},s=function(i,o){var a=t(i);if(!a.data("scrollspy")){this.options=t.extend({},s.defaults,o),this.element=t(i);var r,l,u,c=this,h=function(){var t=e.Utils.isInView(c.element,c.options);t&&!l&&(r&&clearTimeout(r),u||(c.element.addClass(c.options.initcls),c.offset=c.element.offset(),u=!0,c.element.trigger("uk-scrollspy-init")),r=setTimeout(function(){t&&c.element.addClass("uk-scrollspy-inview").addClass(c.options.cls).width()},c.options.delay),l=!0,c.element.trigger("uk.scrollspy.inview")),!t&&l&&c.options.repeat&&(c.element.removeClass("uk-scrollspy-inview").removeClass(c.options.cls),l=!1,c.element.trigger("uk.scrollspy.outview"))};h(),this.element.data("scrollspy",this),this.check=h,n.push(this)}};s.defaults={cls:"uk-scrollspy-inview",initcls:"uk-scrollspy-init-inview",topoffset:0,leftoffset:0,repeat:!1,delay:0},e.scrollspy=s;var a=[],r=function(){for(var t=0;a.length>t;t++)e.support.requestAnimationFrame.apply(window,[a[t].check])},l=function(n,o){var s=t(n);if(!s.data("scrollspynav")){this.element=s,this.options=t.extend({},l.defaults,o);var r,u=[],c=this.element.find("a[href^='#']").each(function(){u.push(t(this).attr("href"))}),h=t(u.join(",")),d=this,f=function(){r=[];for(var t=0;h.length>t;t++)e.Utils.isInView(h.eq(t),d.options)&&r.push(h.eq(t));if(r.length){var n=i.scrollTop(),o=function(){for(var t=0;r.length>t;t++)if(r[t].offset().top>=n)return r[t]}();if(!o)return;d.options.closest?c.closest(d.options.closest).removeClass(d.options.cls).end().filter("a[href='#"+o.attr("id")+"']").closest(d.options.closest).addClass(d.options.cls):c.removeClass(d.options.cls).filter("a[href='#"+o.attr("id")+"']").addClass(d.options.cls)}};this.options.smoothscroll&&e.smoothScroll&&c.each(function(){new e.smoothScroll(this,d.options.smoothscroll)}),f(),this.element.data("scrollspynav",this),this.check=f,a.push(this)}};l.defaults={cls:"uk-active",closest:!1,topoffset:0,leftoffset:0,smoothscroll:!1},e.scrollspynav=l;var u=function(){o(),r()};i.on("scroll",u).on("resize orientationchange",e.Utils.debounce(u,50)),t(document).on("uk-domready",function(){t("[data-uk-scrollspy]").each(function(){var i=t(this);i.data("scrollspy")||new s(i,e.Utils.options(i.attr("data-uk-scrollspy")))}),t("[data-uk-scrollspy-nav]").each(function(){var i=t(this);i.data("scrollspynav")||new l(i,e.Utils.options(i.attr("data-uk-scrollspy-nav")))})
})}(jQuery,jQuery.UIkit),function(t,e){"use strict";var i=function(e,n){var o=this,s=t(e);s.data("smoothScroll")||(this.options=t.extend({},i.defaults,n),this.element=s.on("click",function(){var e=t(this.hash).length?t(this.hash):t("body"),i=e.offset().top-o.options.offset,n=t(document).height(),s=t(window).height();return e.outerHeight(),i+s>n&&(i=n-s),t("html,body").stop().animate({scrollTop:i},o.options.duration,o.options.transition),!1}),this.element.data("smoothScroll",this))};i.defaults={duration:1e3,transition:"easeOutExpo",offset:0},e.smoothScroll=i,t.easing.easeOutExpo||(t.easing.easeOutExpo=function(t,e,i,n,o){return e==o?i+n:n*(-Math.pow(2,-10*e/o)+1)+i}),t(document).on("click.smooth-scroll.uikit","[data-uk-smooth-scroll]",function(){var n=t(this);n.data("smoothScroll")||(new i(n,e.Utils.options(n.attr("data-uk-smooth-scroll"))),n.trigger("click"))})}(jQuery,jQuery.UIkit),function(t,e,i){var n=function(t,i){var o=this,s=e(t);s.data("toggle")||(this.options=e.extend({},n.defaults,i),this.totoggle=this.options.target?e(this.options.target):[],this.element=s.on("click",function(t){t.preventDefault(),o.toggle()}),this.element.data("toggle",this))};e.extend(n.prototype,{toggle:function(){this.totoggle.length&&this.totoggle.toggleClass(this.options.cls)}}),n.defaults={target:!1,cls:"uk-hidden"},i.toggle=n,e(document).on("uk-domready",function(){e("[data-uk-toggle]").each(function(){var t=e(this);t.data("toggle")||new n(t,i.Utils.options(t.attr("data-uk-toggle")))})})}(this,jQuery,jQuery.UIkit);
/*! UIkit 2.5.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */


(function(t){"function"==typeof define&&define.amd&&define("uikit-timepicker",["uikit"],function(){return jQuery.UIkit.timepicker||t(window,window.jQuery,window.jQuery.UIkit)}),window&&window.jQuery&&window.jQuery.UIkit&&t(window,window.jQuery,window.jQuery.UIkit)})(function(t,e,i){var n=function(t,i){var s=e(t);s.data("timepicker")||(this.$element=s,this.element=this.$element[0],this.options=e.extend({},n.defaults,i),this.$element.on({"focus.timepicker.uikit":e.proxy(this.highlightUnit,this),"click.timepicker.uikit":e.proxy(this.highlightUnit,this),"keydown.timepicker.uikit":e.proxy(this.onKeydown,this),"blur.timepicker.uikit":e.proxy(this.blurElement,this)}),this.setDefaultTime(this.options.defaultTime),this.$element.data("timepicker",this))};return n.defaults={defaultTime:"current",disableFocus:!1,minuteStep:15,secondStep:15,showSeconds:!1,showMeridian:!1},e.extend(n.prototype,{setDefaultTime:function(t){if(this.element.value)this.updateFromElementVal();else if("current"===t){var e=new Date;this.hour=e.getHours(),this.minute=Math.floor(e.getMinutes()/this.options.minuteStep)*this.options.minuteStep,this.second=Math.floor(e.getSeconds()/this.options.secondStep)*this.options.secondStep,this.meridian="AM",this.options.showMeridian&&(0===this.hour?this.hour=12:this.hour>=12?(this.hour>12&&(this.hour=this.hour-12),this.meridian="PM"):this.meridian="AM"),this.update()}else t===!1?(this.hour=0,this.minute=0,this.second=0,this.meridian="AM"):this.setTime(t)},setTime:function(t){var e,i;this.options.showMeridian?(e=t.split(" "),i=e[0].split(":"),this.meridian=e[1]):i=t.split(":"),this.hour=parseInt(i[0],10),this.minute=parseInt(i[1],10),this.second=parseInt(i[2],10),isNaN(this.hour)&&(this.hour=0),isNaN(this.minute)&&(this.minute=0),this.options.showMeridian?(this.hour>12?this.hour=12:1>this.hour&&(this.hour=12),"am"===this.meridian||"a"===this.meridian?this.meridian="AM":("pm"===this.meridian||"p"===this.meridian)&&(this.meridian="PM"),"AM"!==this.meridian&&"PM"!==this.meridian&&(this.meridian="AM")):this.hour>=24?this.hour=23:0>this.hour&&(this.hour=0),0>this.minute?this.minute=0:this.minute>=60&&(this.minute=59),this.options.showSeconds&&(isNaN(this.second)?this.second=0:0>this.second?this.second=0:this.second>=60&&(this.second=59)),this.update()},blurElement:function(){this.highlightedUnit=void 0,this.updateFromElementVal()},decrementHour:function(t){if(this.options.showMeridian)if(1===this.hour)this.hour=12;else{if(12===this.hour)return this.hour--,this.toggleMeridian();if(0===this.hour)return this.hour=11,this.toggleMeridian();this.hour--}else 0===this.hour?this.hour=23:this.hour--;t||this.update()},decrementMinute:function(t){var e=t?this.minute-t:this.minute-this.options.minuteStep;0>e?(this.decrementHour(!0),this.minute=e+60):this.minute=e,this.update()},decrementSecond:function(){var t=this.second-this.options.secondStep;0>t?(this.decrementMinute(!0),this.second=t+60):this.second=t,this.update()},onKeydown:function(t){switch(t.keyCode){case 9:switch(this.updateFromElementVal(),this.highlightedUnit){case"hour":t.preventDefault(),this.highlightNextUnit();break;case"minute":(this.options.showMeridian||this.options.showSeconds)&&(t.preventDefault(),this.highlightNextUnit());break;case"second":this.options.showMeridian&&(t.preventDefault(),this.highlightNextUnit())}break;case 27:this.updateFromElementVal();break;case 37:t.preventDefault(),this.highlightPrevUnit(),this.updateFromElementVal();break;case 38:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.incrementHour(),this.highlightHour();break;case"minute":this.incrementMinute(),this.highlightMinute();break;case"second":this.incrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}break;case 39:t.preventDefault(),this.updateFromElementVal(),this.highlightNextUnit();break;case 40:switch(t.preventDefault(),this.highlightedUnit){case"hour":this.decrementHour(),this.highlightHour();break;case"minute":this.decrementMinute(),this.highlightMinute();break;case"second":this.decrementSecond(),this.highlightSecond();break;case"meridian":this.toggleMeridian(),this.highlightMeridian()}}},formatTime:function(t,e,i,n){return t=10>t?"0"+t:t,e=10>e?"0"+e:e,i=10>i?"0"+i:i,t+":"+e+(this.options.showSeconds?":"+i:"")+(this.options.showMeridian?" "+n:"")},getCursorPosition:function(){if("selectionStart"in this.element)return this.element.selectionStart;if(document.selection){this.element.focus();var t=document.selection.createRange(),e=document.selection.createRange().text.length;return t.moveStart("character",-this.element.value.length),t.text.length-e}},getTime:function(){return this.formatTime(this.hour,this.minute,this.second,this.meridian)},highlightUnit:function(){this.position=this.getCursorPosition(),this.position>=0&&2>=this.position?this.highlightHour():this.position>=3&&5>=this.position?this.highlightMinute():this.position>=6&&8>=this.position?this.options.showSeconds?this.highlightSecond():this.highlightMeridian():this.position>=9&&11>=this.position&&this.highlightMeridian()},highlightNextUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMinute();break;case"minute":this.options.showSeconds?this.highlightSecond():this.options.showMeridian?this.highlightMeridian():this.highlightHour();break;case"second":this.options.showMeridian?this.highlightMeridian():this.highlightHour();break;case"meridian":this.highlightHour()}},highlightPrevUnit:function(){switch(this.highlightedUnit){case"hour":this.highlightMeridian();break;case"minute":this.highlightHour();break;case"second":this.highlightMinute();break;case"meridian":this.options.showSeconds?this.highlightSecond():this.highlightMinute()}},highlightHour:function(){var t=this.element;this.highlightedUnit="hour",t.setSelectionRange&&setTimeout(function(){t.setSelectionRange(0,2)},0)},highlightMinute:function(){var t=this.element;this.highlightedUnit="minute",t.setSelectionRange&&setTimeout(function(){t.setSelectionRange(3,5)},0)},highlightSecond:function(){var t=this.element;this.highlightedUnit="second",t.setSelectionRange&&setTimeout(function(){t.setSelectionRange(6,8)},0)},highlightMeridian:function(){var t=this.element;this.highlightedUnit="meridian",t.setSelectionRange&&(this.options.showSeconds?setTimeout(function(){t.setSelectionRange(9,11)},0):setTimeout(function(){t.setSelectionRange(6,8)},0))},incrementHour:function(t){if(this.options.showMeridian){if(11===this.hour)return this.hour++,this.toggleMeridian();12===this.hour&&(this.hour=0)}return 23===this.hour?(this.hour=0,void 0):(this.hour++,t||this.update(),void 0)},incrementMinute:function(t){var e=t?this.minute+t:this.minute+this.options.minuteStep-this.minute%this.options.minuteStep;e>59?(this.incrementHour(!0),this.minute=e-60):this.minute=e,this.update()},incrementSecond:function(){var t=this.second+this.options.secondStep-this.second%this.options.secondStep;t>59?(this.incrementMinute(!0),this.second=t-60):this.second=t,this.update()},remove:function(){e("document").off(".timepicker.uikit"),delete this.$element.data().timepicker},toggleMeridian:function(){this.meridian="AM"===this.meridian?"PM":"AM",this.update()},update:function(){this.$element.trigger({type:"changeTime.timepicker",time:{value:this.getTime(),hours:this.hour,minutes:this.minute,seconds:this.second,meridian:this.meridian}}),this.updateElement()},updateElement:function(){this.$element.val(this.getTime()).trigger("change")},updateFromElementVal:function(){this.element.value&&this.setTime(this.element.value)}}),e(document).on("focus.timepicker.uikit","[data-uk-timepicker]",function(t){var s=e(this);s.data("timepicker")||(t.preventDefault(),new n(s,i.Utils.options(s.attr("data-uk-timepicker"))),s.trigger("focus"))}),i.timepicker=n,n});
/*! UIkit 2.5.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */


(function(t){"function"==typeof define&&define.amd&&define("uikit-datepicker",["uikit"],function(){return jQuery.UIkit.datepicker||t(window,window.jQuery,window.jQuery.UIkit)}),window&&window.jQuery&&window.jQuery.UIkit&&t(window,window.jQuery,window.jQuery.UIkit)})(function(t,e,n){var i,s=!1,o=e('<div class="uk-dropdown uk-datepicker"></div>');o.on("click",".uk-datepicker-next, .uk-datepicker-previous, [data-date]",function(t){t.stopPropagation(),t.preventDefault();var n=e(this);n.is("[data-date]")?(s.element.val(i(n.data("date")).format(s.options.format)).trigger("change"),o.hide(),s=!1):s.add("months",1*(n.hasClass("uk-datepicker-next")?1:-1))});var a=function(t,n){var o=this,r=e(t);r.data("datepicker")||(this.element=r,this.options=e.extend({},a.defaults,n),this.current=this.element.val()?i(this.element.val(),this.options.format):i(),this.element.on("click",function(){s!==o&&o.pick(this.value)}).on("change",function(){o.element.val()&&!i(o.element.val(),o.options.format).isValid()&&o.element.val(i().format(o.options.format))}),this.element.data("datepicker",this))};return a.defaults={weekstart:1,i18n:{months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"]},format:"DD.MM.YYYY",offsettop:5,template:function(t,e){var n="";n+='<div class="uk-datepicker-nav">',n+='<a href="" class="uk-datepicker-previous"></a>',n+='<a href="" class="uk-datepicker-next"></a>',n+='<div class="uk-datepicker-heading">'+e.i18n.months[t.month]+" "+t.year+"</div>",n+="</div>",n+='<table class="uk-datepicker-table">',n+="<thead>";for(var i=0;t.weekdays.length>i;i++)t.weekdays[i]&&(n+="<th>"+t.weekdays[i]+"</th>");n+="</thead>",n+="<tbody>";for(var i=0;t.days.length>i;i++)if(t.days[i]&&t.days[i].length){n+="<tr>";for(var s=0;t.days[i].length>s;s++)if(t.days[i][s]){var o=t.days[i][s],a=[];o.inmonth||a.push("uk-datepicker-table-muted"),o.selected&&a.push("uk-active"),n+='<td><a href="" class="'+a.join(" ")+'" data-date="'+o.day.format()+'">'+o.day.format("D")+"</a></td>"}n+="</tr>"}return n+="</tbody>",n+="</table>"}},e.extend(a.prototype,{pick:function(t){var n=this.element.offset(),a={top:n.top+this.element.outerHeight()+this.options.offsettop,left:n.left,right:""};this.current=t?i(t,this.options.format):i(),this.initdate=this.current.format("YYYY-MM-DD"),this.update(),"right"==e.UIkit.langdirection&&(a.right=window.innerWidth-(a.left+this.element.outerWidth()),a.left=""),o.css(a).show(),s=this},add:function(t,e){this.current.add(t,e),this.update()},setMonth:function(t){this.current.month(t),this.update()},setYear:function(t){this.current.year(t),this.update()},update:function(){var t=this.getRows(this.current.year(),this.current.month()),e=this.options.template(t,this.options);o.html(e)},getRows:function(t,e){var n=this.options,s=i().format("YYYY-MM-DD"),o=[31,0===t%4&&0!==t%100||0===t%400?29:28,31,30,31,30,31,31,30,31,30,31][e],a=new Date(t,e,1).getDay(),r={month:e,year:t,weekdays:[],days:[]},u=[];r.weekdays=function(){for(var t=0,e=[];7>t;t++){for(var i=t+(n.weekstart||0);i>=7;)i-=7;e.push(n.i18n.weekdays[i])}return e}(),n.weekstart&&n.weekstart>0&&(a-=n.weekstart,0>a&&(a+=7));for(var l=o+a,d=l;d>7;)d-=7;l+=7-d;for(var c,h,f,p,m,g=0,v=0;l>g;g++)c=new Date(t,e,1+(g-a)),h=n.mindate&&n.mindate>c||n.maxdate&&c>n.maxdate,m=!(a>g||g>=o+a),c=i(c),f=this.initdate==c.format("YYYY-MM-DD"),p=s==c.format("YYYY-MM-DD"),u.push({selected:f,today:p,disabled:h,day:c,inmonth:m}),7===++v&&(r.days.push(u),u=[],v=0);return r}}),n.datepicker=a,e(document).on("focus.datepicker.uikit","[data-uk-datepicker]",function(t){var i=e(this);i.data("datepicker")||(t.preventDefault(),new a(i,n.Utils.options(i.attr("data-uk-datepicker"))),i.trigger("focus"))}),e(document).on("click.datepicker.uikit",function(t){var n=e(t.target);!s||n[0]==o[0]||n.data("datepicker")||n.parents(".uk-datepicker:first").length||(o.hide(),s=!1)}),e(function(){o.appendTo("body")}),i=function(t){function e(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1}}function n(t,e){return function(n){return l(t.call(this,n),e)}}function i(t,e){return function(n){return this.lang().ordinal(t.call(this,n),e)}}function s(){}function o(t){y(t),r(this,t)}function a(t){t=p(t);var e=t.year||0,n=t.month||0,i=t.week||0,s=t.day||0;this._milliseconds=+(t.millisecond||0)+1e3*(t.second||0)+6e4*(t.minute||0)+36e5*(t.hour||0),this._days=+s+7*i,this._months=+n+12*e,this._data={},this._bubble()}function r(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return e.hasOwnProperty("toString")&&(t.toString=e.toString),e.hasOwnProperty("valueOf")&&(t.valueOf=e.valueOf),t}function u(t){return 0>t?Math.ceil(t):Math.floor(t)}function l(t,e,n){for(var i=""+Math.abs(t);e>i.length;)i="0"+i;return(t>=0?n?"+":"":"-")+i}function d(t,e,n,i){var s=e._milliseconds,o=e._days;e=e._months;var a,r;s&&t._d.setTime(+t._d+s*n),(o||e)&&(a=t.minute(),r=t.hour()),o&&t.date(t.date()+o*n),e&&t.month(t.month()+e*n),s&&!i&&q.updateOffset(t,o||e),(o||e)&&(t.minute(a),t.hour(r))}function c(t){return"[object Array]"===Object.prototype.toString.call(t)}function h(t,e,n){var i,s=Math.min(t.length,e.length),o=Math.abs(t.length-e.length),a=0;for(i=0;s>i;i++)(n&&t[i]!==e[i]||!n&&g(t[i])!==g(e[i]))&&a++;return a+o}function f(t){if(t){var e=t.toLowerCase().replace(/(.)s$/,"$1");t=Oe[t]||je[e]||e}return t}function p(t){var e,n,i={};for(n in t)t.hasOwnProperty(n)&&(e=f(n))&&(i[e]=t[n]);return i}function m(e){var n,i;if(0===e.indexOf("week"))n=7,i="day";else{if(0!==e.indexOf("month"))return;n=12,i="month"}q[e]=function(s,o){var a,r,u=q.fn._lang[e],l=[];if("number"==typeof s&&(o=s,s=t),r=function(t){return t=q().utc().set(i,t),u.call(q.fn._lang,t,s||"")},null!=o)return r(o);for(a=0;n>a;a++)l.push(r(a));return l}}function g(t){t=+t;var e=0;return 0!==t&&isFinite(t)&&(e=t>=0?Math.floor(t):Math.ceil(t)),e}function v(t,e){return new Date(Date.UTC(t,e+1,0)).getUTCDate()}function k(t,e,n){return Q(q([t,11,31+e-n]),e,n).week}function w(t){return 0===t%4&&0!==t%100||0===t%400}function y(t){var e;t._a&&-2===t._pf.overflow&&(e=0>t._a[J]||t._a[J]>11?J:1>t._a[V]||t._a[V]>v(t._a[Z],t._a[J])?V:0>t._a[X]||t._a[X]>23?X:0>t._a[B]||t._a[B]>59?B:0>t._a[K]||t._a[K]>59?K:0>t._a[te]||t._a[te]>999?te:-1,t._pf._overflowDayOfYear&&(Z>e||e>V)&&(e=V),t._pf.overflow=e)}function _(t){return null==t._isValid&&(t._isValid=!isNaN(t._d.getTime())&&0>t._pf.overflow&&!t._pf.empty&&!t._pf.invalidMonth&&!t._pf.nullInput&&!t._pf.invalidFormat&&!t._pf.userInvalidated,t._strict&&(t._isValid=t._isValid&&0===t._pf.charsLeftOver&&0===t._pf.unusedTokens.length)),t._isValid}function b(t){return t?t.toLowerCase().replace("_","-"):t}function M(t,e){return e._isUTC?q(t).zone(e._offset||0):q(t).local()}function D(t){var e,n,i,s,o=0,a=function(t){if(!ee[t]&&ie)try{require("./lang/"+t)}catch(e){}return ee[t]};if(!t)return q.fn._lang;if(!c(t)){if(n=a(t))return n;t=[t]}for(;t.length>o;){for(s=b(t[o]).split("-"),e=s.length,i=(i=b(t[o+1]))?i.split("-"):null;e>0;){if(n=a(s.slice(0,e).join("-")))return n;if(i&&i.length>=e&&h(s,i,!0)>=e-1)break;e--}o++}return q.fn._lang}function Y(t){return t.match(/\[[\s\S]/)?t.replace(/^\[|\]$/g,""):t.replace(/\\/g,"")}function C(t){var e,n,i=t.match(re);for(e=0,n=i.length;n>e;e++)i[e]=Pe[i[e]]?Pe[i[e]]:Y(i[e]);return function(s){var o="";for(e=0;n>e;e++)o+=i[e]instanceof Function?i[e].call(s,t):i[e];return o}}function T(t,e){return t.isValid()?(e=U(e,t.lang()),Ie[e]||(Ie[e]=C(e)),Ie[e](t)):t.lang().invalidDate()}function U(t,e){function n(t){return e.longDateFormat(t)||t}var i=5;for(ue.lastIndex=0;i>=0&&ue.test(t);)t=t.replace(ue,n),ue.lastIndex=0,i-=1;return t}function S(t,e){var n=e._strict;switch(t){case"DDDD":return _e;case"YYYY":case"GGGG":case"gggg":return n?be:ce;case"Y":case"G":case"g":return De;case"YYYYYY":case"YYYYY":case"GGGGG":case"ggggg":return n?Me:he;case"S":if(n)return we;case"SS":if(n)return ye;case"SSS":if(n)return _e;case"DDD":return de;case"MMM":case"MMMM":case"dd":case"ddd":case"dddd":return pe;case"a":case"A":return D(e._l)._meridiemParse;case"X":return ve;case"Z":case"ZZ":return me;case"T":return ge;case"SSSS":return fe;case"MM":case"DD":case"YY":case"GG":case"gg":case"HH":case"hh":case"mm":case"ss":case"ww":case"WW":return n?ye:le;case"M":case"D":case"d":case"H":case"h":case"m":case"s":case"w":case"W":case"e":case"E":return le;case"Do":return ke;default:var i,n=RegExp;return i=W(t.replace("\\","")).replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),new n(i)}}function x(t){t=(t||"").match(me)||[],t=((t[t.length-1]||[])+"").match(Ue)||["-",0,0];var e=+(60*t[1])+g(t[2]);return"+"===t[0]?-e:e}function O(t){var e,n,i,s,o,a,r=[];if(!t._d){for(n=j(t),t._w&&null==t._a[V]&&null==t._a[J]&&(e=function(e){var n=parseInt(e,10);return e?3>e.length?n>68?1900+n:2e3+n:n:null==t._a[Z]?q().weekYear():t._a[Z]},i=t._w,null!=i.GG||null!=i.W||null!=i.E?e=z(e(i.GG),i.W||1,i.E,4,1):(s=D(t._l),o=null!=i.d?G(i.d,s):null!=i.e?parseInt(i.e,10)+s._week.dow:0,a=parseInt(i.w,10)||1,null!=i.d&&s._week.dow>o&&a++,e=z(e(i.gg),a,o,s._week.doy,s._week.dow)),t._a[Z]=e.year,t._dayOfYear=e.dayOfYear),t._dayOfYear&&(e=null==t._a[Z]?n[Z]:t._a[Z],t._dayOfYear>(w(e)?366:365)&&(t._pf._overflowDayOfYear=!0),e=P(e,0,t._dayOfYear),t._a[J]=e.getUTCMonth(),t._a[V]=e.getUTCDate()),e=0;3>e&&null==t._a[e];++e)t._a[e]=r[e]=n[e];for(;7>e;e++)t._a[e]=r[e]=null==t._a[e]?2===e?1:0:t._a[e];r[X]+=g((t._tzm||0)/60),r[B]+=g((t._tzm||0)%60),t._d=(t._useUTC?P:F).apply(null,r)}}function j(t){var e=new Date;return t._useUTC?[e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()]:[e.getFullYear(),e.getMonth(),e.getDate()]}function I(t){t._a=[],t._pf.empty=!0;var e,n,i,s,o=D(t._l),a=""+t._i,r=a.length,u=0;for(n=U(t._f,o).match(re)||[],o=0;n.length>o;o++)if(i=n[o],(e=(a.match(S(i,t))||[])[0])&&(s=a.substr(0,a.indexOf(e)),s.length>0&&t._pf.unusedInput.push(s),a=a.slice(a.indexOf(e)+e.length),u+=e.length),Pe[i]){e?t._pf.empty=!1:t._pf.unusedTokens.push(i),s=t;var l=void 0,d=s._a;switch(i){case"M":case"MM":null!=e&&(d[J]=g(e)-1);break;case"MMM":case"MMMM":l=D(s._l).monthsParse(e),null!=l?d[J]=l:s._pf.invalidMonth=e;break;case"D":case"DD":null!=e&&(d[V]=g(e));break;case"Do":null!=e&&(d[V]=g(parseInt(e,10)));break;case"DDD":case"DDDD":null!=e&&(s._dayOfYear=g(e));break;case"YY":d[Z]=g(e)+(g(e)>68?1900:2e3);break;case"YYYY":case"YYYYY":case"YYYYYY":d[Z]=g(e);break;case"a":case"A":s._isPm=D(s._l).isPM(e);break;case"H":case"HH":case"h":case"hh":d[X]=g(e);break;case"m":case"mm":d[B]=g(e);break;case"s":case"ss":d[K]=g(e);break;case"S":case"SS":case"SSS":case"SSSS":d[te]=g(1e3*("0."+e));break;case"X":s._d=new Date(1e3*parseFloat(e));break;case"Z":case"ZZ":s._useUTC=!0,s._tzm=x(e);break;case"w":case"ww":case"W":case"WW":case"d":case"dd":case"ddd":case"dddd":case"e":case"E":i=i.substr(0,1);case"gg":case"gggg":case"GG":case"GGGG":case"GGGGG":i=i.substr(0,2),e&&(s._w=s._w||{},s._w[i]=e)}}else t._strict&&!e&&t._pf.unusedTokens.push(i);t._pf.charsLeftOver=r-u,a.length>0&&t._pf.unusedInput.push(a),t._isPm&&12>t._a[X]&&(t._a[X]+=12),!1===t._isPm&&12===t._a[X]&&(t._a[X]=0),O(t),y(t)}function W(t){return t.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,e,n,i,s){return e||n||i||s})}function F(t,e,n,i,s,o,a){return e=new Date(t,e,n,i,s,o,a),1970>t&&e.setFullYear(t),e}function P(t){var e=new Date(Date.UTC.apply(null,arguments));return 1970>t&&e.setUTCFullYear(t),e}function G(t,e){if("string"==typeof t)if(isNaN(t)){if(t=e.weekdaysParse(t),"number"!=typeof t)return null}else t=parseInt(t,10);return t}function H(t,e,n,i,s){return s.relativeTime(e||1,!!n,t,i)}function Q(t,e,n){return e=n-e,n-=t.day(),n>e&&(n-=7),e-7>n&&(n+=7),t=q(t).add("d",n),{week:Math.ceil(t.dayOfYear()/7),year:t.year()}}function z(t,e,n,i,s){var o=P(t,0,1).getUTCDay();return e=7*(e-1)+((null!=n?n:s)-s)+(s-o+(o>i?7:0)-(s>o?7:0))+1,{year:e>0?t:t-1,dayOfYear:e>0?e:(w(t-1)?366:365)+e}}function L(n){var i=n._i,s=n._f;if(null===i)return q.invalid({nullInput:!0});if("string"==typeof i&&(n._i=i=D().preparse(i)),q.isMoment(i)){n=i;var a,u={};for(a in n)n.hasOwnProperty(a)&&ne.hasOwnProperty(a)&&(u[a]=n[a]);n=u,n._d=new Date(+i._d)}else if(s)if(c(s)){var l,d,i=n;if(0===i._f.length)i._pf.invalidFormat=!0,i._d=new Date(0/0);else{for(a=0;i._f.length>a;a++)s=0,u=r({},i),u._pf=e(),u._f=i._f[a],I(u),_(u)&&(s+=u._pf.charsLeftOver,s+=10*u._pf.unusedTokens.length,u._pf.score=s,null==d||d>s)&&(d=s,l=u);r(i,l||u)}}else I(n);else if(u=n,l=u._i,d=se.exec(l),l===t)u._d=new Date;else if(d)u._d=new Date(+d[1]);else if("string"==typeof l)if(i=u._i,a=Ye.exec(i)){for(u._pf.iso=!0,l=0,d=Ce.length;d>l;l++)if(Ce[l][1].exec(i)){u._f=Ce[l][0]+(a[6]||" ");break}for(l=0,d=Te.length;d>l;l++)if(Te[l][1].exec(i)){u._f+=Te[l][0];break}i.match(me)&&(u._f+="Z"),I(u)}else u._d=new Date(i);else c(l)?(u._a=l.slice(0),O(u)):"[object Date]"===Object.prototype.toString.call(l)||l instanceof Date?u._d=new Date(+l):"object"==typeof l?u._d||(l=p(u._i),u._a=[l.year,l.month,l.day,l.hour,l.minute,l.second,l.millisecond],O(u)):u._d=new Date(l);return new o(n)}function E(t,e){var n="date"===e||"month"===e||"year"===e;q.fn[t]=q.fn[t+"s"]=function(t,i){var s=this._isUTC?"UTC":"";return null==i&&(i=n),null!=t?(this._d["set"+s+e](t),q.updateOffset(this,i),this):this._d["get"+s+e]()}}function A(t){q.duration.fn[t]=function(){return this._data[t]}}function R(t,e){q.duration.fn["as"+t]=function(){return+this/e}}for(var q,$,N=Math.round,Z=0,J=1,V=2,X=3,B=4,K=5,te=6,ee={},ne={_isAMomentObject:null,_i:null,_f:null,_l:null,_strict:null,_isUTC:null,_offset:null,_pf:null,_lang:null},ie="undefined"!=typeof module&&module.exports&&"undefined"!=typeof require,se=/^\/?Date\((\-?\d+)/i,oe=/(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,ae=/^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/,re=/(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|X|zz?|ZZ?|.)/g,ue=/(\[[^\[]*\])|(\\)?(LT|LL?L?L?|l{1,4})/g,le=/\d\d?/,de=/\d{1,3}/,ce=/\d{1,4}/,he=/[+\-]?\d{1,6}/,fe=/\d+/,pe=/[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,me=/Z|[\+\-]\d\d:?\d\d/gi,ge=/T/i,ve=/[\+\-]?\d+(\.\d{1,3})?/,ke=/\d{1,2}/,we=/\d/,ye=/\d\d/,_e=/\d{3}/,be=/\d{4}/,Me=/[+-]?\d{6}/,De=/[+-]?\d+/,Ye=/^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Ce=[["YYYYYY-MM-DD",/[+-]\d{6}-\d{2}-\d{2}/],["YYYY-MM-DD",/\d{4}-\d{2}-\d{2}/],["GGGG-[W]WW-E",/\d{4}-W\d{2}-\d/],["GGGG-[W]WW",/\d{4}-W\d{2}/],["YYYY-DDD",/\d{4}-\d{3}/]],Te=[["HH:mm:ss.SSSS",/(T| )\d\d:\d\d:\d\d\.\d{1,3}/],["HH:mm:ss",/(T| )\d\d:\d\d:\d\d/],["HH:mm",/(T| )\d\d:\d\d/],["HH",/(T| )\d\d/]],Ue=/([\+\-]|\d\d)/gi,Se=["Date","Hours","Minutes","Seconds","Milliseconds"],xe={Milliseconds:1,Seconds:1e3,Minutes:6e4,Hours:36e5,Days:864e5,Months:2592e6,Years:31536e6},Oe={ms:"millisecond",s:"second",m:"minute",h:"hour",d:"day",D:"date",w:"week",W:"isoWeek",M:"month",y:"year",DDD:"dayOfYear",e:"weekday",E:"isoWeekday",gg:"weekYear",GG:"isoWeekYear"},je={dayofyear:"dayOfYear",isoweekday:"isoWeekday",isoweek:"isoWeek",weekyear:"weekYear",isoweekyear:"isoWeekYear"},Ie={},We="DDD w W M D d".split(" "),Fe="MDHhmswW".split(""),Pe={M:function(){return this.month()+1},MMM:function(t){return this.lang().monthsShort(this,t)},MMMM:function(t){return this.lang().months(this,t)},D:function(){return this.date()},DDD:function(){return this.dayOfYear()},d:function(){return this.day()},dd:function(t){return this.lang().weekdaysMin(this,t)},ddd:function(t){return this.lang().weekdaysShort(this,t)},dddd:function(t){return this.lang().weekdays(this,t)},w:function(){return this.week()},W:function(){return this.isoWeek()},YY:function(){return l(this.year()%100,2)},YYYY:function(){return l(this.year(),4)},YYYYY:function(){return l(this.year(),5)},YYYYYY:function(){var t=this.year();return(t>=0?"+":"-")+l(Math.abs(t),6)},gg:function(){return l(this.weekYear()%100,2)},gggg:function(){return l(this.weekYear(),4)},ggggg:function(){return l(this.weekYear(),5)},GG:function(){return l(this.isoWeekYear()%100,2)},GGGG:function(){return l(this.isoWeekYear(),4)},GGGGG:function(){return l(this.isoWeekYear(),5)},e:function(){return this.weekday()},E:function(){return this.isoWeekday()},a:function(){return this.lang().meridiem(this.hours(),this.minutes(),!0)},A:function(){return this.lang().meridiem(this.hours(),this.minutes(),!1)},H:function(){return this.hours()},h:function(){return this.hours()%12||12},m:function(){return this.minutes()},s:function(){return this.seconds()},S:function(){return g(this.milliseconds()/100)},SS:function(){return l(g(this.milliseconds()/10),2)},SSS:function(){return l(this.milliseconds(),3)},SSSS:function(){return l(this.milliseconds(),3)},Z:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+l(g(t/60),2)+":"+l(g(t)%60,2)},ZZ:function(){var t=-this.zone(),e="+";return 0>t&&(t=-t,e="-"),e+l(g(t/60),2)+l(g(t)%60,2)},z:function(){return this.zoneAbbr()},zz:function(){return this.zoneName()},X:function(){return this.unix()},Q:function(){return this.quarter()}},Ge=["months","monthsShort","weekdays","weekdaysShort","weekdaysMin"];We.length;)$=We.pop(),Pe[$+"o"]=i(Pe[$],$);for(;Fe.length;)$=Fe.pop(),Pe[$+$]=n(Pe[$],2);for(Pe.DDDD=n(Pe.DDD,3),r(s.prototype,{set:function(t){var e,n;for(n in t)e=t[n],"function"==typeof e?this[n]=e:this["_"+n]=e},_months:"January February March April May June July August September October November December".split(" "),months:function(t){return this._months[t.month()]},_monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),monthsShort:function(t){return this._monthsShort[t.month()]},monthsParse:function(t){var e,n;for(this._monthsParse||(this._monthsParse=[]),e=0;12>e;e++)if(this._monthsParse[e]||(n=q.utc([2e3,e]),n="^"+this.months(n,"")+"|^"+this.monthsShort(n,""),this._monthsParse[e]=RegExp(n.replace(".",""),"i")),this._monthsParse[e].test(t))return e},_weekdays:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),weekdays:function(t){return this._weekdays[t.day()]},_weekdaysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),weekdaysShort:function(t){return this._weekdaysShort[t.day()]},_weekdaysMin:"Su Mo Tu We Th Fr Sa".split(" "),weekdaysMin:function(t){return this._weekdaysMin[t.day()]},weekdaysParse:function(t){var e,n;for(this._weekdaysParse||(this._weekdaysParse=[]),e=0;7>e;e++)if(this._weekdaysParse[e]||(n=q([2e3,1]).day(e),n="^"+this.weekdays(n,"")+"|^"+this.weekdaysShort(n,"")+"|^"+this.weekdaysMin(n,""),this._weekdaysParse[e]=RegExp(n.replace(".",""),"i")),this._weekdaysParse[e].test(t))return e},_longDateFormat:{LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D YYYY",LLL:"MMMM D YYYY LT",LLLL:"dddd, MMMM D YYYY LT"},longDateFormat:function(t){var e=this._longDateFormat[t];return!e&&this._longDateFormat[t.toUpperCase()]&&(e=this._longDateFormat[t.toUpperCase()].replace(/MMMM|MM|DD|dddd/g,function(t){return t.slice(1)}),this._longDateFormat[t]=e),e},isPM:function(t){return"p"===(t+"").toLowerCase().charAt(0)},_meridiemParse:/[ap]\.?m?\.?/i,meridiem:function(t,e,n){return t>11?n?"pm":"PM":n?"am":"AM"},_calendar:{sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"},calendar:function(t,e){var n=this._calendar[t];return"function"==typeof n?n.apply(e):n},_relativeTime:{future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"},relativeTime:function(t,e,n,i){var s=this._relativeTime[n];return"function"==typeof s?s(t,e,n,i):s.replace(/%d/i,t)},pastFuture:function(t,e){var n=this._relativeTime[t>0?"future":"past"];return"function"==typeof n?n(e):n.replace(/%s/i,e)},ordinal:function(t){return this._ordinal.replace("%d",t)},_ordinal:"%d",preparse:function(t){return t},postformat:function(t){return t},week:function(t){return Q(t,this._week.dow,this._week.doy).week},_week:{dow:0,doy:6},_invalidDate:"Invalid date",invalidDate:function(){return this._invalidDate}}),q=function(n,i,s,o){var a;return"boolean"==typeof s&&(o=s,s=t),a={_isAMomentObject:!0},a._i=n,a._f=i,a._l=s,a._strict=o,a._isUTC=!1,a._pf=e(),L(a)},q.utc=function(n,i,s,o){var a;return"boolean"==typeof s&&(o=s,s=t),a={_isAMomentObject:!0,_useUTC:!0,_isUTC:!0},a._l=s,a._i=n,a._f=i,a._strict=o,a._pf=e(),L(a).utc()},q.unix=function(t){return q(1e3*t)},q.duration=function(t,e){var n,i=t,s=null;return q.isDuration(t)?i={ms:t._milliseconds,d:t._days,M:t._months}:"number"==typeof t?(i={},e?i[e]=t:i.milliseconds=t):(s=oe.exec(t))?(n="-"===s[1]?-1:1,i={y:0,d:g(s[V])*n,h:g(s[X])*n,m:g(s[B])*n,s:g(s[K])*n,ms:g(s[te])*n}):(s=ae.exec(t))&&(n="-"===s[1]?-1:1,i=function(t){return t=t&&parseFloat(t.replace(",",".")),(isNaN(t)?0:t)*n},i={y:i(s[2]),M:i(s[3]),d:i(s[4]),h:i(s[5]),m:i(s[6]),s:i(s[7]),w:i(s[8])}),s=new a(i),q.isDuration(t)&&t.hasOwnProperty("_lang")&&(s._lang=t._lang),s},q.version="2.5.1",q.defaultFormat="YYYY-MM-DDTHH:mm:ssZ",q.updateOffset=function(){},q.lang=function(t,e){if(!t)return q.fn._lang._abbr;if(e){var n=b(t);e.abbr=n,ee[n]||(ee[n]=new s),ee[n].set(e)}else null===e?(delete ee[t],t="en"):ee[t]||D(t);return(q.duration.fn._lang=q.fn._lang=D(t))._abbr},q.langData=function(t){return t&&t._lang&&t._lang._abbr&&(t=t._lang._abbr),D(t)},q.isMoment=function(t){return t instanceof o||null!=t&&t.hasOwnProperty("_isAMomentObject")},q.isDuration=function(t){return t instanceof a},$=Ge.length-1;$>=0;--$)m(Ge[$]);for(q.normalizeUnits=function(t){return f(t)},q.invalid=function(t){var e=q.utc(0/0);return null!=t?r(e._pf,t):e._pf.userInvalidated=!0,e},q.parseZone=function(){return q.apply(null,arguments).parseZone()},r(q.fn=o.prototype,{clone:function(){return q(this)},valueOf:function(){return+this._d+6e4*(this._offset||0)},unix:function(){return Math.floor(+this/1e3)},toString:function(){return this.clone().lang("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")},toDate:function(){return this._offset?new Date(+this):this._d},toISOString:function(){var t=q(this).utc();return t.year()>0&&9999>=t.year()?T(t,"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]"):T(t,"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")},toArray:function(){return[this.year(),this.month(),this.date(),this.hours(),this.minutes(),this.seconds(),this.milliseconds()]},isValid:function(){return _(this)},isDSTShifted:function(){return this._a?this.isValid()&&h(this._a,(this._isUTC?q.utc(this._a):q(this._a)).toArray())>0:!1},parsingFlags:function(){return r({},this._pf)},invalidAt:function(){return this._pf.overflow},utc:function(){return this.zone(0)},local:function(){return this.zone(0),this._isUTC=!1,this},format:function(t){return t=T(this,t||q.defaultFormat),this.lang().postformat(t)},add:function(t,e){var n;return n="string"==typeof t?q.duration(+e,t):q.duration(t,e),d(this,n,1),this},subtract:function(t,e){var n;return n="string"==typeof t?q.duration(+e,t):q.duration(t,e),d(this,n,-1),this},diff:function(t,e,n){t=M(t,this);var i,s=6e4*(this.zone()-t.zone());return e=f(e),"year"===e||"month"===e?(i=432e5*(this.daysInMonth()+t.daysInMonth()),s=12*(this.year()-t.year())+(this.month()-t.month()),s+=(this-q(this).startOf("month")-(t-q(t).startOf("month")))/i,s-=6e4*(this.zone()-q(this).startOf("month").zone()-(t.zone()-q(t).startOf("month").zone()))/i,"year"===e&&(s/=12)):(i=this-t,s="second"===e?i/1e3:"minute"===e?i/6e4:"hour"===e?i/36e5:"day"===e?(i-s)/864e5:"week"===e?(i-s)/6048e5:i),n?s:u(s)},from:function(t,e){return q.duration(this.diff(t)).lang(this.lang()._abbr).humanize(!e)},fromNow:function(t){return this.from(q(),t)},calendar:function(){var t=M(q(),this).startOf("day"),t=this.diff(t,"days",!0),t=-6>t?"sameElse":-1>t?"lastWeek":0>t?"lastDay":1>t?"sameDay":2>t?"nextDay":7>t?"nextWeek":"sameElse";return this.format(this.lang().calendar(t,this))},isLeapYear:function(){return w(this.year())},isDST:function(){return this.zone()<this.clone().month(0).zone()||this.zone()<this.clone().month(5).zone()},day:function(t){var e=this._isUTC?this._d.getUTCDay():this._d.getDay();return null!=t?(t=G(t,this.lang()),this.add({d:t-e})):e},month:function(t){var e,n=this._isUTC?"UTC":"";return null!=t?"string"==typeof t&&(t=this.lang().monthsParse(t),"number"!=typeof t)?this:(e=Math.min(this.date(),v(this.year(),t)),this._d["set"+n+"Month"](t,e),q.updateOffset(this,!0),this):this._d["get"+n+"Month"]()},startOf:function(t){switch(t=f(t)){case"year":this.month(0);case"month":this.date(1);case"week":case"isoWeek":case"day":this.hours(0);case"hour":this.minutes(0);case"minute":this.seconds(0);case"second":this.milliseconds(0)}return"week"===t?this.weekday(0):"isoWeek"===t&&this.isoWeekday(1),this},endOf:function(t){return t=f(t),this.startOf(t).add("isoWeek"===t?"week":t,1).subtract("ms",1)},isAfter:function(t,e){return e=e!==void 0?e:"millisecond",+this.clone().startOf(e)>+q(t).startOf(e)},isBefore:function(t,e){return e=e!==void 0?e:"millisecond",+this.clone().startOf(e)<+q(t).startOf(e)},isSame:function(t,e){return e=e||"ms",+this.clone().startOf(e)===+M(t,this).startOf(e)},min:function(t){return t=q.apply(null,arguments),this>t?this:t},max:function(t){return t=q.apply(null,arguments),t>this?this:t},zone:function(t,e){e=null==e?!0:!1;var n=this._offset||0;return null==t?this._isUTC?n:this._d.getTimezoneOffset():("string"==typeof t&&(t=x(t)),16>Math.abs(t)&&(t*=60),this._offset=t,this._isUTC=!0,n!==t&&e&&d(this,q.duration(n-t,"m"),1,!0),this)},zoneAbbr:function(){return this._isUTC?"UTC":""},zoneName:function(){return this._isUTC?"Coordinated Universal Time":""},parseZone:function(){return this._tzm?this.zone(this._tzm):"string"==typeof this._i&&this.zone(this._i),this},hasAlignedHourOffset:function(t){return t=t?q(t).zone():0,0===(this.zone()-t)%60},daysInMonth:function(){return v(this.year(),this.month())},dayOfYear:function(t){var e=N((q(this).startOf("day")-q(this).startOf("year"))/864e5)+1;return null==t?e:this.add("d",t-e)},quarter:function(){return Math.ceil((this.month()+1)/3)},weekYear:function(t){var e=Q(this,this.lang()._week.dow,this.lang()._week.doy).year;return null==t?e:this.add("y",t-e)},isoWeekYear:function(t){var e=Q(this,1,4).year;return null==t?e:this.add("y",t-e)},week:function(t){var e=this.lang().week(this);return null==t?e:this.add("d",7*(t-e))},isoWeek:function(t){var e=Q(this,1,4).week;return null==t?e:this.add("d",7*(t-e))},weekday:function(t){var e=(this.day()+7-this.lang()._week.dow)%7;return null==t?e:this.add("d",t-e)},isoWeekday:function(t){return null==t?this.day()||7:this.day(this.day()%7?t:t-7)},isoWeeksInYear:function(){return k(this.year(),1,4)},weeksInYear:function(){var t=this._lang._week;return k(this.year(),t.dow,t.doy)},get:function(t){return t=f(t),this[t]()},set:function(t,e){return t=f(t),"function"==typeof this[t]&&this[t](e),this},lang:function(e){return e===t?this._lang:(this._lang=D(e),this)}}),$=0;Se.length>$;$++)E(Se[$].toLowerCase().replace(/s$/,""),Se[$]);E("year","FullYear"),q.fn.days=q.fn.day,q.fn.months=q.fn.month,q.fn.weeks=q.fn.week,q.fn.isoWeeks=q.fn.isoWeek,q.fn.toJSON=q.fn.toISOString,r(q.duration.fn=a.prototype,{_bubble:function(){var t=this._milliseconds,e=this._days,n=this._months,i=this._data;i.milliseconds=t%1e3,t=u(t/1e3),i.seconds=t%60,t=u(t/60),i.minutes=t%60,t=u(t/60),i.hours=t%24,e+=u(t/24),i.days=e%30,n+=u(e/30),i.months=n%12,e=u(n/12),i.years=e},weeks:function(){return u(this.days()/7)},valueOf:function(){return this._milliseconds+864e5*this._days+2592e6*(this._months%12)+31536e6*g(this._months/12)},humanize:function(t){var e,n=+this;e=!t;var i=this.lang(),s=N(Math.abs(n)/1e3),o=N(s/60),a=N(o/60),r=N(a/24),u=N(r/365),s=45>s&&["s",s]||1===o&&["m"]||45>o&&["mm",o]||1===a&&["h"]||22>a&&["hh",a]||1===r&&["d"]||25>=r&&["dd",r]||45>=r&&["M"]||345>r&&["MM",N(r/30)]||1===u&&["y"]||["yy",u];return s[2]=e,s[3]=n>0,s[4]=i,e=H.apply({},s),t&&(e=this.lang().pastFuture(n,e)),this.lang().postformat(e)},add:function(t,e){var n=q.duration(t,e);return this._milliseconds+=n._milliseconds,this._days+=n._days,this._months+=n._months,this._bubble(),this},subtract:function(t,e){var n=q.duration(t,e);return this._milliseconds-=n._milliseconds,this._days-=n._days,this._months-=n._months,this._bubble(),this},get:function(t){return t=f(t),this[t.toLowerCase()+"s"]()},as:function(t){return t=f(t),this["as"+t.charAt(0).toUpperCase()+t.slice(1)+"s"]()},lang:q.fn.lang,toIsoString:function(){var t=Math.abs(this.years()),e=Math.abs(this.months()),n=Math.abs(this.days()),i=Math.abs(this.hours()),s=Math.abs(this.minutes()),o=Math.abs(this.seconds()+this.milliseconds()/1e3);return this.asSeconds()?(0>this.asSeconds()?"-":"")+"P"+(t?t+"Y":"")+(e?e+"M":"")+(n?n+"D":"")+(i||s||o?"T":"")+(i?i+"H":"")+(s?s+"M":"")+(o?o+"S":""):"P0D"}});for($ in xe)xe.hasOwnProperty($)&&(R($,xe[$]),A($.toLowerCase()));return R("Weeks",6048e5),q.duration.fn.asMonths=function(){return(+this-31536e6*this.years())/2592e6+12*this.years()},q.lang("en",{ordinal:function(t){var e=t%10,e=1===g(t%100/10)?"th":1===e?"st":2===e?"nd":3===e?"rd":"th";return t+e}}),q}.call(this),a.moment=i,a});
/*! UIkit 2.5.0 | http://www.getuikit.com | (c) 2014 YOOtheme | MIT License */


(function(t){"function"==typeof define&&define.amd&&define(["uikit"],function(){return jQuery.UIkit||t(window.jQuery,window.jQuery.UIkit)}),window&&window.jQuery&&window.jQuery.UIkit&&t(window.jQuery,window.jQuery.UIkit)})(function(t,e){function i(s,o){function a(e,i){var n=new FormData,s=new XMLHttpRequest;if(i.before(i,e)!==!1){for(var o,a=0;o=e[a];a++)n.append(i.param,o);for(var r in i.params)n.append(r,i.params[r]);s.upload.addEventListener("progress",function(t){var e=100*(t.loaded/t.total);i.progress(e,t)},!1),s.addEventListener("loadstart",function(t){i.loadstart(t)},!1),s.addEventListener("load",function(t){i.load(t)},!1),s.addEventListener("loadend",function(t){i.loadend(t)},!1),s.addEventListener("error",function(t){i.error(t)},!1),s.addEventListener("abort",function(t){i.abort(t)},!1),s.open(i.method,i.action,!0),s.onreadystatechange=function(){if(i.readystatechange(s),4==s.readyState){var e=s.responseText;if("json"==i.type)try{e=t.parseJSON(e)}catch(n){e=!1}i.complete(e,s)}},s.send(n)}}if(!e.support.ajaxupload)return this;if(o=t.extend({},i.defaults,o),s.length){if("*.*"!==o.allow)for(var r,l=0;r=s[l];l++)if(!n(o.allow,r.name))return"string"==typeof o.notallowed?alert(o.notallowed):o.notallowed(r,o),void 0;var u=o.complete;if(o.single){var h=s.length,d=0;o.complete=function(t,e){d+=1,u(t,e),h>d?a([s[d]],o):o.allcomplete(t,e)},a([s[0]],o)}else o.complete=function(t,e){u(t,e),o.allcomplete(t,e)},a(s,o)}}function n(t,e){var i="^"+t.replace(/\//g,"\\/").replace(/\*\*/g,"(\\/[^\\/]+)*").replace(/\*/g,"[^\\/]+").replace(/((?!\\))\?/g,"$1.")+"$";return i="^"+i+"$",null!==e.match(RegExp(i))}var s=function(e,n){var o=this,a=t(e),n=t.extend({},i.defaults,s.defaults,n);a.data("uploadSelect")||(this.element=a.on("change",function(){i(o.element[0].files,n)}),a.data("uploadSelect",this))};s.defaults={};var o=function(e,n){var s=t(e),n=t.extend({},i.defaults,o.defaults,n),a=!1;s.data("uploadDrop")||(s.on("drop",function(t){t.dataTransfer&&t.dataTransfer.files&&(t.stopPropagation(),t.preventDefault(),s.removeClass(n.dragoverClass),i(t.dataTransfer.files,n))}).on("dragenter",function(t){t.stopPropagation(),t.preventDefault()}).on("dragover",function(t){t.stopPropagation(),t.preventDefault(),a||(s.addClass(n.dragoverClass),a=!0)}).on("dragleave",function(t){t.stopPropagation(),t.preventDefault(),s.removeClass(n.dragoverClass),a=!1}),s.data("uploadDrop",this))};return o.defaults={dragoverClass:"uk-dragover"},e.upload={select:s,drop:o},e.support.ajaxupload=function(){function t(){var t=document.createElement("INPUT");return t.type="file","files"in t}function e(){var t=new XMLHttpRequest;return!!(t&&"upload"in t&&"onprogress"in t.upload)}function i(){return!!window.FormData}return t()&&e()&&i()}(),e.support.ajaxupload&&t.event.props.push("dataTransfer"),i.defaults={action:"",single:!0,method:"POST",param:"files[]",params:{},allow:"*.*",type:"text",before:function(){},loadstart:function(){},load:function(){},loadend:function(){},error:function(){},abort:function(){},progress:function(){},complete:function(){},allcomplete:function(){},readystatechange:function(){},notallowed:function(t,e){alert("Only the following file types are allowed: "+e.allow)}},e.Utils.xhrupload=i,i});
(function() {
  var CSRFToken, anchoredLink, assetsChanged, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsPushState, cacheCurrentPage, changePage, constrainPageCacheTo, createDocument, crossOriginLink, currentState, executeScriptTags, extractLink, extractTitleAndBody, extractTrackAssets, fetchHistory, fetchReplacement, handleClick, ignoreClick, initializeTurbolinks, initialized, installClickHandlerLast, intersection, invalidContent, loadedAssets, noTurbolink, nonHtmlLink, nonStandardClick, pageCache, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberInitialPage, removeHash, removeNoscriptTags, requestMethod, requestMethodIsSafe, resetScrollPosition, targetLink, triggerEvent, visit, xhr, _ref,
    __hasProp = {}.hasOwnProperty,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  initialized = false;

  currentState = null;

  referer = document.location.href;

  loadedAssets = null;

  pageCache = {};

  createDocument = null;

  requestMethod = ((_ref = document.cookie.match(/request_method=(\w+)/)) != null ? _ref[1].toUpperCase() : void 0) || '';

  xhr = null;

  visit = function(url) {
    if (browserSupportsPushState && browserIsntBuggy) {
      cacheCurrentPage();
      reflectNewUrl(url);
      return fetchReplacement(url);
    } else {
      return document.location.href = url;
    }
  };

  fetchReplacement = function(url) {
    var safeUrl;
    triggerEvent('page:fetch');
    safeUrl = removeHash(url);
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', safeUrl, true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = (function(_this) {
      return function() {
        var doc;
        triggerEvent('page:receive');
        if (invalidContent(xhr) || assetsChanged((doc = createDocument(xhr.responseText)))) {
          return document.location.reload();
        } else {
          changePage.apply(null, extractTitleAndBody(doc));
          reflectRedirectedUrl(xhr);
          if (document.location.hash) {
            document.location.href = document.location.href;
          } else {
            resetScrollPosition();
          }
          return triggerEvent('page:load');
        }
      };
    })(this);
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onabort = function() {
      return rememberCurrentUrl();
    };
    xhr.onerror = function() {
      return document.location.href = url;
    };
    return xhr.send();
  };

  fetchHistory = function(state) {
    var page;
    cacheCurrentPage();
    if (page = pageCache[state.position]) {
      if (xhr != null) {
        xhr.abort();
      }
      changePage(page.title, page.body);
      recallScrollPosition(page);
      return triggerEvent('page:restore');
    } else {
      return fetchReplacement(document.location.href);
    }
  };

  cacheCurrentPage = function() {
    rememberInitialPage();
    pageCache[currentState.position] = {
      url: document.location.href,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset
    };
    return constrainPageCacheTo(10);
  };

  constrainPageCacheTo = function(limit) {
    var key, value;
    for (key in pageCache) {
      if (!__hasProp.call(pageCache, key)) continue;
      value = pageCache[key];
      if (key <= currentState.position - limit) {
        pageCache[key] = null;
      }
    }
  };

  changePage = function(title, body, csrfToken, runScripts) {
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    removeNoscriptTags();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    return triggerEvent('page:change');
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref1, _ref2;
    scripts = Array.prototype.slice.call(document.body.getElementsByTagName('script'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref1 = script.type) === '' || _ref1 === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref2 = script.attributes;
      for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
        attr = _ref2[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function() {
    var noscript, noscriptTags, _i, _len;
    noscriptTags = Array.prototype.slice.call(document.body.getElementsByTagName('noscript'));
    for (_i = 0, _len = noscriptTags.length; _i < _len; _i++) {
      noscript = noscriptTags[_i];
      noscript.parentNode.removeChild(noscript);
    }
  };

  reflectNewUrl = function(url) {
    if (url !== document.location.href) {
      referer = document.location.href;
      return window.history.pushState({
        turbolinks: true,
        position: currentState.position + 1
      }, '', url);
    }
  };

  reflectRedirectedUrl = function(xhr) {
    var location;
    if ((location = xhr.getResponseHeader('X-XHR-Current-Location')) && location !== document.location.pathname + document.location.search) {
      return window.history.replaceState(currentState, '', location + document.location.hash);
    }
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      position: Date.now()
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  rememberInitialPage = function() {
    if (!initialized) {
      rememberCurrentUrl();
      rememberCurrentState();
      createDocument = browserCompatibleDocumentParser();
      return initialized = true;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    return window.scrollTo(0, 0);
  };

  removeHash = function(url) {
    var link;
    link = url;
    if (url.href == null) {
      link = document.createElement('A');
      link.href = url;
    }
    return link.href.replace(link.hash, '');
  };

  triggerEvent = function(name) {
    var event;
    event = document.createEvent('Events');
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  invalidContent = function(xhr) {
    return !xhr.getResponseHeader('Content-Type').match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
  };

  extractTrackAssets = function(doc) {
    var node, _i, _len, _ref1, _results;
    _ref1 = doc.head.childNodes;
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      node = _ref1[_i];
      if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
        _results.push(node.src || node.href);
      }
    }
    return _results;
  };

  assetsChanged = function(doc) {
    var fetchedAssets;
    loadedAssets || (loadedAssets = extractTrackAssets(document));
    fetchedAssets = extractTrackAssets(doc);
    return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
  };

  intersection = function(a, b) {
    var value, _i, _len, _ref1, _results;
    if (a.length > b.length) {
      _ref1 = [b, a], a = _ref1[0], b = _ref1[1];
    }
    _results = [];
    for (_i = 0, _len = a.length; _i < _len; _i++) {
      value = a[_i];
      if (__indexOf.call(b, value) >= 0) {
        _results.push(value);
      }
    }
    return _results;
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, doc.body, CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var createDocumentUsingDOM, createDocumentUsingParser, createDocumentUsingWrite, e, testDoc, _ref1;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    try {
      if (window.DOMParser) {
        testDoc = createDocumentUsingParser('<html><body><p>test');
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      testDoc = createDocumentUsingDOM('<html><body><p>test');
      return createDocumentUsingDOM;
    } finally {
      if ((testDoc != null ? (_ref1 = testDoc.body) != null ? _ref1.childNodes.length : void 0 : void 0) !== 1) {
        return createDocumentUsingWrite;
      }
    }
  };

  installClickHandlerLast = function(event) {
    if (!event.defaultPrevented) {
      document.removeEventListener('click', handleClick, false);
      return document.addEventListener('click', handleClick, false);
    }
  };

  handleClick = function(event) {
    var link;
    if (!event.defaultPrevented) {
      link = extractLink(event);
      if (link.nodeName === 'A' && !ignoreClick(event, link)) {
        visit(link.href);
        return event.preventDefault();
      }
    }
  };

  extractLink = function(event) {
    var link;
    link = event.target;
    while (!(!link.parentNode || link.nodeName === 'A')) {
      link = link.parentNode;
    }
    return link;
  };

  crossOriginLink = function(link) {
    return location.protocol !== link.protocol || location.host !== link.host;
  };

  anchoredLink = function(link) {
    return ((link.hash && removeHash(link)) === removeHash(location)) || (link.href === location.href + '#');
  };

  nonHtmlLink = function(link) {
    var url;
    url = removeHash(link);
    return url.match(/\.[a-z]+(\?.*)?$/g) && !url.match(/\.html?(\?.*)?$/g);
  };

  noTurbolink = function(link) {
    var ignore;
    while (!(ignore || link === document)) {
      ignore = link.getAttribute('data-no-turbolink') != null;
      link = link.parentNode;
    }
    return ignore;
  };

  targetLink = function(link) {
    return link.target.length !== 0;
  };

  nonStandardClick = function(event) {
    return event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
  };

  ignoreClick = function(event, link) {
    return crossOriginLink(link) || anchoredLink(link) || nonHtmlLink(link) || noTurbolink(link) || targetLink(link) || nonStandardClick(event);
  };

  initializeTurbolinks = function() {
    document.addEventListener('click', installClickHandlerLast, true);
    return window.addEventListener('popstate', function(event) {
      var _ref1;
      if ((_ref1 = event.state) != null ? _ref1.turbolinks : void 0) {
        return fetchHistory(event.state);
      }
    }, false);
  };

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && window.history.state !== void 0;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = requestMethod === 'GET' || requestMethod === '';

  if (browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe) {
    initializeTurbolinks();
  }

  this.Turbolinks = {
    visit: visit
  };

}).call(this);

    jQuery(function($){
        $(document).ready(function(){
            $('.single-item-slick').slick({  
            });
        });
    })




    $(function(){

        var progressbar = $("#progressbar-style-summary"),
            bar         = progressbar.find('.uk-progress-bar'),
            settings    = {

            action: '/', // upload url

            allow : '*.(jpg|jpeg|gif|png)', // allow only images

            loadstart: function() {
                bar.css("width", "0%").text("0%");
                progressbar.removeClass("uk-hidden");
            },

            progress: function(percent) {
                percent = Math.ceil(percent);
                bar.css("width", percent+"%").text(percent+"%");
            },

            allcomplete: function(response) {

                bar.css("width", "100%").text("100%");

                setTimeout(function(){
                    progressbar.addClass("uk-hidden");
                }, 250);

                $('#upload-drop-style-summary').removeClass("uk-placeholder-large");
                $('#drag-demo').removeClass("uk-hidden");

            }
        };

        var select = new $.UIkit.upload.select($("#upload-select-style-summary"), settings),
            drop   = new $.UIkit.upload.drop($("#upload-drop-style-summary"), settings);
    });




    jQuery(function($){
        $(document).ready(function(){
            $('.galleryImageHolderSel').click(function() {
                if(!$(this).hasClass('imgSelected')) { 
                    $(this).addClass('imgSelected');
                    $(this).parent().css("border-color","#ee7777");
                }
                else{
                    $(this).removeClass('imgSelected');
                    $(this).parent().css("border-color","#eee");
                }
                
            });
        });
    })



    jQuery(function($){
        $(document).ready(function(){
            $('.galleryImageHolderTopRoundBorder').click(function() {
                if(!$(this).children().hasClass('imgSelected')) { 
                    $(this).children().addClass('imgSelected');
                    getId = $(this).children().attr('id');
                    if (getId=="rehearsalsel"){
                        $("#rehearsaltab").show();
                        $("#ceremonycontent").show();
                        $("#rehearsaltab").addClass('uk-active');
                        $("#ceremonytab").removeClass('uk-active');
                        $("#receptiontab").removeClass('uk-active');
                        $("#brunchtab").removeClass('uk-active');
                    }
                    else if (getId=="ceremonysel"){
                        $("#ceremonytab").show();
                        $("#ceremonycontent").show();
                        $("#ceremonytab").addClass('uk-active');
                        $("#rehearsaltab").removeClass('uk-active');
                        $("#receptiontab").removeClass('uk-active');
                        $("#brunchtab").removeClass('uk-active');
                    }
                    else if (getId=="receptionsel"){
                        $("#receptiontab").show();
                        $("#ceremonycontent").show();
                        $("#receptiontab").addClass('uk-active');
                        $("#rehearsaltab").removeClass('uk-active');
                        $("#ceremonytab").removeClass('uk-active');
                        $("#brunchtab").removeClass('uk-active');
                    }
                    else if (getId=="brunchsel"){
                        $("#brunchtab").show();
                        $("#ceremonycontent").show();
                        $("#brunchtab").addClass('uk-active');
                        $("#rehearsaltab").removeClass('uk-active');
                        $("#ceremonytab").removeClass('uk-active');
                        $("#receptiontab").removeClass('uk-active');
                    }
                    $('.single-item-slick').slickGoTo(0);
                }
                else{
                    $(this).children().removeClass('imgSelected');
                    getId = $(this).children().attr('id');
                    if (getId=="rehearsalsel"){
                        $("#rehearsaltab").hide();
                    }
                    else if (getId=="ceremonysel"){
                        $("#ceremonytab").hide();
                    }
                    else if (getId=="receptionsel"){
                        $("#receptiontab").hide();
                    }
                    else if (getId=="brunchsel"){
                        $("#brunchtab").hide();
                    }

                    if(! $("#rehearsalsel").hasClass('imgSelected') && ! $("#ceremonysel").hasClass('imgSelected') && ! $("#receptionsel").hasClass('imgSelected')  && ! $("#brunchsel").hasClass('imgSelected') ){
                        $("#ceremonycontent").hide();
                    }

                }
                
            });
        });
    })



    jQuery(function($){
        $(document).ready(function(){
            $('.indoor').click(function() {
                $(".indoor").attr("src","eventflowers/indoor-sel.png");
                $(".indoor").css("opacity","1");
                $(".outdoor").attr("src","eventflowers/outdoor-nosel.png");
                $(".outdoor").css("opacity",".6");
            });
            $('.outdoor').click(function() {
                $(".outdoor").attr("src","eventflowers/outdoor-sel.png");
                $(".outdoor").css("opacity","1");
                $(".indoor").attr("src","eventflowers/indoor-nosel.png");
                $(".indoor").css("opacity",".6");
                
            });
        });
    })



    jQuery(function($){
        $(document).ready(function(){
            $('.sun').click(function() {
                $(".sun").attr("src","eventflowers/sun-sel.png");
                $(".sun").css("opacity","1");
                $(".lightbulb").attr("src","eventflowers/lightbulb-nosel.png");
                $(".lightbulb").css("opacity",".6");
                $(".candle").attr("src","eventflowers/candle-nosel.png");
                $(".candle").css("opacity",".6");
                $(".moon").attr("src","eventflowers/moon-nosel.png");
                $(".moon").css("opacity",".6");
            });
            $('.lightbulb').click(function() {
                $(".lightbulb").attr("src","eventflowers/lightbulb-sel.png");
                $(".lightbulb").css("opacity","1");
                $(".sun").attr("src","eventflowers/sun-nosel.png");
                $(".sun").css("opacity",".6");
                $(".candle").attr("src","eventflowers/candle-nosel.png");
                $(".candle").css("opacity",".6");
                $(".moon").attr("src","eventflowers/moon-nosel.png");
                $(".moon").css("opacity",".6");
            });
            $('.candle').click(function() {
                $(".candle").attr("src","eventflowers/candle-sel.png");
                $(".candle").css("opacity","1");
                $(".sun").attr("src","eventflowers/sun-nosel.png");
                $(".sun").css("opacity",".6");
                $(".lightbulb").attr("src","eventflowers/lightbulb-nosel.png");
                $(".lightbulb").css("opacity",".6");
                $(".moon").attr("src","eventflowers/moon-nosel.png");
                $(".moon").css("opacity",".6");
            });
            $('.moon').click(function() {
                $(".moon").attr("src","eventflowers/moon-sel.png");
                $(".moon").css("opacity","1");
                $(".lightbulb").attr("src","eventflowers/lightbulb-nosel.png");
                $(".lightbulb").css("opacity",".6");
                $(".candle").attr("src","eventflowers/candle-nosel.png");
                $(".candle").css("opacity",".6");
                $(".sun").attr("src","eventflowers/sun-nosel.png");
                $(".sun").css("opacity",".6");
            });
        });
    })



    jQuery(function($){
        $(document).ready(function(){
            $('.bride').change(function() {
                value = $('.bride').val();
                if (value > 0){
                    $('.bridecontent').show();
                    $('.bridecontentslick').slickGoTo(0);
                }
                else{
                    $('.bridecontent').hide();
                }
            });
            $('.bridesmaid').change(function() {
                value = $('.bridesmaid').val();
                if (value > 0){
                    $('.bridesmaidcontent').show();
                    $('.bridesmaidcontentslick').slickGoTo(0);
                }
                else{
                    $('.bridesmaidcontent').hide();
                }
            });
            $('.groom').change(function() {
                value = $('.groom').val();
                if (value > 0){
                    $('.groomcontent').show();
                    $('.groomcontentslick').slickGoTo(0);
                }
                else{
                    $('.groomcontent').hide();
                }
            });
            $('.groomsman').change(function() {
                value = $('.groomsman').val();
                if (value > 0){
                    $('.groomsmancontent').show();
                    $('.groomsmancontentslick').slickGoTo(0);
                }
                else{
                    $('.groomsmancontent').hide();
                }
            });
            $('.flowergirl').change(function() {
                value = $('.flowergirl').val();
                if (value > 0){
                    $('.flowergirlcontent').show();
                    $('.flowergirlcontentslick').slickGoTo(0);
                }
                else{
                    $('.flowergirlcontent').hide();
                }
            });
            $('.aisle').change(function() {
                value = $('.aisle').val();
                if (value > 0){
                    $('.aislecontent').show();
                    $('.aislecontentslick').slickGoTo(0);
                }
                else{
                    $('.aislecontent').hide();
                }
            });
            $('.altar').change(function() {
                value = $('.altar').val();
                if (value > 0){
                    $('.altarcontent').show();
                    $('.altarcontentslick').slickGoTo(0);
                }
                else{
                    $('.altarcontent').hide();
                }
            });
            $('.canopy').change(function() {
                value = $('.canopy').val();
                if (value > 0){
                    $('.canopycontent').show();
                    $('.canopycontentslick').slickGoTo(0);
                }
                else{
                    $('.canopycontent').hide();
                }
            });
        });
    })
 

 
    jQuery(function($){
        $(document).ready(function(){
            $('.colorHolderSel').click(function() {
                if(!$(this).hasClass('colorSelected')) { 
                    $('.colorHolderSel').each(function() {
                        $(this).removeClass('colorSelected');
                    });
                    $(this).addClass('colorSelected');
                    $('#colorresults').show();
                }
                else{
                    $(this).removeClass('colorSelected');
                    $('#colorresults').hide();
                }
                
            });
        });
    })



    jQuery(function($){
        $(document).ready(function(){
            $('.palettesel').click(function() {
                if(!$(this).hasClass('imgSelected')) { 
                    $(this).addClass('imgSelected'); 
                }
                else{
                    $(this).removeClass('imgSelected');
                }
            });
        });
    })




    jQuery(function($){
        $(document).ready(function(){
            $('#colorokcheckbox').change(function() {
                value = $('#colorokcheckbox').is(":checked");
                if (value ==true){
                    $('#colorpicker2').show();
                }
                else{
                    $('#colorpicker2').hide();
                }
            });
            
        });
    })
 


    jQuery(function($){
        $(document).ready(function(){
            $('.colorSel2').click(function() {
                if(!$(this).hasClass('colorSelected2')) { 
                    $(this).addClass('colorSelected2');
                }
                else{
                    $(this).removeClass('colorSelected2');
                }
                
            });
        });
    })




    jQuery(function($){
        $( "#slider" ).slider({
          range: true,
          min: 0,
          max: 20000,
          values: [ 1000, 5000 ],
          slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
          }
        });
        $( "#amount" ).val( "$" + $( "#slider" ).slider( "values", 0 ) +
          " - $" + $( "#slider" ).slider( "values", 1 ) );
    });
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//











;
