$(document).ready(function(){
  $("#formSurvey").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var trackInput = $("input:radio[name=track]:checked").val();

    if (trackInput === "web") {
      $("#webdesigner").show();
    }else if (trackInput === "android") {
      $("#androidapp").show();
    }else if (trackInput === "full"){
      $("#fullstack").show();
    }

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    // $(".food").text(foodInput);
    $(".track").text(trackInput);
    $("#survey").show();
    event.preventDefault();
  });
});
