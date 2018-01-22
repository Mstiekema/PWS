$(document).ready(function() {
  console.log("The page has loaded!");
  // Test om te zien of de pagina is geladen

  //laadscherm weghalen
  if(document.URL.indexOf('#loggedin') != -1) {
    document.getElementsByClassName("loader-wrapper")[0].style.visibility = "visible";
    document.getElementsByClassName("loader-wrapper")[1].style.visibility = "visible";
    document.getElementsByClassName("loader-wrapper")[2].style.visibility = "visible";
    setTimeout(function(){
      $('body').addClass('loaded');
      $('h1').css('color','#222222');
    }, 7500);
  };
  
  // Show login code
var text = new String(`$.ajax({ |
  url: '/login', |
  data: { |
    username: $("input[name='username']").val(), |
    password: $("input[name='password']").val() |
  }, |
  type: 'POST', |
  success: function (data) { |
    console.log(data) |
    window.location.href = "/" |
  }, |
  error: function (xhr, status, error) { |
    console.log(xhr.responseText) |
  } |
});`)
  
  var i = 0
  function showLoginCode() {
    if (text[i] == "|") {
      $("#showLoginTextToUser").append(`<br>`);
    } else if (text[i] == " ") {
      $("#showLoginTextToUser").append(`&nbsp;`);
    } else {
      $("#showLoginTextToUser").append(text[i]);
    }
    i++;
    if( i < text.length ){
      setTimeout(showLoginCode, 15);
    }
  }
  showLoginCode()

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
    if ($.trim(zoek).length == 0) {
      $("#notifBar").css({"background": "#f2dede", "color": "#a94442"}).fadeIn("slow").empty().append("Je moet eerst wat invoeren voordat je wat zoekt");
      setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 5000);
      return
    }
    
    var searchWords = {
      "/basics": ["html", "css", "javascript", "js", "basics", "programmeertalen", "programmeertaal", "taal", "talen"],
      "/uren": ["uren", "logboek", "tijd"],
      "/paint": ["paint", "kleuren", "kleur"],
      "/login": ["login", "account", "nieuw account"],
      "/uitleg/website": ["website", "backend", "nodejs", "server"],
      "/uitleg/database": ["database", "mysql", "tables"],
      "/uitleg/login": ["login uitleg"],
      "/uitleg/paint": ["paint uitleg", "kleur uitleg"]
    }
    
    for (var key in searchWords) {
      if (searchWords[key].indexOf(zoek.toLowerCase()) != -1) {
        window.location.href = key
        return
      }
    }
    
    if (zoek.indexOf("zeep") != -1) {
      window.open('https://www.youtube.com/watch?v=t99CXCA4GFs');
    } else {
      window.location.href = "/zoek/" + zoek
    }
  }

  if (document.URL.indexOf('#logout') != -1) {
    $("#notifBar").css({"background": "#f2dede", "color": "#a94442"}).fadeIn("slow").empty().append("Succesvol uitgelogd!");
    setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 3000);
  } else if (document.URL.indexOf('#loggedin') != -1) {
    setTimeout(function () { $("#notifBar").css({"background": "#dff0d8", "color": "#3c763d"}).fadeIn("slow").empty().append("Succesvol ingelogd!"); }, 6000);
    setTimeout(function () { $("#notifBar").fadeOut("slow"); }, 9000);
  } else if (document.URL.indexOf('#newacc') != -1) {
    $("#notifBar").css({"background": "#dff0d8", "color": "#3c763d"}).fadeIn("slow").empty().append("Succesvol een nieuw account aangemaakt!");
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
  $("#uurInf").on("click", function() {
    $(this).children(".infoTextR").toggleClass("show");
  });
  $("#uurChartInf").on("click", function() {
    $(this).children(".infoTextL").toggleClass("show");
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
    } else if (codeBlok == "elf") {
      var codeBlokinhoud = `var searchWords = {
        "/basics": ["html", "css", "javascript", "js", "basics", "programmeertalen", "programmeertaal", "taal", "talen"],
        "/uren": ["uren", "logboek", "tijd"],
        "/paint": ["paint", "kleuren", "kleur"],
        "/login": ["login", "account", "nieuw account"],
        "/uitleg/website": ["website", "backend", "nodejs", "server"],
        "/uitleg/database": ["database", "mysql", "tables"],
        "/uitleg/login": ["login uitleg"],
        "/uitleg/paint": ["paint uitleg", "kleur uitleg"]
      }
      
      for (var key in searchWords) {
        if (searchWords[key].indexOf(zoek.toLowerCase()) != -1) {
          window.location.href = key
          return
        }
      }`
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

  $(".codeIdFour").click(function() {
    var codeBlokdrie = $('.codeVier').attr('id');
    console.log(codeBlokdrie);
    if (codeBlokdrie == "elf") {
      var codeBlokinhoud = `server {
   listen 80;
   server_name pws.yucibot.nl;
   location / {
      proxy_pass http://localhost:1000;
   }
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
})

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