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
  var btn = document.getElementsByClassName("codeId")[0];
  var btn1 = document.getElementsByClassName("codeIdone")[0];
  var btn2 = document.getElementsByClassName("codeIdtwo")[0];
  var uiterlijk = document.getElementsByClassName("popUp")[0];
  var span = document.getElementsByClassName("close")[0];

  btn.addEventListener('click', openModal, countChar);
  try {
  btn1.addEventListener('click', openModal);
  } catch (err) {console.log("dit bestaat niet op deze pagina")};
  try {
  btn2.addEventListener('click', openModal);
  } catch (err) {console.log("dit bestaat niet op deze pagina")};
  span.addEventListener('click', closeModal);
  window.addEventListener('click', clickOutside);

  function openModal() {
    uiterlijk.style.display = 'block';
    console.log("Dit werkt");
  }

  function closeModal() {
    uiterlijk.style.display = 'none';
  }

  function clickOutside() {
    if (event.target == uiterlijk){
    uiterlijk.style.display = 'none';
    }
  }

});
