const HOST = '54.87.172.130';
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
    url: `http://${HOST}:5001/api/v1/status/`,
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
