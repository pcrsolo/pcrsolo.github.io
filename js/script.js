const seviceItems = document.querySelector('.home');
const serviceItems = document.querySelector('.about');
const popup = document.querySelector('.popup-box');
const popupCloseBtn = popup.querySelector('.popup-close-btn');
const popupCloseIcon = popup.querySelector('.popup-close-icon');
seviceItems.addEventListener('click', function (event) {
  if (event.target.tagName.toLowerCase() == 'button') {
    const item = event.target.parentElement;
    const h3 = item.querySelector('h3').innerHTML;
    const readMoreCont = item.querySelector('.read-more-cont').innerHTML;
    popup.querySelector('h3').innerHTML = h3;
    popup.querySelector('.popup-body').innerHTML = readMoreCont;
    console.log('Success!');

    popupBox();
  }
});

popupCloseBtn.addEventListener('click', popupBox);
popupCloseIcon.addEventListener('click', popupBox);

popup.addEventListener('click', function (event) {
  if (event.target == popup) {
    popupBox();
  }
});

function popupBox() {
  popup.classList.toggle('open');
}
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

$(document).ready(function () {
  $('#autoWidth').lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $('#autoWidth').removeClass('cS-hidden');
    },
  });
});
