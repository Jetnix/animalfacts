$(document).ready(function() {
  $("#animal-input").submit(function(event) {
    var animals = $("#animals").val();
    if (animals === "Iguana") {
      $(".animal").hide();
      $("#iguana").show();
    }
    else if(animals === "Spider Monkey") {
      $(".animal").hide();
      $("#monkey").show();
    }
    else if(animals === "Tarantula") {
      $(".animal").hide();
      $("#tara").show();
    }
    else {
      $(".animal").hide();
    }

    event.preventDefault();
  });

  $("#submit-button").click(function() {
  });
});
