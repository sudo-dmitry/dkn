
// Load more speakers

// $(function() {
//   $(".speakers__items").slice(0, 3).show();
//   $("#load-speakers").click(function(e) {
//     e.preventDefault();
//     $(".speakers__items:hidden").show();
//   });
// });

// Load more schedule

// $(function () {
//   $(".schedule__items").slice(0, 2).show();
//   $("#load-schedule").click(function(e) {
//     e.preventDefault();
//     $(".schedule__items:hidden").show();
//   });
// });

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