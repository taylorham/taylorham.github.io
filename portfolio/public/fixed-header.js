// $(window).scroll(function() {
//   if ($(document).scrollTop() > 50) {
//     $('#top-bar').addClass('shrink');
//   } else {
//     $('#top-bar').removeClass('shrink');
//   }
// });

$(document).ready(function() {
  if ($(document).scrollTop() > 0) {
    fixedFlexHeader();
  }
  $(window).scroll(function() {
    fixedFlexHeader();
  });
});

function fixedFlexHeader() {
  var distance = $(document).scrollTop();
  var shadowAlpha = 0;
  var hrAlpha = 0;
  if (distance <= 54) {
    $('#top-bar').css({
      'background-color': 'rgba(0,69,63,0)',
      'padding-top': 74 - distance,
      'height': '73px'
    });
    $('.navbar').css('margin-bottom', '20px');
    $('.header-hr').css('opacity', 0.25);
  } else if (distance >= 55 && distance <= 94) {
    var midDistance = distance - 54;
    shadowAlpha = 0.01 * midDistance;
    hrAlpha = 0.25 - (0.00625 * midDistance);
    bgAlpha = 0.025 * midDistance;
    $('#top-bar').css({
      'background-color': 'rgba(0,67,63,' + bgAlpha + ')',
      'padding-top': 20 - (0.5 * midDistance),
      'height': 92 - midDistance,
      'box-shadow': '5px 0 5px -2px rgba(0,0,0,' + shadowAlpha + ')',
    });
    $('.navbar').css('margin-bottom', (20 - (0.5 * midDistance)));
    $('.header-hr').css('opacity', hrAlpha);
  } else if (distance >= 95) {
    $('#top-bar').css({
      'background-color': 'rgba(0,67,63,1)',
      'box-shadow': '5px 0 5px -2px rgba(0,0,0,0.4)',
      'padding-top': '0px',
      'height': '52px'
    });
    $('.navbar').css('margin-bottom', 0);
    $('.header-hr').css('opacity', 0);
  }
}
