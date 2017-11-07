$(document).ready(function() {
  console.log("The page has loaded!");
  // Test om te zien of de pagina is geladen
  
  $('#zoekknop').on('click', function(event) {
    var zoek = document.getElementById('zoek').value
    if (zoek == "jitze's heterosexualiteit") {
      window.location.href = "/jitze";
    } else if (zoek.indexOf("zeep") != -1) {
      window.open('https://www.youtube.com/watch?v=t99CXCA4GFs');
    } else {
      window.location.href = "/zoek/" + zoek
    }
  });
  
  $("#zoek").keyup(function(ev) {
    if (ev.which === 13) {
      var zoek = document.getElementById('zoek').value
      if (zoek == "jitze's heterosexualiteit") {
        window.location.href = "/jitze";
        } else if (zoek.indexOf("zeep") != -1) {
        window.open('https://www.youtube.com/watch?v=t99CXCA4GFs');
      } else {
        window.location.href = "/zoek/" + zoek
      }
    }
  });
});