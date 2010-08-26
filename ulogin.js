/* $Id$ */

// For compatibility with non-js browsers, we hide the #register-form here
// it is important that this CSS gets added early so the form doesn't
// appear while the page is loading (before $(document).ready() fires)
$('<style type="text/css">.ulogin #register-form, .ulogin #login-form {display:none;}</style>').appendTo('head');

Drupal.behaviors.ulogin = function (context) {
  // Remove potentially confusing active classes on "tabs"
  $('.ulogin a.active').removeClass('active');
    
  // Attach behaviors to the links so that they show/hide forms appropriately.
  $('.ulogin #register-link').click(function() {
    $(this).addClass('ul-active').blur();
    $('.ulogin #login-link').removeClass('ul-active');
    $('.ulogin #register-form').show();
    $('.ulogin #login-form').hide();
    return false;
  });
  $('.ulogin #login-link').click(function() {
    $(this).addClass('ul-active').blur();
    $('.ulogin #register-link').removeClass('ul-active');
    $('.ulogin #login-form').show();
    $('.ulogin #register-form').hide();
    return false;
  });
  
  switch(Drupal.settings.ulogin.activeForm) {
    case 'register':
      $('.ulogin #register-form').show();
      $('.ulogin #register-link').click();
      break;
    case 'login':
    default:
      $('.ulogin #login-form').show();
      $('.ulogin #login-link').click();
      break;
  }
    
}