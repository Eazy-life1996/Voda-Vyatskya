'use strict';

let menu = document.querySelector('[data-menu]');
let btn = document.querySelector('[data-button-menu]');

btn.addEventListener('click', function() {
  menu.classList.toggle('header__nav--close');
});
