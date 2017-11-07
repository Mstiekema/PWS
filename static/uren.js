$(document).ready(function(){
  // Activeert de popover over het invoeren van informatie als je niet bent ingelogd
  $('[data-toggle="popover"]').popover({
    trigger: 'hover',
    html: true,
    title: "Waarom kan ik niks doen?",
    content: "Hier kunnen alleen Jelte, Jitze en Merijn hun gegevens invoeren als ze zijn ingelogd. Hier kan je wel zien wat wij moeten doen om het in te voeren."
  });
  
  $('#urenSubmit').on('click', function(event) {
    var p1 = $("input[name='newPassword']").val();
    var p2 = $("input[name='confPassword']").val();
    if(p1 != p2) return window.alert("Wachtwoorden komen niet overeen");
    
    $.ajax({
      url: 'http://localhost:1000/uren',
      data: {
        minuten: $("input[id='tijd']").val(),
        activiteit: $("input[id='act']").val()
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