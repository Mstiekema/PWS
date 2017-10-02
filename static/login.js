$(document).ready(function() {
  $('#login').on('click', function(event) {
    var usr = {
      username: $("input[name='username']").val(),
      password: $("input[name='password']").val()
    }
    console.log(usr)
  });
});