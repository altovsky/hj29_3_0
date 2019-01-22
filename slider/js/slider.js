'use strict';

const prev = document.querySelector('a[data-action = "prev"]');
const next = document.querySelector('a[data-action = "next"]');
const first = document.querySelector('a[data-action="first"]');
const last = document.querySelector('a[data-action="last"]');

document.querySelector('.slides').firstElementChild.classList.add('slide-current');
let active = document.querySelector('.slide-current');

next.addEventListener('click', showSlide);
last.addEventListener('click', showSlide);
prev.addEventListener('click', showSlide);
first.addEventListener('click', showSlide);

function setButtons() {

  if (!active.previousElementSibling) {
    prev.classList.add('disabled');
    first.classList.add('disabled');
  } else {
    prev.classList.remove('disabled');
    first.classList.remove('disabled');
  }

  if (!active.nextElementSibling) {
    next.classList.add('disabled');
    last.classList.add('disabled');
  } else {
    next.classList.remove('disabled');
    last.classList.remove('disabled');

  }
}

setButtons();


function showSlide(click) {

  if(event.currentTarget.classList.contains('disabled')){
    return;
  }
  active.classList.remove('slide-current');

  switch (click.target) {
    case next:
      active = active.nextElementSibling;
      break;
    case prev:
      active = active.previousElementSibling;
      break;
    case first:
      active = active.parentElement.firstElementChild;
      break;
    case last:
      active = active.parentElement.lastElementChild;
      break;
  }

  active.classList.add('slide-current');
  setButtons();
}