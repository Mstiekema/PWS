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
   } else {
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
    } else {
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
    } else {
      $("#reset").dequeue();
    }
  });
});

$("#reset").mouseout(function(){
  $("#resetId").removeClass("show");
});

//teller
var counter = {};
var add = (function () {
  counter = 0;
  return function () {return counter += 1;}
})();

function telOp() {
  document.getElementById("nummer").innerHTML = add();
};

function zetTerug() {
  counter = 0;
  document.getElementById("nummer").innerHTML = 0;
};