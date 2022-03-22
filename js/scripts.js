$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").slideToggle();
    $("#walrus-hidden").slideToggle();
    $("#walrus-hidden p").toggle();
  });
  $(".button").click(function() {
    $("#toggleOn").toggle();
    $("#toggleOff").toggle();
  });
});
