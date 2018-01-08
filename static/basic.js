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
  $(".info").on("click", function() {
    $(this).children(".infoText").toggleClass("show");
  });

  //pop up van code vensters
  var uiterlijk = document.getElementsByClassName("popUp")[0];

  try {
  window.addEventListener('click', clickOutside);
} catch (err) {};

  $(".codeId").click(function() {
    var codeBlok = $('.code').attr('id');
    console.log(codeBlok);
    if (codeBlok == "een") {
      var codeBlokinhoud = `$.ajax({
        url: '/login',
        data: {
          username: $("input[name='username']").val(),
          password: $("input[name='password']").val()
        },
        type: 'POST',
        success: function (data) {
          console.log(data)
          window.location.href = "/"
        },
        error: function (xhr, status, error) {
          console.log(xhr.responseText)
        }
    });`
    } else if (codeBlok == "drie") {
      var codeBlokinhoud = `app.get('/', function (req, res) {
        res.render('index.html')
})`
    } else if (codeBlok == "zes") {
      var codeBlokinhoud = `var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'pws',
        port: 3306
});`
    } else if (codeBlok == "zeven") {
      var codeBlokinhoud = `$("#raster").click(function() {
        $(".tile").toggleClass("raster");
          $(".rasterButton").toggleClass("paintActive");
});`
    }

    document.getElementById("popUp-inhoud").innerHTML = codeBlokinhoud;
    uiterlijk.style.display = 'block';
  });

  $(".codeIdone").click(function() {
    var codeBlokeen = $('.codeEen').attr('id');
    console.log(codeBlokeen);
    if (codeBlokeen == "twee") {
      var codeBlokinhoud = `app.post('/login', function(req, res) {
        conn.query('SELECT * FROM userinfo WHERE username = ?', req.body.username, function(err, result) {
          if (err || result[0] == undefined) return res.status(400).send('Username en/of wachtwoord is niet correct')
          if (req.body.password == result[0].password) {
            req.session.user = req.body
            req.session.logged = true
            res.status(200).send('Succesvol ingelogd')
          }	else {
            res.status(400).send('Incorrect wachtwoord')
          }
        })
  })`
} else if (codeBlokeen == "vier") {
      var codeBlokinhoud = `app.get('/zoek/:zoek', function (req, res) {
        res.render('zoek.html', {zoek: req.params.zoek})
  })`
} else if (codeBlokeen == "acht") {
      var codeBlokinhoud = `var down;

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
  });`
    }
    document.getElementById("popUp-inhoud").innerHTML = codeBlokinhoud;
    uiterlijk.style.display = 'block';
  });

  $(".codeIdtwo").click(function() {
    var codeBloktwee = $('.codeTwee').attr('id');
    console.log(codeBloktwee);
    if (codeBloktwee == "vijf") {
      var codeBlokinhoud = `&lt;&#37; res.forEach(function(res) { &#37;&gt;
        &lt;b&gt;&lt;&#37;&#61;= res.waarde &#37;&gt;&lt;/b&gt;
    &lt;&#37; }) &#37;&gt;`
} else if (codeBloktwee == "negen") {
      var codeBlokinhoud = `$("#reset").click(function() {
       $(".tile").css("background-color", "white");
  });`
} else {};
    document.getElementById("popUp-inhoud").innerHTML = codeBlokinhoud;
    uiterlijk.style.display = 'block';
  });

  $(".codeIdthree").click(function() {
    var codeBlokdrie = $('.codeDrie').attr('id');
    console.log(codeBlokdrie);
    if (codeBlokdrie == "tien") {
      var codeBlokinhoud = `@media only screen and (max-width: 400px){
          .tile{height: 6.25%; width: 6.25%;}
          .kleur{height: 20px; width: 20px;}
          #raster, #reset{height: 20px; font-size: 11px;}
  }`
} else {};

    document.getElementById("popUp-inhoud").innerHTML = codeBlokinhoud;
    uiterlijk.style.display = 'block';
  });

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
