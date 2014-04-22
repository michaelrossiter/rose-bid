jQuery(function() {
	var $ = jQuery;
	$('.skip-to-content-dark').on('click', function(e) {
		e.preventDefault();
		var $content = $('[name="' + $(this).attr('href').slice(1) + '"]');
		$('body,html').animate({
			scrollTop: $content.offset().top
		});
	});
});

jQuery(function($)  {
  
    $(window).scroll(function (event) {
        var x = -($(window).scrollLeft());
        $('#nav-wrap').css('left',x + 'px');
        
    });
    
});

jQuery(function($) {

	$(document).ready(function() {
    	$('#map').usmap({
    		showLabels: false,
    		stateStyles: {
    			fill: '#f8eadd',
    			"stroke-width": 1,
	      		'stroke' : '#333'
	      	},
	      	stateHoverStyles: {
	      		//fill: '#eaeaea',
    			"stroke-width": 1,
	      		'stroke' : '#333'	    	
	      	},
	      	stateSpecificStyles: {
	      		'GA' : {fill: '#ee7777'},
	      		'MA' : {fill: '#ee7777'},
	      		'NC' : {fill: '#ee7777'},
	      		'IL' : {fill: '#ee7777'},
	      		'OH' : {fill: '#ee7777'},
	      		'TX' : {fill: '#ee7777'},
	      		'CO' : {fill: '#ee7777'},
	      		'MI' : {fill: '#ee7777'},
	      		'CA' : {fill: '#ee7777'},
	      		'FL' : {fill: '#ee7777'},
	      		'VA' : {fill: '#ee7777'},
	      		'WA' : {fill: '#ee7777'},
	      		'DC' : {fill: '#ee7777'},
	      		'WI' : {fill: '#ee7777'},
	      		'LA' : {fill: '#ee7777'},
	      		'NY' : {fill: '#ee7777'},
	      		'AZ' : {fill: '#ee7777'},
	      		'OR' : {fill: '#ee7777'}
	    	},
	    	stateSpecificHoverStyles: {
	      		'GA' : {fill: '#e34144'},
	      		'MA' : {fill: '#e34144'},
	      		'NC' : {fill: '#e34144'},
	      		'IL' : {fill: '#e34144'},
	      		'OH' : {fill: '#e34144'},
	      		'TX' : {fill: '#e34144'},
	      		'CO' : {fill: '#e34144'},
	      		'MI' : {fill: '#e34144'},
	      		'CA' : {fill: '#e34144'},
	      		'FL' : {fill: '#e34144'},
	      		'VA' : {fill: '#e34144'},
	      		'WA' : {fill: '#e34144'},
	      		'DC' : {fill: '#e34144'},
	      		'WI' : {fill: '#e34144'},
	      		'LA' : {fill: '#e34144'},
	      		'NY' : {fill: '#e34144'},
	      		'AZ' : {fill: '#e34144'},
	      		'OR' : {fill: '#e34144'}
	    	},
	    	click: function(event, data){
	    		if(data.name=='GA' || data.name=='CA'){
	    		//window.location = data.name+'.html';
	    		}
	    		//window.open(data.name+'.html');
	    	}
	    	
	    	/*'mouseoverState': {
	      'HI' : function(event, data) {
	        //return false;
	      }
	    },
	    
	    
	    'click' : function(event, data) {
	      $('#alert')
	        .text('Click '+data.name+' on map 1')
	        .stop()
	        .css('backgroundColor', '#ff0')
	        .animate({backgroundColor: '#ddd'}, 1000);
	    }*/
    		
    	});
    	/* 
    	 $('#over-md').click(function(event){
	    $('#map').usmap('trigger', 'MD', 'mouseover', event);
	  });
	  
	  $('#out-md').click(function(event){
	    $('#map').usmap('trigger', 'MD', 'mouseout', event);
	  });
		*/

    	
 	 });
});



 