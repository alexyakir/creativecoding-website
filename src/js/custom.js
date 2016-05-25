$(function() {
  if ($('main').is('.signup-page') || $('main').is('.contact-page') ) {
    var signupform = document.getElementById('form');
    signupform.setAttribute('action', '//formspree.io/' + 'alex' + '@' + 'creativecoding' + '.' + 'co.il');
  }
});


$(function() {
  var pass = $('#password');
  $('#password').keypress(function(e) {
    if (e.which == 13) {
      if (e.target.value == "bobo") {
        $('#lock').css("display", "none");
      } else {}
    }
  });
});

$('#lock').css("display", "none");