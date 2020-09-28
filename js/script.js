
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

// First Name

$("#fname").keyup(function() {
  update();
});

function update() {
  $("#fname-small").val($('#fname').val());
}

// Last Name

$("#lname").keyup(function() {
  update();
});

function update() {
  $("#lname-small").val($('#lname').val());
}

// Phone

$("#tel").keyup(function() {
  update();
});

function update() {
  $("#tel-small").val($('#tel').val());
}

// Phone

$("#email").keyup(function() {
  update();
});

function update() {
  $("#email-small").val($('#email').val());
}