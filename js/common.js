var dandara = function(){
  $('.dandara').remove();
  var $windowWidth = $(window).width();
  var $windowHeight = $(window).height();
  if($windowHeight > 800){
    $('body').append('<div class="dandara"><div class="shape-triangle"></div></div>');
    var $triangle = $('.shape-triangle');
    var $triangleWidth = $triangle.outerWidth();
    var maxNumD = Math.ceil($windowWidth / $triangleWidth);
    for (var i = 1; i < maxNumD; i++) {
      var $triangleClone = $triangle.clone();
      $('.dandara').append($triangleClone);
      $triangleClone.css({
        'left' : i * $triangleWidth
      });
    }
  }
};

var ruler = function(){
  $('.ruler').remove();
  var $windowHeight = $(window).height();
  $('body').append('<div class="ruler"><div class="ruler-scale"></div></div>');
  var $scale = $('.ruler-scale');
  var space = 5; 
  var maxNumR = Math.ceil($windowHeight / space);
  for (var i = 1; i < maxNumR; i++) {
    var $scaleClone = $scale.clone();
    $('.ruler').append($scaleClone);
    $scaleClone.css({
      'top' : i * space
    });
  }
};

$(document).ready(function() {
  $('.mixtype').mixtype({
    speed: 20,
    time: 60
  });
  $("body").clickstream({
    inSpeed: 1000
  });
  dandara.call();
  ruler.call();
});

$(window).resize(function() {
  dandara.call();
  ruler.call();
});