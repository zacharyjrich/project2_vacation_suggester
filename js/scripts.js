$(document).ready(function() {
  $("#ready_button").click(function() {
    $("#survey").show();
    $(".intro").hide();
  });

  $("form").submit(function(event) {
    event.preventDefault();
    var company = $("input:radio[name=company]:checked").val();
    var music = $("input:radio[name=music]:checked").val();
    var pizza = $("input:radio[name=pizza]:checked").val();
    var movie = $("input:radio[name=movie]:checked").val();
    var silly = $("input:radio[name=silly]:checked").val();

    if (company === "alone" && music === "beatles" && pizza === "utensils" && movie === "shawshank" && silly === "numbers") {
      $("#answer1").show();
      $("#survey").hide();
    } else {
      $("#answer2").show();
      $("#survey").hide();
    }

  });

});
