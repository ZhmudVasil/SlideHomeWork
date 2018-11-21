   $(document).ready(function(){
	  $('.slider').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  dots: false,
	  centerMode: true,
	  infinite:false,
	  focusOnSelect: true,
	  prevArrow:"<img class='slick-prev' src='web/img/but_left.png'>",
	  nextArrow:"<img class='slick-next' src='web/img/but_rigth.png'>"
   });
});