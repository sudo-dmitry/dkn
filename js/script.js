
// Load more speakers

(function () {

  let speakers = document.querySelector('.speakers-new');
  let speakersCollapsed = document.querySelector('.speakers-new__collapsed');
  let speakersCollapsedHeight = 0;
  let toggler = document.getElementById('speakers-toggler');
  let isExpanded = false;

  // Check speakers collapsed part height
  speakersCollapsed.classList.add('check');
  speakersCollapsedHeight = speakersCollapsed.clientHeight;
  speakersCollapsed.classList.remove('check');

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

  let schedule = document.querySelector('.schedule-new');
  let scheduleCollapsed = document.querySelector('.schedule-new__collapsed');
  let scheduleCollapsedHeight = 0;
  let toggler = document.getElementById('schedule-toggler');
  let isExpanded = false;

  // Check schedule collapsed part height
  scheduleCollapsed.classList.add('check');
  scheduleCollapsedHeight = scheduleCollapsed.clientHeight;
  scheduleCollapsed.classList.remove('check');

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


// Smooth scrolling

$(document).ready(function(){
  var linkScroll = $('.scroll');

  linkScroll.click(function(e){
    e.preventDefault();
    $('body, html').animate({
      scrollTop: $(this.hash).offset().top
    }, 500);
  });
});


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
