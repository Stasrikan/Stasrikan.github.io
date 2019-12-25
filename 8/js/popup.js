$(document).ready(function() {
  $(".popup-button1").click(function(e) {
    e.preventDefault();
    $("#popup1").fadeIn();
  });
  $(".popup-close").click(function(e) {
    e.preventDefault();
    $("#popup1").fadeOut();
  });
});
