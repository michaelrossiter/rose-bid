
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
