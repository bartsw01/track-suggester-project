$(document).ready(function(){
  $("#formSurvey").submit(function(event){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    // var food = document.getElementById('food').value;

    var foodInput = $("#food").val();
    var flavorInput = $("input:radio[name=flavor]:checked").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".food").text(foodInput);
    $(".flavor").text(flavorInput);
    $("#survey").show();
    event.preventDefault();
  });
});
