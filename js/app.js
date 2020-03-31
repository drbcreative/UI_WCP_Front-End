$(document).ready(function() {
  var parallaxBg = $('.parallax-bg');
  $(window).scroll(function() {
    var currScrollPos = $(window).scrollTop();
    parallaxBg.css('background-position', '0' + -currScrollPos / 2 + 'px');
  });
});
