$( document ).ready(function() {
                
                $("#about_scroll").fadeOut();   
                $("#work_scroll").fadeOut();
                $("#cook_scroll").fadeOut();
		$("#travel_scroll").fadeOut();

                $("#about").click(function(){
                    $("#index").fadeOut();
                    $("#about_scroll").fadeIn();
                    $('#about_left').addClass('animated slideInLeft');
                    $('#about_right').addClass('animated slideInRight');
                    });
                $("#work").click(function(){
                    $("#index").fadeOut();
                    $("#work_scroll").fadeIn();
                    $('#work_left').addClass('animated slideInLeft');
                    $('#work_right').addClass('animated slideInRight');
                    });
                $("#cook").click(function(){
                    $("#index").fadeOut();
                    $("#cook_scroll").fadeIn();
                    $('#cook_left').addClass('animated slideInLeft');
                    $('#cook_right').addClass('animated slideInRight');
                    });
                $("#travel").click(function(){
                    $("#index").fadeOut();
                    $("#travel_scroll").fadeIn();
                    $('#travel_left').addClass('animated slideInLeft');
                    $('#travel_right').addClass('animated slideInRight');
                    });
				$("#love").click(function(){
                    $("#index").fadeOut();
                    $("#love_scroll").fadeIn();
                    $('#love_scroll').addClass('animated slideInLeft');
                    $('#love_scroll').addClass('animated slideInRight');
                    });
                $(".back").click(function(){
                    $(".pages").fadeOut();
                    $("#index").fadeIn();
                    $('#index_left').addClass('animated slideInLeft');
                    $('#index_right').addClass('animated slideInRight');
                    });
           
		});
