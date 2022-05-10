/* start loader coding */

window.onload = function()
{
	$(document).ready(function(){
		$(".icon").fadeOut(500,function(){
			$("#slide-left,#slide-right").animate({"width":"0%"},500,function(){
				$("#loader-cont").fadeOut(500);
				});
			});	
	});
	
	$("#menu").slicknav({
		label : ' ',
		brand : 'Miss Misha kumari',
		
		
	});
}

/* end loader coding */


/* start big slider */

$(document).ready(function() {
	
  $(".skitter-large").skitter({
	  label : false,
	  dots : false,
	  
  });
});

 $(document).ready(function(){
	 $(".picone-header").slideDown(1000,function(){
		 $(".picone-btn").fadeIn(1500,function(){
			 $(".picone-header,.picone-btn").delay(50).fadeOut(function(){
				$(".slider-label").css("background","rgba(0,0,0,0.8)");
				 $(".pictwo-header").fadeIn(1000,function(){
					 $(".pictwo-para").show(1500,function(){
						 $(".pictwo-btn").fadeIn(1000,function(){
							 $(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function(){
								  if($(window).width()>321)
								 
								 {$(".slider-label").css("background","inherit");}
							 });
							 
						 });
					 });
				 });
				 
				 
			 });
			 
		 });
		 
	 });
	 
 });
 
 $(document).ready(function(){
	 setInterval(function(){
	 $(".picone-header").slideDown(1000,function(){
		 $(".picone-btn").fadeIn(1500,function(){
			 $(".picone-header,.picone-btn").delay(50).fadeOut(function(){
				$(".slider-label").css("background","rgba(0,0,0,0.8)");
				 $(".pictwo-header").fadeIn(1000,function(){
					 $(".pictwo-para").show(1500,function(){
						 $(".pictwo-btn").fadeIn(1000,function(){
							 $(".pictwo-header,.pictwo-para,.pictwo-btn").delay(2800).fadeOut(function(){
						       if($(window).width()>321)
								 {$(".slider-label").css("background","inherit");}
							 });
							 
						 });
					 });
				 });
				 
				 
			 });
			 
		 });
		 
	 });
	 
	 },10500);
	 
	 
 });

/* end big slider */

/* start project slider */
 
  $(document).ready(function(){
	  $(".center").slick({
		  dots:false,
		  infinite:true,
		  centerMode:true,
		  slidesToShow :5,
          slidesToScroll :3,
		  responsive:[
		  {
			  breakpoint:768,
			  settings:{
				  dots:false,
				  infinite:true,
				  centerMode:true,
				  slidesToShow:3,
				  slidesToScroll:3,
				centerPadding:'40px',
			  }
			  
		  },
		  
		  {
			  breakpoint:480,
			  settings:{
				  arrows:false,
				  dots:false,
				  infinite:true,
				  slidesToShow:1,
				  slidesToScroll:1,
				  centerPadding:'20px',
				  
			  }
			  
			  
		  },
		  
		  
		  
		  ]
		  
	  });
	  
	  
  });

/* end project slider */

/* start progressbar */


/* end progressbar bar */


/* start scrollbar */
  
    $(document).ready(function(){
		 if($(window).width()>1024)
		{
		 $(window).scroll(function(){
			var sheight = window.pageYOffset;
			if(sheight>600)
			{
				$(".my-pic,.about-text").slideDown(500);
			}
		  else
		  {
			  $(".my-pic,.about-text").slideUp(500);
		  }
			
		});
		
		
		}
		   
		$(window).scroll(function(){
			var sheight = window.pageYOffset;
			if(sheight>1200)
			{
				       $(document).ready(function(){
	  var pone = $('.progress-one').html();
	  var ptwo = $('.progress-two').html();
	  var pthree = $('.progress-three').html();
	  var pfour = $('.progress-four').html();
	  var pfive = $('.progress-five').html();
	  var psix = $('.progress-six').html();
	  var pseven = $('.progress-seven').html();
	  $(".progress-one").animate({'width':pone},1000,function(){
		  $('.progress-two').animate({'width':ptwo},500,function(){
			 $('.progress-three').animate({'width':pthree},500,function(){
				 $('.progress-four').animate({'width':pfour},500,function(){
					 $('.progress-five').animate({'width':pfive},500,function(){
						 $('.progress-six').animate({'width':psix},500,function(){
							 $('.progress-seven').animate({'width':pseven},500);
						 });
					 });
				 });
			 }); 
		  });
		  
	  });
  });
				
     		}
		});
		
		
		
		
		
		
		
		
		
		
		});

/* end scrollbar */

/* start scroll to top coding */
   
     $(document).ready(function(){
		 $(window).scroll(function(){
			 if($(window).scrollTop()>200)
			 {
				 $(".scrolltop").fadeIn(500);
			 }
			 else
			 {
				 $(".scrolltop").fadeOut(500);
			 }
			 $(".scrolltop").click(function(){
				 $("html,body").animate({scrollTop:0},1000);
				 
				 
			 });
			 
			 
		 });
		 
		 
	 });
     

/* end scroll to top coding */