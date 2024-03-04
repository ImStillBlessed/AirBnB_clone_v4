$(document).ready(function() {
  let amenities = {};

  fetch("http://0.0.0.0:5001/api/v1/status/")
    .then(response => {
      if (response.ok) {
        $('div#api_status').addClass("available")
      } else {
        $('div#api_status').removeClass("available")
      }
    })
    .catch(error => {
      console.error(error);
      $('div#api_status').removeClass("available")
    });

  $('input[type="checkbox"]').change(function() {
    let amenityId = $(this).attr('data-id');
    let amenityName = $(this).attr('data-name');

    if ($(this).is(':checked')) {
      amenities[amenityId] = amenityName;
    } else {
      delete amenities[amenityId];
    }

    var amenityList = Object.values(amenities).join(', ');
    $('.amenities h4').text(amenityList);
  });
})
