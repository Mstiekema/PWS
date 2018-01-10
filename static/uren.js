$(document).ready(function(){
  // Activeert de popover over het invoeren van informatie als je niet bent ingelogd
  $('[id="infBtn"]').popover({
    trigger: 'hover',
    html: true,
    title: "Waarom kan ik niks doen?",
    content: "Hier kunnen alleen Jelte, Jitze en Merijn hun gegevens invoeren als ze zijn ingelogd. Hier kan je wel zien wat wij moeten doen om het in te voeren."
  });
  $('[id="uurChartInf"]').popover({
    trigger: 'click',
    html: true,
    title: "Wat is dit?",
    content: "Dit is een chart gemaakt met de <a href='https://developers.google.com/chart/' target='_null'>Google Chart API</a>. Door het gebruiken van EJS, importeren we informatie uit de database en worden dan in deze chart gezet."
  });
  
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