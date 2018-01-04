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

// popup info ?
  $("#info").on("click", function() {
    var info = document.getElementById("infoId");
    info.classList.toggle("show");
  });

  //pop up van code vensters
  //var modal = document.getElementById('myPop');
//  var btn = document.getElementsById("codeId");
  var span = document.getElementsByClassName("close")[0];
  var popUp = document.getElementsByClassName("popUp")[0];
  /*codeId.onclick = function() {
      popUp.style.display = "block";
  }
Jelte, omdat codeId niet wordt herkend op andere pagina's,
wordt de code eronder niet gelezen dus je moet even jquery
gebruiken. zie bijvoorbeeld popup info hierboven.
  close.onclick = function() {
      popUp.style.display = "none";
  }

  window.onclick = function(event) {
      if (event.target == span) {
          popUp.style.display = "none";
      }
  } */

// Paint
  var down = false;

  $("#raster").click(function() {
   $(".tile").toggleClass("raster");
    $(".rasterButton").toggleClass("paintActive");
  });

  $("#reset").click(function() {
   $(".tile").css("background-color", "white");
  });

  $(document).mousedown(function() {
   down = true;
  }).mouseup(function() {
   down = false;
  });

  $("#zwart").click(function() {
    $(".tile").mouseover(function(){
      if(down) {
        $(this).css("background-color", "black");
      } else { $(".tile").mousedown(function(){
        $(this).css("background-color", "black");
       });
      };
    });
  });

  $("#wit").click(function() {
     $(".tile").mouseover(function(){
       if(down){
         $(this).css("background-color", "white");
       } else { $(".tile").mousedown(function(){
         $(this).css("background-color", "white");
        });
       };
     });
   });

  $("#rood").click(function() {
     $(".tile").mouseover(function(){
       if(down){
         $(this).css("background-color", "red");
       } else { $(".tile").mousedown(function(){
         $(this).css("background-color", "red");
        });
       };
     });
   });

  $("#oranje").click(function() {
     $(".tile").mouseover(function(){
       if(down){
         $(this).css("background-color", "orange");
       } else { $(".tile").mousedown(function(){
         $(this).css("background-color", "orange");
        });
       };
     });
   });

  $("#geel").click(function() {
     $(".tile").mouseover(function(){
       if(down){
         $(this).css("background-color", "yellow");
       } else { $(".tile").mousedown(function(){
         $(this).css("background-color", "yellow");
        });
       };
     });
   });

  $("#groen").click(function() {
     $(".tile").mouseover(function(){
       if(down){
         $(this).css("background-color", "green");
       } else { $(".tile").mousedown(function(){
         $(this).css("background-color", "green");
        });
       };
     });
   });

  $("#blauw").click(function() {
     $(".tile").mouseover(function(){
       if(down){
         $(this).css("background-color", "blue");
       } else { $(".tile").mousedown(function(){
         $(this).css("background-color", "blue");
        });
       };
     });
   });

  $("#paars").click(function() {
     $(".tile").mouseover(function(){
       if(down){
         $(this).css("background-color", "purple");
       } else { $(".tile").mousedown(function(){
         $(this).css("background-color", "purple");
        });
       };
     });
   });

  $(".kleur").click(function(){
    $(".kleur").removeClass("paintActive");
      $(this).addClass("paintActive");
     });

});
