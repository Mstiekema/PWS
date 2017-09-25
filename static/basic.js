$(document).ready(function() {
  console.log("The page has loaded!");
  // Test om te zien of de pagina is geladen
  $('#zoekknop').on('click', function(event) {
    if (document.getElementById('zoek').value == "jitze's heterosexualiteit") {
      window.location.href = "/jitze";
    }
  });

});
/* Ideeën voor easter eggs:
- zoek in navbar, vul "de zeep" in om naar het fimpje te worden gestuurd
- jitze's heterosexualiteit komt uit op error page
*/
