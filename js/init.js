(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
  $('.collapsible').collapsible();
  $('.materialbox').materialbox();
});

var instance = M.Carousel.init({
  // fullWidth: true,
  indicators: true
});

// Or with jQuery

$('.carousel.carousel-slider').carousel({
  // fullWidth: true,
  indicators: true
});



$(document).ready(function(){
  $('.carousel').carousel();
  var base_gallery_name = "#gallery";
  for(var i=1; i<10; i++){
    tmp_gallery_name = base_gallery_name + String(i);
    console.log(tmp_gallery_name);
    jQuery(tmp_gallery_name).unitegallery();
  }
 
  
});
    

