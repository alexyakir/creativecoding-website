$(function() {
  if ($('main').is('.signup-page')) {
    var signupform = document.getElementById('signup-form');
    signupform.setAttribute('action', '//formspree.io/' + 'alex' + '@' + 'creativecoding' + '.' + 'co.il');
  }
});