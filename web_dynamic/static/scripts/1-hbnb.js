$(document).ready(function() {
  let amenities = {};

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
