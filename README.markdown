**Unified Login** was originally written by Jeff Robbins and Lullabot for [Buzzr](http://www.buzzr.com) as a [patch for LoginToboggan](http://drupal.org/node/264332).

It is intended to simplify the user registration and login process by creating a unified login/registration page with two big buttons at the top of the page: "I have an account" and "I want to create an account". Clicking on these buttons swaps out the login and registration forms using Javascript rather than a full page reload.

Presumptions
--------------
* Drupal tabs should rarely be shown to non-admin users. They are okay as an editing convention on node pages, but they are particularly confusing on the login/regstration/password-reset pages. This module removes them.
* Users need big simple buttons for "I have an account" and "I want to create an account"
* "I forgot my password" is a sub-function of the login form. It should not be seen on the registration page. This module adds an "I forgot my password" link into the login form either a) as a separate "field", or b) appended to the description of the password field.

Set up
--------------
1. Place ulogin folder in your modules directory and enable the module.
2. That's it! You're done.

Optionally, you can visit admin/settings/ulogin to choose the placement of the "I forgot my password" link.


Recommendations
---------------
Either:
* Create a custom menu item in your Primary navigation called "Login/Register" which links to "user/login". Because of the permissions on user/login, this item will only show to anonymous users and it will link to the Unified Login page.
* - Or -
* Enable LoginToboggan and set the 'User login' block to display as a link.

You'll probably want to do some CSS styling on the "I have an account"/"I want to create an account" buttons in your theme.

