$(document).ready(function() {
    window.current = 0;
    window.MAX = 5;

    // Fetch images from JSON
    fetchImages().then(() => {
        gallery_current(current);
    });

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

async function fetchImages() {
    try {
        const response = await fetch('images.json');
        const data = await response.json();
        window.images = data.images;
        window.MAX = images.length - 1;
    } catch (error) {
        console.error("Error fetching images:", error);
    }
}

function download_image(){
    var i = window.current;
    var imglink = "images/" + images[i];
    window.location.href = imglink;
}

function share_image() {
    // Implementation of sharing functionality
} 

function close_box() {
    $('.backdrop, .box').animate({'opacity':'0.00'}, 300, 'linear', function(){
        $('.backdrop, .box').css('display', 'none');    
    });
} 

function gallery_next() {
    var i = window.current;
    if (i != MAX) {
        window.current++;
        i = window.current;
        $('#gallery').attr("src", "images/" + images[i]);
    } else {
        $('#gallery').attr("src", "images/" + images[i]);
    }
}

function gallery_prev() {
    var i = window.current;
    if (i != 0) {
        window.current--;
        i = window.current;
        $('#gallery').attr("src", "images/" + images[i]);
    } else {
        $('#gallery').attr("src", "images/" + images[i]);
    }
}

function gallery_current(i) {
    $('#gallery').attr("src", "images/" + images[i]);
}

function gallery_resize(set) {
    var imgheight = $('#gallery').css('height');
    if (imgheight == '250px' && set == 1) {            
        $('#gallery').css('height', '75vh'); 
        $('.backdrop').css('height', '100%');
    } else {
        $('#gallery').css('height', '250px'); 
    }
}
