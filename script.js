$(document).ready(function() {
  $('#submit-btn').click(function(event) {
    event.preventDefault();
    // console.log('nice nice click man');
    var city = $('#city-type').val();

    city = city.toLowerCase();

    if(city === 'new york city' || city === 'nyc' || city === 'new york') {
      // console.log('you chose new york');
      $('body').attr('class', 'nyc');
      // or
      // $('body').css('background-image','url(../images/nyc.jpg');
    } else if (city === 'san francisco' || city === 'sf' || city === 'san fran') {
      $('body').attr('class', 'sf');
    } else {
      alert('Enter Correct City Name');
    }

  });
});