	$(document).ready(function() {
		window.current = 0;
		window.MAX = 5;
		gallery_current(current);

		$('.lightbox').click(function() {
			$('.backdrop, .box').animate({'opacity':'0.90'}, 300, 'linear');
			$('.box').animate({'opacity':'1.00'}, 300, 'linear');
			$('.backdrop, .box').css('display', 'block');
		});
		$('.close').click(function(){
			close_box();
		});
		
		$('.backdrop').click(function() {
			 close_box();
		});
		$('#prev').click(function(){

			gallery_prev();
		});
		
		$('#next').click(function() {
			gallery_next();
		});
		
		$('#full').click(function() {
			gallery_resize(1);
		});
		$('#gallery').click(function() {
			gallery_resize(0);
		});
		
		$('#download').click(function() {
			download_image();
		});
	
		$('#share').click(function() {
			share_image();
		});
	
	});
	
	function download_image(){
		var i = window.current;
		var imglink = "images/" + images[i];
		window.location.href = imglink;
	}
	
	function share_image() {  
		$();	
		//<a href="whatsapp://send?text=<<HERE GOES THE URL ENCODED TEXT YOU WANT TO SHARE>>" data-action="share/whatsapp/share">Share via Whatsapp</a>
	} 
	
	function close_box() {  
		$('.backdrop, .box').animate({'opacity':'0.00'}, 300, 'linear', function(){
			$('.backdrop, .box').css('display', 'none');	
		});
	} 


	function gallery_next() {
		var i = window.current;
		console.log("Current: "+window.current);
		if (i != MAX) {
			window.current++;
			i = window.current;
					console.log("After Current: "+window.current);
			$('#gallery').attr("src", "images/"+images[i]);
		} 
		else {
			$('#gallery').attr("src", "images/"+images[i]);
		}
	}
	
	function gallery_prev() {

		var i = window.current;
		console.log("Current: "+window.current);
		if (i != 0) {
			window.current--;
			i = window.current;
								console.log("After Current: "+window.current);
			$('#gallery').attr("src", "images/"+images[i]);
		} 
		else {
			$('#gallery').attr("src", "images/"+images[i]);
		}
	}
	
	function gallery_current(i) {
		console.log("Ready\n"+"Current: "+window.current);
		$('#gallery').attr("src", "images/"+images[i]);
	}
	function gallery_resize(set){
			var imgheight = $('#gallery').css('height');
			console.log(imgheight);
			if ( imgheight == '250px' && set == 1) {			
				$('#gallery').css('height', '75vh'); 
				$('.backdrop').css('height', '100%');
			} else {
				$('#gallery').css('height', '250px'); 
			}
	}

	var images = [
			"1.png", 
			"2.jpg", 
			"3.jpg",
			"4.jpg",
			"5.jpg",
			"6.jpg"
			];

	 