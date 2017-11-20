$(document).ready(function() {
  console.log("The page has loaded!");
  // Test om te zien of de pagina is geladen

  $('#zoekknop').on('click', function(event) {
    zoek()
  });

  $("#zoek").keyup(function(ev) {
    if (ev.which === 13) {
      zoek()
    }
  });

  function zoek() {
    var zoek = document.getElementById('zoek').value
    // Controleren of zoek alleen maar spaties bevat
    if ($.trim(zoek).length == 0) return
    if (zoek == "jitze's heterosexualiteit") {
      window.location.href = "/jitze";
    } else if (zoek.indexOf("zeep") != -1) {
      window.open('https://www.youtube.com/watch?v=t99CXCA4GFs');
    } else {
      window.location.href = "/zoek/" + zoek
    }
  }
  //pop up van code vensters
  //var modal = document.getElementById('myPop');
//  var btn = document.getElementsById("codeId");
  var span = document.getElementsByClassName("close")[0];
  var popUp = document.getElementsByClassName("popUp")[0];
  codeId.onclick = function() {
      popUp.style.display = "block";
  }

  close.onclick = function() {
      popUp.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == span) {
          popUp.style.display = "none";
      }
  }

});
