$(document).ready(function() {
  $("#ready_button").click(function() {
    $("#survey").show();
    $(".intro").hide();
  });

  $("form").submit(function(event) {
    var company = $("input:radio[name=company]:checked").val();
    var music = $("input:radio[name=music]:checked").val();
    var pizza = $("input:radio[name=pizza]:checked").val();
    var movie = $("input:radio[name=movie]:checked").val();
    var silly = $("input:radio[name=silly]:checked").val();

    if (company === "1" && music === "1" && pizza === "1" && movie === "1" && silly === "1") {
      $("#answer1").fadeIn("slow");
      $("#survey").hide();
    } else if (company === "2" && music === "2" && pizza === "2" && movie === "2" && silly === "2") {
      $("#answer2").fadeIn("slow");
      $("#survey").hide();
    } else if (company === "2" && music === "1" && pizza === "2" && movie === "1" && silly === "2") {
      $("#answer3").fadeIn("slow");
      $("#survey").hide();
    } else if (company === "1" && music === "2" && pizza === "1" && movie === "2" && silly === "1") {
      $("#answer4").fadeIn("slow");
      $("#survey").hide();
    } else {
      $("#answer5").fadeIn("slow");
      $("#survey").hide();
    }
    event.preventDefault();

  });

});
