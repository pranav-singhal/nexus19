$(document).ready(function() {
  $('#DateCountdown').TimeCircles({
    animation: 'smooth',
    bg_width: 0.5,
    fg_width: 0.023333333333333334,
    circle_bg_color: 'grey',
    time: {
      Days: {
        text: 'Days',
        color: 'white',
        show: true
      },
      Hours: {
        text: 'Hours',
        color: 'white',
        show: true
      },
      Minutes: {
        text: 'Minutes',
        color: 'white',
        show: true
      },
      Seconds: {
        text: 'Seconds',
        color: 'white',
        show: true
      }
    }
  });

  console.log('in countdown js');
  $('#DateCountdown')
    .TimeCircles()
    .rebuild();
});
