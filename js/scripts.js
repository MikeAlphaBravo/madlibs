$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var politicianInput = $("input#politician").val();
    var countryInput = $("input#country").val();
    var newsInput= $("input#news").val();
    var bodypartInput = $("input#body-part").val();
    var verbInput = $("input#verb").val();
    var plantInput = $("input#plant").val();

    $(".politician").text(politicianInput);
    $(".country").text(countryInput);
    $(".news").text(newsInput);
    $(".body-part").text(bodypartInput);
    $(".verb").text(verbInput);
    $(".plant").text(plantInput);

    $("#story").show();

    event.preventDefault();
  });
});
