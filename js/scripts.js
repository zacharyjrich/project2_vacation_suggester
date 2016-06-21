$(document).ready(function() {
  $("#ready_button").click(function() {
    $("#survey").show();
    $(".intro").hide();
  });

  $("form").submit(function(event) {
    var company = parseInt($("input:radio[name=company]:checked").val());
    var music = parseInt($("input:radio[name=music]:checked").val());
    var pizza = parseInt($("input:radio[name=pizza]:checked").val());
    var movie = parseInt($("input:radio[name=movie]:checked").val());
    var silly = parseInt($("input:radio[name=silly]:checked").val());
    var output = company + music + pizza + movie + silly;

    if (output === 5) {
      $("#hawaii").fadeIn("slow");
      $("#survey").hide();
    } else if (output > 5 && output <= 6) {
      $("#italy").fadeIn("slow");
      $("#survey").hide();
    } else if (output > 6 && output <=8) {
      $("#brazil").fadeIn("slow");
      $("#survey").hide();
    } else if (output > 8 && output <= 10) {
      $("#europe_backpack").fadeIn("slow");
      $("#survey").hide();
    } else {
      $("#netflix").fadeIn("slow");
      $("#survey").hide();
    }
    event.preventDefault();

  });

});
