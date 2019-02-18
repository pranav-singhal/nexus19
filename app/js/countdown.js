$(document).ready(function() {
  $('#DateCountdown').TimeCircles({
    animation: 'smooth',
    bg_width: 1.2,
    fg_width: 0.1,
    circle_bg_color: '#60686F',
    time: {
      Days: {
        text: 'Days',
        color: '#fff',
        show: true
      },
      Hours: {
        text: 'Hours',
        color: '#fff',
        show: true
      },
      Minutes: {
        text: 'Minutes',
        color: '#fff',
        show: true
      },
      Seconds: {
        text: 'Seconds',
        color: '#fff',
        show: true
      }
    }
  });

  console.log('in countdown js');
  $('.modal').modal();
});
