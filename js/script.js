
function menuToggle() {
    'use strict';
    var m = document.getElementById('myNavtoggle');
   if (m.className === 'navtoggle') {
    m.className += ' responsive';
  } else {
    m.className = 'navtoggle';
  }
}