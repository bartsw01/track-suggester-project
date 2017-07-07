$(document).ready(function() {
  $("#formSurvey").submit(function(){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var trackInput = $("input:radio[name=track]:checked").val();
    // var trackScore = parseInt("trackInput").val();

    if (trackInput === "web") {
      $("#webdesigner").show();
    }else if (trackInput === "android") {
      $("#androidapp").show();
    }else if (trackInput === "full"){
      $("#fullstack").show();
    }

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".track").text(trackInput);
    $("#survey").show();
    event.preventDefault();

    // if (trackScore === 1){
    //   $("#webdesigner").show();
    // }else if (trackScore === 2){
    //   $("#androidapp").show();
    // }else (trackScore === 3){
    //   $("#fullstack").show();
    // }

    // $(".panel-success").first().click(function(){
    //   $(this).find(".panel-body").toggle();
    // });


  });

});
