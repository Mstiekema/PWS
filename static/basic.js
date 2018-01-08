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
    if ($.trim(zoek).length == 0) {
      $("#notifBar").css({"background": "#f2dede", "color": "#a94442"}).fadeIn("slow").append("Je moet eerst wat invoeren voordat je wat zoekt");
      setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 5000);
      return
    }
    if (zoek == "jitze's heterosexualiteit") {
      window.location.href = "/jitze";
    } else if (zoek.indexOf("zeep") != -1) {
      window.open('https://www.youtube.com/watch?v=t99CXCA4GFs');
    } else {
      window.location.href = "/zoek/" + zoek
    }
  }
  
  if (document.URL.indexOf('#logout') != -1) {
    $("#notifBar").css({"background": "#f2dede", "color": "#a94442"}).fadeIn("slow").append("Succesvol uitgelogd!");
    setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 3000);
  } else if (document.URL.indexOf('#loggedin') != -1) {
    $("#notifBar").css({"background": "#dff0d8", "color": "#3c763d"}).fadeIn("slow").append("Succesvol ingelogd!");
    setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 3000);
  } else if (document.URL.indexOf('#newacc') != -1) {
    $("#notifBar").css({"background": "#dff0d8", "color": "#3c763d"}).fadeIn("slow").append("Succesvol een nieuw account aangemaakt!");
    setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 3000);
  } else if (document.URL.indexOf('/login/new') != -1) {
    $("#loginBox").css({"height": "305px"})
  }

// popup info ?
  $("#panels").on("click", function() {
    $(this).children(".infoTextL").toggleClass("show");
  });
  $("#mainInf").on("click", function() {
    $(this).children(".infoTextR").toggleClass("show");
  });

  //pop up van code vensters
  var btn = document.getElementsByClassName("codeId")[0];
  var btn1 = document.getElementsByClassName("codeIdone")[0];
  var btn2 = document.getElementsByClassName("codeIdtwo")[0];
  var uiterlijk = document.getElementsByClassName("popUp")[0];
  var span = document.getElementsByClassName("close")[0];

  try {
  btn.addEventListener('click', openModal);
  } catch (err) {console.log("dit bestaat niet op deze pagina")};
  try {
  btn1.addEventListener('click', openModal);
  } catch (err) {console.log("dit bestaat niet op deze pagina")};
  try {
  btn2.addEventListener('click', openModal);
  } catch (err) {console.log("dit bestaat niet op deze pagina")};
  try {
  span.addEventListener('click', closeModal);
  } catch (err) {console.log("dit bestaat niet op deze pagina")};
  try {
  window.addEventListener('click', clickOutside);
  } catch (err) {console.log("dit bestaat niet op deze pagina")};

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

// Paint
  var down;

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

  var hoverKleur;

  $(".kleur").mouseenter(function(){
    hoverKleur = true
  }).mouseout(function(){
    hoverKleur = false
  });

  $(".kleur").hover(function(){
    $(".kleur").delay(1500)
               .queue(function(){
                 if (hoverKleur) {
                   $("#kleurId").addClass("show");
                   $(".kleur").dequeue();
                 }else {
                   $(".kleur").dequeue();
                 }
               });
  });

  $(".kleur").mouseout(function(){
    $("#kleurId").removeClass("show");
  });

  var hoverRaster;

  $("#raster").mouseenter(function(){
    hoverRaster = true
  }).mouseout(function(){
    hoverRaster = false
  });

  $("#raster").hover(function(){
    $("#raster").delay(1500)
               .queue(function(){
                 if (hoverRaster) {
                   $("#rasterId").addClass("show");
                   $("#raster").dequeue();
                 }else {
                   $("#raster").dequeue();
                 }
               });
  });
  $("#raster").mouseout(function(){
    $("#rasterId").removeClass("show");
  });

  var hoverReset;

  $("#reset").mouseenter(function(){
    hoverReset = true
  }).mouseout(function(){
    hoverReset = false
  });

  $("#reset").hover(function(){
    $("#reset").delay(1500)
               .queue(function(){
                 if (hoverReset) {
                   $("#resetId").addClass("show");
                   $("#reset").dequeue();
                 }else {
                   $("#reset").dequeue();
                 }
               });
  });
  $("#reset").mouseout(function(){
    $("#resetId").removeClass("show");
  });

});
