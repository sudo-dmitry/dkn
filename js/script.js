
// Load more speakers

(function () {

  let speakers = document.querySelector('.speakers');
  let speakersContainer = document.querySelector('.speakers .container');
  let speakersCollapsed = document.querySelector('.speakers__collapsed');
  let speakersCollapsedHeight = 0;
  let toggler = document.getElementById('speakers-toggler');
  let isExpanded = false;
  
  // Check collapsed part height
  speakersCollapsed.style.width = speakersCollapsed.clientWidth + 'px';
  speakersCollapsed.classList.add('check');  
  speakersCollapsedHeight = speakersCollapsed.clientHeight;
  speakersCollapsed.classList.remove('check');
  speakersCollapsed.style.width = 'auto';

  toggler.addEventListener('click', function () {
    isExpanded = speakers.classList.contains('expanded');
    if (isExpanded) {
      speakers.classList.remove('expanded');
      speakersCollapsed.style.maxHeight = null;
    } else {
      speakers.classList.add('expanded');
      speakersCollapsed.style.maxHeight = speakersCollapsedHeight + 'px';
    }
  })

})();

// Load more schedule

(function () {

  let schedule = document.querySelector('.schedule');
  let scheduleCollapsed = document.querySelector('.schedule__collapsed');
  let scheduleCollapsedHeight = 0;
  let toggler = document.getElementById('schedule-toggler');
  let isExpanded = false;
  
  // Check collapsed part height
  scheduleCollapsed.style.width = scheduleCollapsed.clientWidth + 'px';
  scheduleCollapsed.classList.add('check');  
  scheduleCollapsedHeight = scheduleCollapsed.clientHeight;
  scheduleCollapsed.classList.remove('check');
  scheduleCollapsed.style.width = 'auto';

  toggler.addEventListener('click', function () {
    isExpanded = schedule.classList.contains('expanded');
    if (isExpanded) {
      schedule.classList.remove('expanded');
      scheduleCollapsed.style.maxHeight = null;
    } else {
      schedule.classList.add('expanded');
      scheduleCollapsed.style.maxHeight = scheduleCollapsedHeight + 'px';
    }
  })

})();


// Sync inputs

(function () {
  
  let fname = document.getElementById('fname');
  let lname = document.getElementById('lname');
  let tel = document.getElementById('tel');
  let email = document.getElementById('email');
  
  fname.addEventListener('keyup', function () { syncFields('fname') });
  lname.addEventListener('keyup', function () { syncFields('lname') });
  tel.addEventListener('keyup', function () { syncFields('tel') });
  email.addEventListener('keyup', function () { syncFields('email') });
  
  function syncFields(name) {
    let field = document.getElementById(name);
    let copy = document.getElementById(name + '-small');
    copy.value = field.value;
  }

})();

// Burger Menu

const burger = document.getElementById('burger');
const items = document.querySelectorAll('.js-item');
for (const item of items) {
  item.onclick = () => {
    burger.checked = false;
  }
}

window.onclick = (e) => {
  const menu = document.getElementById('menuToggle');
  if (e.target !== menu && !menu.contains(e.target)) {
    burger.checked = false;
  }
}