var dandara = function(){
  $('.dandara').remove();
  var $windowWidth = $(window).width();
  var $windowHeight = $(window).height();
  if($windowHeight > 800){
    $('body').append('<div class="dandara"><div class="shape-triangle"></div></div>');
    var $triangle = $('.shape-triangle');
    var $triangleWidth = $triangle.outerWidth();
    var maxNumD = Math.ceil($windowWidth / $triangleWidth);
    for (var i = 0; i < maxNumD; i++) {
      var $triangleClone = $triangle.clone();
      $('.dandara').append($triangleClone);
      $triangleClone.css({
        'left' : i * $triangleWidth
      });
    }
  }
}

$(document).ready(function() {
  $('.mixtype').mixtype({
    speed: 20,
    time: 60
  });
  $("body").clickstream({
    inSpeed: 1000
  });
  dandara.call();   
});

$(window).resize(function() {
  dandara.call();
});