$(document).ready(function(){
  // Activeert de popover over het invoeren van informatie als je niet bent ingelogd
  $('#urenSubmit').on('click', function(event) {
    $.ajax({
      url: '/uren',
      data: {
        minuten: $("input[id='tijd']").val(),
        activiteit: $("input[id='act']").val(),
        datum: $("input[id='date']").val(),
      },
      type: 'POST',
      success: function (data) {
        $("#notifBar").fadeIn("slow").append(data);
        setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 5000);
        window.location.reload()
      },
      error: function (xhr, status, error) {
        $("#notifBar").css({"background": "#f2dede", "color": "#a94442"}).fadeIn("slow").empty().append(xhr.responseText);
        setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 5000);
      }
    });
  });  
});