
// Load more speakers

$(function() {
  $(".speakers__items").slice(0, 3).show();
  $("#load-speakers").click(function(e) {
    e.preventDefault();
    $(".speakers__items:hidden").show();
  });
});

// Load more schedule

$(function () {
  $(".schedule__items").slice(0, 2).show();
  $("#load-schedule").click(function(e) {
    e.preventDefault();
    $(".schedule__items:hidden").show();
  });
});