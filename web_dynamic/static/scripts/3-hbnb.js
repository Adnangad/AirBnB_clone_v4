$(document).ready(function () {
  const ls = {};
  $('.checkBox').change(function () {
    const amId = $(this).data('id');
    const amnm = $(this).data('name');
    if ($(this).is(':checked')) {
      ls[amId] = amnm;
    } else {
      delete ls[amId];
    }
    const amenitiesList = Object.values(ls).join(', ');
    $('.amenities h4').text(amenitiesList);
  });
});
$(document).ready(function () {
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    method: 'GET',
    success: function (response) {
      if (response.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    }
  });
});
$(document).ready(function () {
  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/places_search/',
    method: "POST",
    contentType: 'application/json',
    data: JSON.stringify({}),
    success: function (response) {
      $.each(response, function (index, place) {
        const articl = '<article><div class="title_box"><h2>' + place.name + '</h2><div class="price_by_night">' + place.price_by_night + '</div></div><div class="information"><div class="max_guest">' + place.max_guest + '</div><div class="number_rooms">' + place.number_rooms + '</div><div class="number_bathrooms">' + place.number_bathrooms + '</div><div class="user"><b>Owner:</b>' + place.user.first_name + place.user.last_name + '</div><div class="description">' + place.description + '</div></article>';
        $('section.places').append(articl);
      });
    }
  });
});
