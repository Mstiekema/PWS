$(document).ready(function(){
  // Activeert de popover over het invoeren van informatie als je niet bent ingelogd
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    html: true,
    title: "Waarom kan ik niks doen?",
    content: "Hier kunnen alleen Jelte, Jitze en Merijn hun gegevens invoeren als ze zijn ingelogd. Hier kan je wel zien wat wij moeten doen om het in te voeren."
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
        console.log(data)
        window.location.reload()
      },
      error: function (xhr, status, error) {
        console.log(xhr.responseText)
      }
    });
  });  
});