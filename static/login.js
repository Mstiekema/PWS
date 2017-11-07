$(document).ready(function() {
  $('#login').on('click', function(event) {
    login()
  });
  
  $("input[name='password']").keyup(function(ev) {
    if (ev.which === 13) {
      login()
    }
  });
  
  $('#newLogin').on('click', function(event) {
    var p1 = $("input[name='newPassword']").val();
    var p2 = $("input[name='confPassword']").val();
    if(p1 != p2) return window.alert("Wachtwoorden komen niet overeen");
    
    $.ajax({
      url: '/login/new',
      data: {
        username: $("input[name='newUsername']").val(),
        password: p1,
        email: $("input[name='email']").val()
      },
      type: 'POST',
      success: function (data) {
        console.log(data)
        window.location.href = "/"
      },
      error: function (xhr, status, error) {
        console.log(xhr.responseText)
      }
    });
  });
  
  function login() {
    $.ajax({
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
    });
  }
});