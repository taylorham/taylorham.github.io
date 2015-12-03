$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $('#top-bar').addClass('shrink');
  } else {
    $('#top-bar').removeClass('shrink');
  }
});
