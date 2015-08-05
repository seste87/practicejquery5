// Problem: Hints are shown even when the form is valid
// Solution: Hide hint bubbles when the requirements are met


// Hide hints

// When event happens on password input
  // find out when password is valid
    //hide hint is valid
    // else show hint

/// when event happens on confirmation input
  // find out if password and confirmation match
    // hide hint if matched 
    // else show hint 
    
var $span = $('form span');
var $password = $('#password');
var $confirmPassword = $('#confirm_password');

function toggle (state, context) {
  if(state) {
     $(context).next().fadeOut();
   } else {
     $(context).next().fadeIn();
  }
}

function isPasswordValid () {
  return ($password.val().length > 8);
}

function isPasswordMatching () {
  return ($confirmPassword.val() === $password.val());
}

function passwordEvent () {

  toggle(isPasswordValid(), $password);
}

function passwordConfirm () {
  
  toggle(isPasswordMatching(), $confirmPassword);
  
}

function canSubmit() {
  return isPasswordValid() && isPasswordMatching();
}

function enableSubmitEvent () {
 
  $('#submit').prop('disabled', !canSubmit());
 
}

$span.hide();
$('#password').focus(passwordEvent).keyup(passwordEvent).keyup(passwordConfirm).keyup(enableSubmitEvent);
  
$('#confirm_password').focus(passwordConfirm).keyup(passwordConfirm).keyup(enableSubmitEvent);

enableSubmitEvent();






