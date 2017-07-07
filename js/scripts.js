$(document).ready(function() {
  $("#formSurvey").submit(function(){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var trackInput = $("input:radio[name=track]:checked").val();
    // var trackScore = parseInt("trackInput").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".track").text(trackInput);
    $("#survey").show();










    // if (trackInput === 1){
    //   $("#webdesigner").show();
    // }else if (trackInput === 2){
    //   $("#androidapp").show();
    // }else (trackInput === 3){
    //   $("#fullstack").show();
    // }



    // $(".panel-success").first().click(function(){
    //   $(this).find(".panel-body").toggle();
    // });

    event.preventDefault();
  });

});
