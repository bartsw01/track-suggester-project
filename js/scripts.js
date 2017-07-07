$(document).ready(function() {
  $("#formAddress").submit(function(){
    var firstNameInput = $("input#firstName").val();
    var lastNameInput = $("input#lastName").val();
    var addressInput = $("input#address").val();
    var phoneNumberInput = $("input#phoneNumber").val();
    var emailAddressInput = $("input#emailAddress").val();

    $(".firstName").text(firstNameInput);
    $(".lastName").text(lastNameInput);
    $(".address").text(addressInput);
    $(".phoneNumber").text(phoneNumberInput);
    $(".emailAddress").text(emailAddressInput);
    $("#contact").show();
    // $(".panel-body").hide();
    $("#addressRow").prepend('<div class ="panel panel-success"> <div class = "panel-heading">' + firstNameInput + lastNameInput + '</div><div class="panel-body">' + addressInput + phoneNumberInput + emailAddressInput + '</div>');

    $(".panel-success").first().click(function(){
      $(this).find(".panel-body").toggle();
      // $(this).find(".panel-heading").toggle();
    });
    // $("ul#user").prepend("<li>Hello!</li>");
    event.preventDefault();
  });

});
