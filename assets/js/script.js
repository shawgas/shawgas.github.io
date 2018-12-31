$( document ).ready(function() {
                 
                $("#start_scroll").fadeOut();
                $("#sixone_scroll").fadeOut();
			    $("#travel_scroll").fadeOut();
			    $("#biye_scroll").fadeOut();
				$("#half_scroll").fadeOut();  
				$("#mery_scroll").fadeOut(); 
				$("#newyear_scroll").fadeOut();

                $("#start").click(function(){
                    $("#index").fadeOut();
                    $("#start_scroll").fadeIn();
                    $('#start_left').addClass('animated slideInLeft');
                    $('#start_right').addClass('animated slideInRight');
                    });
                $("#sixone").click(function(){
                    $("#index").fadeOut();
                    $("#sixone_scroll").fadeIn();
                    $('#sixone_left').addClass('animated slideInLeft');
                    $('#sixone_right').addClass('animated slideInRight');
                    });
                $("#travel1").click(function(){
                    $("#index").fadeOut();
                    $("#travel_scroll").fadeIn();
                    $('#travel_left').addClass('animated slideInLeft');
                    $('#travel_right').addClass('animated slideInRight');
                    });
				$("#biye").click(function(){
                    $("#index").fadeOut();
                    $("#biye_scroll").fadeIn();
                    $('#biye_scroll').addClass('animated slideInLeft');
                    $('#biye_scroll').addClass('animated slideInRight');
                    });
			    $("#half").click(function(){
                    $("#index").fadeOut();
                    $("#half_scroll").fadeIn();
                    $('#half_left').addClass('animated slideInLeft');
                    $('#half_right').addClass('animated slideInRight');
                    });
			    $("#mery").click(function(){
                    $("#index").fadeOut();
                    $("#mery_scroll").fadeIn();
                    $('#mery_left').addClass('animated slideInLeft');
                    $('#mery_right').addClass('animated slideInRight');
                    });
			    $("#newyear").click(function(){
                    $("#index").fadeOut();
                    $("#newyear_scroll").fadeIn();
                    $('#newyear_left').addClass('animated slideInLeft');
                    $('#newyear_right').addClass('animated slideInRight');
                    });
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});
