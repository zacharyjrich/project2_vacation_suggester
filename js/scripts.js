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
      $("#answer1").fadeIn("slow");
      $("#survey").hide();
    } else if (output > 5 && output <= 6) {
      $("#answer2").fadeIn("slow");
      $("#survey").hide();
    } else if (output > 6 && output <=8) {
      $("#answer3").fadeIn("slow");
      $("#survey").hide();
    } else if (output > 8 && output <= 10) {
      $("#answer4").fadeIn("slow");
      $("#survey").hide();
    } else {
      $("#answer5").fadeIn("slow");
      $("#survey").hide();
    }
    event.preventDefault();

  });
  
});
