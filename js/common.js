$(function() {

  var t1 = new TimelineMax({paused: true});

  t1.to(".overlay",1,{
      css: {height: "100vh"}
  });

t1.staggerFrom(".menu li ", 1 , {y:100, opacity:0, ease: Expo.easeOut}, 0.1);

t1.reverse();

  $("#toggle").click(function() {
    $(this).toggleClass('on');
    t1.reversed(!t1.reversed());
	});

});

$('#btn-down').on("click", function(){
  TweenLite.to('.main-header-about', 1.5, {
    y: "-110%"
  });


});




$('.owl-carousel-offers').owlCarousel({
    loop:true,
    nav:true,
    items: 1,
    smartSpeed: 1000,
    mouseDrag: false,
    touchDrag: false,
    //animateOut: 'fadeOut',
    animateIn: "fadeIn",
    navText: ['<div class="angles"><img src="img/arrow-left.png"/></div>','<div class="angles"><img src="img/arrow-right.png"/></div>'],
    onTranslate : animation,
})

$("#btn-ok").on("click", function() {
  //console.log($(window).width());
  var width = $(window).width();
  $options = $('#options-panel');
  if(width < 780)
  {
    $options.toggleClass('options');
    $options.toggleClass('options-active');

  }
});


var tl = new TimelineLite();

tl.addLabel("blueGreenSpin")
.from('.text-part', 1, {
  y: "100%",
  opacity: 0,
  dalay:1},"blueGreenSpin")
.from('.link-part', 1, {
  y: "100%",
  opacity: 0,
  dalay:1
},"blueGreenSpin")
.to('.whitebox', 1.5, {
   x: "100%",
   //opacity: 1,
   //width: 0,
 },"blueGreenSpin")
 .from('.img', 1.5, {
   x: "100%",
   opacity: 0,
   //width: 0
 },"blueGreenSpin");



function animation(event)
{
  tl.play();
  tl.restart();


}

$(window).scroll(function(){

  if($('.is-about')){
    var wScroll = $(this).scrollTop();
    if(wScroll > $('.s-personal').offset().top - $(window).height()/2 ){
    	  TweenLite.to('.s-personal .text-photo', 1, {
          x: "0%",
          opacity: 1
        });
    }

    if(wScroll > $('.s-team').offset().top - $(window).height()/2 ){
    	  TweenLite.to('.s-team .text-photo', 1, {
          x: "0%",
          opacity: 1
        });
    }
}
});

$(window).on('load', function(){
    $('.preloader').delay(1000).fadeOut('slow');
});
