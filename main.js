//Parallax
$(function(){
  $('.parallax__layer').parallax({
  });
});


//Autorefresh
var s_win_w = $(window).width();
$(window).resize(function(){
  win_w = $(window).width();
  if (win_w >= s_win_w*1.01 || win_w <= s_win_w*0.99) {
  location.reload();
  }
});
