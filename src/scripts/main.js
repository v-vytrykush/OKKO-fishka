'use strict';

const btn = document.querySelector('.details');

const popup = document.querySelector('#popup-1');

const body1 = document.querySelector('.body');

const elmntToView = document.querySelector('#popup-1');

const buttons = document.querySelectorAll('.open').length;

for (let i = 0; i < buttons; i++) {
  document.querySelectorAll('.open')[i].addEventListener('click', function() {
    popup.classList.add('active');
    body1.classList.add('scroll');
    elmntToView.scrollIntoView();
  });
}

btn.addEventListener('click', () => {
  popup.classList.remove('active');
  body1.classList.remove('scroll');
});
